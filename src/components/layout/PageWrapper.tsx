export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </section>
  );
} 