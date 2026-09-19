import type { NextApiRequest, NextApiResponse } from 'next';
import { addSignature, getSignatureCount } from '../../lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ count: await getSignatureCount() });
  }

  if (req.method === 'POST') {
    const { agrees, name, country, email, comments, subscribe } = req.body || {};

    if (!name || !country || !email) {
      return res.status(400).json({ error: 'Name, country and email are required.' });
    }

    if (agrees !== 'yes' && agrees !== 'no') {
      return res.status(400).json({ error: 'Please confirm whether you agree to the Appeal.' });
    }

    const trimmedName = String(name).trim();
    const trimmedCountry = String(country).trim();
    const trimmedEmail = String(email).trim();
    const trimmedComments = String(comments || '').trim();

    const count = await addSignature({
      agrees,
      name: trimmedName,
      country: trimmedCountry,
      email: trimmedEmail,
      comments: trimmedComments,
      subscribe: Boolean(subscribe),
    });

    return res.status(200).json({ success: true, count });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: 'Method not allowed' });
}
