// src/components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from './ui/Button';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = resolvedTheme || theme;

  return (
    <div>
      <button
        onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
        className="p-2 rounded-lg bg-white/10 text-neutral-900 dark:bg-black/10 dark:text-neutral-200"
      >
        {current === 'dark' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
