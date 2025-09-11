// src/components/ThemeProviderWrapper.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props { children: ReactNode }

/*
  Important:
  - defaultTheme = "light" ensures server and initial client markup match (avoids hydration mismatch).
  - attribute="class" makes next-themes add/remove the "dark" class on <html>.
  - enableSystem=false avoids the provider trying to detect the OS theme during hydration which can cause mismatch.
  If you prefer system default and want to accept a slight flicker, you can set defaultTheme="system" and enableSystem={true}.
*/
export default function ThemeProviderWrapper({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
