'use client';

interface HashLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function HashLink({ href, className, children }: HashLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Use window.location.href to ensure proper navigation with hash
    window.location.href = href;
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

