// src/app/page.tsx
import Hero from "@/components/hero/Hero";
import Card from "@/components/ui/Card";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";
import Link from "next/link";
import TrustRow from "@/components/TrustRow";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { SERVICES } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";
import PriceTag from "@/components/ui/PriceTag";

export default function HomePage() {
  // curated featured services (order = priority on homepage)
  const featuredIds = [
    "tutoring",
    "programming",
    "career",
    "resume",
    "administration",
    "databases",
  ];
  const featured = featuredIds
    .map((id) => SERVICES.find((s) => s.id === id))
    .filter(Boolean) as typeof SERVICES;

  // small set of ids we want to mark as "Popular"
  const popularIds = new Set(["tutoring", "programming"]);

  return (
    <>
      <Hero />

      {/* TrustRow inserted directly below hero */}
      {/* <section className="container mx-auto px-6 lg:px-8">
        <TrustRow />
      </section> */}
      <div className="space-y-16 container mx-auto px-6 lg:px-8 py-8">
        {/* What I offer — curated, clear, conversion-focused */}
        <section className="py-12 container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-900 text-center mb-4">
            What I offer
          </h2>

          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-8">
            Practical one-on-one tutoring, career coaching and technical lessons
            — short, focused sessions to get results.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <div key={s.id} className="group">
                <Card className="h-full flex flex-col p-6 transition-transform hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-lg bg-brand-900/5 flex items-center justify-center text-brand-500">
                      <ServiceIcon name={s.icon} />
                      {/* Popular tag visible in theme color */}
                      {popularIds.has(s.id) && (
                        <span className="absolute -top-2 -right-2 text-xs bg-brand-500 text-black px-2 py-0.5 rounded-full shadow">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-900">
                        {s.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-2 line-clamp-3">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex-1" />

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div aria-hidden>
                      <PriceTag original={s.priceOriginal} current={s.price} />
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${s.id}`}
                        className="text-sm px-3 py-2 rounded-lg border border-brand-200 text-brand-900 hover:bg-brand-50 transition"
                        aria-label={`Learn more about ${s.title}`}
                      >
                        Learn
                      </Link>

                      {/* quick-book navigates to /booking with service prefilled */}
                      <Link
                        href={`/booking?service=${encodeURIComponent(s.id)}`}
                        className="px-3 py-2 rounded-lg bg-orange-500 text-black hover:bg-brand-600 transition text-sm"
                        aria-label={`Book ${s.title}`}
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <Link
            className="text-center block mt-5 font-semibold w-fit mx-auto border px-4 py-2 rounded-xl"
            href="/services"
          >
            Explore All Services
          </Link>
        </section>

        <section className="py-12 bg-bg-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-center text-brand-900 mb-6">
              What learners say
            </h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* Case studies added here */}
        <CaseStudiesSection />
      </div>
    </>
  );
}

// src/app/page.tsx
// import Hero from '@/components/hero/Hero';
// import Card from '@/components/ui/Card';
// import TestimonialSlider from '@/components/testimonials/TestimonialSlider';
// import Link from 'next/link';
// import TrustRow from '@/components/TrustRow';
// import CaseStudiesSection from '@/components/CaseStudiesSection';

// export default function HomePage() {
//   const services = [
//     { title: 'Academic Tutoring', href: '/services#tutoring' },
//     { title: 'Homework & Projects', href: '/services#homework' },
//     { title: 'Programming & AI', href: '/services#programming' },
//     { title: 'Career Coaching', href: '/services#career' },
//     { title: 'Resume & Interview Prep', href: '/services#resume' },
//     { title: 'IT Consultation', href: '/services#itconsult' },
//   ];

//   return (
//     <div className="space-y-16">
//       <Hero />

//       {/* TrustRow inserted directly below hero */}
//       <section className="container mx-auto px-6 lg:px-8">
//         <TrustRow />
//       </section>

//       <section className="py-12 container mx-auto px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-brand-900 text-center mb-8">What I offer</h2>
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s) => (
//             <Link key={s.title} href={s.href}>
//               <Card className="hover:shadow-xl transition-shadow transform hover:-translate-y-1">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-brand-900/5 rounded-lg flex items-center justify-center text-brand-500 font-semibold">→</div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
//                     <p className="text-sm text-neutral-600 mt-2">Practical, tailored sessions to meet your goals.</p>
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <section className="py-12 bg-bg-50">
//         <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
//           <h2 className="text-2xl font-semibold text-center text-brand-900 mb-6">What learners say</h2>
//           <TestimonialSlider />
//         </div>
//       </section>

//       {/* Case studies added here */}
//       <CaseStudiesSection />
//     </div>
//   );
// }
