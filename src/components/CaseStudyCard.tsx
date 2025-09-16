// src/components/CaseStudyCard.tsx
import Link from 'next/link';

export default function CaseStudyCard({ title, body, href = '/case-study' }: { title: string; body: string; href?: string }) {
  return (
    <article className="p-4 border rounded-lg text-white bg-[#071029]">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm mb-4">{body}</p>
      <div className="flex justify-end">
        <Link href={href} className="text-sm underline">Read full case study</Link>
      </div>
    </article>
  );
}
