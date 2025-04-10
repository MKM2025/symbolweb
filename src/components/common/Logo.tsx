import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  width?: number;
  height?: number;
}

export default function Logo({ 
  className = '', 
  variant = 'full',
  width = 40,
  height = 40 
}: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      {variant === 'full' ? (
        <div className="flex items-center gap-3">
          <svg width={width} height={height} viewBox="0 0 1000 1000" className="text-black dark:text-white">
            <path
              fill="currentColor"
              d="M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm0 150l200 200v300l-200 200-200-200V350l200-200zm0 100L400 350v300l100 100 100-100V350L500 250z"
            />
          </svg>
          <span className="text-xl font-bold tracking-wider">SYMBOL TECHNOLOGIES</span>
        </div>
      ) : (
        <svg width={width} height={height} viewBox="0 0 1000 1000" className="text-black dark:text-white">
          <path
            fill="currentColor"
            d="M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm0 150l200 200v300l-200 200-200-200V350l200-200zm0 100L400 350v300l100 100 100-100V350L500 250z"
          />
        </svg>
      )}
    </Link>
  );
} 