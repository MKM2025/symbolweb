'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  // Hide global breadcrumb on blog post pages and case study pages (they have their own)
  if (pathname.includes('/insights/blogs/') || pathname.includes('/insights/case-studies/')) {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-2 sm:py-3 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
          <Link href="/" className="text-gray-600 hover:text-blue-600 min-w-[40px]">
            Home
          </Link>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const isLast = index === paths.length - 1;
            const displayName = path.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            return (
              <span key={path} className="flex items-center min-w-0">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="text-gray-900 truncate">{displayName}</span>
                ) : (
                  <Link href={href} className="text-gray-600 hover:text-blue-600 truncate">
                    {displayName}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 