import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SITE_NAME } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Digital Showroom`,
  description:
    'ISOL\u00c9 is a digital showroom and interactive lookbook. Romantic, bold and elegant pieces made to be felt. Visit our store or reach us on WhatsApp.',
  openGraph: {
    title: `${SITE_NAME} | Digital Showroom`,
    description:
      'An editorial lookbook of romantic, elegant and natural pieces. Discover the collection.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf5ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
