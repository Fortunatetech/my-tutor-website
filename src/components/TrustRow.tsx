// src/components/TrustRow.tsx
import Link from 'next/link';

export default function TrustRow() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="px-3 py-1 bg-white/80 dark:bg-white/5 rounded-full text-sm font-medium">8+ yrs teaching</span>
        <span className="px-3 py-1 bg-white/80 dark:bg-white/5 rounded-full text-sm font-medium">1,200+ hours</span>
        <span className="px-3 py-1 bg-white/80 dark:bg-white/5 rounded-full text-sm font-medium">95% satisfaction</span>
      </div>
      <div className="mt-2 text-sm text-neutral-600">
        Trusted by 1,200+ learners — avg rating 4.9/5 on <Link className="underline" href="https://preply.com">Preply</Link> &amp; <Link className="underline" href="https://superprof.com">Superprof</Link>.
      </div>
    </div>
  );
}
