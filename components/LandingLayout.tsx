'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/track'

interface LandingLayoutProps {
  landingId: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function LandingLayout({ landingId, children, style }: LandingLayoutProps) {
  useEffect(() => {
    trackEvent(landingId, 'view')
  }, [landingId])

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#fafafa',
        color: '#111',
        ...style,
      }}
    >
      {children}
    </main>
  )
}
