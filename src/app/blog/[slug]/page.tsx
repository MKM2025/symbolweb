import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXContent } from 'next-contentlayer/hooks';
import { Blog } from '@/types/blog';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blog = allBlogs.find((blog: Blog) => blog.url === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.readingTime.text}</span>
        </div>
        <div className="flex gap-2 mb-8">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose prose-lg max-w-none">
          <MDXContent code={blog.body.code} />
        </div>
      </div>
    </article>
  );
} 