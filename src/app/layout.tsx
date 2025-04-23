import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollArrow from '@/components/home/ScrollArrow'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/layout/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Symbol Technologies - Professional IT Services and Solutions',
  description: 'Symbol Technologies provides enterprise-grade IT solutions including cybersecurity, cloud infrastructure, and managed services.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Breadcrumb />
        <main className="pt-4">{children}</main>
        <ScrollArrow />
        <Footer />
      </body>
    </html>
  )
}
