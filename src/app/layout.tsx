import type { Metadata } from 'next'
import { Lora, Montserrat } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Shree Texfab Creations | Textile Manufacturer & Fabric Supplier India',
    template: '%s | Shree Texfab',
  },
  description:
    'Shree Texfab Creations is an Indian textile company supplying suiting, shirting, uniform and specialty fabrics for domestic and international buyers.',
  metadataBase: new URL('https://shreetexfab.in'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png',   sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png',   sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    siteName: 'Shree Texfab Creations',
    images: [
      {
        url: '/logo_with_background.jpeg',
        width: 917,
        height: 769,
        alt: 'Shree Texfab Creations Private Limited',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
