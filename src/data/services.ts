// src/data/services.ts
export type Service = {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  highlights?: string[];
  outcomes?: string[];
  price?: string;
};

export const SERVICES: Service[] = [
  {
    id: 'tutoring',
    title: 'Academic Tutoring',
    subtitle: 'Personalized learning that unlocks progress',
    desc:
      'Targeted one-on-one tutoring for school and university students. Lessons are tailored to your pace, build exam technique and strengthen long-term understanding.',
    highlights: [
      'Custom lesson plans matched to your syllabus and learning style',
      'Homework & exam prep with proven techniques',
      'Clear milestone tracking for measurable progress',
    ],
    outcomes: [
      'Higher grades and better exam readiness',
      'Stronger problem-solving skills and study habits',
      'Reduced stress and greater confidence',
    ],
    price: 'From $25/hr',
  },

  {
    id: 'administration',
    title: 'Administration (Word • Excel • PowerPoint)',
    subtitle: 'Practical office skills that make work and school easier',
    desc:
      'Hands-on lessons in Microsoft Word, Excel and PowerPoint tailored to professional and academic tasks. Learn to create documents, automate spreadsheets, and design persuasive presentations.',
    highlights: [
      'Excel: formulas, pivot tables, basic macros',
      'Word: templates, styles, mail merge',
      'PowerPoint: slide structure, visuals, storytelling',
    ],
    outcomes: [
      'Faster, more confident document & spreadsheet work',
      'Reusable templates and automation for repetitive tasks',
      'Presentations that clearly communicate ideas',
    ],
    price: 'From $30/hr',
  },

  {
    id: 'career',
    title: 'Career Development & Coaching',
    subtitle: 'Career strategy, interview readiness and confident pitching',
    desc:
      'Strategic coaching for job search, leadership, interview prep and personal branding. We’ll map goals, sharpen your CV/LinkedIn, and practise interviews and pitches.',
    highlights: [
      'Resume & LinkedIn rewrite focused on impact',
      'Mock interviews with actionable feedback',
      'Leadership and pitching practice',
    ],
    outcomes: [
      'Clear career roadmap and next-step plan',
      'Improved interview performance',
      'Stronger presence and persuasive communication',
    ],
    price: 'Packages available',
  },

  {
    id: 'databases',
    title: 'Databases (SQL • MySQL • MS Access)',
    subtitle: 'Practical database skills for analysis and apps',
    desc:
      'Learn SQL fundamentals, database design and practical querying using MySQL and Microsoft Access. Ideal for students, analysts, and developers working with data.',
    highlights: [
      'Writing queries (SELECT, JOINs, GROUP BY, subqueries)',
      'Schema design and data import/export',
      'Hands-on filtering, aggregation, and reporting projects',
    ],
    outcomes: [
      'Confident SQL query-writing',
      'Prepared datasets for analysis and dashboards',
      'Troubleshooting and optimization skills',
    ],
    price: 'From $35/hr',
  },

  {
    id: 'other',
    title: 'Other Tech & Data Skills',
    subtitle: 'From basic computing to AI & data visualization',
    desc:
      'Flexible lessons covering Python, basic computing, Machine Learning intro, Power BI, and Tableau. Project-based sessions so you learn by building useful outputs.',
    highlights: [
      'Python fundamentals and small projects',
      'Intro to machine learning workflows',
      'Power BI & Tableau dashboards and storytelling',
    ],
    outcomes: [
      'Practical portfolio pieces (scripts, dashboards)',
      'End-to-end data import, transform and visualize skills',
      'A solid foundation for continued learning',
    ],
    price: 'From $30/hr',
  },

  {
    id: 'resume',
    title: 'Resume & Interview Prep',
    subtitle: 'Stand out on paper and in person',
    desc:
      'Resume rewriting and interview training that emphasize achievements and story-telling. Includes mock interviews and tailored feedback to build confidence.',
    highlights: [
      'Impact-first resume rewrite',
      'Behavioral STAR-method coaching',
      'Mock interviews with written feedback',
    ],
    outcomes: [
      'Sharper resume & LinkedIn profile',
      'Improved interview answers and reduced nerves',
      'Higher chance of progressing in hiring',
    ],
    price: 'From $40 (resume)',
  },

  {
    id: 'itconsult',
    title: 'IT Consultation & Project Help',
    subtitle: 'Technical guidance for small projects and setups',
    desc:
      'Practical IT consulting for scoping, tooling, and step-by-step implementation. I provide prioritized plans and hands-on help to get projects unstuck.',
    highlights: [
      'Technical audits and prioritized roadmaps',
      'Tooling and architecture recommendations',
      'Hands-on implementation support when needed',
    ],
    outcomes: [
      'Clear plan and faster delivery',
      'Reduced risk from tech choices',
      'Practical advice you can act on immediately',
    ],
    price: 'Hourly / Retainer',
  },
];
