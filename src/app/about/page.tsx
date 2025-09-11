// src/app/about/page.tsx
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ScrollReveal>
              <h1 className="text-4xl font-extrabold text-brand-900 mb-4">About Me</h1>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                I’m a dedicated tutor and coach with years of experience helping learners and professionals grow.
               I work with students of all ages on academic topics, programming, AI fundamentals, and project work.
               I also coach professionals on career planning, resumes, and interview preparation.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-4 max-w-lg">
              <ScrollReveal delay={0.06}><Card><div className="text-2xl font-bold text-black">8+</div><div className="text-sm text-neutral-600">Years Teaching</div></Card></ScrollReveal>
              <ScrollReveal delay={0.12}><Card><div className="text-2xl font-bold text-black">1200+</div><div className="text-sm text-neutral-600">Hours Tutored</div></Card></ScrollReveal>
              <ScrollReveal delay={0.18}><Card><div className="text-2xl font-bold text-black">95%</div><div className="text-sm text-neutral-600">Satisfaction</div></Card></ScrollReveal>
            </div>

            <div className="mt-8">
              <Button variant="primary" href="/booking">Book a Consultation</Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ScrollReveal>
              <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/avatar.jpg" alt="Tutor avatar" width={560} height={560} className="object-cover" priority />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}



// src/app/about/page.tsx
// import Image from 'next/image';
// import Button from '../../components/ui/Button';

// export default function AboutPage() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 items-center">
//           <div>
//             <h1 className="text-4xl font-extrabold text-brand-900 mb-4">
//               About Me
//             </h1>
//             <p className="text-neutral-900 mb-6 leading-relaxed">
//               I’m a dedicated tutor and coach with years of experience helping learners and professionals grow.
//               I work with students of all ages on academic topics, programming, AI fundamentals, and project work.
//               I also coach professionals on career planning, resumes, and interview preparation.
//             </p>

//             <div className="grid sm:grid-cols-3 gap-4 max-w-lg">
//               <div className="p-4 bg-surface-100 rounded-lg shadow-sm">
//                 <div className="text-2xl font-bold text-brand-900">8+</div>
//                 <div className="text-sm text-neutral-600">Years Teaching</div>
//               </div>
//               <div className="p-4 bg-surface-100 rounded-lg shadow-sm">
//                 <div className="text-2xl font-bold text-brand-900">1,200+</div>
//                 <div className="text-sm text-neutral-600">Hours Tutored</div>
//               </div>
//               <div className="p-4 bg-surface-100 rounded-lg shadow-sm">
//                 <div className="text-2xl font-bold text-brand-900">95%</div>
//                 <div className="text-sm text-neutral-600">Client Satisfaction</div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <Button variant="primary" href="/booking">
//                 Book a Consultation
//               </Button>
//             </div>
//           </div>

//           <div className="flex justify-center lg:justify-end">
//             <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/images/avatar.jpg"
//                 alt="Tutor avatar"
//                 width={560}
//                 height={560}
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
