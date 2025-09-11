// src/components/booking/BookingModal.tsx
'use client';

import Modal from '@/components/ui/Modal';
import { useBooking } from './BookingProvider';
import { useEffect, useState } from 'react';
import { SERVICES } from '@/data/services';

export default function BookingModal() {
  const { isOpen, closeBooking, prefill } = useBooking();
  const [name, setName] = useState(prefill?.name ?? '');
  const [email, setEmail] = useState(prefill?.email ?? '');
  const [service, setService] = useState(prefill?.service ?? SERVICES[0]?.id ?? '');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setName(prefill?.name ?? '');
      setEmail(prefill?.email ?? '');
      setService(prefill?.service ?? SERVICES[0]?.id ?? '');
      setMessage('');
      setSuccess(null);
      setError(null);
    }
  }, [isOpen, prefill]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess('Thanks — your booking request has been received. I will follow up within 24–48 hours.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data?.error || 'Failed to submit booking.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal open={isOpen} onClose={closeBooking} title="Book a Consultation" size="md">
      {success ? (
        <div className="space-y-4">
          <p className="text-sm text-neutral-700">{success}</p>
          <div className="flex justify-end">
            <button onClick={closeBooking} className="btn-primary">Close</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-white/50" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 p-3 border rounded-lg" />
          </div>
          <div>
            <label className="text-sm font-medium">Service</label>
            <select value={service} onChange={(e) => setService(e.target.value)} className="w-full mt-1 p-3 border rounded-lg">
              {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Message (brief)</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full mt-1 p-3 border rounded-lg" />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeBooking} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? 'Sending...' : 'Send booking request'}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
