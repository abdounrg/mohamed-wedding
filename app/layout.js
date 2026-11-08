import { Cormorant_Garamond, Great_Vibes, Amiri } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata = {
  title: 'Mohamed Boubker — Invitation de Mariage',
  description: 'Vous êtes cordialement invités à célébrer ce mariage. يشرفنا حضوركم',
  applicationName: 'Mariage Mohamed Boubker',
  other: {
    'theme-color': '#0A1628',
    'msapplication-TileColor': '#0A1628',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${greatVibes.variable} ${amiri.variable}`}>
        {children}
      </body>
    </html>
  )
}
