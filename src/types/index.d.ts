// src/types/index.d.ts
export interface Service {
  id: string;
  title: string;
  desc: string;
  details?: string[];
  price?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[]; // array of paragraphs
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
