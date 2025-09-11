// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal'
import { clientApi } from '@/lib/clientApi';
import type { ContactForm } from '@/types';

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  function handleChange<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await clientApi.post<{ success: boolean }>('/api/contact', form);
      if (res.success) {
        setSuccessOpen(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Submission failed — please try again.');
      }
    } catch (err: any) {
      console.error('contact error', err);
      setError(err?.body?.error || 'Server error — try again later.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-brand-900 mb-4">Contact & Booking</h1>
        <p className="text-neutral-600 mb-6">
          Send a message describing how I can help — I will respond within 24–48 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />

          <div className="flex flex-col">
            <label className="text-neutral-900 font-medium">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus"
              rows={6}
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="primary" type="submit" className="inline-flex">
              {sending ? 'Sending...' : 'Send Message'}
            </Button>
            <Button variant="secondary" href="/booking">
              Book a Consultation
            </Button>
          </div>

          {error && <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded">{error}</div>}
        </form>
      </div>

      <Modal open={successOpen} onClose={() => setSuccessOpen(false)} title="Message sent">
        <p className="text-neutral-900 mb-4">Thank you — I received your message and will reply within 24–48 hours.</p>
        <div className="flex justify-end">
          <Button variant="primary" onClick={() => setSuccessOpen(false)}>Close</Button>
        </div>
      </Modal>
    </section>
  );
}
