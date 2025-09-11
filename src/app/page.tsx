// src/app/page.tsx
import Hero from '@/components/hero/Hero';
import Card from '@/components/ui/Card';
import TestimonialSlider from '@/components/testimonials/TestimonialSlider';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    { title: 'Academic Tutoring', href: '/services#tutoring' },
    { title: 'Homework & Projects', href: '/services#homework' },
    { title: 'Programming & AI', href: '/services#programming' },
    { title: 'Career Coaching', href: '/services#career' },
    { title: 'Resume & Interview Prep', href: '/services#resume' },
    { title: 'IT Consultation', href: '/services#itconsult' },
  ];

  return (
    <div className="space-y-16">
      <Hero />

      <section className="py-12 container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-900 text-center mb-8">What I offer</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Link key={s.title} href={s.href}>
              <Card className="hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-900/5 rounded-lg flex items-center justify-center text-brand-500 font-semibold">→</div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
                    <p className="text-sm text-neutral-600 mt-2">Practical, tailored sessions to meet your goals.</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 bg-bg-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-semibold text-center text-brand-900 mb-6">What learners say</h2>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}
