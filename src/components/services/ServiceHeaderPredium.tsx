// src/components/services/ServiceHeaderPremium.tsx
// NEW - premium header with background, big title, hero metric, and price/book CTA on the right
'use client';

import React from 'react';
import ServiceHeroBackground from './ServiceHeroBackground';
import BookServiceButton from './BookServiceButton';
import Icon from '@/components/ui/Icon';
import TrustRow from '@/components/TrustRow';
import PriceBlock from './PriceBlock';
import { motion } from 'framer-motion';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  heroMetric?: string;
  price?: string;
  priceOriginal?: string;
};

export default function ServiceHeaderPremium({ id, title, subtitle, desc, heroMetric, price, priceOriginal }: Props) {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200 via-white to-bg-50 p-8 mb-8">
      <ServiceHeroBackground />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 leading-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-lg text-neutral-700">{subtitle}</p>}
            {desc && <p className="mt-4 text-neutral-600 max-w-2xl">{desc}</p>}

            {heroMetric && (
              <div className="mt-6 flex items-center gap-4 text-sm text-neutral-700">
                <Icon name="star" className="text-brand-500" />
                <div>{heroMetric}</div>
              </div>
            )}

            <div className="mt-6">
              <TrustRow />
            </div>
          </motion.div>

          <motion.aside initial={{ scale: .98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .08 }} className="lg:col-span-1">
            <div className="p-5 border-y-orange-500 rounded-2xl shadow-lg border">
              <PriceBlock original={priceOriginal} current={price} compact />
              <div className="mt-4">
                <BookServiceButton serviceId={id} className="w-full px-4 py-2 rounded-lg bg-brand-500 text-white">
                  Book Free Consult
                </BookServiceButton>
                <a href={`/booking?service=${encodeURIComponent(id)}`} className="block mt-3 text-center text-sm text-neutral-600 underline">
                  Or schedule now — pick a time
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </header>
  );
}
