import LandingLayout from '@/components/LandingLayout'
import CTA from '@/components/CTA'

const LANDING_ID = 'b'

export default function LandingB() {
  return (
    <LandingLayout landingId={LANDING_ID}>
      <div style={{ maxWidth: '560px', textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: '#888', marginBottom: '20px', fontStyle: 'italic' }}>
          Sound familiar?
        </p>

        <h1 style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px' }}>
          Tired of deployments that break at 2 AM?
        </h1>

        <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#444', margin: '0 0 16px' }}>
          Most teams waste hours every week wrestling with infra. Rollbacks,
          outages, config drift. It adds up and kills momentum.
        </p>

        <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#444', margin: '0 0 40px' }}>
          We've fixed that. One command to deploy, automatic rollback on failure,
          and alerts before your users even notice.
        </p>

        <CTA landingId={LANDING_ID} label="Fix my deployments" metadata={{ position: 'primary' }} />

        <p style={{ marginTop: '28px', fontSize: '13px', color: '#999' }}>
          Trusted by 800+ engineering teams · 5-minute setup
        </p>
      </div>
    </LandingLayout>
  )
}
