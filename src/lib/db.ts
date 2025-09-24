// src/lib/db.ts
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

/**
 * NEW: Simple JSON persistence for bookings (MVP)
 * - Saves bookings to ./data/bookings.json
 * - Not recommended for production, but fine for a solo site MVP.
 */

export async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    // ignore
  }
}

export async function readBookings() {
  try {
    await ensureDataDir();
    const txt = await fs.readFile(BOOKINGS_FILE, 'utf-8').catch(() => '[]');
    return JSON.parse(txt || '[]');
  } catch (err) {
    return [];
  }
}

export async function saveBooking(booking: any) {
  await ensureDataDir();
  const all = await readBookings();
  all.unshift(booking);
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(all, null, 2), 'utf-8');
  return booking;
}
