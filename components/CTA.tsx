'use client'

import { trackEvent } from '@/lib/track'

interface CTAProps {
  landingId: string
  label: string
  href?: string
  metadata?: Record<string, string>
}

export default function CTA({ landingId, label, href = '#', metadata }: CTAProps) {
  const handleClick = () => {
    trackEvent(landingId, 'conversion', { label, ...metadata })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        padding: '14px 32px',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.15s',
      }}
      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.opacity = '0.85')}
      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.opacity = '1')}
    >
      {label}
    </a>
  )
}
