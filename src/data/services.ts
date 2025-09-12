// src/data/services.ts
export type Service = {
  id: string;
  title: string;
  category: 'academic' | 'administration' | 'career' | 'databases' | 'other' | 'resume' | 'it';
  desc: string;
  highlights?: string[];
  outcomes?: string[];
  priceOriginal?: string;
  price?: string;
  icon?: string; // key for ServiceIcon
};

export const SERVICES: Service[] = [
  {
    id: 'tutoring',
    title: 'Academic Tutoring',
    category: 'academic',
    desc: 'Personalized one-on-one tutoring for school and university subjects — math, science, languages.',
    highlights: ['Custom lesson plans', 'Homework & exam prep', 'Milestone tracking'],
    outcomes: ['Higher grades', 'Better problem solving', 'Exam confidence'],
    priceOriginal: '$30',
    price: '$20',
    icon: 'book',
  },

  {
    id: 'administration',
    title: 'Administration (Word • Excel • PowerPoint)',
    category: 'administration',
    desc: 'Practical lessons in Word, Excel and PowerPoint to make daily workflows faster and more professional.',
    highlights: ['Excel formulas & pivot tables', 'Word templates & mail merge', 'PowerPoint design'],
    outcomes: ['Faster reporting', 'Polished presentations', 'Automated spreadsheets'],
    priceOriginal: '$40',
    price: '$30',
    icon: 'office',
  },

  {
    id: 'programming',
    title: 'Programming & AI',
    category: 'other',
    desc: 'Hands-on programming lessons (Python, JavaScript) and intro to AI/data concepts with projects.',
    highlights: ['Project-based learning', 'Code reviews', 'AI foundations'],
    outcomes: ['Working projects', 'Better coding habits', 'Foundational ML knowledge'],
    priceOriginal: '$40',
    price: '$30',
    icon: 'code',
  },

  {
    id: 'databases',
    title: 'Databases (SQL • MySQL • MS Access)',
    category: 'databases',
    desc: 'SQL fundamentals, schema design and practical querying in MySQL & Access for analysis and apps.',
    highlights: ['SELECT, JOINs, GROUP BY', 'Schema design', 'Reporting & aggregation'],
    outcomes: ['Confident SQL queries', 'Clean datasets for analysis'],
    priceOriginal: '$45',
    price: '$35',
    icon: 'database',
  },

  {
    id: 'homework',
    title: 'Homework & Projects',
    category: 'academic',
    desc: 'Assignment help, project mentoring and writing assistance with clear milestones and feedback.',
    highlights: ['Scoped project plans', 'Writing & referencing', 'Milestone reviews'],
    outcomes: ['Completed projects', 'Improved marks', 'Better time management'],
    priceOriginal: '$35',
    price: '$25',
    icon: 'homework',
  },

  {
    id: 'career',
    title: 'Career Development & Coaching',
    category: 'career',
    desc: 'Career strategy, interview prep, LinkedIn & resume optimisation, and leadership coaching.',
    highlights: ['CV & LinkedIn advice', 'Mock interviews', 'Career roadmap'],
    outcomes: ['Clear next steps', 'Stronger interview performance'],
    priceOriginal: '$60',
    price: '$45',
    icon: 'briefcase',
  },

  {
    id: 'resume',
    title: 'Resume & Interview Prep',
    category: 'resume',
    desc: 'Resume rewriting, LinkedIn optimisation and mock interviews with actionable feedback.',
    highlights: ['Resume rewrite', 'LinkedIn optimisation', 'Mock interview & feedback'],
    outcomes: ['Sharper resume', 'Better interview results'],
    priceOriginal: '$60',
    price: '$40',
    icon: 'resume',
  },

  {
    id: 'itconsult',
    title: 'IT Consultation & Project Help',
    category: 'it',
    desc: 'Technical consultations for small projects: audits, tooling advice and implementation planning.',
    highlights: ['Technical audits', 'Tooling recommendations', 'Implementation help'],
    outcomes: ['Clear plan', 'Faster delivery'],
    priceOriginal: '$80',
    price: '$60',
    icon: 'it',
  },
];
