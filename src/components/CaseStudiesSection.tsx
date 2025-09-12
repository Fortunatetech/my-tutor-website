// src/components/CaseStudiesSection.tsx
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-brand-900 mb-4">Success stories</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <CaseStudyCard
            title="Math exam turnaround — 3 months"
            body="Student struggled with algebra. We created weekly 1:1 sessions + targeted practice tests. Result: grade went from C → A in 3 months."
            href="/case-study/math-turnaround"
          />
          <CaseStudyCard
            title="Data report for small business"
            body="Built a Power BI dashboard that reduced reporting time by 70% and helped the owner spot a pricing issue."
            href="/case-study/powerbi-report"
          />
            <CaseStudyCard
            title="Data report for small business"
            body="Built a Power BI dashboard that reduced reporting time by 70% and helped the owner spot a pricing issue."
            href="/case-study/powerbi-report"
          />
            <CaseStudyCard
            title="Data report for small business"
            body="Built a Power BI dashboard that reduced reporting time by 70% and helped the owner spot a pricing issue."
            href="/case-study/powerbi-report"
          />
        </div>
      </div>
    </section>
  );
}
