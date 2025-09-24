// src/components/ui/FloatingCTA.tsx
"use client";

import React from "react";
import { useBooking } from "@/components/booking/BookingProvider";

/**
 * UPDATED: Floating CTA
 * - Opens booking modal as canonical lead-capture action.
 */

export default function FloatingCTA() {
  const { openBooking } = useBooking();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => openBooking({})}
        className="flex items-center gap-3 px-4 py-3 rounded-full border border-neutral-500 bg-black/50 shadow-lg backdrop-blur-lg cursor-pointer "
        aria-label="Book free consultation"
      >
        <span className="font-semibold text-white mix-blend-difference">Book Free Consult</span>
      </button>
    </div>
  );
}

// src/components/ui/FloatingCTA.tsx
// "use client";

// import { useBooking } from "@/components/booking/BookingProvider";
// import { useEffect, useState } from "react";

// export default function FloatingCTA() {
//   const { openBooking } = useBooking();
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     // hide on very small widths if desired
//     function onResize() {
//       setVisible(window.innerWidth > 360);
//     }
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={() => openBooking()}
//         className="bg-brand-500 dark:bg-neutral-600 text-black dark:text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-3 hover:scale-105 transition-transform"
//         aria-label="Book now"
//       >
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M21 10h-6l2-7-11 11 4 4 11-11-2-7z" />
//         </svg>
//         <span className="font-semibold">Book</span>
//       </button>
//     </div>
//   );
// }
