// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { posts } from '@/data/post';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <Link href="/blog" className="text-sm text-brand-500 hover:underline">← Back to blog</Link>
        <h1 className="text-4xl font-extrabold text-brand-900 mt-4 mb-4">{post.title}</h1>
        <div className="text-sm text-neutral-600 mb-6">
          <span>{post.date}</span> · <span>{post.readTime}</span>
        </div>

        <div className="prose max-w-none text-neutral-900">
          {/* For simplicity we render the body as plain paragraphs.
              Replace with markdown renderer if you store markdown content. */}
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
