'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:contact@ruleoflawappeal.org?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus({ type: 'success', message: 'Your email app is opening with your message ready to send.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {status.type && (
        <div className={`form-message ${status.type}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
