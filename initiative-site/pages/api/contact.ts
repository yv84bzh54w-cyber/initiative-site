import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  error?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // TODO: Configure email sending
    // For now, just log the message
    console.log('Contact form submission:', { name, email, subject, message });

    // You can integrate email sending here using:
    // - Nodemailer (requires SMTP configuration)
    // - SendGrid, Mailgun, AWS SES, or other email services
    // - Email forwarding services

    // Example with Nodemailer (requires environment variables):
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // });
    // 
    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return res.status(200).json({ 
      success: true,
      message: 'Message received. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
