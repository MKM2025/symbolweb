import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Blog } from '@/types/blog';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = allBlogs.find((post) => post.url === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose prose-lg mx-auto px-4 py-8">
      <h1>{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <time dateTime={post.date}>{post.date}</time>
        <span>•</span>
        <span>{post.readingTime.text}</span>
      </div>
      <MDXContent />
    </article>
  );
} 