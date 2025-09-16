// src/components/services/AudienceChooser.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Service } from '@/data/services';

type AudienceChooserProps = {
  service: Service;
  initial?: string; // audience key
};

export default function AudienceChooser({ service, initial }: AudienceChooserProps) {
  const list = service.audienceSections ?? [];
  const defaultKey = initial ?? list[0]?.key;
  const [active, setActive] = useState<string | undefined>(defaultKey);

  useEffect(() => {
    setActive(defaultKey);
  }, [defaultKey]);

  function scrollToSection(key: string) {
    setActive(key);
    const el = document.getElementById(`${service.id}-${key}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // offset for sticky header
      window.scrollBy(0, -84);
    }
  }

  if (!list || list.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-start gap-3 flex-wrap">
        {list.map((a) => (
          <button
            key={a.key}
            onClick={() => scrollToSection(a.key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
              active === a.key ? 'bg-brand-500 text-white' : 'bg-white/80 dark:bg-black/10 text-neutral-700 border'
            }`}
            aria-pressed={active === a.key}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}


// src/components/services/AudienceChooser.tsx
// 'use client';
// import React, { useState } from 'react';
// import BookServiceButton from './BookServiceButton';
// import { Service } from '@/data/services';

// type AudienceChooserProps = {
//   service: Service;
//   initial?: string; // key of audienceSections
// };

// export default function AudienceChooser({ service, initial }: AudienceChooserProps) {
//   const list = service.audienceSections ?? [];
//   const defaultKey = initial ?? list[0]?.key;
//   const [active, setActive] = useState<string | undefined>(defaultKey);

//   function scrollToSection(key: string) {
//     setActive(key);
//     const el = document.getElementById(`${service.id}-${key}`);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       // small offset if header is sticky
//       window.scrollBy(0, -80);
//     }
//   }

//   if (!list || list.length === 0) return null;

//   return (
//     <div className="mb-8">
//       <div className="flex items-center justify-center gap-3 flex-wrap">
//         {list.map((a) => (
//           <button
//             key={a.key}
//             onClick={() => scrollToSection(a.key)}
//             className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
//               active === a.key
//                 ? 'bg-brand-500 text-white'
//                 : 'bg-white/80 dark:bg-black/10 text-neutral-700 border'
//             }`}
//             aria-pressed={active === a.key}
//           >
//             {a.label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4 flex items-center justify-center gap-4">
//         {/* Quick book (prefilled) for the currently active audience */}
//         <div>
//           <BookServiceButton serviceId={service.id} audience={active}>
//             Book a free 15-minute review
//           </BookServiceButton>
//         </div>

//         {/* Link to full pricing/pack section */}
//         <a href="#pricing" className="text-sm underline text-neutral-700">
//           See packages & pricing
//         </a>
//       </div>
//     </div>
//   );
// }
