// src/app/about/page.tsx
// NEW: About page — polished, copy-ready and styled with Tailwind
import TrustRow from '@/components/TrustRow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TestimonialSlider from '@/components/testimonials/TestimonialSlider';
import Link from 'next/link';

export const metadata = {
  title: 'About — TutorCoach',
  description: 'About TutorCoach — personalised tutoring, programming coaching, and career development for learners of all ages.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-bg-50 rounded-2xl p-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 leading-tight">
                Trusted, practical tutoring & career coaching that gets results
              </h1>
              <p className="mt-4 text-lg text-neutral-700 max-w-2xl">
                One-on-one lessons, project mentorship and career guidance for learners of all ages — from primary school to professionals. Practical, measurable improvement is the goal.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" href="/booking">Book a free 15-min consultation</Button>
                <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg border text-sm">
                  Send a message
                </Link>
              </div>

              <div className="mt-6 text-sm text-neutral-600">
                <strong>Quick snapshot:</strong> 8+ years tutoring • 1,200+ hours • Trusted by 1,200+ learners (avg 4.9/5).
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <h3 className="text-lg font-semibold text-brand-900">My mission</h3>
                <p className="mt-2 text-neutral-700">
                  To make learning simple, relevant and actionable. I design lessons so learners build skills by doing — with clear goals, reusable templates and step-by-step feedback.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-brand-500 text-xl">✓</div>
                    <div>
                      <div className="text-sm font-medium">Practical outcomes</div>
                      <div className="text-sm text-neutral-600">Real improvements: better grades, portfolio pieces, interviews.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-brand-500 text-xl">✓</div>
                    <div>
                      <div className="text-sm font-medium">Tailored plans</div>
                      <div className="text-sm text-neutral-600">Lessons mapped to your goals and timeline.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-brand-500 text-xl">✓</div>
                    <div>
                      <div className="text-sm font-medium">Flexible formats</div>
                      <div className="text-sm text-neutral-600">Single sessions, multi-week packs, or intensive mentoring.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/services" className="text-sm underline">See all services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="container mx-auto px-6 lg:px-8">
        <TrustRow />
      </section>

      {/* Approach & methodology */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-brand-900">How I work — clear, practical, measurable</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">
              Every engagement follows a simple cycle: Diagnose → Design → Deliver → Measure. That means a short assessment to pinpoint gaps, a tailored plan with milestones, hands-on sessions built around real work, and regular progress checks so you know you're improving.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Card className="p-4">
                <div className="text-sm font-semibold text-brand-900">Diagnose</div>
                <div className="text-sm text-neutral-600 mt-2">Quick assessment to target the first wins.</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm font-semibold text-brand-900">Design</div>
                <div className="text-sm text-neutral-600 mt-2">A plan mapped to your goals and time available.</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm font-semibold text-brand-900">Deliver</div>
                <div className="text-sm text-neutral-600 mt-2">Interactive, practical sessions — not just lectures.</div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-900">Who I work with</h3>
            <ul className="mt-3 text-neutral-700 list-disc list-inside space-y-1">
              <li>Kids (K–12) who need homework & confidence building.</li>
              <li>Students (High School & University) preparing for exams and projects.</li>
              <li>Professionals upskilling for work, preparing technical interviews, or polishing communication.</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-neutral-800">Platforms & turnaround</h4>
              <p className="text-sm text-neutral-600 mt-2">Zoom / Google Meet, collaborative docs (Google Docs, GitHub), draft feedback within 72 hours (rush options available).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-bg-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-semibold text-center text-brand-900 mb-6">What learners say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="rounded-2xl p-8 bg-brand-900 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to start?</h3>
              <p className="text-sm mt-1 text-white/90">Book a free 15-minute consultation and get a short action plan tailored to your goals.</p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" href="/booking">Book free consultation</Button>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg border text-sm bg-white/10">Send a message</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// // src/app/about/page.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import TrustRow from '@/components/TrustRow';
// import Card from '@/components/ui/Card';
// import Button from '@/components/ui/Button';
// import TestimonialSlider from '@/components/testimonials/TestimonialSlider';

// export const metadata = {
//   title: 'About — TutorCoach',
//   description: 'Trusted personal tutoring & career coaching — academic, tech & career services from K–12 to professionals.',
// };

// export default function AboutPage() {
//   return (
//     <div className="space-y-16">
//       {/* HERO */}
//       <section className="relative overflow-hidden rounded-3xl">
//         {/* background gradient + subtle pattern */}
//         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#F0FCFB] to-[#F9F6FF]" />
//         <div className="container mx-auto px-6 lg:px-8 py-14">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//             {/* Left text */}
//             <div className="lg:col-span-7">
//               <div className="max-w-2xl">
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 leading-tight">
//                   Trusted, practical tutoring & career coaching that gets results
//                 </h1>

//                 <p className="mt-4 text-lg text-neutral-700">
//                   One-on-one lessons, project mentorship and career guidance for learners of all ages — from primary school to professionals. Practical, measurable improvement is the goal.
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <Button variant="primary" href="/booking">Book a free 15-min consultation</Button>
//                   <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg border text-sm text-neutral-700 hover:bg-white/50">
//                     Send a message
//                   </Link>
//                 </div>

//                 <div className="mt-6 inline-flex items-center gap-4 text-sm text-neutral-600">
//                   <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold">8+ yrs experience</span>
//                   <span className="px-3 py-1 rounded-full bg-white border text-neutral-700">1,200+ hours taught</span>
//                   <span className="px-3 py-1 rounded-full bg-accent-500 text-white">avg rating 4.9/5</span>
//                 </div>

//                 {/* Elevator / short bio */}
//                 <div className="mt-8 text-neutral-700">
//                   <p>
//                     I’m <strong>[Your Name]</strong>, a private tutor & coach who blends syllabus-aligned tutoring, project-led programming lessons and career coaching.
//                     My focus is practical: build things, get measurable wins, and keep progress visible.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right portrait + short facts */}
//             <div className="lg:col-span-5 flex justify-center lg:justify-end">
//               <div className="relative w-[360px] sm:w-[420px]">
//                 {/* decorative panel behind image */}
//                 <div className="absolute -left-6 -top-6 w-[420px] h-[420px] rounded-2xl bg-gradient-to-tr from-[#0FB5A6]/8 to-[#0B2545]/6 transform rotate-6 blur-[40px] -z-10" />
//                 <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
//                   <div className="p-6">
//                     <div className="w-full h-[360px] relative rounded-2xl overflow-hidden">
//                       <Image
//                         src="/images/avatar.jpg"
//                         alt="Tutor portrait"
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         sizes="(min-width: 1024px) 420px, 360px"
//                         priority
//                       />
//                     </div>

//                     <div className="mt-4 text-center">
//                       <div className="text-lg font-semibold text-neutral-900">[Your Full Name]</div>
//                       <div className="text-sm text-neutral-600 mt-1">Private Tutor • Career Coach • IT Consultant</div>
//                     </div>

//                     <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
//                       <div>
//                         <div className="font-bold text-brand-900">1,200+</div>
//                         <div className="text-neutral-500">learners</div>
//                       </div>
//                       <div>
//                         <div className="font-bold text-brand-900">200+</div>
//                         <div className="text-neutral-500">essays & CVs</div>
//                       </div>
//                       <div>
//                         <div className="font-bold text-brand-900">95%</div>
//                         <div className="text-neutral-500">satisfaction</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* small caption / trust microcopy */}
//                 <div className="mt-4 text-center text-sm text-neutral-600">Trusted across Preply & Superprof — avg rating 4.9/5</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust row */}
//       <section className="container mx-auto px-6 lg:px-8">
//         <TrustRow />
//       </section>

//       {/* Approach & methodology */}
//       <section className="container mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-semibold text-brand-900">How I work — clear, practical, measurable</h2>
//             <p className="mt-3 text-neutral-700 max-w-prose">
//               Every engagement follows a simple cycle: <strong>Diagnose → Design → Deliver → Measure</strong>.
//               A short assessment finds gaps, lessons are tailored to outcomes, sessions are practice-led, and regular checkpoints keep progress measurable.
//             </p>

//             <div className="mt-6 grid gap-4 sm:grid-cols-3">
//               <Card className="p-4">
//                 <div className="text-sm font-semibold text-brand-900">Diagnose</div>
//                 <div className="text-sm text-neutral-600 mt-2">Quick assessment to target the first wins.</div>
//               </Card>
//               <Card className="p-4">
//                 <div className="text-sm font-semibold text-brand-900">Design</div>
//                 <div className="text-sm text-neutral-600 mt-2">A plan mapped to your goals and time available.</div>
//               </Card>
//               <Card className="p-4">
//                 <div className="text-sm font-semibold text-brand-900">Deliver</div>
//                 <div className="text-sm text-neutral-600 mt-2">Interactive, practical sessions — not just lectures.</div>
//               </Card>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-brand-900">What I help people do</h3>
//             <ul className="mt-3 text-neutral-700 list-disc list-inside space-y-1">
//               <li>Raise grades through structured, syllabus-aligned tutoring.</li>
//               <li>Build programming & data skills by shipping small portfolio projects.</li>
//               <li>Create recruiter-ready resumes and practice interviews that land interviews.</li>
//               <li>Train professionals on Office & BI tools that save time and increase impact.</li>
//             </ul>

//             <div className="mt-6">
//               <h4 className="text-sm font-medium text-neutral-800">Platforms & turnaround</h4>
//               <p className="text-sm text-neutral-600 mt-2">
//                 Sessions via Zoom / Google Meet; collaborative work in Google Docs, GitHub or Power BI. Draft feedback typically within 72 hours; rush options available.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-12 bg-gradient-to-b from-white to-bg-50">
//         <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
//           <h2 className="text-2xl font-semibold text-center text-brand-900 mb-6">What learners say</h2>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* Credentials / Stats and Case Study mini */}
//       <section className="container mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-6 items-start">
//           <Card className="p-6">
//             <div className="text-sm font-semibold text-brand-900">Credentials & Proof</div>
//             <div className="mt-3 text-neutral-700 text-sm">
//               8+ years tutoring • 1,200+ hours • 1,200+ learners on Preply & Superprof — avg rating 4.9/5.
//             </div>
//           </Card>

//           <Card className="p-6">
//             <div className="text-sm font-semibold text-brand-900">Case study: Math turnaround</div>
//             <div className="mt-3 text-neutral-700 text-sm">
//               Student struggled with algebra. Weekly 1:1 sessions + targeted practice → grade improved from C to A in 3 months.
//               (Full case study available on request.)
//             </div>
//             <div className="mt-4">
//               <Link href="/case-study/math-turnaround" className="text-sm underline">Read full case study</Link>
//             </div>
//           </Card>

//           <Card className="p-6">
//             <div className="text-sm font-semibold text-brand-900">Next step</div>
//             <div className="mt-3 text-neutral-700 text-sm">
//               Book a free 15-minute consultation to discuss goals and get a short action plan. Or send a quick message — I reply within 24 hours.
//             </div>
//             <div className="mt-4">
//               <Button variant="primary" href="/booking">Book free consultation</Button>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Closing CTA */}
//       <section className="container mx-auto px-6 lg:px-8">
//         <div className="rounded-2xl p-8 bg-brand-900 text-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div>
//               <h3 className="text-xl font-semibold">Ready to start?</h3>
//               <p className="text-sm mt-1 text-white/90">Book a free 15-minute consultation and get a short action plan tailored to your goals.</p>
//             </div>

//             <div className="flex gap-3">
//               <Button variant="primary" href="/booking">Book free consultation</Button>
//               <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg border text-sm bg-white/10">Send a message</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
