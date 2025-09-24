// src/app/api/booking/route.ts
import { NextResponse } from 'next/server';
import { saveBooking } from "@/lib/db"
import { sendBookingNotification, sendUserConfirmation } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, audience, pack, preferredTime, message } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const booking = {
      id: `bk_${Date.now()}`,
      name,
      email,
      service: service ?? null,
      audience: audience ?? null,
      pack: pack ?? null,
      preferredTime: preferredTime ?? null,
      message: message ?? null,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // Persist booking (simple JSON store)
    await saveBooking(booking);

    // Send notifications (non-blocking if MailerSend isn't configured)
    try {
      await sendBookingNotification(booking);
      await sendUserConfirmation(booking);
    } catch (err) {
      // log but do not fail the request
      // eslint-disable-next-line no-console
      console.warn('Email sending failed (continuing):', err);
    }

    return NextResponse.json({ success: true, bookingId: booking.id });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Booking API error', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
