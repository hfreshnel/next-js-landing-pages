import type { Rich } from './types'

export const site = {
  name: 'Freshnel Houenou',
  role: 'Ingénieur logiciel · France',
  thesis: "Je construis des produits où l'argent et l'IA doivent tomber juste.",
  status: 'Ouvert aux propositions',
  email: 'hfreshnel@gmail.com',
  github: 'https://github.com/hfreshnel',
  description:
    "Freshnel Houenou, ingénieur logiciel : apps mobiles, API et paiements pour l'Afrique francophone, IA encadrée par du code vérifiable.",
}

export const sections = [
  { id: 'apropos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'experimentations', label: 'Expérimentations' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const

export const about: { lede: string; body: Rich } = {
  lede: "Ingénieur logiciel, je conçois des produits complets, de l'app mobile à l'API. Mes cinq derniers projets, menés seul ou en équipe, vont du paiement mobile à l'IA appliquée. À côté, j'expérimente l'IA en local : agents, 3D, image et vidéo.",
  body: [
    'Dans chacun, je cherche à ',
    {
      claim: "rendre fiable ce qui ne l'est pas par défaut",
      kind: 'Insight',
      note: "Un webhook peut ne jamais arriver, un modèle de langage peut inventer un chiffre. Le problème est le même dans les deux cas : un message qu'on ne peut pas croire sur parole. La réponse aussi : le vérifier contre une autre source, et laisser le dernier mot au code.",
    },
    " : les flux d'argent, avec un ledger en partie double et des webhooks vérifiés, et les sorties d'IA, avec des citations contrôlées et des calculs confiés au code.",
  ],
}

/** `years: null` = information à fournir, affichée comme un emplacement visible. */
export const parcours: Array<{ years: string | null; title: string; detail: string }> = [
  { years: null, title: "Diplôme d'ingénieur généraliste", detail: 'ESIGELEC, Rouen' },
  { years: '2025 → 2026', title: "Cinq projets, du paiement mobile à l'IA appliquée", detail: 'Détail dans la section Projets' },
  { years: '2026', title: "Expérimentations d'IA en local", detail: 'Détail dans la section Expérimentations' },
]

// Outils réellement utilisés dans les projets présentés (voir les profils).
export const stack: Array<{ domain: string; items: string[] }> = [
  { domain: 'Mobile', items: ['React Native', 'Expo', 'expo-router', 'TanStack Query', 'Zustand'] },
  { domain: 'Web', items: ['TypeScript', 'React', 'Next.js'] },
  { domain: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Pydantic'] },
  { domain: 'Données', items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Redis', 'BullMQ'] },
  { domain: 'Temps réel et identité', items: ['Centrifugo', 'Keycloak (OIDC, JWKS)', 'Better Auth'] },
  { domain: 'Paiement', items: ['Circle', 'Coinbase CDP', 'FeexPay (Mobile Money)'] },
  { domain: 'IA et automatisation', items: ['OpenAI', 'n8n', 'Whisper'] },
  { domain: 'IA locale', items: ['llama.cpp', 'ComfyUI', 'Blender (Python)', 'faster-whisper'] },
  { domain: 'Vidéo programmatique', items: ['Remotion', 'ffmpeg'] },
  { domain: 'Qualité', items: ['Jest', 'MSW', 'pytest', 'Sentry'] },
]
