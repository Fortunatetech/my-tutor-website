// src/app/services/faq-by-service.ts
export type FaqItem = { q: string; a: string };

export const FAQ_BY_SERVICE: Record<string, FaqItem[]> = {
  tutoring: [
    {
      q: 'What ages and levels do you teach?',
      a: 'I teach children, teens and university students across beginner to advanced levels. Lessons are tailored to the learner’s current level and goals.'
    },
    {
      q: 'How long should a tutoring plan run?',
      a: 'Most students see solid progress from a 5-session plan (weekly). For exam prep, we typically recommend 8–12 focused sessions depending on scope.'
    },
    {
      q: 'Do you provide practice materials and progress tracking?',
      a: 'Yes — I provide exercises, worked solutions and a simple progress tracker so we can measure improvement over time.'
    },
  ],

  administration: [
    {
      q: 'Which Excel features do you cover?',
      a: 'From basics to intermediate: formulas, conditional formatting, tables, pivot tables and basic automation with simple macros (VBA snippets).'
    },
    {
      q: 'Do you teach templates and document automation in Word?',
      a: 'Yes — I show how to build reusable templates, use styles properly, and perform mail merges for professional documents.'
    },
    {
      q: 'Will I learn to create presentations that tell a story?',
      a: 'Absolutely — we focus on clarity, slide structure, visual hierarchy and exporting options for online or in-person presentation.'
    },
  ],

  career: [
    {
      q: 'How is career coaching different from resume help?',
      a: 'Career coaching focuses on long-term goals, role fit, skill mapping and interview strategy. Resume help is tactical (document optimisation) and often part of the coaching package.'
    },
    {
      q: 'Do you provide job search support?',
      a: 'I help with targeted applications, LinkedIn optimisation, networking strategies and tailored job-search campaigns for roles you care about.'
    },
    {
      q: 'Can you help with leadership and pitching practice?',
      a: 'Yes — sessions include presentation coaching, structured feedback and role-play exercises to build confidence and clarity.'
    },
  ],

  databases: [
    {
      q: 'Do you teach database design as well as SQL?',
      a: 'Yes — we cover basic relational design, normalization, and translating requirements into simple schemas as well as real-world queries.'
    },
    {
      q: 'Which SQL dialects do you support?',
      a: 'I focus on standard SQL, MySQL and Microsoft Access queries. The concepts transfer easily across dialects.'
    },
    {
      q: 'Will I get hands-on exercises?',
      a: 'Every lesson includes practical exercises and sample datasets you can reuse to practice after class.'
    },
  ],

  other: [
    {
      q: 'How do you teach Python and AI topics to beginners?',
      a: 'I use project-based learning: small, fun projects that teach syntax, data handling, and then gentle introductions to ML concepts using accessible libraries.'
    },
    {
      q: 'Do you cover Power BI and Tableau for dashboards?',
      a: 'Yes — we create end-to-end reports: ingest data, transform it, visualise and publish a dashboard with clear storytelling.'
    },
    {
      q: 'Can you prepare custom lesson plans for business or academic uses?',
      a: 'Definitely — I adapt lessons to your use case, whether it’s a business report, coursework, or a portfolio project.'
    },
  ],

  resume: [
    {
      q: 'How long does a typical resume rewrite take?',
      a: 'A resume rewrite typically consists of a 30–45 minute discovery call plus a rewrite and a short follow-up. Total turnaround is usually 2–4 days.'
    },
    {
      q: 'Do you tailor resumes for specific roles?',
      a: 'Yes — I can create role-targeted versions with optimized keywords and accomplishment-focused bullet points.'
    },
    {
      q: 'Are mock interviews included?',
      a: 'Mock interviews are offered as part of interview prep packages and include written feedback and practice notes.'
    },
  ],

  itconsult: [
    {
      q: 'What do IT consultation sessions typically cover?',
      a: 'We focus on scoping, tech choices, rapid prototyping, tooling, and step-by-step implementation plans for small projects.'
    },
    {
      q: 'Do you help with implementation or only advice?',
      a: 'I provide both advisory and hands-on implementation support depending on the engagement (hourly or retainer-based).'
    },
    {
      q: 'Can you review existing code or architectures?',
      a: 'Yes — I offer concise technical reviews with prioritized recommendations you can act on quickly.'
    },
  ],
};
