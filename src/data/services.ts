// src/data/services.ts
// UPDATED: central services data source (includes Writing & Academic Tutoring entries used on service pages)

export type AudienceSection = {
  key: string;
  label: string;
  headline: string;
  bullets: string[];
  firstSession: string;
  outcomes: string[];
  testimonial?: { text: string; author: string };
};

export type Pack = { id: string; title: string; sessions: number; description: string };

export type Service = {
  id: string;
  title: string;
  category?: string;
  subservices?: string[];
  desc: string;
  heroMetric?: string;
  whatWeCover?: string[];
  lessonPlan?: string[];
  whatSetsApart?: string[];
  audienceSections?: AudienceSection[];
  priceOriginal?: string;
  price?: string;
  icon?: string;
  packs?: Pack[];
  successStories?: Array<{ id: string; title: string; summary: string; result?: string; details?: string }>;
  faq?: Array<{ q: string; a: string }>;
};

export const SERVICES: Service[] = [

  // ====== Writing & English (detailed per your content) ======
  {
    id: 'writing',
    title: 'Writing & English',
    category: 'other',
    subservices: ['Business English', 'Essay Writing', 'Thesis Support', 'General English', 'Reading & Proofreading'],
    desc:
      'Comprehensive writing and English coaching for students and professionals — from grammar & vocabulary to essay & thesis writing, academic style, and business communication.',
    heroMetric: '200+ essays & CVs edited • Most learners report measurable improvements in clarity & grades',
    whatWeCover: [
      'Grammar fundamentals and sentence structure',
      'Essay planning, argument structure and references',
      'Business English: emails, reports and presentations',
      'Proofreading and academic style adjustments',
    ],
    lessonPlan: [
      '10m — objective & review of previous work',
      '30m — focused instruction and modeling',
      '15m — guided practice or live editing of the student’s draft',
      '5m — feedback, revision checklist & homework',
    ],
    whatSetsApart: [
      'Evidence-based feedback: actionable revision steps, not vague notes',
      'Tailored lessons — plans adapt to level, deadline and goals',
      'Editable templates, revision checklists and annotated examples',
      'Priority turnaround for urgent drafts (rush options available)',
    ],
    audienceSections: [
      {
        key: 'kids',
        label: 'Kids (K–12)',
        headline: 'Help for kids — clear paragraphs, comprehension & Homework Confidence',
        bullets: [
          'Structure simple essays: intro, 2–3 paragraphs, conclusion',
          'Reading comprehension techniques (find evidence, answer questions)',
          'Homework support and practice that builds confidence',
        ],
        firstSession: '30–45 min — short assessment + one focused exercise and a clear follow-up plan',
        outcomes: [
          'Clearer paragraph structure and improved test answers',
          'Greater confidence completing homework on time',
          'Foundations that make future writing simpler',
        ],
        testimonial: { text: 'My son went from struggling with paragraph structure to writing clear essays in 6 weeks.', author: 'A.F. (Parent), Sep 2024' },
      },
      {
        key: 'students',
        label: 'Students (Uni & College)',
        headline: 'University writing — essays, arguments, and thesis support',
        bullets: [
          'Thesis and essay planning: argument arcs and evidence mapping',
          'Citation formatting and academic tone',
          'Draft-review cycles with targeted revision steps',
        ],
        firstSession: '45–60 min — sample review + a 3-session plan to tackle the next draft',
        outcomes: ['Stronger arguments and clearer structure', 'Submission-ready chapters and essays', 'Higher confidence in research writing'],
        testimonial: { text: 'Moved from B to A on a major essay after two revision sessions.', author: 'L.M., BSc English, Apr 2024' },
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Business & professional writing — reports, emails and CVs',
        bullets: [
          'Polished reports and persuasive business language',
          'CV/resume editing for recruiter-ready presentation',
          'Presentation language and executive summaries',
        ],
        firstSession: '45 min — review of one document + targeted edits and next steps',
        outcomes: ['Cleaner, more persuasive reports', 'CVs that pass ATS and attract recruiters', 'Faster turnaround on professional drafts'],
        testimonial: { text: 'CV rewrites helped me get interviews within weeks.', author: 'S.K., Product Manager, Jun 2024' },
      },
    ],
    priceOriginal: '$50/hr',
    price: '$35/hr',
    icon: 'resume',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'One focused coaching or editing session.' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Ongoing support and draft reviews.' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'In-depth project & thesis support.' },
    ],
    successStories: [
      {
        id: 'essay-a-grade',
        title: 'Essay improved to A grade',
        summary: 'Undergrad essay rewritten, moved from B- to A.',
        result: 'Improved structure, argument clarity and referencing.',
        details: 'Two revision sessions and guided re-drafting.',
      },
    ],
    faq: [
      { q: 'Do you proofread or teach editing techniques?', a: 'Both — I provide edits and teach self-editing so improvements stick.' },
      { q: 'Can you help with citation styles?', a: 'Yes — APA, MLA, Chicago and more; I ensure references match your target style.' },
    ],
  },

  
  // ====== Academic Tutoring ======
  {
    id: 'tutoring',
    title: 'Academic Tutoring',
    category: 'tutoring',
    subservices: [
      'Math (Algebra, Calculus, Statistics)',
      'Physics',
      'Biology',
      'Chemistry',
      'English',
    ],
    desc:
      'Personalized one-on-one tutoring for school and university subjects — structured lessons, exam technique and steady progress plans.',
    heroMetric: '8+ years teaching • 1,200+ hours • 95% satisfaction',
    whatWeCover: [
      'Curriculum-aligned lesson plans',
      'Exam technique & timed practice',
      'Homework support and progress tracking',
    ],
    lessonPlan: ['10m — review & goal', '35m — focused teaching', '15m — practice & feedback'],
    whatSetsApart: [
      'Curriculum-aligned plans tailored to your exam board',
      'Regular progress tracking and checkpoints',
      'Practical homework with clear marking rubrics',
    ],
    audienceSections: [
      {
        key: 'kids',
        label: 'Kids (K–12)',
        headline: 'Confidence-first tutoring for school learners',
        bullets: [
          'Clear step-by-step explanations for concepts',
          'Homework support and revision habit-building',
          'Simple strategies for exam questions and problem solving',
        ],
        firstSession: '30–45 min — quick assessment + targeted plan',
        outcomes: ['Improved homework completion', 'Clearer understanding and higher marks'],
        testimonial: { text: 'My daughter went from confused to confident in 8 weeks.', author: 'P.R. (Parent), Mar 2024' },
      },
      {
        key: 'students',
        label: 'Students (Uni & College)',
        headline: 'University-level coaching to improve grades',
        bullets: ['Deeper problem solving', 'Exam strategies', 'Project advice and marking criteria'],
        firstSession: '45–60 min — diagnostic + plan',
        outcomes: ['Higher exam scores', 'Stronger problem solving'],
        testimonial: { text: 'Helped me pass a difficult module with a B+.', author: 'J.K., BEng, May 2023' },
      },
      {
        key: 'professionals',
        label: 'Professionals',
        headline: 'Refresher & specialist modules for working learners',
        bullets: ['Practical upskilling', 'Refresher courses designed for time-poor learners'],
        firstSession: '45 min — gap analysis and focused session',
        outcomes: ['Practical skill reactivation', 'Faster upskilling'],
        testimonial: { text: 'Fast, practical and clear.', author: 'R.N., Data Analyst, Nov 2023' },
      },
    ],
    priceOriginal: '$40/hr',
    price: '$30/hr',
    icon: 'book',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Try a single focused lesson.' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Steady progress with a plan.' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Intensive improvement program.' },
    ],
    successStories: [
      {
        id: 'math-turnaround',
        title: 'Math exam turnaround — 3 months',
        summary: 'From C to A in Algebra after weekly sessions and targeted mock practice.',
        result: 'Grade improved from C to A',
        details: 'Weekly 1:1 sessions + targeted practice tests and exam technique coaching.',
      },
    ],
    faq: [
      { q: 'Do you follow my school syllabus?', a: 'Yes — lessons are tailored to match your syllabus and exam board.' },
      { q: 'What materials do I need?', a: 'Just a notebook and any current textbooks; I provide templates and practice.' },
    ],
  },

  
  // ====== Programming & AI (compact) ======
  {
    id: 'programming',
    title: 'Programming & AI',
    subservices: ['Python', 'JavaScript', 'Intro to AI', 'Project-based learning'],
    desc: 'Hands-on programming lessons and introductory AI concepts — learn by building small projects.',
    heroMetric: 'Projects first: build a portfolio piece in 4 weeks',
    whatWeCover: ['Syntax & basics', 'Project structure', 'Testing & debugging', 'Intro ML pipelines'],
    lessonPlan: ['Intro & goals', 'Live coding', 'Guided exercises', 'Review & next steps'],
    whatSetsApart: ['Project-first approach', 'Code review and best practices'],
    priceOriginal: '$40',
    price: '$30',
    icon: 'code',
    packs: [
      { id: 'starter', title: 'Starter', sessions: 1, description: 'Introductory session' },
      { id: 'growth', title: 'Growth', sessions: 5, description: 'Build a small project' },
      { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Portfolio-ready project' },
    ],
    successStories: [],
    faq: [],
  },

  // (other services omitted for brevity — add similarly as needed)

  {
  id: 'administration',
  title: 'Administration (Word • Excel • PowerPoint)',
  category: 'administration',
  subservices: ['Excel', 'Word', 'PowerPoint', 'Templates & automation'],
  desc: 'Practical lessons in Word, Excel and PowerPoint that speed up everyday work and produce professional outputs.',
  heroMetric: 'Faster reporting • cleaner documents • repeatable templates',
  whatWeCover: ['Formulas, pivot tables, templates & basic macros', 'Document styling & templates', 'Presentation design & storytelling'],
  lessonPlan: [
    '10m — goal & sample file review',
    '30m — hands-on demonstration and guided practice',
    '15m — applied exercise (your file or sample)',
    '5m — templates and next steps to reuse'
  ],
  whatSetsApart: ['Real-world files & templates you can reuse', 'Focus on automating repetitive tasks', 'Design-first approach to presentations'],
   audienceSections: [
    {
      key: 'kids',
      label: 'Kids (K–12)',
      headline: 'Basic computer & office skills for school projects',
      bullets: [
        'Simple Word documents and presentation basics',
        'Intro to spreadsheets for school projects (tables, sums)',
        'Templates for homework and project submissions'
      ],
      firstSession: '30–45 min — file review + quick templates and practice',
      outcomes: [
        'Neater school reports and confident use of basic tools',
        'Ready-to-use templates for assignments'
      ],
      testimonial: {
        text: 'Templates made school projects much easier and faster.',
        author: 'H.N. (Parent), Sep 2024'
      }
    },
    {
      key: 'students',
      label: 'Students (High School & University)',
      headline: 'Academic & reporting skills — spreadsheets, citation-aware docs, and slides',
      bullets: [
        'Excel for data handling, pivot tables and charts',
        'Word for long documents with styles and references',
        'PowerPoint for structured, persuasive presentations'
      ],
      firstSession: '45–60 min — sample file audit + 3-step improvement plan',
      outcomes: [
        'Polished reports and effective presentation slides',
        'Reusable templates and faster assignment completion'
      ],
      testimonial: {
        text: 'Helped me prepare presentation slides that actually told a story.',
        author: 'Y.O., Student, May 2024'
      }
    },
    {
      key: 'professionals',
      label: 'Professionals',
      headline: 'Office efficiency — automations, templates and presentation polish',
      bullets: [
        'Advanced Excel: pivot tables, formulas and practical macros',
        'Word automation, mail merge and polished report templates',
        'PowerPoint storytelling and slide templates for leadership'
      ],
      firstSession: '45 min — needs scan + targeted template or automation plan',
      outcomes: [
        'Faster reporting and professional-looking documents',
        'Reusable templates and time saved on recurring tasks'
      ],
      testimonial: {
        text: 'Automations saved us hours each month — practical and immediately useful.',
        author: 'V.K., Office Manager, Jul 2024'
      }
    }
  ],
  priceOriginal: '$40/hr',
  price: '$30/hr',
  icon: 'office',
  packs: [
    { id: 'starter', title: 'Starter', sessions: 1, description: 'Intro session to assess needs and deliver a quick template.' },
    { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical workflows and multiple templates.' },
    { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Automation, macros & full template library.' }
  ],
  successStories: []
},

{
  id: 'databases',
  title: 'Databases (SQL • MySQL • MS Access)',
  category: 'databases',
  subservices: ['SQL', 'MySQL', 'MS Access', 'Querying & reporting'],
  desc: 'Practical SQL and database skills focused on extracting, cleaning and reporting data reliably.',
  heroMetric: 'From zero-to-queries: build useful reports in weeks',
  whatWeCover: ['SELECT, JOINs, GROUP BY', 'Schema design & normalization', 'Import/export and performance basics'],
  lessonPlan: [
    '10m — goals & sample dataset review',
    '30m — hands-on queries & joins',
    '15m — project work (report or dashboard query)',
    '5m — next steps & optimization tips'
  ],
  whatSetsApart: [
    'Hands-on dataset approach — you work with realistic data',
    'Reporting-first mindset: queries that answer business questions',
    'Practical tips for performance and simple schema fixes'
  ],
  audienceSections: [
    {
      key: 'kids',
      label: 'Kids (K–12)',
      headline: 'Intro to data thinking — simple queries and tables',
      bullets: [
        'Understanding tables and simple filters (SELECT / WHERE)',
        'Fun datasets to practice asking and answering questions',
        'Foundational ideas: rows, columns and simple aggregations'
      ],
      firstSession: '30–45 min — intro to tables with a playground dataset and a 3-task plan',
      outcomes: [
        'Comfort working with tabular data',
        'Ability to write simple SELECT & filter queries',
        'Better data literacy for school projects'
      ],
      testimonial: {
        text: 'My child learned how to ask questions of data and find answers.',
        author: 'R.T. (Parent), Sep 2024'
      }
    },
    {
      key: 'students',
      label: 'Students (High School & University)',
      headline: 'Query skills for analysis, projects and coursework',
      bullets: [
        'Complex queries: JOINs, GROUP BY, window functions introduction',
        'Schema thinking and importing/exporting datasets',
        'Project-driven tasks: build reports and CSV exports'
      ],
      firstSession: '45–60 min — diagnostic + mini-project plan (report or dataset)',
      outcomes: [
        'Robust queries for assignments and research',
        'Skills to prepare datasets for analysis or dashboards',
        'Confidence debugging and optimizing queries'
      ],
      testimonial: {
        text: 'Helped me finish a data analysis assignment with clear, efficient queries.',
        author: 'N.P., Undergraduate, Apr 2024'
      }
    },
    {
      key: 'professionals',
      label: 'Professionals',
      headline: 'Practical database skills for everyday analysis',
      bullets: [
        'Write production-style queries for reporting and dashboards',
        'Import/export, simple ETL and automation tips',
        'Design quick schemas for small apps or prototyping'
      ],
      firstSession: '45 min — needs assessment + report/query plan',
      outcomes: [
        'Report-ready SQL queries and exports',
        'Faster turnaround on data requests',
        'Practical strategies for maintaining small databases'
      ],
      testimonial: {
        text: 'Now I can prepare my monthly reports without relying on others.',
        author: 'C.H., Marketing Analyst, Jul 2024'
      }
    }
  ],
  priceOriginal: '$45/hr',
  price: '$35/hr',
  icon: 'database',
  packs: [
    { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick intro to SQL and a working query.' },
    { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical project and reporting workflows.' },
    { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Complex queries, schema design & optimization.' }
  ],
  successStories: []
},

{
  id: 'career',
  title: 'Career Development & Coaching',
  category: 'career',
  subservices: ['Career coach', 'Job search', 'Leadership', 'Pitching', 'Personal coaching'],
  desc: 'Career strategy, interview prep and leadership coaching tailored to your next step — get clear goals and practical steps to land the role you want.',
  heroMetric: 'Many clients moved into new roles within 3 months • Practical, interview-ready outcomes',
  whatWeCover: ['Resume & LinkedIn', 'Mock interviews', 'Pitching & leadership presence'],
  lessonPlan: [
    '10m — goals & role mapping',
    '30m — focused skill work (pitch, mock interview, LinkedIn)',
    '15m — actionable feedback and rehearsal',
    '5m — next steps and accountability tasks'
  ],
  whatSetsApart: [
    'Practical job-search tactics and role-specific feedback',
    'Live mock interviews with structured scoring & actionable notes',
    'Pitching and leadership practice that improves presence'
  ],

  audienceSections: [
    {
      key: 'kids',
      label: 'Kids (K–12)',
      headline: 'Early career skills & confidence (for older teens)',
      bullets: [
        'Goal-setting, study-to-career mapping and foundational communication skills',
        'CV basics for part-time jobs and university applications',
        'Interview practice for school/uni admissions'
      ],
      firstSession: '30–45 min — goals & simple CV/skill audit',
      outcomes: [
        'Clearer CV for college/part-time job applications',
        'Better communication and presentation confidence',
        'A short roadmap towards academic or early-career goals'
      ],
      testimonial: {
        text: 'Great at turning vague ideas into a concrete plan for university applications.',
        author: 'D.F. (Parent), Oct 2024'
      }
    },
    {
      key: 'students',
      label: 'Students (High School & University)',
      headline: 'Career readiness — land internships and entry roles',
      bullets: [
        'CV and LinkedIn optimization for early-career roles',
        'Mock interviews (technical & behavioral) with feedback',
        'Practical job search strategies and application tracking'
      ],
      firstSession: '45–60 min — CV review + 3-step action plan for applications',
      outcomes: [
        'Stronger CV and LinkedIn profile that attracts recruiters',
        'Improved interview answers and reduced nerves',
        'A measurable application plan with follow-up tasks'
      ],
      testimonial: {
        text: 'Secured an internship after focused CV edits and mock interviews.',
        author: 'E.M., Student, Mar 2024'
      }
    },
    {
      key: 'professionals',
      label: 'Professionals',
      headline: 'Pivot & progression — prepare for promotions and career moves',
      bullets: [
        'Strategic resume rewrite for impact and results',
        'Mock interviews for senior and technical roles',
        'Leadership pitch practice and negotiation prep'
      ],
      firstSession: '45 min — role mapping + tailored strategy',
      outcomes: [
        'Clear roadmap to desired roles and prioritized application list',
        'Tighter, achievement-focused CVs and stronger interview performance',
        'Improved pitching & leadership presence for interviews and meetings'
      ],
      testimonial: {
        text: 'Helped me land a promotion with targeted interview coaching.',
        author: 'R.N., Product Lead, Jun 2024'
      }
    }
  ],
  priceOriginal: '$60/hr',
  price: '$45/hr',
  icon: 'briefcase',
  packs: [
    { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick career check & CV review.' },
    { id: 'growth', title: 'Growth', sessions: 5, description: 'Roadmap, CV rewrite & mock interviews.' },
    { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Deep coaching with multiple mock interviews.' }
  ],
  successStories: []
},

{
  id: 'resume',
  title: 'Resume & Interview Prep',
  category: 'resume',
  subservices: ['Resume rewrite', 'LinkedIn optimization', 'Mock interviews'],
  desc: 'Resume and interview training designed to highlight impact and results — get ready to pass ATS scans and impress hiring managers.',
  heroMetric: 'Resumes that pass ATS & attract recruiters • Faster interview callbacks',
  whatWeCover: ['Impact-based resumes', 'STAR interview prep', 'LinkedIn optimization'],
  lessonPlan: [
    '10m — current-doc review & goals',
    '30m — rewrite session or mock interview',
    '15m — feedback & targeted improvements',
    '5m — next steps and follow-up checklist'
  ],
  whatSetsApart: ['Results-focused edits', 'Mock interview practice with recorded feedback', 'LinkedIn optimization that converts views to messages'],
  audienceSections: [
    {
      key: 'kids',
      label: 'Kids (K–12)',
      headline: 'CV basics for teens — part-time jobs & university applications',
      bullets: [
        'Simple, clear CVs for part-time work or applications',
        'Application guidance and interview prep for school roles',
        'Help with personal statements for college'
      ],
      firstSession: '30–45 min — CV review + clear action list',
      outcomes: [
        'A tidy CV or application that highlights relevant experience',
        'Confidence in interview and application steps'
      ],
      testimonial: {
        text: 'The CV helped my teen apply successfully for a summer role.',
        author: 'G.P. (Parent), Aug 2024'
      }
    },
    {
      key: 'students',
      label: 'Students (High School & University)',
      headline: 'CV & interview readiness for internships and grad roles',
      bullets: [
        'Impact-first CVs and internship application strategy',
        'Mock interviews (technical & HR) with actionable notes',
        'LinkedIn profile that complements applications'
      ],
      firstSession: '45–60 min — CV rewrite + mock interview snippet',
      outcomes: [
        'Higher interview invite rate and clearer application messaging',
        'Practice-backed interview performance'
      ],
      testimonial: {
        text: 'Landed an internship after the CV overhaul and practice interviews.',
        author: 'K.L., Intern, Apr 2024'
      }
    },
    {
      key: 'professionals',
      label: 'Professionals',
      headline: 'Executive-ready CVs and interview coaching',
      bullets: [
        'Achievement-focused CV rewrite and ATS optimization',
        'Behavioral & technical mock interviews with structured feedback',
        'Negotiation & offer evaluation guidance'
      ],
      firstSession: '45 min — CV audit + priority fixes',
      outcomes: [
        'CVs that stand out to recruiters and ATS systems',
        'Clear and practiced interview answers that reduce nerves',
        'Improved interview-to-offer conversion'
      ],
      testimonial: {
        text: 'My resume rewrite and interview prep led to multiple interviews in weeks.',
        author: 'M.T., Engineer, Jun 2024'
      }
    }
  ],
  priceOriginal: '$60/hr',
  price: '$40/hr',
  icon: 'resume',
  packs: [
    { id: 'starter', title: 'Starter', sessions: 1, description: 'Resume review and quick fixes.' },
    { id: 'growth', title: 'Growth', sessions: 5, description: 'Rewrite + mock interview + LinkedIn tweaks.' },
    { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Comprehensive package with follow-ups.' }
  ],
  successStories: []
}

  // (other services omitted for brevity - keep existing ones in your file)

];





// src/data/services.ts
// export type Pack = {
//   id: string;
//   title: string;
//   sessions: number;
//   description: string;
// };

// export type SuccessStory = {
//   id: string;
//   title: string;
//   summary: string;
//   result: string;
//   details?: string;
// };

// export type AudienceSection = {
//   key: string; // 'kids' | 'students' | 'professionals'
//   label: string;
//   headline: string;
//   bullets: string[];
//   firstSession: string;
//   outcomes?: string[];
//   testimonial?: { text: string; author: string; date?: string };
// };

// export type Service = {
//   id: string;
//   title: string;
//   category: 'academic' | 'administration' | 'career' | 'databases' | 'other' | 'resume' | 'it';
//   subservices?: string[];
//   desc: string;
//   heroMetric?: string;
//   whatWeCover?: string[];
//   lessonPlan?: string[];
//   whatSetsApart?: string[];
//   audience?: string[];
//   audienceSections?: AudienceSection[];
//   priceOriginal?: string;
//   price?: string;
//   icon?: string;
//   packs?: Pack[];
//   successStories?: SuccessStory[];
// };

// export const SERVICES: Service[] = [
//   {
//     id: 'writing',
//     title: 'Writing & English',
//     category: 'other',
//     subservices: [
//       'Business English',
//       'Essay Writing',
//       'Thesis Support',
//       'General English',
//       'Reading & Proofreading',
//     ],
//     desc:
//      "Whether you're a student, a professional, or a parent seeking help for your child, our comprehensive coaching can help you achieve your goals. We offer personalized support to improve your writing, business communication, and general English skills.",
//     heroMetric:
//       '200+ essays & CVs edited • Most learners report measurable improvements in clarity & grades',
//     lessonPlan: [
//       '10m — objective & review of previous work',
//       '30m — focused instruction and modeling',
//       '15m — guided practice or live editing of the student’s draft',
//       '5m — feedback, revision checklist & homework',
//     ],
//     whatSetsApart: [
//       'Evidence-based feedback: actionable revision steps, not vague notes',
//       'Tailored lessons — plans adapt to level, deadline and goals',
//       'Editable templates, revision checklists and annotated examples',
//       'Priority turnaround for urgent drafts (rush options available)',
//     ],
//        // audienceSections: tailored content for kids / students / professionals
//     audienceSections: [
//       {
//         key: 'kids',
//         label: 'Kids (K–12)',
//         headline: 'For Kids (K-12) — Clear Paragraphs, Comprehension & Homework Confidence',
//         bullets: [
//           'Structure simple essays: intro, 2–3 paragraphs, conclusion',
//           'Reading comprehension techniques (find evidence, answer questions)',
//           'Homework support and practice that builds confidence',
//         ],
//         firstSession: 'Help your child build strong writing foundations and overcome homework struggles. Our sessions focus on simple essay structure and reading comprehension techniques to build confidence and deliver better results.',
//         outcomes: [
//           'Clearer paragraph structure and improved test answers',
//           'Greater confidence completing homework on time',
//           'Foundations that make future writing simpler',
//         ],
//         testimonial: {
//           text: 'My son went from struggling with paragraph structure to writing clear essays in 6 weeks.',
//           author: 'A.F. (Parent), Sep 2024',
//         },
//       },
//       {
//         key: 'students',
//         label: 'Students (Uni & College)',
//         headline: 'University writing — essays, arguments, and thesis support',
//         bullets: [
//           'Thesis and essay planning: argument arcs and evidence mapping',
//           'Citation formatting and academic tone',
//           'Draft-review cycles with targeted revision steps',
//         ],
//         firstSession: '45–60 min — sample review + a 3-session plan to tackle the next draft',
//         outcomes: [
//           'Stronger arguments and clearer structure',
//           'Submission-ready chapters and essays',
//           'Higher confidence in research writing',
//         ],
//         testimonial: {
//           text: 'Moved from B to A on a major essay after two revision sessions.',
//           author: 'L.M., BSc English, Apr 2024',
//         },
//       },
//       {
//         key: 'professionals',
//         label: 'Professionals',
//         headline: 'Business & professional writing — reports, emails and CVs',
//         bullets: [
//           'Polished reports and persuasive business language',
//           'CV/resume editing for recruiter-ready presentation',
//           'Presentation language and executive summaries',
//         ],
//         firstSession: '45 min — review of one document + targeted edits and next steps',
//         outcomes: [
//           'Cleaner, more persuasive reports',
//           'CVs that pass ATS and attract recruiters',
//           'Faster turnaround on professional drafts',
//         ],
//         testimonial: {
//           text: 'CV rewrites helped me get interviews within weeks.',
//           author: 'S.K., Product Manager, Jun 2024',
//         },
//       },
//     ],
//     priceOriginal: '$50/hr',
//     price: '$35/hr',
//     icon: 'resume',
//     packs: [
//       { id: 'starter', title: 'Starter', sessions: 1, description: 'One focused coaching or editing session.' },
//       { id: 'growth', title: 'Growth', sessions: 5, description: 'Ongoing support and draft reviews.' },
//       { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'In-depth project & thesis support.' },
//     ],
//     successStories: [
//       {
//         id: 'essay-a-grade',
//         title: 'Essay improved to A grade',
//         summary: 'Undergrad essay rewritten, moved from B- to A.',
//         result: 'Improved structure, argument clarity and referencing.',
//         details: 'Two revision sessions and guided re-drafting.',
//       },
//     ],
//   },

//   // --- other services kept shorter but included for completeness ---

//   {
//     id: 'tutoring',
//     title: 'Academic Tutoring',
//     category: 'academic',
//     subservices: ['Homework Help', 'Mathematics (Algebra, Statistics, Calculus)', 'Physics', 'Chemistry', 'Biology', 'English',],
//     desc: 'Targeted one-on-one academic tutoring that builds understanding, confidence and measurable results — from primary school fundamentals to university-level concepts and exam preparation.',
//   heroMetric: '8+ years teaching • 1,200+ hours • Many students improved 1–3 grade levels within months',
//   lessonPlan: [
//     '10m — objective & quick review of prior work',
//     '30m — focused teaching (concept, examples & model solutions)',
//     '15m — guided practice with immediate feedback',
//     '5m — summary, action items & practice to consolidate learning'
//   ],
//   whatSetsApart: [
//     'Syllabus-aligned lessons with clear milestones and progress tracking',
//     'Concept-first approach: students learn why, then practice how',
//     'Custom practice sets and exam-style questions tailored to your curriculum',
//     'Regular checkpoint assessments so progress is visible and measurable'
//   ],
//   // audienceSections: tailored content for kids / students / professionals
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'Foundations & confidence — clear building blocks for school success',
//       bullets: [
//         'Foundational numeracy and problem-solving (mental math, basic algebra)',
//         'Step-by-step reading comprehension strategies and structured answers',
//         'Homework support and short practice cycles that build confidence'
//       ],
//       firstSession: '30–45 min — quick diagnostic + focused practice plan and 1 take-home exercise',
//       outcomes: [
//         'Improved homework accuracy and faster completion',
//         'Clearer answers in comprehension tests',
//         'Stronger classroom participation and confidence'
//       ],
//       testimonial: {
//         text: 'My daughter gained confidence and improved her test scores within a month.',
//         author: 'M.R. (Parent), Nov 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'Exam-ready skills — concept mastery, problem technique and exam strategy',
//       bullets: [
//         'Deep-dive into core concepts and exam techniques (worked examples & timed practice)',
//         'Assignment & project support with focus on reasoning and clarity',
//         'Targeted revision plans and past-paper practice for exam success'
//       ],
//       firstSession: '45–60 min — diagnostic + personalized 4-week study plan with milestones',
//       outcomes: [
//         'Stronger problem-solving speed and accuracy',
//         'Improved exam performance and clearer written answers',
//         'A structured study routine that leads to steady gains'
//       ],
//       testimonial: {
//         text: 'Moved from C to B+ in one term after weekly targeted lessons.',
//         author: 'J.K., High School Parent, Aug 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Refresher & upskill — practical math, data basics and technical writing refresh',
//       bullets: [
//         'Practical numeric & data literacy for workplace tasks',
//         'Refresher modules (algebra, statistics) tailored to professional needs',
//         'Support for technical reports, data interpretation and presentations'
//       ],
//       firstSession: '45 min — needs assessment + focused 3-session upskill plan',
//       outcomes: [
//         'Faster, more confident handling of numeric tasks',
//         'Clearer technical communication and report-ready outputs',
//         'Practical templates and shortcuts for workplace efficiency'
//       ],
//       testimonial: {
//         text: 'Quick, practical refresh — helped me confidently handle monthly reports.',
//         author: 'S.P., Analyst, Jul 2024'
//       }
//     }
//   ],
//   priceOriginal: '$30/hr',
//   price: '$20/hr',
//   icon: 'book',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'One focused lesson to diagnose and set a plan.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Regular lessons for steady improvement and tracking.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Intensive support for major exams or projects.' }
//   ],
//   successStories: [
//     {
//       id: 'math-turnaround-3mo',
//       title: 'Math exam turnaround — 3 months',
//       summary: 'Student struggling with algebra moved from C → A in 3 months.',
//       result: 'Improved problem technique, timed-practice strategy and consistent progress checks.',
//       details: 'Weekly targeted lessons, incremental checkpoint tests, and focused exam drills.'
//     }
//   ]
// },


// {
//   id: 'administration',
//   title: 'Administration (Word • Excel • PowerPoint)',
//   category: 'administration',
//   subservices: ['Excel', 'Word', 'PowerPoint', 'Templates & automation'],
//   desc: 'Practical lessons in Word, Excel and PowerPoint that speed up everyday work and produce professional outputs.',
//   heroMetric: 'Faster reporting • cleaner documents • repeatable templates',
//   whatWeCover: ['Formulas, pivot tables, templates & basic macros', 'Document styling & templates', 'Presentation design & storytelling'],
//   lessonPlan: [
//     '10m — goal & sample file review',
//     '30m — hands-on demonstration and guided practice',
//     '15m — applied exercise (your file or sample)',
//     '5m — templates and next steps to reuse'
//   ],
//   whatSetsApart: ['Real-world files & templates you can reuse', 'Focus on automating repetitive tasks', 'Design-first approach to presentations'],
//   audience: ['Students', 'Office professionals'],
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'Basic computer & office skills for school projects',
//       bullets: [
//         'Simple Word documents and presentation basics',
//         'Intro to spreadsheets for school projects (tables, sums)',
//         'Templates for homework and project submissions'
//       ],
//       firstSession: '30–45 min — file review + quick templates and practice',
//       outcomes: [
//         'Neater school reports and confident use of basic tools',
//         'Ready-to-use templates for assignments'
//       ],
//       testimonial: {
//         text: 'Templates made school projects much easier and faster.',
//         author: 'H.N. (Parent), Sep 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'Academic & reporting skills — spreadsheets, citation-aware docs, and slides',
//       bullets: [
//         'Excel for data handling, pivot tables and charts',
//         'Word for long documents with styles and references',
//         'PowerPoint for structured, persuasive presentations'
//       ],
//       firstSession: '45–60 min — sample file audit + 3-step improvement plan',
//       outcomes: [
//         'Polished reports and effective presentation slides',
//         'Reusable templates and faster assignment completion'
//       ],
//       testimonial: {
//         text: 'Helped me prepare presentation slides that actually told a story.',
//         author: 'Y.O., Student, May 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Office efficiency — automations, templates and presentation polish',
//       bullets: [
//         'Advanced Excel: pivot tables, formulas and practical macros',
//         'Word automation, mail merge and polished report templates',
//         'PowerPoint storytelling and slide templates for leadership'
//       ],
//       firstSession: '45 min — needs scan + targeted template or automation plan',
//       outcomes: [
//         'Faster reporting and professional-looking documents',
//         'Reusable templates and time saved on recurring tasks'
//       ],
//       testimonial: {
//         text: 'Automations saved us hours each month — practical and immediately useful.',
//         author: 'V.K., Office Manager, Jul 2024'
//       }
//     }
//   ],
//   priceOriginal: '$40/hr',
//   price: '$30/hr',
//   icon: 'office',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'Intro session to assess needs and deliver a quick template.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical workflows and multiple templates.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Automation, macros & full template library.' }
//   ],
//   successStories: []
// },

// {
//   id: 'programming',
//   title: 'Programming & AI',
//   category: 'other',
//   subservices: ['Python', 'JavaScript', 'Intro to AI', 'Project-based learning'],
//   desc: 'Hands-on programming lessons and introductory AI concepts — learn by building real projects that solve real problems.',
//   heroMetric: 'Projects-first: build a portfolio piece in 4 weeks • Beginners → portfolio-ready',
//   whatWeCover: ['Syntax & basics', 'Project structure & version control', 'Testing & debugging', 'Intro ML pipelines'],
//   lessonPlan: [
//     '10m — goals & setup',
//     '30m — live coding (instructor-led)',
//     '15m — guided exercises / student code time',
//     '5m — review, next steps & resources'
//   ],
//   whatSetsApart: [
//     'Project-first approach — you ship working demos, not just exercises',
//     'Code reviews & best-practice feedback on each session',
//     'Practical tooling: git, virtual environments, basic deployment'
//   ],
//   audience: ['Beginners to intermediates', 'Students & professionals'],
//   // audienceSections: tailored content for kids / students / professionals
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'Intro to coding — playful projects that teach logic and basics',
//       bullets: [
//         'Block/visual programming intro (where helpful) and gentle transition to Python',
//         'Small games and interactive projects to build confidence',
//         'Problem-solving, algorithmic thinking, and debugging basics'
//       ],
//       firstSession: '30–45 min — simple project + diagnosis of goals and a 3-session plan',
//       outcomes: [
//         'Understand basic programming logic and control flow',
//         'Complete a small playable project (game or interactive story)',
//         'Improved problem-solving and persistence with debugging'
//       ],
//       testimonial: {
//         text: 'Fast, friendly lessons — my child built a game in the first month.',
//         author: 'P.R. (Parent), Oct 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'From fundamentals to projects — prepare for courses, labs and assignments',
//       bullets: [
//         'Core programming concepts with real examples (data structures, functions)',
//         'Project-based learning: build small apps, scrapers or data scripts',
//         'Assignment & lab support with clean, tested solutions'
//       ],
//       firstSession: '45–60 min — diagnostic + roadmap for a 4-week project',
//       outcomes: [
//         'A working portfolio piece and clearer code organization',
//         'Confidence in completing coursework and programming assignments',
//         'Practical understanding of debugging and testing'
//       ],
//       testimonial: {
//         text: 'Helped me complete my final project and understand the core concepts.',
//         author: 'A.T., CS Student, May 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Practical coding & automation for real work problems',
//       bullets: [
//         'Scripting for automation (Python), data processing, and quick tooling',
//         'Intro to ML concepts and how they apply to business problems',
//         'Code quality, small deployments and reproducible workflows'
//       ],
//       firstSession: '45 min — needs assessment + a focused 3-session plan to automate a task',
//       outcomes: [
//         'Automate repetitive tasks and build small internal tools',
//         'Practical understanding of ML pipelines and when to apply them',
//         'Cleaner, maintainable scripts with basic tests'
//       ],
//       testimonial: {
//         text: 'Built a small automation that saved hours weekly — practical and immediate.',
//         author: 'L.S., Data Analyst, Jun 2024'
//       }
//     }
//   ],
//   priceOriginal: '$40/hr',
//   price: '$30/hr',
//   icon: 'code',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'Introductory session to assess goals and start a mini-project.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Build a small project with step-by-step guidance.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Portfolio-ready project and deeper code review.' }
//   ],
//   successStories: []
// },

// {
//   id: 'databases',
//   title: 'Databases (SQL • MySQL • MS Access)',
//   category: 'databases',
//   subservices: ['SQL', 'MySQL', 'MS Access', 'Querying & reporting'],
//   desc: 'Practical SQL and database skills focused on extracting, cleaning and reporting data reliably.',
//   heroMetric: 'From zero-to-queries: build useful reports in weeks',
//   whatWeCover: ['SELECT, JOINs, GROUP BY', 'Schema design & normalization', 'Import/export and performance basics'],
//   lessonPlan: [
//     '10m — goals & sample dataset review',
//     '30m — hands-on queries & joins',
//     '15m — project work (report or dashboard query)',
//     '5m — next steps & optimization tips'
//   ],
//   whatSetsApart: [
//     'Hands-on dataset approach — you work with realistic data',
//     'Reporting-first mindset: queries that answer business questions',
//     'Practical tips for performance and simple schema fixes'
//   ],
//   audience: ['Analysts', 'Students', 'Developers'],
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'Intro to data thinking — simple queries and tables',
//       bullets: [
//         'Understanding tables and simple filters (SELECT / WHERE)',
//         'Fun datasets to practice asking and answering questions',
//         'Foundational ideas: rows, columns and simple aggregations'
//       ],
//       firstSession: '30–45 min — intro to tables with a playground dataset and a 3-task plan',
//       outcomes: [
//         'Comfort working with tabular data',
//         'Ability to write simple SELECT & filter queries',
//         'Better data literacy for school projects'
//       ],
//       testimonial: {
//         text: 'My child learned how to ask questions of data and find answers.',
//         author: 'R.T. (Parent), Sep 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'Query skills for analysis, projects and coursework',
//       bullets: [
//         'Complex queries: JOINs, GROUP BY, window functions introduction',
//         'Schema thinking and importing/exporting datasets',
//         'Project-driven tasks: build reports and CSV exports'
//       ],
//       firstSession: '45–60 min — diagnostic + mini-project plan (report or dataset)',
//       outcomes: [
//         'Robust queries for assignments and research',
//         'Skills to prepare datasets for analysis or dashboards',
//         'Confidence debugging and optimizing queries'
//       ],
//       testimonial: {
//         text: 'Helped me finish a data analysis assignment with clear, efficient queries.',
//         author: 'N.P., Undergraduate, Apr 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Practical database skills for everyday analysis',
//       bullets: [
//         'Write production-style queries for reporting and dashboards',
//         'Import/export, simple ETL and automation tips',
//         'Design quick schemas for small apps or prototyping'
//       ],
//       firstSession: '45 min — needs assessment + report/query plan',
//       outcomes: [
//         'Report-ready SQL queries and exports',
//         'Faster turnaround on data requests',
//         'Practical strategies for maintaining small databases'
//       ],
//       testimonial: {
//         text: 'Now I can prepare my monthly reports without relying on others.',
//         author: 'C.H., Marketing Analyst, Jul 2024'
//       }
//     }
//   ],
//   priceOriginal: '$45/hr',
//   price: '$35/hr',
//   icon: 'database',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick intro to SQL and a working query.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Practical project and reporting workflows.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Complex queries, schema design & optimization.' }
//   ],
//   successStories: []
// },

// {
//   id: 'career',
//   title: 'Career Development & Coaching',
//   category: 'career',
//   subservices: ['Career coach', 'Job search', 'Leadership', 'Pitching', 'Personal coaching'],
//   desc: 'Career strategy, interview prep and leadership coaching tailored to your next step — get clear goals and practical steps to land the role you want.',
//   heroMetric: 'Many clients moved into new roles within 3 months • Practical, interview-ready outcomes',
//   whatWeCover: ['Resume & LinkedIn', 'Mock interviews', 'Pitching & leadership presence'],
//   lessonPlan: [
//     '10m — goals & role mapping',
//     '30m — focused skill work (pitch, mock interview, LinkedIn)',
//     '15m — actionable feedback and rehearsal',
//     '5m — next steps and accountability tasks'
//   ],
//   whatSetsApart: [
//     'Practical job-search tactics and role-specific feedback',
//     'Live mock interviews with structured scoring & actionable notes',
//     'Pitching and leadership practice that improves presence'
//   ],
//   audience: ['Early-career professionals', 'Mid-career pivoters'],
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'Early career skills & confidence (for older teens)',
//       bullets: [
//         'Goal-setting, study-to-career mapping and foundational communication skills',
//         'CV basics for part-time jobs and university applications',
//         'Interview practice for school/uni admissions'
//       ],
//       firstSession: '30–45 min — goals & simple CV/skill audit',
//       outcomes: [
//         'Clearer CV for college/part-time job applications',
//         'Better communication and presentation confidence',
//         'A short roadmap towards academic or early-career goals'
//       ],
//       testimonial: {
//         text: 'Great at turning vague ideas into a concrete plan for university applications.',
//         author: 'D.F. (Parent), Oct 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'Career readiness — land internships and entry roles',
//       bullets: [
//         'CV and LinkedIn optimization for early-career roles',
//         'Mock interviews (technical & behavioral) with feedback',
//         'Practical job search strategies and application tracking'
//       ],
//       firstSession: '45–60 min — CV review + 3-step action plan for applications',
//       outcomes: [
//         'Stronger CV and LinkedIn profile that attracts recruiters',
//         'Improved interview answers and reduced nerves',
//         'A measurable application plan with follow-up tasks'
//       ],
//       testimonial: {
//         text: 'Secured an internship after focused CV edits and mock interviews.',
//         author: 'E.M., Student, Mar 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Pivot & progression — prepare for promotions and career moves',
//       bullets: [
//         'Strategic resume rewrite for impact and results',
//         'Mock interviews for senior and technical roles',
//         'Leadership pitch practice and negotiation prep'
//       ],
//       firstSession: '45 min — role mapping + tailored strategy',
//       outcomes: [
//         'Clear roadmap to desired roles and prioritized application list',
//         'Tighter, achievement-focused CVs and stronger interview performance',
//         'Improved pitching & leadership presence for interviews and meetings'
//       ],
//       testimonial: {
//         text: 'Helped me land a promotion with targeted interview coaching.',
//         author: 'R.N., Product Lead, Jun 2024'
//       }
//     }
//   ],
//   priceOriginal: '$60/hr',
//   price: '$45/hr',
//   icon: 'briefcase',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'Quick career check & CV review.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Roadmap, CV rewrite & mock interviews.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Deep coaching with multiple mock interviews.' }
//   ],
//   successStories: []
// },

// {
//   id: 'resume',
//   title: 'Resume & Interview Prep',
//   category: 'resume',
//   subservices: ['Resume rewrite', 'LinkedIn optimization', 'Mock interviews'],
//   desc: 'Resume and interview training designed to highlight impact and results — get ready to pass ATS scans and impress hiring managers.',
//   heroMetric: 'Resumes that pass ATS & attract recruiters • Faster interview callbacks',
//   whatWeCover: ['Impact-based resumes', 'STAR interview prep', 'LinkedIn optimization'],
//   lessonPlan: [
//     '10m — current-doc review & goals',
//     '30m — rewrite session or mock interview',
//     '15m — feedback & targeted improvements',
//     '5m — next steps and follow-up checklist'
//   ],
//   whatSetsApart: ['Results-focused edits', 'Mock interview practice with recorded feedback', 'LinkedIn optimization that converts views to messages'],
//   audience: ['Jobseekers', 'Career changers'],
//   audienceSections: [
//     {
//       key: 'kids',
//       label: 'Kids (K–12)',
//       headline: 'CV basics for teens — part-time jobs & university applications',
//       bullets: [
//         'Simple, clear CVs for part-time work or applications',
//         'Application guidance and interview prep for school roles',
//         'Help with personal statements for college'
//       ],
//       firstSession: '30–45 min — CV review + clear action list',
//       outcomes: [
//         'A tidy CV or application that highlights relevant experience',
//         'Confidence in interview and application steps'
//       ],
//       testimonial: {
//         text: 'The CV helped my teen apply successfully for a summer role.',
//         author: 'G.P. (Parent), Aug 2024'
//       }
//     },
//     {
//       key: 'students',
//       label: 'Students (High School & University)',
//       headline: 'CV & interview readiness for internships and grad roles',
//       bullets: [
//         'Impact-first CVs and internship application strategy',
//         'Mock interviews (technical & HR) with actionable notes',
//         'LinkedIn profile that complements applications'
//       ],
//       firstSession: '45–60 min — CV rewrite + mock interview snippet',
//       outcomes: [
//         'Higher interview invite rate and clearer application messaging',
//         'Practice-backed interview performance'
//       ],
//       testimonial: {
//         text: 'Landed an internship after the CV overhaul and practice interviews.',
//         author: 'K.L., Intern, Apr 2024'
//       }
//     },
//     {
//       key: 'professionals',
//       label: 'Professionals',
//       headline: 'Executive-ready CVs and interview coaching',
//       bullets: [
//         'Achievement-focused CV rewrite and ATS optimization',
//         'Behavioral & technical mock interviews with structured feedback',
//         'Negotiation & offer evaluation guidance'
//       ],
//       firstSession: '45 min — CV audit + priority fixes',
//       outcomes: [
//         'CVs that stand out to recruiters and ATS systems',
//         'Clear and practiced interview answers that reduce nerves',
//         'Improved interview-to-offer conversion'
//       ],
//       testimonial: {
//         text: 'My resume rewrite and interview prep led to multiple interviews in weeks.',
//         author: 'M.T., Engineer, Jun 2024'
//       }
//     }
//   ],
//   priceOriginal: '$60/hr',
//   price: '$40/hr',
//   icon: 'resume',
//   packs: [
//     { id: 'starter', title: 'Starter', sessions: 1, description: 'Resume review and quick fixes.' },
//     { id: 'growth', title: 'Growth', sessions: 5, description: 'Rewrite + mock interview + LinkedIn tweaks.' },
//     { id: 'accelerator', title: 'Accelerator', sessions: 10, description: 'Comprehensive package with follow-ups.' }
//   ],
//   successStories: []
// }

//   // (other services omitted for brevity - keep existing ones in your file)
// ];
