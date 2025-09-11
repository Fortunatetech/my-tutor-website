// src/data/posts.ts
import type { Post } from '@/types';

export const posts: Post[] = [
  {
    slug: 'how-to-start-learning-python',
    title: 'How to Start Learning Python (The Practical Way)',
    excerpt: 'A short roadmap to begin learning Python with small projects and consistent practice.',
    date: '2025-01-10',
    readTime: '6 min read',
    content: [
      'Python is a beginner-friendly language used for scripting, web apps, and data science.',
      'Start with small projects like a to-do app, a web scraper, or a simple bot.',
      'Practice regularly, read others code, and build a portfolio to show employers or tutors.',
    ],
  },
  {
    slug: 'ace-your-interview',
    title: 'Ace Your Interview: Preparation Checklist',
    excerpt: 'A practical checklist to prepare for technical and behavioral interviews.',
    date: '2025-02-02',
    readTime: '5 min read',
    content: [
      'Research the company, practice common questions, and prepare a set of questions to ask.',
      'Practice coding problems, speak aloud your thought process, and time-box practice sessions.',
      'Review your resume before the call and be ready to talk about your accomplishments.',
    ],
  },
];
