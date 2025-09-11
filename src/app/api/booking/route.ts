// src/app/api/booking/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 });

    const { name, email, service, message } = body;
    if (!name || !email) return NextResponse.json({ success: false, error: 'Missing name or email' }, { status: 400 });

    // For now: log to server console (no email). Later attach to DB or mail provider.
    console.info('Booking request received', { name, email, service, message, at: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Booking API error', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
