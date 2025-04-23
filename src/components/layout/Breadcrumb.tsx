'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3 text-sm">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const isLast = index === paths.length - 1;
            const displayName = path.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            return (
              <span key={path} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="text-gray-900">{displayName}</span>
                ) : (
                  <Link href={href} className="text-gray-600 hover:text-blue-600">
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