// src/components/ui/Accordion.tsx
'use client';

import { useState } from 'react';

interface Item {
  id?: string | number;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: Item[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  function toggle(i: number) {
    if (allowMultiple) {
      setOpenIndexes((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
    } else {
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }

  return (
    <div className={className}>
      {items.map((it, i) => {
        const isOpen = openIndexes.includes(i);
        return (
          <div key={it.id ?? i} className="border-b last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-neutral-900 font-medium">{it.title}</span>
              <span className="ml-3 text-neutral-600">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && <div className="pb-4 text-neutral-700">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
