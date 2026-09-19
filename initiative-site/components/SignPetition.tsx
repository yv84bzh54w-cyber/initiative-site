'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type FormState = {
  agrees: 'yes' | 'no';
  name: string;
  country: string;
  email: string;
  comments: string;
  subscribe: boolean;
};

const initialForm: FormState = {
  agrees: 'yes',
  name: '',
  country: '',
  email: '',
  comments: '',
  subscribe: false,
};

export default function SignPetition() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/signatures');
      const data = await response.json();
      setCount(Number(data.count || 0));
    } catch (error) {
      console.error('Failed to load signature count', error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setForm((prev) => ({ ...prev, subscribe: checked }));
  };

  const handleRadioChange = (value: 'yes' | 'no') => {
    setForm((prev) => ({ ...prev, agrees: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/signatures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit your signature');
      }

      setStatus('Thank you for signing the Appeal.');
      setForm(initialForm);
      setCount(Number(data.count || 0));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong';
      setStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sign-the-appeal">
      <div className="petition-heading-row">
        <h2>Sign the Appeal</h2>
        <div className="petition-counter" aria-live="polite">
          <span>{count.toLocaleString()}</span>
          <small>people have signed</small>
        </div>
      </div>

      <div className="petition-layout">
        <form className="contact-form petition-form" onSubmit={handleSubmit}>
          <div className="form-group radio-group">
            <label>I agree to the Appeal</label>
            <div className="radio-row">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agrees"
                  checked={form.agrees === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agrees"
                  checked={form.agrees === 'no'}
                  onChange={() => handleRadioChange('no')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input id="country" name="country" value={form.country} onChange={handleChange} required placeholder="Country" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email address" />
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" value={form.comments} onChange={handleChange} placeholder="Optional comments" />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-option">
              <input type="checkbox" checked={form.subscribe} onChange={handleCheckboxChange} />
              <span>I would like to receive email updates from you</span>
            </label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {status && <div className="form-message success">{status}</div>}
        </form>
      </div>
    </section>
  );
}
