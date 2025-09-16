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
  const [audience, setAudience] = useState(prefill?.audience ?? '');
  const [pack, setPack] = useState(prefill?.pack ?? '');
  const [message, setMessage] = useState(prefill?.message ?? '');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setName(prefill?.name ?? '');
      setEmail(prefill?.email ?? '');
      setService(prefill?.service ?? SERVICES[0]?.id ?? '');
      setAudience(prefill?.audience ?? '');
      setPack(prefill?.pack ?? '');
      setMessage(prefill?.message ?? '');
      setSuccess(null);
      setError(null);
    }
  }, [isOpen, prefill]);

  const serviceObj = SERVICES.find((s) => s.id === service);
  const audienceOptions = serviceObj?.audienceSections?.map((a) => ({ key: a.key, label: a.label })) ?? [];
  const packOptions = serviceObj?.packs ?? [];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email.');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service,
          audience: audience || null,
          pack: pack || null,
          message: message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data && data.success) {
        setSuccess('Thanks — your booking request has been received. I will follow up within 24–48 hours.');
        // optionally clear fields
        setName('');
        setEmail('');
        setMessage('');
        setPack('');
        setAudience('');
      } else {
        setError(data?.error || 'Failed to submit booking. Please try again later.');
      }
    } catch (err) {
      console.error(err);
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
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Service</label>
            <select
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                setAudience('');
                setPack('');
              }}
              className="w-full mt-1 p-3 border rounded-lg"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {audienceOptions.length > 0 && (
            <div>
              <label className="text-sm font-medium">Audience / Goal</label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                <option value="">(choose)</option>
                {audienceOptions.map((a) => (
                  <option key={a.key} value={a.key}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {packOptions.length > 0 && (
            <div>
              <label className="text-sm font-medium">Pack (optional)</label>
              <select
                value={pack}
                onChange={(e) => setPack(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                <option value="">Single session / No pack</option>
                {packOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.sessions} session{p.sessions > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Message (brief)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Tell me briefly what you want help with (subject, deadline, background)..."
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={closeBooking} className="px-4 py-2 rounded-lg border">
              Cancel
            </button>
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? 'Sending...' : 'Send booking request'}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}




// 'use client';

// import Modal from '@/components/ui/Modal';
// import { useBooking } from './BookingProvider';
// import { useEffect, useState } from 'react';
// import { SERVICES } from '@/data/services';

// export default function BookingModal() {
//   const { isOpen, closeBooking, prefill } = useBooking();

//   const [name, setName] = useState(prefill?.name ?? '');
//   const [email, setEmail] = useState(prefill?.email ?? '');
//   const [service, setService] = useState(prefill?.service ?? SERVICES[0]?.id ?? '');
//   const [audience, setAudience] = useState(prefill?.audience ?? '');
//   const [pack, setPack] = useState(prefill?.pack ?? '');
//   const [message, setMessage] = useState(prefill?.message ?? '');
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Update derived fields when modal opens or prefill changes
//   useEffect(() => {
//     if (isOpen) {
//       setName(prefill?.name ?? '');
//       setEmail(prefill?.email ?? '');
//       setService(prefill?.service ?? SERVICES[0]?.id ?? '');
//       setAudience(prefill?.audience ?? '');
//       setPack(prefill?.pack ?? '');
//       setMessage(prefill?.message ?? '');
//       setSuccess(null);
//       setError(null);
//     }
//   }, [isOpen, prefill]);

//   // keep selected service object handy
//   const serviceObj = SERVICES.find((s) => s.id === service);

//   // audience options derived from service data (audienceSections)
//   const audienceOptions = serviceObj?.audienceSections?.map((a) => ({ key: a.key, label: a.label })) ?? [];

//   // pack options from service
//   const packOptions = serviceObj?.packs ?? [];

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setSubmitting(true);
//     setError(null);

//     // Basic client validation
//     if (!name.trim() || !email.trim()) {
//       setError('Please provide your name and email.');
//       setSubmitting(false);
//       return;
//     }

//     try {
//       const res = await fetch('/api/booking', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: name.trim(),
//           email: email.trim(),
//           service,
//           audience: audience || null,
//           pack: pack || null,
//           message: message.trim(),
//         }),
//       });

//       const data = await res.json().catch(() => ({}));

//       if (res.ok && data && data.success) {
//         setSuccess(
//           'Thanks — your booking request has been received. I will follow up within 24–48 hours with available times and next steps.'
//         );
//         // Optionally clear form (keep success visible)
//         setName('');
//         setEmail('');
//         setMessage('');
//         setPack('');
//         setAudience('');
//       } else {
//         setError(data?.error || 'Failed to submit booking. Please try again later.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error. Please try again later.');
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <Modal open={isOpen} onClose={closeBooking} title="Book a Consultation" size="md">
//       {success ? (
//         <div className="space-y-4">
//           <p className="text-sm text-neutral-700">{success}</p>
//           <div className="flex justify-end">
//             <button onClick={closeBooking} className="btn-primary">Close</button>
//           </div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="text-sm font-medium">Full name</label>
//             <input
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mt-1 p-3 border rounded-lg"
//               placeholder="Your full name"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Email</label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 p-3 border rounded-lg"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Service</label>
//             <select
//               value={service}
//               onChange={(e) => {
//                 setService(e.target.value);
//                 // reset audience/pack when changing service
//                 setAudience('');
//                 setPack('');
//               }}
//               className="w-full mt-1 p-3 border rounded-lg"
//             >
//               {SERVICES.map((s) => (
//                 <option key={s.id} value={s.id}>
//                   {s.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {audienceOptions.length > 0 && (
//             <div>
//               <label className="text-sm font-medium">Audience / Goal</label>
//               <select
//                 value={audience}
//                 onChange={(e) => setAudience(e.target.value)}
//                 className="w-full mt-1 p-3 border rounded-lg"
//               >
//                 <option value="">(choose)</option>
//                 {audienceOptions.map((a) => (
//                   <option key={a.key} value={a.key}>
//                     {a.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {packOptions.length > 0 && (
//             <div>
//               <label className="text-sm font-medium">Pack (optional)</label>
//               <select
//                 value={pack}
//                 onChange={(e) => setPack(e.target.value)}
//                 className="w-full mt-1 p-3 border rounded-lg"
//               >
//                 <option value="">Single session / No pack</option>
//                 {packOptions.map((p) => (
//                   <option key={p.id} value={p.id}>
//                     {p.title} — {p.sessions} session{p.sessions > 1 ? 's' : ''}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <div>
//             <label className="text-sm font-medium">Message (brief)</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               rows={4}
//               className="w-full mt-1 p-3 border rounded-lg"
//               placeholder="Tell me briefly what you want help with (subject, deadline, background)..."
//             />
//           </div>

//           {error && <div className="text-sm text-red-600">{error}</div>}

//           <div className="flex items-center justify-end gap-3">
//             <button type="button" onClick={closeBooking} className="px-4 py-2 rounded-lg border">
//               Cancel
//             </button>
//             <button type="submit" disabled={submitting} className="btn-primary">
//               {submitting ? 'Sending...' : 'Send booking request'}
//             </button>
//           </div>
//         </form>
//       )}
//     </Modal>
//   );
// }
