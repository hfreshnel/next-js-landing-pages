'use client'

import { useState } from 'react'
import { T } from '@/lib/design'
import { faqItems } from '@/lib/homeData'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section style={{ background: T.dark, padding: `${T.spLg} 0`, borderTop: `1px solid ${T.border}` }}>
      <div className="wrap">
        <p className="section-label">Questions fréquentes</p>
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="faq-q">{item.q}</span>
                <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="faq-a">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
