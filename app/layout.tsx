import type { Metadata } from 'next'

// Layout racine minimal : le portfolio a son propre layout (groupe `(portfolio)`),
// les landing pages et le scrapbook gardent leurs styles.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hfreshnel.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Titre par défaut des pages sans métadonnées propres (landing pages, scrapbook).
  title: 'Freshnel Houenou',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
