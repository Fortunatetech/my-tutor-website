// src/app/services/page.tsx
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ScrollReveal';
import ServicesFAQ from './faq';
import { SERVICES } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-900 mb-4">Services</h1>
          <p className="text-white mb-6">Choose a focused service below — each offering tailored one-on-one sessions and project support.</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.06}>
                <Card className="p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-900/5 flex items-center justify-center text-brand-500 font-semibold">→</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
                      <p className="text-neutral-600 mt-2">{s.desc}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-neutral-600">{s.price ?? 'From $25/hr'}</span>
                        <Button variant="secondary" href={`/services/${s.id}`}>Learn</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-bg-50">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-brand-900 mb-4">Why learners pick me</h2>
            <p className="text-neutral-600">Tailored lessons, clear goals, and measurable outcomes — built to help you grow.</p>
          </ScrollReveal>

          <ServicesFAQ />
        </div>
      </section>
    </div>
  );
}



// src/app/services/page.tsx
// import Card from '../../components/ui/Card';
// import Button from '../../components/ui/Button';

// const SERVICES = [
//   {
//     id: 'tutoring',
//     title: 'Academic Tutoring',
//     desc: 'Personalized one-on-one tutoring for school and university subjects — math, science, languages, and more.',
//     price: 'From $25/hr',
//   },
//   {
//     id: 'programming',
//     title: 'Programming & AI',
//     desc: 'Hands-on programming lessons (Python, JavaScript) and introductory AI & data concepts.',
//     price: 'From $30/hr',
//   },
//   {
//     id: 'homework',
//     title: 'Homework & Projects',
//     desc: 'Assignment support, project mentoring, and writing help with clear guidance and checkpoints.',
//     price: 'Per-project or hourly',
//   },
//   {
//     id: 'career',
//     title: 'Career Coaching',
//     desc: 'Career planning, skills mapping, and interview strategy for early to mid-career professionals.',
//     price: 'Packages available',
//   },
//   {
//     id: 'resume',
//     title: 'Resume & Interview Prep',
//     desc: 'Resume rewriting, LinkedIn optimization, and mock interviews with actionable feedback.',
//     price: 'From $40 (resume)',
//   },
//   {
//     id: 'itconsult',
//     title: 'IT Consultation',
//     desc: 'Technical consultations for small projects, tooling advice, and setup guidance.',
//     price: 'Hourly / Retainer',
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <section className="py-16 bg-bg-50">
//       <div className="container mx-auto px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-brand-900 mb-8 text-center">Services</h1>

//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map((s) => (
//             <Card key={s.id} className="flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-xl font-semibold text-brand-900">{s.title}</h2>
//                 <p className="mt-3 text-neutral-600">{s.desc}</p>
//               </div>

//               <div className="mt-6 flex items-center justify-between">
//                 <div className="text-sm text-neutral-600">{s.price}</div>
//                 <Button variant="secondary" href={`/services#${s.id}`}>
//                   Learn More
//                 </Button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
