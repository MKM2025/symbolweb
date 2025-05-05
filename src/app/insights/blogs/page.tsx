import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';

export default function InsightsBlogsPage() {
  console.log('Blogs:', allBlogs.map(blog => ({
    title: blog.title,
    image: blog.image,
    url: blog.url
  })));

  return (
    <>
      {/* Blog Hero Section */}
      <section className="relative w-full h-[180px] md:h-[300px] flex items-center justify-center mb-8">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 639px) and (orientation: portrait)"
            srcSet="/images/blog/hero_blog_mobile.jpg"
          />
          <source
            media="(max-width: 639px) and (orientation: portrait)"
            srcSet="/images/blog/hero_blog_mobile.webp"
            type="image/webp"
          />
          {/* Mobile Landscape */}
          <source
            media="(max-width: 1023px) and (orientation: landscape)"
            srcSet="/images/blog/hero_blog_landscape.jpg"
          />
          <source
            media="(max-width: 1023px) and (orientation: landscape)"
            srcSet="/images/blog/hero_blog_landscape.webp"
            type="image/webp"
          />
          {/* Desktop */}
          <source
            media="(min-width: 1024px)"
            srcSet="/images/blog/hero_blog_desktop.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/images/blog/hero_blog_desktop.webp"
            type="image/webp"
          />
          <img
            src="/images/blog/hero_blog_desktop.jpg"
            alt="Symboltech Blog Hero"
            className="w-full h-full object-cover absolute inset-0 z-0"
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          />
        </picture>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-extrabold text-center w-full drop-shadow-lg">
          Symboltech&apos;s Blog
        </h1>
      </section>
      {/* Existing Blog List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog: Blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.url}`}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div className="p-6">
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                {blog.summary && (
                  <p className="text-gray-600 mb-4">{blog.summary}</p>
                )}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.readingTime.text}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 