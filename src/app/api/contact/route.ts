// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { submitContactForm, type ContactForm } from '@/lib/api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Basic validation
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const data: ContactForm = {
      name: String(body.name),
      email: String(body.email),
      message: String(body.message),
    };

    // call helper (mock or real)
    const result = await submitContactForm(data);

    if (result?.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
