import InsightsHero from '@/components/insights/InsightsHero';

export default function InsightsBlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <InsightsHero />
      {children}
    </main>
  );
} 