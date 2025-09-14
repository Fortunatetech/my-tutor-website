// src/data/services.ts
export type Pack = {
  id: string;
  title: string;
  sessions: number;
  description: string;
};

export type SuccessStory = {
  id: string;
  title: string;
  summary: string;
  result: string;
  details?: string;
};

export type Service = {
  id: string;
  title: string;
  category: 'academic' | 'administration' | 'career' | 'databases' | 'other' | 'resume' | 'it';
  subservices?: string[]; // short subject list
  desc: string;
  heroMetric?: string;
  whatWeCover?: string[];
  lessonPlan?: string[];
  whatSetsApart?: string[];
  audience?: string[];
  priceOriginal?: string;
  price?: string;
  icon?: string;
  packs?: Pack[];
  successStories?: SuccessStory[];
};

export const SERVICES: Service[] = [
  {
    id: 'tutoring',
    title: 'Academic Tutoring',
    category: 'academic',
    subservices: [
      'Homework Help',
      'Mathematics (Algebra, Statistics, Calculus)',
      'Physics',
      'Chemistry',
      'Biology',
      'English',
    ],
    desc: 'One-on-one academic tutoring tailored to your syllabus and pace — ideal for students who want clarity, confidence and better results.',
    heroMetric: '8+ years teaching • 1,200+ hours • Many students moved 2+ grades up',
    whatWeCover: [
      'Core concepts explained with simple examples',
      'Problem-solving strategies and exam technique',
      'Targeted practice and error analysis',
      'Homework walkthroughs and project support',
    ],
    lessonPlan: [
      '15m — quick recap & questions',
      '30m — focused teaching on the topic (concept + examples)',
      '10m — guided practice with immediate feedback',
      '5m — summary + next steps & practice assignment',
    ],
    whatSetsApart: [
      'Structured lesson plans mapped to syllabus',
      'Clear milestones & progress tracking',
      'Real exam-style practice and feedback loop',
      'Patient step-by-step guidance, no hand-holding',
    ],
    audience: [
      'School students preparing for tests and exams',
      'University undergraduates needing concept clarity',
      'Learners stuck on specific topics or assessments',
    ],
    priceOriginal: '$30',
    price: '$20',
    icon: 'book',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Try a single focused lesson.' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Steady progress and improvement.' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Intensive coaching or project mentorship.' },
    ],
    successStories: [
      {
        id: 'math-turnaround',
        title: 'Math exam turnaround — 3 months',
        summary: 'Student struggling with algebra moved from C → A in 3 months.',
        result: 'Grade improved from C to A; student now confident with exam technique.',
        details: 'Weekly targeted lessons, practice tests, and weekly tracked milestones.',
      },
    ],
  },

{
id: 'writing',
title: 'Writing & English — Academic & Professional Coaching',
category: 'other',
subservices: [
  'General English',
  'Essay Writing & Structure',
  'Academic Thesis Support',
  'Business English (emails & reports)',
  'Reading, Proofreading & Editing'
],
desc: 'Comprehensive writing and English coaching for students and professionals — from grammar and vocabulary to essay & thesis writing, academic style, and business communication.',
heroMetric: 'Transform essays and theses with targeted coaching and expert proofreading. 20+ students coached; most report measurable improvements in structure, clarity and grades. Trusted on Preply & Superprof (avg rating 4.9/5).',
whatWeCover: [
  'Grammar fundamentals and sentence structure to improve clarity and tone.',
  'Essay planning: thesis development, argument structure, paragraph cohesion, and referencing.',
  'Academic style & citation formatting (APA / MLA / Chicago) for submission-ready drafts.',
  'Business English: concise emails, persuasive reports, and presentation language.',
  'Self-editing strategies so learners can improve independently after sessions.',
],
lessonPlan: [
  '10m — review goals & previous work',
  '30m — taught concept + model answer',
  '15m — guided writing/editing practice',
  '5m — feedback, edits & homework with clear next steps'
],
whatSetsApart: [
  'Evidence-based feedback — actionable revision steps, not vague notes',
  'Practical templates and checklists you can reuse',
  'Fast draft turnaround for urgent needs (48 hours for proofreading)',
  'End-goal focus: grade improvement, publishable drafts, or job-ready documents'
],
audience: [
  'Students (middle, high school, university) working on essays, assignments or theses',
  'ESL learners wanting fluent, accurate academic & business English',
  'Professionals needing report/CV polishing or pitch-ready documents',
  'Researchers preparing thesis chapters or journal submissions'
],
priceOriginal: '$50',
price: '$35',
icon: 'resume',
packs: [
  { id: 'starter', title: 'Starter', sessions: 1, description: 'One focused coaching or editing session — great for a single assignment.' },
  { id: 'growth', title: 'Growth', sessions: 5, description: 'Ongoing support: draft reviews and progressive improvement.' },
  { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'In-depth project support: thesis, journal papers, or long-term coaching.' }
],
successStories: [
  {
    id: 'essay-a-grade',
    title: 'Essay rewrites — B- to A',
    summary: 'Undergraduate essay rewritten and improved for structure and argument.',
    result: 'Grade improved to A after two revision sessions and guided re-drafting.',
    details: 'Includes sample before/after (available on request).'
  }
]
},

  // keep previous other services (programming, databases, career, resume, administration, itconsult)
  {
    id: 'programming',
    title: 'Programming & AI',
    category: 'other',
    subservices: ['Python', 'JavaScript', 'Intro to AI', 'Project-based learning'],
    desc: 'Hands-on programming lessons and introductory AI concepts — learn by building small projects.',
    heroMetric: 'Projects first: build a portfolio piece in 4 weeks',
    whatWeCover: ['Syntax & basics', 'Project structure', 'Testing & debugging', 'Intro ML pipelines'],
    lessonPlan: ['Intro & goals', 'Live coding', 'Guided exercises', 'Review & next steps'],
    whatSetsApart: ['Project-first approach', 'Code review and best practices'],
    audience: ['Beginners to intermediates', 'Students & professionals'],
    priceOriginal: '$40',
    price: '$30',
    icon: 'code',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Introductory session' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Build a small project' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Portfolio-ready project' },
    ],
    successStories: [],
  },

  {
    id: 'databases',
    title: 'Databases (SQL • MySQL • MS Access)',
    category: 'databases',
    subservices: ['SQL', 'MySQL', 'MS Access', 'Querying & reporting'],
    desc: 'Practical SQL and database skills for analysis and reporting.',
    heroMetric: 'From zero-to-queries in weeks',
    whatWeCover: ['SELECT, JOINs, GROUP BY', 'Schema design', 'Import/export'],
    lessonPlan: ['Theory', 'Hands-on queries', 'Project work'],
    whatSetsApart: ['Hands-on datasets', 'Reporting focus'],
    audience: ['Analysts', 'Students', 'Developers'],
    priceOriginal: '$45',
    price: '$35',
    icon: 'database',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick intro' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical project' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Complex queries & design' },
    ],
    successStories: [],
  },

  {
    id: 'career',
    title: 'Career Development & Coaching',
    category: 'career',
    subservices: ['Career coach', 'Job search', 'Leadership', 'Pitching', 'Personal coaching'],
    desc: 'Career strategy, interview prep and leadership coaching tailored to your next step.',
    heroMetric: 'Many clients moved into new roles within 3 months',
    whatWeCover: ['Resume & LinkedIn', 'Mock interviews', 'Pitching & leadership'],
    lessonPlan: ['Goal mapping', 'Skill drills', 'Mock interviews'],
    whatSetsApart: ['Practical job-search tactics', 'Mock interview feedback'],
    audience: ['Early-career professionals', 'Mid-career pivoters'],
    priceOriginal: '$60',
    price: '$45',
    icon: 'briefcase',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick career check' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Roadmap + mock interviews' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Deep coaching package' },
    ],
    successStories: [],
  },

  {
    id: 'resume',
    title: 'Resume & Interview Prep',
    category: 'resume',
    subservices: ['Resume rewrite', 'LinkedIn optimization', 'Mock interviews'],
    desc: 'Resume and interview training designed to highlight impact and results.',
    heroMetric: 'Resumes that pass ATS & attract recruiters',
    whatWeCover: ['Impact-based resumes', 'STAR interview prep', 'LinkedIn optimization'],
    lessonPlan: ['Resume review', 'Rewrite session', 'Mock interview'],
    whatSetsApart: ['Results-focused edits', 'Interview practice'],
    audience: ['Jobseekers', 'Career changers'],
    priceOriginal: '$60',
    price: '$40',
    icon: 'resume',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Resume review' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Rewrite + mock interview' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Comprehensive package' },
    ],
    successStories: [],
  },

  {
    id: 'administration',
    title: 'Administration (Word • Excel • PowerPoint)',
    category: 'administration',
    subservices: ['Excel', 'Word', 'PowerPoint', 'Templates & automation'],
    desc: 'Practical lessons in Word, Excel and PowerPoint to speed up everyday work.',
    heroMetric: 'Faster reporting, cleaner documents',
    whatWeCover: ['Formulas, pivot tables, templates'],
    lessonPlan: ['Concepts', 'Examples', 'Automations'],
    whatSetsApart: ['Real-world files & templates'],
    audience: ['Students', 'Office professionals'],
    priceOriginal: '$40',
    price: '$30',
    icon: 'office',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Intro session' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical workflows' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Automation & templates' },
    ],
    successStories: [],
  },

  {
    id: 'itconsult',
    title: 'IT Consultation & Project Help',
    category: 'it',
    subservices: ['Technical audits', 'Architecture advice', 'Implementation planning'],
    desc: 'Technical guidance for small projects and setups.',
    heroMetric: 'Clear plans that accelerate projects',
    whatWeCover: ['Audit', 'Recommendations', 'Implementation steps'],
    lessonPlan: ['Scoping', 'Plan', 'Follow-up'],
    whatSetsApart: ['Actionable delivery-focused advice'],
    audience: ['Small teams', 'Solo founders'],
    priceOriginal: '$80',
    price: '$60',
    icon: 'it',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Consultation' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Project support' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Ongoing retained support' },
    ],
    successStories: [],
  },
];
