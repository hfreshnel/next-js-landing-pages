'use client'

import { T } from '@/lib/design'
import { expertise } from '@/lib/homeData'

export default function Offer() {
  return (
    <section style={{ padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
      <div className="wrap">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">De l’idée au produit exploitable.</h2>
        <div className="expertise-grid">
          {expertise.map((e, i) => (
            <div key={i} className="expertise-card">
              <p className="expertise-num">{e.num}</p>
              <p className="expertise-title">{e.title}</p>
              <p className="expertise-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
