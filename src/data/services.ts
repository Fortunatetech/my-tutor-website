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

export type AudienceSection = {
  key: string; // 'kids' | 'students' | 'professionals'
  label: string;
  headline: string;
  bullets: string[];
  firstSession: string;
  outcomes?: string[];
  testimonial?: { text: string; author: string; date?: string };
};

export type Service = {
  id: string;
  title: string;
  category: 'academic' | 'administration' | 'career' | 'databases' | 'other' | 'resume' | 'it';
  subservices?: string[];
  desc: string;
  heroMetric?: string;
  whatWeCover?: string[];
  lessonPlan?: string[];
  whatSetsApart?: string[];
  audience?: string[];
  audienceSections?: AudienceSection[];
  priceOriginal?: string;
  price?: string;
  icon?: string;
  packs?: Pack[];
  successStories?: SuccessStory[];
};

export const SERVICES: Service[] = [
  {
    id: 'writing',
    title: 'Writing & English',
    category: 'other',
    subservices: [
      'Business English',
      'Essay Writing',
      'Thesis Support',
      'General English',
      'Reading & Proofreading',
    ],
    desc:
      'Comprehensive writing and English coaching for students and professionals — from grammar & vocabulary to essay & thesis writing, academic style, and business communication.',
    heroMetric:
      '200+ essays & CVs edited • Most learners report measurable improvements in clarity & grades',
    whatWeCover: [
      'Grammar fundamentals and sentence structure',
      'Essay planning: thesis, argument structure and references',
      'Academic style, citation formatting (APA/MLA/Chicago) and proofreading for submission-ready drafts',
      'Business English: concise emails, persuasive reports, and presentation language',
      'Self-editing strategies so learners can improve independently after sessions',
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
    audience: [
      'Secondary & university students',
      'Graduate students working on theses or dissertations',
      'ESL learners preparing for academic study or relocation',
      'Professionals seeking polished reports, research papers or CVs',
    ],
    // audienceSections: tailored content for kids / students / professionals
    audienceSections: [
      {
        key: 'kids',
        label: 'Kids (K–12)',
        headline: 'Help for kids — clear paragraphs & comprehension confidence',
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
        testimonial: {
          text: 'My son went from struggling with paragraph structure to writing clear essays in 6 weeks.',
          author: 'A.F. (Parent), Sep 2024',
        },
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
        outcomes: [
          'Stronger arguments and clearer structure',
          'Submission-ready chapters and essays',
          'Higher confidence in research writing',
        ],
        testimonial: {
          text: 'Moved from B to A on a major essay after two revision sessions.',
          author: 'L.M., BSc English, Apr 2024',
        },
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
        outcomes: [
          'Cleaner, more persuasive reports',
          'CVs that pass ATS and attract recruiters',
          'Faster turnaround on professional drafts',
        ],
        testimonial: {
          text: 'CV rewrites helped me get interviews within weeks.',
          author: 'S.K., Product Manager, Jun 2024',
        },
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
  },

  // --- other services kept shorter but included for completeness ---
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
    desc:
      'One-on-one academic tutoring tailored to your syllabus and pace — ideal for students needing clarity, confidence and better results.',
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
    ],
    audience: ['School students', 'University undergrads', 'Learners needing assessment help'],
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

  // (other services omitted for brevity - keep existing ones in your file)
];
