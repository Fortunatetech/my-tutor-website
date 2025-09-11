// File: src/components/ui/Input.tsx
'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  className?: string;
}

export default function Input({
  label,
  id,
  className = '',
  type = 'text',
  required = false,
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <label htmlFor={inputId} className="text-neutral-900 font-medium">
        {label}{required ? <span className="ml-1 text-red-500">*</span> : null}
      </label>

      <input
        id={inputId}
        type={type}
        required={required}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus bg-white"
        {...props}
      />
    </div>
  );
}
