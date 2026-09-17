'use client';

import { useEffect, useState } from 'react';

const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/your-google-form-link';
const countUrl = process.env.NEXT_PUBLIC_SIGN_COUNT_URL || '';
const fallbackCount = Number(process.env.NEXT_PUBLIC_SIGN_COUNT_DEFAULT || '0');

export default function SignPetition() {
  const [count, setCount] = useState<number>(fallbackCount);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      if (!countUrl) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(countUrl, { cache: 'no-store' });
        const text = await response.text();

        if (!text) {
          setCount(fallbackCount);
          return;
        }

        const lines = text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);

        if (lines.length <= 1) {
          setCount(Number(lines[0]) || fallbackCount);
          return;
        }

        setCount(lines.length - 1);
      } catch (error) {
        console.error('Failed to load sign count', error);
        setCount(fallbackCount);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <section id="sign-the-appeal">
      <div className="petition-heading-row">
        <h2>Sign the Appeal</h2>
        <div className="petition-counter" aria-live="polite">
          <span>{loading ? '...' : count.toLocaleString()}</span>
          <small>people have signed</small>
        </div>
      </div>

      <div className="petition-layout">
        <div className="contact-form petition-form">
          <p className="petition-intro">
            Add your name to the appeal by submitting your signature through the hosted petition form.
          </p>
          <a className="petition-button" href={formUrl} target="_blank" rel="noreferrer">
            Sign the Appeal
          </a>
        </div>
      </div>
    </section>
  );
}
