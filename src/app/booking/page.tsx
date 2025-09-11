// src/app/booking/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES } from '@/data/services';
import { useBooking } from '@/components/booking/BookingProvider';
import Button from '@/components/ui/Button';

export default function BookingPage() {
  const search = useSearchParams();
  const qService = search?.get('service') ?? undefined;
  const qName = search?.get('name') ?? '';
  const qEmail = search?.get('email') ?? '';
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/30min';

  const { openBooking } = useBooking();

  const [name, setName] = useState(qName);
  const [email, setEmail] = useState(qEmail);
  const [service, setService] = useState(qService ?? SERVICES[0]?.id ?? '');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setName(qName);
    setEmail(qEmail);
    if (qService) setService(qService);
  }, [qName, qEmail, qService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, msg: 'Booking request received — I will follow up within 24–48 hours.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ ok: false, msg: data?.error || 'Failed to submit.' });
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Server error.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
        {/* Left: Form & quick modal */}
        <div>
          <h1 className="text-3xl font-bold text-brand-900 mb-2">Book a consultation</h1>
          <p className="text-neutral-600 mb-6">Request a time or use the scheduler to pick an instant slot. You can also send a quick request via the modal.</p>

          <div className="mb-6 flex flex-wrap gap-3">
            <Button variant="primary" href="#calendly">Open Scheduler</Button>
            <button
              onClick={() => openBooking({ service, name, email })}
              className="px-4 py-3 rounded-lg border hover:bg-gray-50"
            >
              Quick request (open modal)
            </button>
            <Button variant="primary" href="/contact">Send a message</Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full mt-1 p-3 border rounded-lg" />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full mt-1 p-3 border rounded-lg" />
            </div>

            <div>
              <label className="text-sm font-medium">Service</label>
              <select value={service} onChange={(e) => setService(e.target.value)} className="w-full mt-1 p-3 border rounded-lg">
                {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Message (optional)</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full mt-1 p-3 border rounded-lg" />
            </div>

            {status && (
              <div className={`text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.msg}</div>
            )}

            <div className="flex justify-end">
              <button type="submit" disabled={submitting} className="btn-primary">
                {submitting ? 'Sending...' : 'Send booking request'}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Calendly iframe */}
        <div id="calendly" className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={calendlyUrl}
            title="Scheduler"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
