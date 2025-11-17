import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import MDXContent from '@/components/insights/MDXContent';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = allBlogs.find((post) => post.url === `/insights/blogs/${params.slug}`);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 pt-20 sm:pt-24 md:pt-32 pb-12 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl px-6 sm:px-10 pt-10 pb-8 flex flex-col">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="list-reset flex">
            <li><a href="/" className="hover:underline text-blue-700">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/insights" className="hover:underline text-blue-700">Insights</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/insights#blogs" className="hover:underline text-blue-700">News & Blogs</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-700">{post.title}</li>
          </ol>
        </nav>
        <article className="flex flex-col">
          {post.image && (
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime.text}</span>
          </div>
          <div className="prose prose-base max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700">
            <MDXContent code={post.body.code} />
          </div>
        </article>
        {/* Back to News & Blogs link */}
        <div className="mt-12 text-center">
          <a href="/insights#blogs" className="inline-block px-8 py-3 rounded-xl font-bold text-lg bg-[#0a2239] text-[#FFF9C4] shadow-none">
            ← News & Blogs
          </a>
        </div>
      </div>
    </div>
  );
} 