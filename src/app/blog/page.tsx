import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Technology Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogs.map((blog: Blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog.url}`}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {blog.image && (
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {blog.tags && blog.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              {blog.summary && <p className="text-gray-600 mb-4">{blog.summary}</p>}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{blog.author}</span>
                <span>{blog.readingTime.text}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 