import { ImageResponse } from 'next/og'
import { site } from '@/lib/content/site'

// Image de partage de l'accueil (et des fiches, par héritage) : toile craie, nom, titre, phrase.

export const alt = `${site.name}, ingénieur logiciel`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#F3F4F1',
          color: '#20211F',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: '#6B6D66' }}>
          {site.role}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 104, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ display: 'flex', fontSize: 40, lineHeight: 1.3, maxWidth: 900 }}>{site.thesis}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26 }}>
          <div style={{ width: 14, height: 14, background: '#C42D62' }} />
          {site.status}
        </div>
      </div>
    ),
    size,
  )
}
