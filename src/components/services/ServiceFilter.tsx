// src/components/services/ServiceFilter.tsx
// UPDATED — fixes crash when a service has no category (defensive, safe)
'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';

type Props = {
  // optional callback if parent wants to react to filter changes
  onChange?: (category: string | null) => void;
  initial?: string | null;
};

function capitalize(s?: string) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function ServicesFilter({ onChange, initial = null }: Props) {
  const [selected, setSelected] = useState<string | null>(initial);

  // Build category list defensively:
  // - use category if present, otherwise 'other'
  // - filter out falsy values
  const categories = Array.from(
    new Set(
      SERVICES.map((srv) => (typeof srv.category === 'string' && srv.category.trim() ? srv.category.trim() : 'other'))
    )
  ).filter(Boolean);

  function handleClick(cat: string | null) {
    setSelected(cat);
    if (onChange) onChange(cat);
  }

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button
        onClick={() => handleClick(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
          selected === null ? 'bg-brand-500 text-white' : 'bg-blue-400 border'
        }`}
        aria-pressed={selected === null}
      >
        All
      </button>

      {categories.map((cat) => {
        // defensive: skip any empty strings just in case
        if (!cat) return null;
        const label = capitalize(cat);
        return (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              selected === cat ? 'bg-brand-500 text-white' : 'bg-amber-300 border'
            }`}
            aria-pressed={selected === cat}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}


// src/components/services/ServicesFilter.tsx
// 'use client';

// import React from 'react';

// export default function ServicesFilter({
//   categories,
//   active,
//   onChange,
// }: {
//   categories: string[];
//   active: string | null;
//   onChange: (c: string | null) => void;
// }) {
//   return (
//     <div className="flex flex-wrap gap-3 items-center">
//       <button
//         onClick={() => onChange(null)}
//         className={`px-3 py-1 rounded-full text-sm ${active === null ? 'bg-brand-500 text-white' : 'bg-white/80 dark:bg-white/5'}`}
//       >
//         All
//       </button>

//       {categories.map((c) => (
//         <button
//           key={c}
//           onClick={() => onChange(c)}
//           className={`px-3 py-1 rounded-full text-sm ${active === c ? 'bg-brand-500 text-white' : 'bg-white/80 dark:bg-white/5'}`}
//         >
//           {capitalize(c)}
//         </button>
//       ))}
//     </div>
//   );
// }

// function capitalize(s: string) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }
