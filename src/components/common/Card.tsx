'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Card({
  children,
  className = '',
  title,
  subtitle
}: CardProps) {
  return (
    <div className={`rounded-lg shadow-md bg-white p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-gray-600 mb-4">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
} 