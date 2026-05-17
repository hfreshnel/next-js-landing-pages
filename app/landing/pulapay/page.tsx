import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pula Pay - Fintech Case Study',
  description: 'A portfolio case study for Pula Pay, a universal African money account with USDC wallets, fiat rails, and ledger-backed transactions.',
}

const demoBeats = [
  {
    step: '01',
    title: 'Open the account',
    body: 'A user lands on a mobile money-style dashboard with balances shown in local currency and USDC.',
  },
  {
    step: '02',
    title: 'Send by phone',
    body: 'The recipient is resolved by phone number, hiding wallet-address complexity from the user.',
  },
  {
    step: '03',
    title: 'Sign with Circle',
    body: 'The backend creates a transfer challenge and the mobile app resolves it through the native PIN flow.',
  },
  {
    step: '04',
    title: 'Track the movement',
    body: 'The transaction progresses through a strict state machine and writes balanced ledger entries.',
  },
]

const architecture = [
  ['Mobile app', 'React Native, Expo Router, Zustand, Circle SDK'],
  ['API layer', 'Express, TypeScript, Better Auth, Zod validation'],
  ['Application layer', 'Command and query handlers for wallet, transfer, deposit, withdrawal'],
  ['Domain core', 'Wallet, User, Transaction, Money, XState machines, ledger service'],
  ['Infrastructure', 'PostgreSQL, Prisma, Redis, BullMQ, Circle, Coinbase CDP'],
]

const proofPoints = [
  'User-controlled Circle wallets on Base',
  'Fiat on/off-ramp through Coinbase CDP',
  'Double-entry ledger with debit/credit invariants',
  'XState transaction and wallet state machines',
  'Idempotent commands and retry-safe async jobs',
  'Expo mobile app with secure token storage',
]

function PhoneDemo() {
  return (
    <div className="phone-shell" aria-label="Pula Pay mobile interface preview">
      <div className="phone-status">
        <span>9:41</span>
        <span>Base</span>
      </div>
      <div className="phone-screen">
        <div className="wallet-hero">
          <div className="wallet-label">Available balance</div>
          <div className="wallet-balance">124,800 <span>XOF</span></div>
          <div className="wallet-usdc">203.18 USDC</div>
          <div className="wallet-actions">
            <span>Deposit</span>
            <span>Send</span>
            <span>Withdraw</span>
          </div>
        </div>
        <div className="transfer-panel">
          <div className="panel-kicker">Transfer</div>
          <div className="recipient-row">
            <div>
              <span className="micro-label">Recipient</span>
              <strong>+229 61 23 45 67</strong>
            </div>
            <span className="found-pill">Found</span>
          </div>
          <div className="amount-row">
            <div>
              <span className="micro-label">Amount</span>
              <strong>25,000 XOF</strong>
            </div>
            <span>40.65 USDC</span>
          </div>
          <div className="challenge-box">
            <span>Circle challenge</span>
            <strong>PIN confirmation required</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArchitectureMap() {
  return (
    <div className="arch-map" aria-label="Pula Pay architecture map">
      {architecture.map(([title, body], index) => (
        <div className="arch-row" key={title}>
          <div className="arch-index">{String(index + 1).padStart(2, '0')}</div>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PulaPayCaseStudy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        :root {
          --ink: #101820;
          --paper: #f6f1e8;
          --muted: #6e766f;
          --line: rgba(16, 24, 32, 0.14);
          --mint: #18a999;
          --gold: #d9a441;
          --coral: #d45d4c;
          --navy: #14213d;
          --white: #fffaf2;
        }

        .page {
          min-height: 100vh;
          background:
            linear-gradient(90deg, rgba(16, 24, 32, 0.05) 1px, transparent 1px),
            linear-gradient(180deg, rgba(16, 24, 32, 0.05) 1px, transparent 1px),
            var(--paper);
          background-size: 56px 56px;
          color: var(--ink);
          font-family: Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 22px clamp(20px, 5vw, 64px);
          background: rgba(246, 241, 232, 0.86);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(18px);
        }

        .brand {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .nav a {
          color: var(--ink);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          gap: clamp(34px, 6vw, 88px);
          align-items: center;
          min-height: calc(100vh - 72px);
          padding: clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px) 64px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          color: var(--coral);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: '';
          width: 44px;
          height: 1px;
          background: var(--coral);
        }

        h1, h2, h3, p { margin-top: 0; }

        h1 {
          max-width: 820px;
          margin-bottom: 26px;
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(58px, 9vw, 124px);
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: 0;
        }

        .hero-copy {
          max-width: 650px;
          color: #465149;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.62;
        }

        .hero-copy strong { color: var(--ink); }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 20px;
          border: 1px solid var(--ink);
          background: var(--ink);
          color: var(--white);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .button.secondary {
          background: transparent;
          color: var(--ink);
        }

        .stage {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 28px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.62);
          box-shadow: 18px 18px 0 rgba(20, 33, 61, 0.08);
        }

        .stage-note {
          position: absolute;
          right: 24px;
          bottom: 20px;
          max-width: 164px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.45;
        }

        .phone-shell {
          width: min(330px, 100%);
          padding: 14px;
          border: 2px solid #121820;
          border-radius: 34px;
          background: #0d1117;
          box-shadow: 0 34px 80px rgba(16, 24, 32, 0.28);
        }

        .phone-status {
          display: flex;
          justify-content: space-between;
          padding: 4px 12px 12px;
          color: rgba(255, 250, 242, 0.56);
          font-size: 11px;
          font-weight: 700;
        }

        .phone-screen {
          min-height: 560px;
          padding: 16px;
          border-radius: 24px;
          background: #f8fafc;
        }

        .wallet-hero {
          padding: 22px;
          min-height: 204px;
          border-radius: 26px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(145deg, #122638, #0d1723);
          background-size: 32px 32px, 32px 32px, auto;
          color: var(--white);
        }

        .wallet-label, .micro-label, .panel-kicker {
          display: block;
          color: rgba(16, 24, 32, 0.54);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .wallet-label { color: rgba(255, 250, 242, 0.56); }

        .wallet-balance {
          margin-top: 12px;
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 0;
        }

        .wallet-balance span {
          color: rgba(255, 250, 242, 0.5);
          font-size: 15px;
        }

        .wallet-usdc {
          margin-top: 4px;
          color: rgba(255, 250, 242, 0.58);
          font-size: 13px;
          font-weight: 600;
        }

        .wallet-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 24px;
        }

        .wallet-actions span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 34px;
          border: 1px solid rgba(255, 250, 242, 0.16);
          border-radius: 999px;
          background: rgba(255, 250, 242, 0.08);
          font-size: 11px;
          font-weight: 800;
        }

        .transfer-panel {
          margin-top: 16px;
          padding: 18px;
          border: 1px solid rgba(16, 24, 32, 0.1);
          border-radius: 22px;
          background: #fff;
        }

        .recipient-row, .amount-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(16, 24, 32, 0.08);
        }

        .recipient-row strong, .amount-row strong {
          display: block;
          margin-top: 4px;
          color: var(--ink);
          font-size: 14px;
        }

        .found-pill {
          border-radius: 999px;
          padding: 5px 9px;
          background: rgba(24, 169, 153, 0.12);
          color: #08786c;
          font-size: 11px;
          font-weight: 800;
        }

        .amount-row > span {
          color: var(--mint);
          font-size: 12px;
          font-weight: 800;
        }

        .challenge-box {
          margin-top: 14px;
          padding: 14px;
          border-radius: 16px;
          background: #101820;
          color: var(--white);
        }

        .challenge-box span {
          display: block;
          margin-bottom: 5px;
          color: rgba(255, 250, 242, 0.52);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .section {
          padding: 92px clamp(20px, 5vw, 64px);
          border-top: 1px solid var(--line);
        }

        .section-head {
          display: grid;
          grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(24px, 5vw, 72px);
          align-items: end;
          margin-bottom: 44px;
        }

        .section-kicker {
          color: var(--coral);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h2 {
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
        }

        .section-head p {
          margin-bottom: 0;
          color: #4d594f;
          font-size: 17px;
          line-height: 1.7;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.66);
        }

        .demo-card {
          min-height: 250px;
          padding: 28px;
          border-right: 1px solid var(--line);
        }

        .demo-card:last-child { border-right: 0; }

        .demo-card span {
          color: var(--gold);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .demo-card h3 {
          margin: 54px 0 12px;
          font-size: 21px;
          letter-spacing: 0;
        }

        .demo-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .architecture-wrap {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 28px;
          align-items: stretch;
        }

        .quote-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 520px;
          padding: clamp(28px, 4vw, 48px);
          background: #101820;
          color: var(--white);
        }

        .quote-panel blockquote {
          margin: 0;
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.05;
          letter-spacing: 0;
        }

        .quote-panel p {
          max-width: 440px;
          margin: 32px 0 0;
          color: rgba(255, 250, 242, 0.62);
          font-size: 15px;
          line-height: 1.7;
        }

        .stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 36px;
        }

        .stack-tags span {
          padding: 8px 10px;
          border: 1px solid rgba(255, 250, 242, 0.18);
          color: rgba(255, 250, 242, 0.72);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .arch-map {
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.72);
        }

        .arch-row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 22px;
          padding: 28px;
          border-bottom: 1px solid var(--line);
        }

        .arch-row:last-child { border-bottom: 0; }

        .arch-index {
          color: var(--coral);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .arch-row h3 {
          margin-bottom: 8px;
          font-size: 18px;
        }

        .arch-row p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .proof-item {
          min-height: 148px;
          padding: 24px;
          background: var(--paper);
        }

        .proof-item::before {
          content: '';
          display: block;
          width: 28px;
          height: 3px;
          margin-bottom: 24px;
          background: var(--mint);
        }

        .proof-item p {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.45;
        }

        .script {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
        }

        .script-box {
          padding: 34px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.72);
        }

        .script-box h3 {
          margin-bottom: 18px;
          color: var(--coral);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .script-box p {
          margin-bottom: 0;
          color: #354038;
          font-size: 18px;
          line-height: 1.72;
        }

        .footer {
          padding: 42px clamp(20px, 5vw, 64px);
          border-top: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          gap: 24px;
          color: var(--muted);
          font-size: 13px;
        }

        @media (max-width: 980px) {
          .hero,
          .section-head,
          .architecture-wrap,
          .script {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
          }

          .demo-grid,
          .proof-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .demo-card:nth-child(2) {
            border-right: 0;
          }

          .demo-card:nth-child(1),
          .demo-card:nth-child(2) {
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 640px) {
          .nav {
            position: static;
          }

          .nav a:nth-of-type(1) {
            display: none;
          }

          .hero,
          .section {
            padding-left: 18px;
            padding-right: 18px;
          }

          h1 {
            font-size: clamp(48px, 18vw, 70px);
          }

          .stage {
            padding: 14px;
            box-shadow: none;
          }

          .stage-note {
            position: static;
            margin-top: 18px;
          }

          .demo-grid,
          .proof-grid {
            grid-template-columns: 1fr;
          }

          .demo-card,
          .demo-card:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .demo-card:last-child {
            border-bottom: 0;
          }

          .arch-row {
            grid-template-columns: 42px 1fr;
            padding: 22px;
          }

          .phone-screen {
            min-height: 520px;
          }

          .footer {
            flex-direction: column;
          }
        }
      `}</style>

      <main className="page">
        <nav className="nav">
          <a href="/">hfreshnel</a>
          <div className="brand">Pula Pay</div>
          <a href="#architecture">Architecture</a>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">Flagship fintech system</div>
            <h1>Universal African money account.</h1>
            <p className="hero-copy">
              Pula Pay is a full-stack fintech prototype for managing <strong>USDC wallets</strong>,
              fiat on/off-ramp flows, and peer-to-peer transfers through a mobile experience
              that feels familiar while the backend behaves like a real financial system.
            </p>
            <div className="hero-actions">
              <a className="button" href="#demo">View demo story</a>
              <a className="button secondary" href="#script">Read the pitch</a>
            </div>
          </div>

          <div className="stage">
            <PhoneDemo />
            <p className="stage-note">
              The demo is framed around the strongest moment: send money by phone while Circle signs the USDC transfer.
            </p>
          </div>
        </section>

        <section id="demo" className="section">
          <div className="section-head">
            <div>
              <div className="section-kicker">Cinematic demo</div>
              <h2>Simple on screen. Serious underneath.</h2>
            </div>
            <p>
              The story should move like a product trailer: dashboard, recipient, amount,
              secure signing, completion. Each shot reveals a user benefit and one engineering
              reason to trust the system.
            </p>
          </div>

          <div className="demo-grid">
            {demoBeats.map((beat) => (
              <article className="demo-card" key={beat.step}>
                <span>{beat.step}</span>
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="section">
          <div className="section-head">
            <div>
              <div className="section-kicker">Architecture story</div>
              <h2>Clean architecture for money movement.</h2>
            </div>
            <p>
              The technical story is not a stack list. It is a control story: isolate financial
              rules in the domain, talk to providers through ports, and make async payment flows
              observable, retryable, and auditable.
            </p>
          </div>

          <div className="architecture-wrap">
            <div className="quote-panel">
              <div>
                <blockquote>
                  A mobile money experience backed by self-custodied USDC and ledger-grade accounting.
                </blockquote>
                <p>
                  Circle handles user-controlled wallet signing, Coinbase CDP handles fiat rails,
                  and the backend keeps the business invariants independent from both providers.
                </p>
              </div>
              <div className="stack-tags">
                <span>Express</span>
                <span>TypeScript</span>
                <span>Prisma</span>
                <span>XState</span>
                <span>BullMQ</span>
                <span>React Native</span>
                <span>Circle</span>
                <span>Coinbase CDP</span>
              </div>
            </div>
            <ArchitectureMap />
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="section-kicker">Proof points</div>
              <h2>Signals that raise the ceiling.</h2>
            </div>
            <p>
              These are the details to surface in screenshots, captions, interview answers,
              and the architecture slide. They tell reviewers this is more than a CRUD app.
            </p>
          </div>

          <div className="proof-grid">
            {proofPoints.map((point) => (
              <div className="proof-item" key={point}>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="script" className="section">
          <div className="section-head">
            <div>
              <div className="section-kicker">Concise explanations</div>
              <h2>Three pitches for one project.</h2>
            </div>
            <p>
              The portfolio page should make the value obvious, but the spoken explanation
              needs to be ready too. These can be reused in interviews and demo videos.
            </p>
          </div>

          <div className="script">
            <div className="script-box">
              <h3>10 seconds</h3>
              <p>
                Pula Pay is a universal African money account that lets users buy, hold,
                send, and cash out USDC through a mobile-first experience.
              </p>
            </div>
            <div className="script-box">
              <h3>30 seconds</h3>
              <p>
                I built a fintech prototype with a React Native app and a clean TypeScript
                backend. Users get Circle user-controlled wallets, fiat on/off-ramp through
                Coinbase CDP, and peer-to-peer transfers by phone number. Under the hood,
                the system uses XState for transaction lifecycles, BullMQ for async payment
                polling, and a double-entry ledger so money movement stays auditable.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Pula Pay case study</span>
          <span>Prototype / usable full-stack fintech platform</span>
        </footer>
      </main>
    </>
  )
}
