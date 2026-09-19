import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import Database from 'better-sqlite3';

type SignaturePayload = {
  agrees: 'yes' | 'no';
  name: string;
  country: string;
  email: string;
  comments: string;
  subscribe: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const isHostedDatabaseConfigured = Boolean(supabaseUrl && supabaseServiceRoleKey);

function getSupabaseClient() {
  if (!isHostedDatabaseConfigured) {
    return null;
  }

  return createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

const dataDir = path.join(process.cwd(), 'data');
fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, 'signatures.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.prepare(`
  CREATE TABLE IF NOT EXISTS signatures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    agrees TEXT NOT NULL CHECK(agrees IN ('yes', 'no')),
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    email TEXT NOT NULL,
    comments TEXT DEFAULT '',
    subscribe INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export async function getSignatureCount(): Promise<number> {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { count, error } = await supabase.from('signatures').select('*', { count: 'exact', head: true });

    if (!error) {
      return Number(count || 0);
    }
  }

  const result = db.prepare('SELECT COUNT(*) AS count FROM signatures').get() as { count: number };
  return Number(result.count || 0);
}

export async function addSignature(payload: SignaturePayload): Promise<number> {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { error } = await supabase.from('signatures').insert({
      agrees: payload.agrees,
      name: payload.name,
      country: payload.country,
      email: payload.email,
      comments: payload.comments,
      subscribe: payload.subscribe
    });

    if (!error) {
      const { count } = await supabase.from('signatures').select('*', { count: 'exact', head: true });
      return Number(count || 0);
    }
  }

  const statement = db.prepare(`
    INSERT INTO signatures (agrees, name, country, email, comments, subscribe)
    VALUES (@agrees, @name, @country, @email, @comments, @subscribe)
  `);

  const result = statement.run({
    agrees: payload.agrees,
    name: payload.name,
    country: payload.country,
    email: payload.email,
    comments: payload.comments,
    subscribe: payload.subscribe ? 1 : 0
  }) as { lastInsertRowid: number };

  return Number(result.lastInsertRowid ?? 0);
}
