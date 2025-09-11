// src/components/testimonials/TestimonialSlider.tsx
'use client';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .45 }}>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <img src={testimonials[index].avatar || '/images/avatar.jpg'} alt={testimonials[index].name} className="mx-auto w-16 h-16 rounded-full object-cover mb-3" />
            <blockquote className="italic text-neutral-800">“{testimonials[index].quote}”</blockquote>
            <div className="mt-3 font-semibold text-brand-900">{testimonials[index].name}</div>
            <div className="text-sm text-neutral-600">{testimonials[index].role}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-brand-500' : 'bg-neutral-300'}`} aria-label={`Go to testimonial ${i+1}`} />
        ))}
      </div>
    </div>
  );
}
