// src/components/booking/BookingProvider.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type BookingPrefill = {
  service?: string;
  audience?: string;
  pack?: string;
  name?: string;
  email?: string;
};

type BookingContextValue = {
  openBooking: (prefill?: BookingPrefill) => void;
  closeBooking: () => void;
  isOpen: boolean;
  prefill?: BookingPrefill;
};

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<BookingPrefill | undefined>(undefined);

  function openBooking(p?: BookingPrefill) {
    setPrefill(p ?? undefined);
    setIsOpen(true);
  }
  function closeBooking() {
    setIsOpen(false);
    // keep prefill or clear depending on your UX — we'll keep it
  }

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen, prefill }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return ctx;
}
