// src/components/ui/Card.tsx
import { ReactNode } from 'react';

interface CardProps { children: ReactNode; className?: string; }
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 bg-white dark:bg-transparent rounded-lg shadow-md border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
