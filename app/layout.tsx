import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Georgian } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian', 'latin'],
  variable: '--font-georgian',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sitecraft.ge'),
  title: 'SiteCraft — თქვენი ბიზნესისთვის ვებსაიტის შექმნა',
  description: 'თანამედროვე, სწრაფი და ხელმისაწვდომი ვებსაიტები ქართული ბიზნესისთვის. პროფესიონალური ვებ დეველოპმენტი საბა ჯანელიძისგან.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'SiteCraft — თქვენი ბიზნესისთვის ვებსაიტის შექმნა',
    description: 'თანამედროვე, სწრაფი და ხელმისაწვდომი ვებსაიტები ქართული ბიზნესისთვის.',
    url: 'https://sitecraft.ge',
    siteName: 'SiteCraft',
    locale: 'ka_GE',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ka">
      <body className={`${notoGeorgian.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
