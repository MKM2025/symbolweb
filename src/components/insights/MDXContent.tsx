'use client';

import '@/lib/process-polyfill';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface MDXContentProps {
  code: string;
}

const mdxComponents = {
  img: ({ src, alt, ...props }: any) => {
    if (src?.startsWith('/')) {
      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt || ''}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            {...props}
          />
        </div>
      );
    }
    // Fallback for external images
    return <img src={src} alt={alt} {...props} />;
  },
};

export default function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code, { components: mdxComponents });
  return <Component />;
}

