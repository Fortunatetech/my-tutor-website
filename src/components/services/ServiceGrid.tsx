// src/components/services/ServicesGrid.tsx
'use client';

import React, { useMemo, useState } from 'react';
import { SERVICES as ALL_SERVICES, Service } from '@/data/services';
import ServiceCard from './ServiceCard';
import ServicesFilter from './ServiceFilter';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

export default function ServicesGrid() {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const qDeb = useDebouncedValue(q, 200);

  const categories = useMemo(() => {
    const set = new Set<string>();
    ALL_SERVICES.forEach((s) => set.add(s.category));
    return Array.from(set);
  }, []);

  const filtered: Service[] = useMemo(() => {
    return ALL_SERVICES.filter((s) => {
      if (activeCat && s.category !== activeCat) return false;
      if (!qDeb) return true;
      const needle = qDeb.toLowerCase();
      return s.title.toLowerCase().includes(needle) || s.desc.toLowerCase().includes(needle);
    });
  }, [activeCat, qDeb]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <ServicesFilter categories={categories} active={activeCat} onChange={setActiveCat} />
        </div>

        <div className="w-full md:w-64">
          <input
            placeholder="Search services..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
