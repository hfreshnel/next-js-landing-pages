import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from 'next/font/google'
import Sidebar from '@/components/portfolio/Sidebar'
import { NotesProvider } from '@/components/portfolio/notes'
import { site } from '@/lib/content/site'
import './portfolio.css'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: { default: `${site.name} · Ingénieur logiciel`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: 'website', locale: 'fr_FR', siteName: site.name },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F4F1' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1B19' },
  ],
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`pf ${display.variable} ${body.variable} ${mono.variable}`}>
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <NotesProvider>
        <div className="shell">
          <Sidebar />
          <main id="contenu">{children}</main>
        </div>
      </NotesProvider>
    </div>
  )
}
