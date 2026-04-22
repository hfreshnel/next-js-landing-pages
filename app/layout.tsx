import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Pages',
  description: 'A/B testing playground for landing pages',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
