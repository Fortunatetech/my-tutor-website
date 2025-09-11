// src/app/blog/page.tsx
import Link from 'next/link';
import { posts } from '@/data/post';
import Card from '@/components/ui/Card';


export default function BlogPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-900 mb-6">Blog & Resources</h1>
        <p className="text-neutral-600 mb-8">Tips, tutorials and short guides on learning, careers, and tech.</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.slug} className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-brand-900">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="text-neutral-600 mt-3">{p.excerpt}</p>
              </div>
              <div className="mt-4 text-sm text-neutral-600 flex items-center justify-between">
                <span>{p.readTime}</span>
                <Link href={`/blog/${p.slug}`} className="text-brand-500 hover:underline">Read →</Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
