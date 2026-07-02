'use client'

import { T } from '@/lib/design'
import { processSteps } from '@/lib/homeData'

export default function Process() {
  return (
    <section style={{ padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
      <div className="wrap">
        <p className="section-label">Méthode</p>
        <h2 className="section-title">Comment ça se passe.</h2>
        <div className="timeline">
          {processSteps.map((step, i) => (
            <div key={i} className="timeline-step">
              <div className="timeline-num">{step.num}</div>
              <div className="timeline-content">
                <p className="timeline-title">{step.title}</p>
                <span className="timeline-hint">···</span>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="reassurance" style={{ marginTop: T.spLg }}>
          Vous ne payez le solde qu'à la livraison. Les accès vous sont transférés après encaissement.
        </p>
      </div>
    </section>
  )
}
