import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function CaseStudyCard({ id, title, description, thumbnail }: CaseStudyCardProps) {
  return (
    <Link href={`/insights/case-studies/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative h-48 w-full flex items-center justify-center bg-gray-100">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-gray-500 text-lg font-semibold text-center w-full">
              {id === 'adib' ? 'Adib Case Study' : id === 'moenco' ? 'Moenco Case Study' : id === 'aau' ? 'AAU Case Study' : id === 'esl' ? 'ESL Case Study' : `${title.split(' ')[0]} Case Study`}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {description}
          </p>
          <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800">
            <span className="text-sm font-medium">Read Case Study</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 