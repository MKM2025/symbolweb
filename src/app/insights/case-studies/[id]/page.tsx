import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import iconv from 'iconv-lite';

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
  // Additional case studies will be added here
];

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);
  
  if (!caseStudy) {
    notFound();
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
      {/* Responsive styled image placeholder */}
      <div className="w-full aspect-[16/9] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mb-8">
        <span className="text-gray-400 text-lg">Image Placeholder</span>
      </div>
      {/* Render HTML content only */}
      <div style={{ color: '#222', fontSize: '1.1rem', lineHeight: '1.7' }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
} 