'use client'

import { T } from '@/lib/design'
import { comparisonRows } from '@/lib/homeData'

export default function Positioning() {
  return (
    <section style={{ background: T.dark, padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
      <div className="wrap">
        <p className="section-label">Positionnement</p>
        <h2 className="section-title">
          Pas seulement exécuter.<br />
          Construire avec discernement.
        </h2>
        <p className="positioning-body">
          Un bon partenaire tech ne se contente pas de produire du code.
          Il aide à choisir quoi construire, quoi simplifier, quoi reporter et pourquoi.
        </p>
        <div className="comparison-table">
          <div className="cmp-header cmp-header-bad">Exécution simple</div>
          <div className="cmp-header cmp-header-good">Partenariat produit</div>
          {comparisonRows.flatMap(([bad, good], i) => [
            <div key={`b${i}`} className="cmp-cell cmp-cell-bad">{bad}</div>,
            <div key={`g${i}`} className="cmp-cell cmp-cell-good">{good}</div>,
          ])}
        </div>
      </div>
    </section>
  )
}
