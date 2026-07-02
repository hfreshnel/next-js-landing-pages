'use client'

import { T } from '@/lib/design'

export default function Nav() {
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="a0" style={{ borderBottom: `1px solid ${T.border}` }}>
      <div className="wrap" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${T.spMd} ${T.pageX}`,
      }}>
        <span style={{
          fontFamily: T.serif,
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: T.fsLogo,
          color: T.light,
          letterSpacing: '-0.01em',
        }}>
          HFreshnel
        </span>
        <button
          className="btn-primary"
          onClick={scrollToContact}
          style={{ padding: `${T.spXs} ${T.spSm}` }}
        >
          Discutons →
        </button>
      </div>
    </nav>
  )
}
