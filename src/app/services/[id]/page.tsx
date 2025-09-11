// src/app/services/[id]/page.tsx
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ScrollReveal';
import Accordion from '@/components/ui/Accordion';
import { FAQ_BY_SERVICE } from '../faq-by-service';
import { SERVICES } from '@/data/services';

type Props = { params: { id: string } };

export default async function ServiceDetail({ params }: Props) {
  // App Router requires awaiting params in some runtime contexts
  const awaitedParams = (await params) as { id: string };
  const id = awaitedParams.id;

  const service = SERVICES.find((s) => s.id === id);
  if (!service) return notFound();

  const faqs = FAQ_BY_SERVICE[service.id] ?? [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <ScrollReveal>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 leading-tight">
              {service.title}
            </h1>
            {service.subtitle && <p className="mt-3 text-lg text-black">{service.subtitle}</p>}
            <p className="mt-4 text-neutral-600">{service.desc}</p>
          </header>
        </ScrollReveal>

        {/* Highlights + outcomes */}
        <ScrollReveal delay={0.06}>
          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <Card className="p-6 card-surface">
              <h3 className="text-lg font-semibold text-brand-900 mb-3">What I focus on</h3>
              <ul className="space-y-2 text-neutral-700">
                {(service.highlights || []).map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="text-brand-500 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 card-surface lg:col-span-2">
              <h3 className="text-lg font-semibold text-brand-900 mb-3">What you’ll walk away with</h3>
              <ul className="grid gap-2 md:grid-cols-2 text-neutral-700">
                {(service.outcomes || []).map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="text-brand-500 mt-1">✔</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </ScrollReveal>

        {/* Details cards */}
        <ScrollReveal delay={0.12}>
          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            {(service.highlights || []).map((h) => (
              <Card key={h} className="p-5">
                <h4 className="font-semibold text-brand-900 mb-2">{h}</h4>
                <p className="text-sm text-neutral-600">
                  I work hands-on to ensure this is practical — expect live examples, guided exercises, and templates you can reuse immediately.
                </p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing & CTAs */}
        <ScrollReveal delay={0.18}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <div className="text-sm text-neutral-600">Starting at</div>
              <div className="text-2xl font-bold text-neutral-900">{service.price ?? ''}</div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="primary" href="/booking">Book a consultation</Button>
              <Button variant="secondary" href="/contact">Contact me</Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Suggested session packs */}
        <ScrollReveal delay={0.22}>
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-brand-900 mb-4">Suggested session packs</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-4">
                <div className="text-sm text-neutral-600">Starter</div>
                <div className="font-semibold text-lg">1 session</div>
                <div className="text-sm text-neutral-600 mt-2">Perfect to try a single focused lesson.</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-neutral-600">Growth</div>
                <div className="font-semibold text-lg">5 sessions</div>
                <div className="text-sm text-neutral-600 mt-2">Best for steady progress and real improvement.</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-neutral-600">Accelerator</div>
                <div className="font-semibold text-lg">10 sessions</div>
                <div className="text-sm text-neutral-600 mt-2">Intensive coaching or project mentorship.</div>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        {faqs.length > 0 && (
          <ScrollReveal delay={0.26}>
            <section className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4">Frequently asked</h3>
              <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
            </section>
          </ScrollReveal>
        )}

        {/* Closing pitch */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 bg-brand-900 text-white rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Ready to get started?</h4>
            <p className="text-sm mb-4">
              Book a free 20-minute consultation and we’ll map a clear plan — whether it’s improving grades, building a data dashboard, or preparing you for interviews.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" href="/booking">Book Free Consult</Button>
              <Button variant="secondary" href="/contact">Ask a Question</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
