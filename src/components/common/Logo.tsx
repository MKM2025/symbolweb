import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <span className="text-xl font-bold text-blue-600">Symbol</span>
    </Link>
  );
} 