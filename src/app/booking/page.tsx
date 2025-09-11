// src/app/booking/page.tsx
'use client';

import React from 'react';
import Button from '../../components/ui/Button';

export default function BookingPage() {
  // Replace this Calendly URL with your actual scheduling link
  const calendlyUrl = 'https://calendly.com/your-username/30min';

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-900 mb-4">Book a Consultation</h1>
        <p className="text-neutral-600 mb-6">
          Pick a time that suits you. If you prefer, send a quick message instead.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-brand-900 mb-2">Quick Booking</h2>
              <p className="text-neutral-600">Open the scheduler to see available times and book instantly.</p>
            </div>
            <div className="space-x-3">
              <Button variant="primary" href="/contact">Send a Message</Button>
              <Button variant="primary" href="#calendly">Open Scheduler</Button>
            </div>
          </div>

          <div id="calendly" className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={calendlyUrl}
              title="Calendly scheduling"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
