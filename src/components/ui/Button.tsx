// src/components/ui/Button.tsx
'use client';
import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const sizeMap: Record<Size, string> = { sm: 'text-sm px-3 py-2', md: 'text-base px-5 py-3', lg: 'text-lg px-6 py-4' };
  const base = 'inline-flex items-center justify-center rounded-2xl font-semibold transition-transform';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'bg-white text-brand-900 border border-gray-100 shadow-sm',
    ghost: 'btn-ghost bg-transparent text-white',
  };
  const classes = classNames(base, variantClasses[variant], sizeMap[size], className);

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...rest}>{children}</button>;
}
