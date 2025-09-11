// src/components/hero/Hero.tsx
'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-bg text-white rounded-xl overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .6 }} className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Personal tutoring & career coaching that gets results
          </motion.h1>

          <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: .12, duration:.6 }} className="mt-4 text-lg text-white/90 max-w-xl">
            One-on-one lessons, project support and career guidance for students and professionals — practical help, proven outcomes.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
            <Button variant="primary" href="/booking">Book a Free Consultation</Button>
            <Button variant="primary" href="/services">Explore Services</Button>
          </motion.div>

          <motion.div className="mt-6 text-sm text-white/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            <span className="inline-block mr-3">⭐ 5.0 — Rated by learners</span>
            <span className="inline-block">✔️ Flexible scheduling • ✔️ Tailored lessons</span>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full relative">
          <motion.div initial={{ scale: .98, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ delay:.2 }} className="rounded-xl overflow-hidden shadow-2xl">
            <Image src="/images/avatar.jpg" alt="Tutor coaching" width={1000} height={650} className="object-cover w-full h-80 md:h-[420px]" priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
