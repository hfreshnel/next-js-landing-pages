import LandingLayout from '@/components/LandingLayout'
import CTA from '@/components/CTA'

const LANDING_ID = 'a'

export default function LandingA() {
  return (
    <LandingLayout landingId={LANDING_ID}>
      <div style={{ maxWidth: '560px', textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            backgroundColor: '#e8f4ff',
            color: '#0070f3',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '24px',
            letterSpacing: '0.02em',
          }}
        >
          New · Version 2.0
        </span>

        <h1 style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px' }}>
          Ship faster with zero config
        </h1>

        <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#444', margin: '0 0 40px' }}>
          Our platform handles deployment, scaling, and monitoring so your team
          can focus entirely on building features that matter.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CTA landingId={LANDING_ID} label="Start for free" metadata={{ position: 'primary' }} />
          <CTA
            landingId={LANDING_ID}
            label="See the docs"
            href="#docs"
            metadata={{ position: 'secondary' }}
          />
        </div>

        <p style={{ marginTop: '28px', fontSize: '13px', color: '#999' }}>
          No credit card required · Free up to 3 projects
        </p>
      </div>
    </LandingLayout>
  )
}
