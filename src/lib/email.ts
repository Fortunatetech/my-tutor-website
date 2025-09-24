// src/lib/email.ts
/**
 * NEW: email helper using MailerSend (optional)
 * - If MAILERSEND_API_KEY is set, this will attempt to send emails.
 * - Otherwise it will log and return successfully.
 *
 * Set env:
 *  MAILERSEND_API_KEY=your_key
 *  MAILERSEND_FROM=you@domain.com
 *  MAILERSEND_TO=your_personal_email@example.com
 */

import fetch from 'node-fetch';

const MAILER_KEY = process.env.MAILERSEND_API_KEY;
const FROM_EMAIL = process.env.MAILERSEND_FROM || 'no-reply@example.com';
const TO_EMAIL = process.env.MAILERSEND_TO || 'you@example.com';

async function sendRawMail({ to, subject, html, text }: { to: string; subject: string; html?: string; text?: string }) {
  if (!MAILER_KEY) {
    // eslint-disable-next-line no-console
    console.log('Mailer not configured — email content:', { to, subject, text, html });
    return;
  }

  const payload = {
    from: { email: FROM_EMAIL },
    personalizations: [{ to: [{ email: to }] }],
    subject,
    content: [{ type: 'text/html', value: html || text || '' }],
  };

  const res = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${MAILER_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`MailerSend failed: ${res.status} ${txt}`);
  }
}

export async function sendBookingNotification(booking: any) {
  const subject = `New booking request — ${booking.service ?? 'unspecified'}`;
  const html = `<p>New booking request received:</p>
    <ul>
      <li><strong>Name:</strong> ${booking.name}</li>
      <li><strong>Email:</strong> ${booking.email}</li>
      <li><strong>Service:</strong> ${booking.service}</li>
      <li><strong>Audience:</strong> ${booking.audience}</li>
      <li><strong>Pack:</strong> ${booking.pack}</li>
      <li><strong>Preferred time:</strong> ${booking.preferredTime}</li>
      <li><strong>Message:</strong> ${booking.message}</li>
      <li><strong>Booking ID:</strong> ${booking.id}</li>
    </ul>`;

  // Send to your main address
  await sendRawMail({ to: TO_EMAIL, subject, html });
}

export async function sendUserConfirmation(booking: any) {
  const subject = `We received your booking request — ${booking.service ?? 'Consultation'}`;
  const html = `<p>Hi ${booking.name},</p>
    <p>Thanks — I’ve received your booking request for <strong>${booking.service}</strong>. I will reply within 24–48 hours with available times.</p>
    <p>If you prefer to pick a time now, use this link: <a href="${process.env.NEXT_PUBLIC_BASE_URL || ''}/booking?service=${encodeURIComponent(
    booking.service || ''
  )}">Schedule now</a>.</p>
    <p>Thanks,<br/>TutorCoach</p>`;

  await sendRawMail({ to: booking.email, subject, html });
}
