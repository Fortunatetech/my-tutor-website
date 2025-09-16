// src/app/services/[id]/page.tsx
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/services';
import ServiceHeader from '@/components/services/ServiceDetailSections/ServiceHeader';
import AudienceChooser from '@/components/services/AudienceChooser';
import ServiceAudienceSection from '@/components/services/ServiceAudienceSection';
import LessonPlan from '@/components/services/ServiceDetailSections/LessonPlan';
import WhoIsThisFor from '@/components/services/ServiceDetailSections/WhoIsThisFor';
import PricingAndPacks from '@/components/services/ServiceDetailSections/PricingAndPacks';
import SuccessStories from '@/components/services/ServiceDetailSections/SuccessStories';
import ScrollReveal from '@/components/ScrollReveal';
import Accordion from '@/components/ui/Accordion';
import { FAQ_BY_SERVICE } from '../faq-by-service';

type Props = {
  params: { id: string } | any;
};

export default async function ServiceDetail({ params }: Props) {
  const p = (await params) as { id: string };
  const id = p?.id;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) return notFound();

  const faqs = (FAQ_BY_SERVICE as Record<string, { q: string; a: string }[]>)[service.id] ?? [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Header: title + subservices + price/book (top-right) */}
        <ScrollReveal>
          <ServiceHeader service={service} />
        </ScrollReveal>

        {/* Audience chooser (chips) — anchors to sections */}
        <AudienceChooser service={service} initial={service.audienceSections?.[0]?.key} />

        {/* Audience specific sections (Kids / Students / Professionals) */}
        {service.audienceSections?.map((sec) => (
          <ScrollReveal key={sec.key}>
            <ServiceAudienceSection serviceId={service.id} section={sec} />
          </ScrollReveal>
        ))}

        {/* A typical lesson plan */}
        <ScrollReveal delay={0.06}>
          <LessonPlan plan={service.lessonPlan} />
        </ScrollReveal>

        {/* Who is this lesson for? */}
        <ScrollReveal delay={0.12}>
          <WhoIsThisFor items={service.audience} />
        </ScrollReveal>

        {/* Pricing & packs */}
        <ScrollReveal delay={0.18}>
          <PricingAndPacks service={service} />
        </ScrollReveal>

        {/* Success stories */}
        <ScrollReveal delay={0.22}>
          <SuccessStories stories={service.successStories} />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={0.26}>
          <div className="mb-10">
            {faqs.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">Frequently asked</h3>
                <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}



// src/app/services/[id]/page.tsx
// import { notFound } from 'next/navigation';
// import Card from '@/components/ui/Card';
// import PriceTag from '@/components/ui/PriceTag';
// import ScrollReveal from '@/components/ScrollReveal';
// import Accordion from '@/components/ui/Accordion';
// import { FAQ_BY_SERVICE } from '../faq-by-service';
// import { SERVICES } from '@/data/services';
// import BookServiceButton from '@/components/services/BookServiceButton';

// type Props = {
//   params: { id: string };
// };

// export default async function ServiceDetail({ params }: Props) {
//   // ensure we safely extract id (App Router nuance)
//   const awaitedParams = (await params) as { id: string };
//   const id = awaitedParams.id;

//   const service = SERVICES.find((s) => s.id === id);
//   if (!service) return notFound();

//   const faqs = (FAQ_BY_SERVICE as Record<string, { q: string; a: string }[]>)[service.id] ?? [];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
//         <ScrollReveal>
//           <header className="mb-6">
//             <h1 className="text-4xl font-extrabold text-brand-900">{service.title}</h1>
//             <div className="mt-3 flex items-center justify-between gap-4">
//               <p className="text-neutral-600 max-w-2xl">{service.desc}</p>
//               <div className="text-right">
//                 <PriceTag original={service.priceOriginal} current={service.price} />
//                 <div className="mt-2">
//                   <BookServiceButton serviceId={service.id}>Book a consultation</BookServiceButton>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 text-sm text-neutral-600">Trusted by 1,200+ learners • Avg rating 4.9/5</div>
//           </header>
//         </ScrollReveal>

//         <ScrollReveal delay={0.06}>
//           <div className="grid gap-6 lg:grid-cols-3 mb-8">
//             <Card className="p-6">
//               <h3 className="text-lg font-semibold text-brand-900 mb-3">What I focus on</h3>
//               <ul className="space-y-2 text-neutral-700">
//                 {(service.highlights || []).map((h) => (
//                   <li key={h} className="flex items-start gap-3">
//                     <span className="text-brand-500 mt-1">•</span>
//                     <span>{h}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Card>

//             <Card className="p-6 lg:col-span-2">
//               <h3 className="text-lg font-semibold text-brand-900 mb-3">What you’ll walk away with</h3>
//               <ul className="grid gap-2 md:grid-cols-2 text-neutral-700">
//                 {(service.outcomes || []).map((o) => (
//                   <li key={o} className="flex items-start gap-3">
//                     <span className="text-brand-500 mt-1">✔</span>
//                     <span>{o}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           </div>
//         </ScrollReveal>

//         <ScrollReveal delay={0.12}>
//           <section className="mb-10">
//             <h3 className="text-xl font-semibold text-brand-900 mb-4">Suggested session packs</h3>
//             <div className="grid gap-4 sm:grid-cols-3">
//               <Card className="p-4">
//                 <div className="text-sm text-neutral-600">Starter</div>
//                 <div className="font-semibold text-lg">1 session</div>
//                 <div className="text-sm text-neutral-600 mt-2">Try a single focused lesson.</div>
//               </Card>
//               <Card className="p-4">
//                 <div className="text-sm text-neutral-600">Growth</div>
//                 <div className="font-semibold text-lg">5 sessions</div>
//                 <div className="text-sm text-neutral-600 mt-2">Steady progress and improvement.</div>
//               </Card>
//               <Card className="p-4">
//                 <div className="text-sm text-neutral-600">Accelerator</div>
//                 <div className="font-semibold text-lg">10 sessions</div>
//                 <div className="text-sm text-neutral-600 mt-2">Intensive coaching or project mentorship.</div>
//               </Card>
//             </div>
//           </section>
//         </ScrollReveal>

//         {faqs.length > 0 && (
//           <ScrollReveal delay={0.18}>
//             <section className="mb-10">
//               <h3 className="text-xl font-semibold text-brand-900 mb-4">Frequently asked</h3>
//               <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
//             </section>
//           </ScrollReveal>
//         )}
//       </div>
//     </section>
  // );

