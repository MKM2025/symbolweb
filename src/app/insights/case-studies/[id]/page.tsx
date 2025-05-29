import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import iconv from 'iconv-lite';
import '../caseStudyContent.css';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

const caseStudies = [
  {
    id: 'advanced_sec',
    title: 'Symbol Tech Fortifies EthSwitch\'s National Payment Gateway with Advanced Security Solutions',
    description: 'A strategic initiative empowering EthSwitch to protect its critical operations and customer data, ensuring the integrity and reliability of the nation\'s burgeoning digital payment ecosystem.',
    thumbnail: '', // No image for now
  },
  {
    id: 'nib_computing',
    title: 'NIB Computing Infrastructure Modernization',
    description: 'A comprehensive infrastructure modernization project that transformed NIB\'s computing capabilities, enhancing performance, security, and scalability.',
    thumbnail: '', // No image for now
  },
  {
    id: 'esl_infrastructure',
    title: 'ESL Infrastructure Transformation',
    description: 'A strategic infrastructure transformation project that revolutionized ESL\'s technological capabilities, delivering enhanced performance and operational efficiency.',
    thumbnail: '', // No image for now
  },
];

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);
  
  if (!caseStudy) {
    notFound();
  }

  // Short label for breadcrumb
  let shortLabel = '';
  switch (caseStudy.id) {
    case 'advanced_sec':
      shortLabel = 'EthSwitch';
      break;
    case 'nib_computing':
      shortLabel = 'NIB';
      break;
    case 'esl_infrastructure':
      shortLabel = 'ESL';
      break;
    default:
      shortLabel = caseStudy.title;
  }

  const filePath = path.join(process.cwd(), 'public/case-studies', `${params.id}.htm`);
  let content = '';

  try {
    // Read the file as a buffer
    const buffer = fs.readFileSync(filePath);
    
    // Convert from Windows-1252 to UTF-8
    content = iconv.decode(buffer, 'win1252');
    
    // Replace specific problematic characters
    content = content
      .replace(/â€"/g, '—')  // Replace broken em dash
      .replace(/â€"/g, '–')  // Replace broken en dash
      .replace(/â€œ/g, '"')  // Replace broken double quote
      .replace(/â€/g, '"')  // Replace broken double quote
      .replace(/â€˜/g, '\'')  // Replace broken single quote
      .replace(/â€™/g, '\'')  // Replace broken single quote
      .replace(/â€¦/g, '…'); // Replace broken ellipsis
    
    // Log the content for debugging
    console.log('File content loaded successfully');
  } catch (error) {
    console.error('Error reading case study file:', error);
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
      {/* Site map / Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li><a href="/" className="hover:underline text-blue-700">Home</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="/insights" className="hover:underline text-blue-700">Insights</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="/insights#case-studies" className="hover:underline text-blue-700">Case Studies</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-700">{shortLabel}</li>
        </ol>
      </nav>
      {/* Responsive styled image placeholder */}
      <div className="w-full aspect-[16/9] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mb-8">
        <span className="text-gray-400 text-lg">Image Placeholder</span>
      </div>
      {/* Render HTML content only */}
      <div className="case-study-html">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {/* Back to Case Studies link */}
      <div className="mt-12 text-center">
        <a href="/insights#case-studies" className="inline-block px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors font-semibold shadow">
          ← Back to Case Studies
        </a>
      </div>
    </div>
  );
} 