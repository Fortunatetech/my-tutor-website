// src/components/nav/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';
import { useBooking } from '@/components/booking/BookingProvider';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/50">
      <div className="container mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-900 dark:text-white">TutorCoach</Link>

        <nav className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-neutral-900 dark:text-neutral-100 hover:text-brand-500 ${pathname === l.href ? 'font-semibold' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* open booking modal instead of direct href */}
          <button onClick={() => openBooking()} className="px-4 py-2 rounded-lg bg-brand-500 text-white">
            Book Now
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-black/10">
            <span className="sr-only">Toggle menu</span>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/90 border-t py-4 px-6">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-neutral-900 dark:text-neutral-100">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
