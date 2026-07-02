'use client'

import { T } from '@/lib/design'

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(${T.spSm}); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      .a0 { animation: fadeIn  0.5s ease                            0.00s both; }
      .a1 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.10s both; }
      .a2 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.25s both; }
      .a3 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.35s both; }
      .a4 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.50s both; }
      .a5 { animation: fadeUp  0.9s cubic-bezier(0.16,1,0.3,1)     0.65s both; }

      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: ${T.spXs};
        background: ${T.accent};
        color: ${T.dark};
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        border: none;
        padding: ${T.spSm} ${T.spMd};
        cursor: pointer;
        transition: opacity 0.2s ease, transform 0.15s ease;
        text-decoration: none;
      }
      .btn-primary:hover { opacity: 0.85; transform: translateX(3px); }

      .btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: ${T.spXs};
        background: transparent;
        color: ${T.accent};
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 400;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        border: 1px solid ${T.border};
        padding: ${T.spXs} ${T.spSm};
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
        text-decoration: none;
      }
      .btn-ghost:hover { border-color: ${T.accent}; }

      .footer-link {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 300;
        color: ${T.mid};
        letter-spacing: 0.05em;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .footer-link:hover { color: ${T.accent}; }

      .wrap {
        max-width: ${T.maxW};
        margin: 0 auto;
        padding: 0 ${T.pageX};
        width: 100%;
      }

      .section-label {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: ${T.accent};
        margin: 0 0 ${T.spSm};
      }

      .section-title {
        font-family: ${T.serif};
        font-style: italic;
        font-weight: 300;
        font-size: ${T.fsSection};
        color: ${T.light};
        margin: 0 0 ${T.spMd};
        letter-spacing: -0.02em;
        line-height: 1.1;
      }

      .positioning-body {
        font-family: ${T.sans};
        font-size: ${T.fsLg};
        font-weight: 300;
        color: ${T.mid};
        line-height: 1.75;
        margin: 0 0 ${T.spMd};
        max-width: 560px;
      }

      /* Comparison */
      .comparison-table {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px solid ${T.border};
      }
      .cmp-header {
        padding: ${T.spSm} ${T.spMd};
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        border-bottom: 1px solid ${T.border};
        background: ${T.dark};
      }
      .cmp-header-bad  { color: ${T.mid}; border-right: 1px solid ${T.border}; }
      .cmp-header-good { color: ${T.accent}; }
      .cmp-cell {
        padding: ${T.spSm} ${T.spMd};
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        line-height: 1.6;
        border-bottom: 1px solid ${T.border};
      }
      .cmp-cell-bad  { color: ${T.mid}; border-right: 1px solid ${T.border}; }
      .cmp-cell-good { color: ${T.light}; background: rgba(196,147,90,0.04); }
      .cmp-cell:nth-last-child(-n+2) { border-bottom: none; }

      /* Expertise */
      .expertise-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1px;
        background: ${T.border};
        border: 1px solid ${T.border};
        margin-bottom: ${T.spMd};
      }
      .expertise-card {
        background: ${T.dark};
        padding: ${T.spMd};
        display: flex;
        flex-direction: column;
        gap: ${T.spXs};
        transition: background 0.3s ease;
      }
      .expertise-card:hover { background: rgba(196,147,90,0.05); }
      .expertise-num {
        font-family: ${T.serif};
        font-style: italic;
        font-weight: 300;
        font-size: ${T.fsCard};
        color: ${T.accent};
        line-height: 1;
        margin: 0 0 ${T.spXs};
      }
      .expertise-title {
        font-family: ${T.sans};
        font-size: ${T.fsLg};
        font-weight: 500;
        letter-spacing: 0.01em;
        color: ${T.light};
        margin: 0;
      }
      .expertise-desc {
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        color: ${T.mid};
        line-height: 1.7;
        margin: 0;
        max-width: 340px;
      }

      /* Project cards */
      .project-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${T.spSm};
      }
      .project-card {
        border: 1px solid ${T.border};
        padding: ${T.spMd};
        cursor: pointer;
        transition: border-color 0.25s ease;
        display: flex;
        flex-direction: column;
        gap: ${T.spSm};
      }
      .project-card:hover { border-color: ${T.accent}; }
      .project-thumb {
        width: 100%;
        aspect-ratio: 16/9;
        background: ${T.border};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: ${T.spXs};
      }
      .project-name {
        font-family: ${T.serif};
        font-style: italic;
        font-weight: 300;
        font-size: ${T.fsCard};
        color: ${T.light};
        margin: 0;
        letter-spacing: -0.01em;
        line-height: 1;
      }
      .project-meta {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 300;
        color: ${T.mid};
        letter-spacing: 0.06em;
        margin: 0;
      }
      .stack-chips {
        display: flex;
        flex-wrap: wrap;
        gap: ${T.spXs};
      }
      .stack-chip {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 400;
        letter-spacing: 0.06em;
        color: ${T.mid};
        border: 1px solid ${T.border};
        padding: ${T.spXs};
      }
      .card-cta {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 400;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${T.accent};
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: ${T.spXs};
      }

      /* Modal */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: ${T.overlay};
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${T.spMd};
      }
      .modal-box {
        background: ${T.dark};
        border: 1px solid ${T.border};
        max-width: ${T.maxModal};
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: ${T.spMd};
        position: relative;
      }
      .modal-close {
        position: absolute;
        top: ${T.spSm};
        right: ${T.spSm};
        background: none;
        border: none;
        color: ${T.mid};
        font-size: ${T.fsLogo};
        cursor: pointer;
        line-height: 1;
        transition: color 0.2s;
        font-family: ${T.sans};
        font-weight: 300;
      }
      .modal-close:hover { color: ${T.light}; }
      .modal-key {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: ${T.mid};
        margin: 0 0 ${T.spXs};
      }
      .modal-val {
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        color: ${T.light};
        line-height: 1.75;
        margin: 0 0 ${T.spMd};
      }
      .modal-footer {
        display: flex;
        justify-content: center;
        gap: ${T.spSm};
        flex-wrap: wrap;
        margin-top: ${T.spMd};
        padding-top: ${T.spMd};
        border-top: 1px solid ${T.border};
      }

      /* Timeline */
      .timeline {
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }
      .timeline-step {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        padding: 0 ${T.spSm};
      }
      .timeline-step:not(:last-child)::after {
        content: '→';
        position: absolute;
        right: -${T.spSm};
        top: 2px;
        color: ${T.mid};
        font-size: ${T.fsLg};
      }
      .timeline-num {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.12em;
        color: ${T.accent};
        margin-bottom: ${T.spSm};
      }
      .timeline-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 180px;
      }
      .timeline-title {
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 500;
        color: ${T.light};
        margin: 0;
      }
      .timeline-hint {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: ${T.spXs} 0 0;
        padding: 2px ${T.spXs};
        border: 1px solid ${T.border};
        border-radius: 999px;
        color: ${T.accent};
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        letter-spacing: 0.05em;
        line-height: 1.4;
        transition: opacity 0.25s ease;
      }
      .timeline-step:hover .timeline-hint {
        opacity: 0;
      }
      .timeline-desc {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 300;
        color: ${T.mid};
        line-height: 1.6;
        margin: 0;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: opacity 0.25s ease, max-height 0.25s ease, margin-top 0.25s ease;
      }
      .timeline-step:hover .timeline-desc {
        opacity: 1;
        max-height: 160px;
        margin-top: ${T.spXs};
      }

      /* FAQ */
      .faq-list { border-top: 1px solid ${T.border}; }
      .faq-item { border-bottom: 1px solid ${T.border}; }
      .faq-btn {
        width: 100%;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${T.spSm} 0;
        cursor: pointer;
        text-align: left;
        gap: ${T.spSm};
      }
      .faq-q {
        font-family: ${T.sans};
        font-size: ${T.fsLg};
        font-weight: 300;
        color: ${T.light};
        letter-spacing: 0.01em;
      }
      .faq-toggle {
        font-family: ${T.sans};
        font-size: ${T.fsLogo};
        color: ${T.mid};
        flex-shrink: 0;
        transition: color 0.2s;
        line-height: 1;
      }
      .faq-btn:hover .faq-toggle { color: ${T.accent}; }
      .faq-a {
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        color: ${T.mid};
        line-height: 1.8;
        padding: 0 ${T.spMd} ${T.spSm} 0;
        max-width: ${T.maxFaq};
        margin: 0;
      }

      /* Form */
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${T.spSm};
        margin-bottom: ${T.spSm};
      }
      .form-field { display: flex; flex-direction: column; gap: ${T.spXs}; }
      .form-label {
        font-family: ${T.sans};
        font-size: ${T.fsSm};
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: ${T.mid};
      }
      .form-input {
        background: ${T.dark};
        border: 1px solid ${T.border};
        color: ${T.light};
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        padding: ${T.spSm};
        outline: none;
        transition: border-color 0.2s;
        width: 100%;
      }
      .form-input:focus { border-color: ${T.accent}; }
      .form-input::placeholder { color: ${T.mid}; }
      textarea.form-input { resize: vertical; min-height: ${T.minTextarea}; }

      .reassurance {
        font-family: ${T.sans};
        font-size: ${T.fsBase};
        font-weight: 300;
        color: ${T.mid};
        font-style: italic;
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: ${T.bp768}) {
        .wrap { padding: 0 ${T.spMd}; }
        .comparison-table { grid-template-columns: 1fr; }
        .cmp-header-bad  { border-right: none; }
        .cmp-cell-bad    { border-right: none; }
        .cmp-cell:nth-last-child(-n+2) { border-bottom: 1px solid ${T.border}; }
        .cmp-cell:last-child { border-bottom: none; }
        .expertise-grid { grid-template-columns: 1fr; }
        .project-cards { grid-template-columns: 1fr; }
        .timeline { flex-direction: column; gap: ${T.spMd}; }
        .timeline-step { align-items: flex-start; text-align: left; flex-direction: row; gap: ${T.spSm}; padding: 0; }
        .timeline-content { align-items: flex-start; max-width: none; }
        .timeline-step::after { display: none !important; }
        .timeline-desc { opacity: 1; max-height: none; margin-top: ${T.spXs}; }
        .timeline-hint { display: none; }
        .form-row { grid-template-columns: 1fr; }
        .modal-box { padding: ${T.spMd}; }
      }
    `}</style>
  )
}
