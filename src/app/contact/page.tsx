// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import BookServiceButton from '@/components/services/BookServiceButton';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data && data.success) {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data?.error || 'Failed to send. Try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900 mb-4">Contact</h1>
        <p className="text-neutral-600 mb-6">Send a message or book a consultation — your choice.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Send a message</h2>
            {sent ? (
              <div className="p-4 bg-green-50 rounded">Thanks — your message was sent.</div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-3 border rounded-lg" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 p-3 border rounded-lg" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full mt-1 p-3 border rounded-lg" required />
                </div>

                {error && <div className="text-sm text-red-600">{error}</div>}

                <div className="flex justify-end">
                  <button type="submit" disabled={loading} className="btn-primary">
                    {loading ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside>
            <h2 className="text-xl font-semibold mb-3">Book a consultation</h2>
            <p className="text-neutral-600 mb-4">Prefer to talk? Book a free consultation — quick, focused, and we’ll agree next steps.</p>

            {/* UPDATED: Book button opens modal (lead-capture) */}
            <div>
              <BookServiceButton serviceId="tutoring" className="px-4 py-3 rounded-lg bg-orange-500 text-white">
                Book Free Consultation Here 
              </BookServiceButton>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
