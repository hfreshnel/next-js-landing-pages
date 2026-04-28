'use client'

import { useState } from 'react'
import LandingLayout from '@/components/LandingLayout'
import { trackEvent } from '@/lib/track'

const LANDING_ID = 'flexyflex'
const CI_PHONE_RE = /^\+225\d{10}$/

const userBenefits = [
  'Achetez immédiatement, payez plus tard',
  'Aucun frais caché, transparence totale',
  'Via Orange Money, MTN MoMo ou Wave CI',
  'Approuvé en moins de 2 heures',
  'Réseau croissant de marchands partenaires',
]

const employerBenefits = [
  "Solution d'avantages sociaux innovante",
  "Amélioration du pouvoir d'achat de vos équipes",
  "Aucun coût ni engagement pour l'employeur",
  "Prélèvement automatisé sur salaire via Mobile Money",
]

const merchantBenefits = [
  'Paiement garanti et immédiat à 100%',
  "Accédez à une clientèle au pouvoir d'achat amplifié",
  'Onboarding gratuit et accompagnement dédié',
  'Tableau de bord de gestion intégré',
]

const userSteps = [
  { n: '1', title: 'Inscrivez-vous', body: 'Téléchargez votre fiche de paie. Validation en 2h.' },
  { n: '2', title: 'Achetez', body: 'Scannez le QR code chez nos marchands partenaires.' },
  { n: '3', title: 'Payez', body: 'Choisissez 2x, 3x ou 4x via Mobile Money.' },
]

const merchantSteps = [
  { n: '1', title: 'Rejoignez', body: 'Inscription en ligne, validation sous 24h.' },
  { n: '2', title: 'Vendez', body: 'Générez un QR code pour chaque transaction.' },
  { n: '3', title: 'Encaissez', body: 'Recevez 100% du montant immédiatement.' },
]

const partners = [
  'Auchan', 'Carrefour CI', 'Score', 'Pharmivoire',
  'Les Nouvelles Pharmacies', 'Electroland', 'Samsung Store',
  'WAX', 'ABC Fashion', 'Hayat', 'Leader Price', 'Sococé',
]

const faqs = [
  {
    q: 'Qui peut utiliser FlexyFlex ?',
    a: "FlexyFlex est réservé aux salariés déclarés à la CNPS en Côte d'Ivoire. Vous devez fournir une fiche de paie pour validation.",
  },
  {
    q: 'Quels sont les frais pour le consommateur ?',
    a: "Les frais sont fixes et affichés avant confirmation. Pas d'intérêt caché, pas de surprise. Vous connaissez le montant exact avant de valider.",
  },
  {
    q: 'Comment sont sécurisées mes données ?',
    a: "Toutes vos données sont chiffrées et stockées de manière sécurisée. Nous ne partageons jamais vos informations sans votre consentement.",
  },
  {
    q: 'Mon marchand propose-t-il FlexyFlex ?',
    a: "FlexyFlex est en cours de déploiement à Abidjan. Rejoignez la liste d'attente pour être notifié dès qu'un marchand proche de chez vous est disponible.",
  },
  {
    q: "Que se passe-t-il si je rate un remboursement ?",
    a: "En cas de retard, notre équipe vous contacte directement par SMS. Aucune pénalité abusive — nous trouvons une solution ensemble.",
  },
  {
    q: 'Comment devenir marchand partenaire ?',
    a: "Remplissez le formulaire de partenariat. Notre équipe vous contacte sous 24h pour finaliser votre onboarding et vous remettre votre QR code.",
  },
]

// ─── Visuals ───────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div style={{
      width: 240, background: '#0f0f1f', borderRadius: 36,
      padding: '16px 14px', boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
      border: '3px solid #2a2a3a', fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, padding: '0 4px' }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>9:41</span>
        <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end' }}>
          {[4, 6, 8, 10].map((h, i) => (
            <div key={i} style={{ width: 3, height: h, borderRadius: 2, background: i < 3 ? '#FF6B00' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px 0 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 14 }}>
        <span style={{ fontSize: 14, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
          Flexy<span style={{ color: '#FF6B00' }}>Flex</span>
        </span>
      </div>
      <div style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)', borderRadius: 10, padding: '10px 12px', marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>Montant total</div>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>89 000 FCFA</div>
        <div style={{ fontSize: 10, color: '#FF6B00', marginTop: 2 }}>Electroland CI</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
        {[{ t: '2x', a: '44 500', s: false }, { t: '3x', a: '29 667', s: true }, { t: '4x', a: '22 250', s: false }].map((o) => (
          <div key={o.t} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 10px', borderRadius: 8,
            background: o.s ? '#FF6B00' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${o.s ? '#FF6B00' : 'rgba(255,255,255,0.08)'}`,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>Payer en {o.t}</div>
              <div style={{ fontSize: 10, color: o.s ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)' }}>{o.a} FCFA/mois</div>
            </div>
            {o.s && <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF6B00' }} />
            </div>}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 5, justifyContent: 'center', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: 10 }}>
        {[['Orange', '#FF6B00'], ['MTN', '#ffd600'], ['Wave', '#0096ff']].map(([n, c]) => (
          <div key={n} style={{ fontSize: 9, fontWeight: 700, padding: '3px 7px', borderRadius: 5, background: `${c}22`, color: c }}>{n}</div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', borderRadius: 8, background: '#FF6B00', color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>
        Confirmer le paiement
      </div>
    </div>
  )
}

function EmployerVisual() {
  return (
    <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid #ebebeb', maxWidth: 320 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>Tableau RH</div>
          <div style={{ fontSize: 11, color: '#888' }}>Cocody Group · Abidjan</div>
        </div>
        <div style={{ padding: '3px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 11, fontWeight: 700, color: '#16a34a' }}>Actif</div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Employés inscrits</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#1A1A2E' }}>124 / 250</span>
        </div>
        <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3 }}>
          <div style={{ width: '50%', height: '100%', background: '#FF6B00', borderRadius: 3 }} />
        </div>
      </div>
      {[['Kouassi A.', '45 000 FCFA', true], ['Bamba F.', '89 000 FCFA', false], ['Touré M.', '32 000 FCFA', true]].map(([n, a, ok]) => (
        <div key={n as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#FF6B00' }}>
              {(n as string)[0]}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A2E' }}>{n as string}</div>
              <div style={{ fontSize: 11, color: '#888' }}>{a as string}</div>
            </div>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: ok ? '#16a34a' : '#FF6B00', padding: '3px 8px', borderRadius: 100, background: ok ? 'rgba(34,197,94,0.08)' : 'rgba(255,107,0,0.08)' }}>
            {ok ? 'Remboursé' : 'En cours'}
          </span>
        </div>
      ))}
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 4 }}>Prélèvement automatique actif</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A2E' }}>0 FCFA de coût employeur</div>
      </div>
    </div>
  )
}

function MerchantVisual() {
  return (
    <div style={{ background: '#1A1A2E', borderRadius: 20, padding: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.25)', maxWidth: 320 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Mes ventes</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Electroland CI · Avril 2026</div>
        </div>
        <div style={{ padding: '3px 10px', borderRadius: 100, background: 'rgba(255,107,0,0.2)', border: '1px solid rgba(255,107,0,0.3)', fontSize: 11, fontWeight: 700, color: '#FF6B00' }}>Ce mois</div>
      </div>
      <div style={{ background: 'rgba(255,107,0,0.1)', borderRadius: 12, padding: '12px 14px', marginBottom: 14, border: '1px solid rgba(255,107,0,0.2)' }}>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>Encaissé ce mois</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>4 820 000 <span style={{ fontSize: 13, color: '#FF6B00' }}>FCFA</span></div>
        <div style={{ fontSize: 11, color: 'rgba(74,222,128,0.9)', marginTop: 2 }}>+34% vs mois dernier</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 52, marginBottom: 14 }}>
        {[40, 65, 45, 80, 55, 90, 72].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 5 ? '#FF6B00' : 'rgba(255,255,255,0.12)' }} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[['Transactions', '156'], ['Délai paiement', '< 2h'], ['Taux succès', '99.4%'], ['Impayés', '0']].map(([l, v]) => (
          <div key={l} style={{ padding: '10px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>{v}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: '#FF6B00', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, textAlign: 'center', margin: '0 0 12px', color: '#1A1A2E', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          Questions fréquentes
        </h2>
        <p style={{ textAlign: 'center', fontSize: 16, color: '#666', margin: '0 0 52px' }}>
          Les réponses aux questions les plus fréquentes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 14 }}>
          {faqs.map((f, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} className="ff-faq" style={{ borderRadius: 14, border: '1px solid #ebebeb', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 22px', background: open === i ? '#fafafa' : '#fff' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', flex: 1, paddingRight: 16, lineHeight: 1.4 }}>{f.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
                  <path d="M6 9L12 15L18 9" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {open === i && (
                <div style={{ padding: '0 22px 18px', background: '#fafafa' }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#555', margin: 0 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Modals ────────────────────────────────────────────────────────────────

function ModalShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflowY: 'auto' }}
      onClick={onClose}
    >
      <div style={{ background: '#fff', borderRadius: 20, padding: '40px 36px', maxWidth: 500, width: '100%', position: 'relative', boxShadow: '0 40px 80px rgba(0,0,0,0.2)', margin: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 18, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#aaa', lineHeight: 1 }}>×</button>
        {children}
      </div>
    </div>
  )
}

function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!CI_PHONE_RE.test(phone.trim())) { setError('Entrez un numéro ivoirien valide au format +225XXXXXXXXXX'); return }
    setError('')
    trackEvent(LANDING_ID, 'conversion', { action: 'waitlist_signup', phone_prefix: phone.slice(0, 8) })
    setSubmitted(true)
  }

  return (
    <ModalShell onClose={onClose}>
      <h2 style={{ fontSize: 22, fontWeight: 900, color: '#1A1A2E', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Rejoindre la liste d'attente</h2>
      <p style={{ fontSize: 14, color: '#666', margin: '0 0 28px', lineHeight: 1.6 }}>Soyez notifié dès qu'un marchand FlexyFlex ouvre près de chez vous.</p>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
          <p style={{ fontSize: 17, fontWeight: 700, color: '#1A1A2E', margin: '0 0 8px' }}>Votre numéro est enregistré.</p>
          <p style={{ fontSize: 14, color: '#555' }}>On vous contacte dès le lancement dans votre zone.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 8 }}>Numéro de téléphone *</label>
          <input type="tel" placeholder="+225 07 XX XX XX XX" value={phone} onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '14px 18px', borderRadius: 10, border: error ? '2px solid #e53e3e' : '2px solid #e0e0e0', fontSize: 15, outline: 'none', fontFamily: 'inherit', color: '#1A1A2E', boxSizing: 'border-box', marginBottom: 8 }}
          />
          {error && <p style={{ fontSize: 12, color: '#e53e3e', margin: '0 0 10px' }}>{error}</p>}
          <p style={{ fontSize: 11, color: '#888', margin: '0 0 20px' }}>Format : +225XXXXXXXXXX · Numéro ivoirien uniquement</p>
          <button type="submit" style={{ width: '100%', padding: '15px', background: '#FF6B00', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>
            Je m'inscris
          </button>
        </form>
      )}
    </ModalShell>
  )
}

function MerchantModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ company: '', firstname: '', lastname: '', phone: '', sector: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.company || !form.firstname || !form.phone || !form.sector) { setError('Veuillez remplir tous les champs obligatoires.'); return }
    if (!CI_PHONE_RE.test(form.phone.trim())) { setError('Entrez un numéro ivoirien valide au format +225XXXXXXXXXX'); return }
    setError('')
    trackEvent(LANDING_ID, 'conversion', { action: 'merchant_signup', sector: form.sector })
    setSubmitted(true)
  }

  const inp: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: 10, border: '2px solid #e0e0e0', fontSize: 14, outline: 'none', fontFamily: 'inherit', color: '#1A1A2E', boxSizing: 'border-box' }
  const lbl: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 6 }

  return (
    <ModalShell onClose={onClose}>
      <h2 style={{ fontSize: 22, fontWeight: 900, color: '#1A1A2E', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Rejoindre le réseau marchand</h2>
      <p style={{ fontSize: 14, color: '#666', margin: '0 0 24px', lineHeight: 1.6 }}>Devenez partenaire FlexyFlex et offrez le paiement fractionné à vos clients.</p>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>✅</div>
          <p style={{ fontSize: 17, fontWeight: 700, color: '#1A1A2E', margin: '0 0 8px' }}>Demande envoyée !</p>
          <p style={{ fontSize: 14, color: '#555' }}>Notre équipe vous contacte sous 24h pour finaliser votre onboarding.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div><label style={lbl}>Nom de l'entreprise *</label><input type="text" placeholder="Ex : Electroland CI" value={form.company} onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))} style={inp} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div><label style={lbl}>Prénom *</label><input type="text" placeholder="Jean" value={form.firstname} onChange={(e) => setForm(f => ({ ...f, firstname: e.target.value }))} style={inp} /></div>
            <div><label style={lbl}>Nom *</label><input type="text" placeholder="Koné" value={form.lastname} onChange={(e) => setForm(f => ({ ...f, lastname: e.target.value }))} style={inp} /></div>
          </div>
          <div><label style={lbl}>Téléphone Mobile Money *</label><input type="tel" placeholder="+225 07 XX XX XX XX" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} style={inp} /></div>
          <div>
            <label style={lbl}>Secteur d'activité *</label>
            <select value={form.sector} onChange={(e) => setForm(f => ({ ...f, sector: e.target.value }))} style={{ ...inp, background: '#fff' }}>
              <option value="">Sélectionnez votre secteur</option>
              <option value="retail">Commerce de détail</option>
              <option value="electronics">Électronique</option>
              <option value="fashion">Mode & Accessoires</option>
              <option value="pharmacy">Pharmacie & Santé</option>
              <option value="furniture">Mobilier & Décoration</option>
              <option value="food">Alimentation</option>
              <option value="services">Services</option>
              <option value="other">Autre</option>
            </select>
          </div>
          {error && <p style={{ fontSize: 12, color: '#e53e3e', margin: 0 }}>{error}</p>}
          <button type="submit" style={{ padding: '15px', background: '#FF6B00', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }}>
            Envoyer la demande
          </button>
        </form>
      )}
    </ModalShell>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function LandingFlexyFlex() {
  const [merchantOpen, setMerchantOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  function openMerchant() { trackEvent(LANDING_ID, 'conversion', { action: 'merchant_modal_open' }); setMerchantOpen(true) }
  function openWaitlist() { trackEvent(LANDING_ID, 'conversion', { action: 'waitlist_modal_open' }); setWaitlistOpen(true) }

  return (
    <LandingLayout landingId={LANDING_ID} style={{ backgroundColor: '#1A1A2E', padding: 0, justifyContent: 'flex-start' }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .ff-animate { animation: fadeUp 0.6s ease both; }
        .ff-animate-2 { animation: fadeUp 0.6s 0.15s ease both; }
        .ff-animate-3 { animation: fadeUp 0.6s 0.3s ease both; }

        .ff-nav-link { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.15s; }
        .ff-nav-link:hover { color: #fff; }

        .ff-btn-primary { background:#FF6B00; color:#fff; border:none; padding:14px 32px; border-radius:10px; font-size:15px; font-weight:700; cursor:pointer; transition:background-color 0.15s, transform 0.15s; letter-spacing:-0.01em; font-family:inherit; }
        .ff-btn-primary:hover { background:#e55e00; transform:translateY(-1px); }

        .ff-btn-outline { background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.3); padding:13px 32px; border-radius:10px; font-size:15px; font-weight:600; cursor:pointer; transition:border-color 0.15s, background 0.15s; font-family:inherit; }
        .ff-btn-outline:hover { border-color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.06); }

        .ff-btn-dark { background:#1A1A2E; color:#fff; border:none; padding:14px 32px; border-radius:10px; font-size:15px; font-weight:700; cursor:pointer; transition:background-color 0.15s; font-family:inherit; }
        .ff-btn-dark:hover { background:#111127; }

        .ff-step-card { background:#fff; border:1px solid #ebebeb; border-radius:16px; padding:28px 24px; transition:transform 0.2s, box-shadow 0.2s; }
        .ff-step-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,0.08); }

        .ff-merchant-card { background:#fff; border:1px solid #e8e8e8; border-radius:10px; padding:14px 20px; font-size:14px; font-weight:600; color:#1A1A2E; text-align:center; transition:border-color 0.15s, box-shadow 0.15s; }
        .ff-merchant-card:hover { border-color:#FF6B00; box-shadow:0 4px 20px rgba(255,107,0,0.12); }

        .ff-faq { transition:box-shadow 0.15s; }
        .ff-faq:hover { box-shadow:0 4px 20px rgba(0,0,0,0.06); }

        @media (max-width: 768px) {
          .ff-nav-menu { display:none; }
          .ff-hero-inner { flex-direction:column; text-align:center; padding-bottom:60px; }
          .ff-hero-inner > div:first-child { align-items:center; }
          .ff-split { flex-direction:column; }
          .ff-split-reverse { flex-direction:column; }
          .ff-phone-wrap { display:flex; justify-content:center; }
          .ff-stats-grid { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', fontFamily: 'system-ui,-apple-system,"Segoe UI",sans-serif', backgroundColor: '#fff', color: '#1A1A2E', overflowX: 'hidden' }}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #2d2050 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: -120, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Header */}
          <header style={{ padding: '0 24px' }}>
            <div style={{ maxWidth: 1060, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <a href="#" style={{ fontSize: 20, fontWeight: 900, color: '#fff', textDecoration: 'none', letterSpacing: '-0.03em' }}>
                Flexy<span style={{ color: '#FF6B00' }}>Flex</span>
              </a>
              <nav className="ff-nav-menu" style={{ display: 'flex', gap: 32 }}>
                <a href="#accueil" className="ff-nav-link">Accueil</a>
                <a href="#comment-ca-marche" className="ff-nav-link">Comment ça marche</a>
                <a href="#faq" className="ff-nav-link">FAQ</a>
              </nav>
              <button className="ff-btn-primary" style={{ padding: '10px 22px', fontSize: 13 }} onClick={openMerchant}>
                Rejoindre le réseau marchand
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div id="accueil" className="ff-hero-inner" style={{ maxWidth: 1060, margin: '0 auto', padding: '80px 24px 100px', display: 'flex', alignItems: 'center', gap: 60, justifyContent: 'space-between' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 560 }}>
              <h1 className="ff-animate" style={{ fontSize: 'clamp(32px, 5.5vw, 58px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Payez en 2x, 3x ou 4x<br />
                <span style={{ color: '#FF6B00' }}>sans stress financier</span>
              </h1>
              <p className="ff-animate-2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: '0 0 40px', maxWidth: 480 }}>
                Via <strong style={{ color: '#fff' }}>Orange Money, MTN MoMo ou Wave CI</strong>.
                Frais fixes. Transparent. Disponible pour tous les salariés CNPS.
              </p>
              <div className="ff-animate-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="ff-btn-primary" onClick={openWaitlist}>Télécharger l'app</button>
                <button className="ff-btn-outline" onClick={openMerchant}>Découvrir l'offre marchand</button>
              </div>
            </div>
            <div className="ff-phone-wrap" style={{ flexShrink: 0 }}>
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ─────────────────────────────────────────────────── */}
        <section style={{ background: '#FF6B00', padding: '52px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)', fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.06em' }}>
              2x, 3x, 4x
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: '#fff', margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Achetez maintenant et
            </h2>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: '#fff', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              payez en plusieurs fois
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              Profitez de notre réseau de marchands partenaires
            </p>
          </div>
        </section>

        {/* ── LIBÉREZ VOTRE POUVOIR D'ACHAT (particuliers) ──────────────── */}
        <section style={{ padding: '100px 24px', background: '#fff' }}>
          <div className="ff-split" style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="ff-phone-wrap" style={{ flexShrink: 0 }}>
              <PhoneMockup />
            </div>
            <div style={{ flex: 1, maxWidth: 520 }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900, margin: '0 0 16px', color: '#1A1A2E', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Libérez votre pouvoir d'achat
              </h2>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px' }}>
                Avec FlexyFlex, nous offrons une solution digitale de paiement fractionné unique — sans carte bancaire, sans dossier complexe.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {userBenefits.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </span>
                    <span style={{ fontSize: 15, color: '#333', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <button className="ff-btn-primary" onClick={openWaitlist}>Commencer maintenant</button>
            </div>
          </div>
        </section>

        {/* ── OFFRE EMPLOYEURS ───────────────────────────────────────────── */}
        <section style={{ padding: '100px 24px', background: '#fafafa' }}>
          <div className="ff-split-reverse" style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, maxWidth: 520 }}>
              <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', fontSize: 12, fontWeight: 700, color: '#FF6B00', marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Offre Entreprise
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900, margin: '0 0 16px', color: '#1A1A2E', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Boostez le bien-être de vos employés
              </h2>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px' }}>
                Offrez FlexyFlex à vos équipes comme avantage social. Zéro coût, zéro risque, 100% apprécié.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {employerBenefits.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </span>
                    <span style={{ fontSize: 15, color: '#333', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <button className="ff-btn-dark" onClick={() => { trackEvent(LANDING_ID, 'conversion', { action: 'employer_contact' }); setWaitlistOpen(true) }}>
                Prendre un rendez-vous
              </button>
            </div>
            <div style={{ flexShrink: 0 }}>
              <EmployerVisual />
            </div>
          </div>
        </section>

        {/* ── AUGMENTEZ VOS VENTES (commerçants) ────────────────────────── */}
        <section style={{ padding: '100px 24px', background: '#fff' }}>
          <div className="ff-split" style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flexShrink: 0 }}>
              <MerchantVisual />
            </div>
            <div style={{ flex: 1, maxWidth: 520 }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900, margin: '0 0 16px', color: '#1A1A2E', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Augmentez vos ventes de{' '}
                <span style={{ color: '#FF6B00' }}>40% en moyenne</span>
              </h2>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px' }}>
                Proposez le paiement en plusieurs fois à vos clients. Soyez payé immédiatement à 100%. FlexyFlex porte le risque.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {merchantBenefits.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </span>
                    <span style={{ fontSize: 15, color: '#333', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <button className="ff-btn-primary" onClick={openMerchant}>Commencer maintenant</button>
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ───────────────────────────────────────────────── */}
        <section style={{ background: '#1A1A2E', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 1060, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
              Construit pour la Côte d'Ivoire
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: '0 0 56px' }}>
              FlexyFlex est conçu dès le départ pour le marché ivoirien — Mobile Money, salariés CNPS, marchands locaux.
            </p>
            <div className="ff-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {[
                { v: '100%', l: 'Paiement immédiat marchand' },
                { v: '< 2h', l: "Délai de validation" },
                { v: '0 FCFA', l: "Coût pour l'employeur" },
                { v: '2026', l: 'Lancement à Abidjan' },
              ].map((s) => (
                <div key={s.l} style={{ padding: '28px 20px', borderRadius: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: 34, fontWeight: 900, color: '#FF6B00', letterSpacing: '-0.02em', marginBottom: 8 }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMENT ÇA MARCHE ─────────────────────────────────────────── */}
        <section id="comment-ca-marche" style={{ padding: '100px 24px', background: '#fafafa' }}>
          <div style={{ maxWidth: 1060, margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: '#FF6B00', textTransform: 'uppercase', marginBottom: 16 }}>Comment ça marche</p>
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, textAlign: 'center', margin: '0 0 72px', color: '#1A1A2E', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Simple pour tous.
            </h2>

            {/* Consommateur */}
            <div style={{ marginBottom: 56 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px', borderRadius: 100, background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', fontSize: 13, fontWeight: 700, color: '#FF6B00', marginBottom: 28 }}>
                👤 Consommateur
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                {userSteps.map((s) => (
                  <div key={s.n} className="ff-step-card">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 16 }}>{s.n}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px', color: '#1A1A2E', letterSpacing: '-0.01em' }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.6 }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marchand */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 18px', borderRadius: 100, background: 'rgba(26,26,46,0.08)', border: '1px solid rgba(26,26,46,0.15)', fontSize: 13, fontWeight: 700, color: '#1A1A2E', marginBottom: 28 }}>
                🏪 Marchand
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                {merchantSteps.map((s) => (
                  <div key={s.n} className="ff-step-card">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1A1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 16 }}>{s.n}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px', color: '#1A1A2E', letterSpacing: '-0.01em' }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.6 }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MARCHANDS PARTENAIRES ─────────────────────────────────────── */}
        <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 42px)', fontWeight: 900, margin: '0 0 52px', color: '#1A1A2E', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Déjà 500+ marchands<br />partenaires vous attendent
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, marginBottom: 32 }}>
              {partners.map((p) => (
                <div key={p} className="ff-merchant-card">{p}</div>
              ))}
              <button className="ff-merchant-card" style={{ background: '#FF6B00', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }} onClick={openMerchant}>
                Rejoindre le réseau
              </button>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <FAQ />

        {/* ── FINAL CTA + FOOTER ────────────────────────────────────────── */}
        <section style={{ background: '#1A1A2E', padding: '80px 24px 0' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {/* CTA box */}
            <div style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #e05500 100%)', borderRadius: 20, padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 80 }}>
              <div>
                <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                  Prêt à prendre le contrôle ?
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: 0 }}>Rejoignez FlexyFlex dès aujourd'hui.</p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 14, color: '#1A1A2E', cursor: 'pointer', fontFamily: 'inherit' }} onClick={openWaitlist}>
                  <span style={{ fontSize: 20 }}>📱</span>
                  <span>Télécharger l'app</span>
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 10, fontWeight: 700, fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }} onClick={openMerchant}>
                  <span style={{ fontSize: 20 }}>🏪</span>
                  <span>Devenir Marchand</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div style={{ paddingBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FF6B00', letterSpacing: '-0.02em', marginBottom: 12 }}>
                    FlexyFlex
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '0 0 16px', maxWidth: 220, lineHeight: 1.6 }}>
                    La solution de paiement fractionné pour la Côte d'Ivoire.
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>© 2026 FlexyFlex. Tous droits réservés.</p>
                </div>
                {[
                  { title: 'Produit', links: ['Comment ça marche', 'Tarifs', 'Sécurité'] },
                  { title: 'Entreprise', links: ['À propos', 'Carrières', 'Presse'] },
                  { title: 'Support', links: ["Centre d'aide", 'Contact', 'CGU'] },
                ].map((col) => (
                  <div key={col.title}>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 16px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{col.title}</h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {col.links.map((l) => (
                        <li key={l}><a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{l}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {merchantOpen && <MerchantModal onClose={() => setMerchantOpen(false)} />}
      {waitlistOpen && <WaitlistModal onClose={() => setWaitlistOpen(false)} />}
    </LandingLayout>
  )
}
