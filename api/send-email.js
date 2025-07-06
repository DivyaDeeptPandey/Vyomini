// pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Website <your@domain.com>',
      to: ['youremail@example.com'],
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ success: false });
  }
}
