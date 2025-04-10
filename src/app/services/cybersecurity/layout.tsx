export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cybersecurity Services</h2>
        <p>Protecting your business with advanced security solutions.</p>
      </div>
      {children}
    </div>
  )
} 