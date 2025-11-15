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
    <main className="container mx-auto px-4 py-16">
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
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
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
        {post.image && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose prose-base max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700">
          <MDXContent code={post.body.code} />
        </div>
      </article>
    </main>
  );
} 