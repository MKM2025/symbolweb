import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 160, height = 48 }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <span className="text-xl font-bold text-blue-600">Symbol</span>
    </Link>
  );
} 