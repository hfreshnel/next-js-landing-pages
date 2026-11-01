import type { Rich } from './types'

export const site = {
  name: 'Freshnel Houenou',
  role: 'Ingénieur logiciel · France',
  thesis: 'Je construis des produits où chaque paiement et chaque réponse d’IA doivent pouvoir se vérifier.',
  status: 'Ouvert aux propositions',
  email: 'hfreshnel@gmail.com',
  github: 'https://github.com/hfreshnel',
  description:
    'Freshnel Houenou, ingénieur logiciel en France : applications mobiles, API, paiements et IA appliquée, avec des contrôles vérifiables.',
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
  lede: 'Ingénieur logiciel, je développe des applications mobiles, des API et des outils qui relient des usages concrets à des systèmes fiables. Mes projets vont du paiement mobile à l’IA appliquée, en solo ou en équipe. En parallèle, j’expérimente des modèles locaux pour l’automatisation, l’image, la vidéo et la 3D.',
  body: [
    'D’un projet à l’autre, je cherche à ',
    {
      claim: 'rendre fiables les opérations qui ne le sont pas par défaut',
      kind: 'Insight',
      note: 'Un webhook peut manquer ; un modèle de langage peut produire un chiffre absent de sa source. Dans les deux cas, je ne traite pas le message comme une preuve : je le confronte à une source vérifiable, puis je confie au code les contrôles qu’il peut effectuer sans ambiguïté.',
    },
    ' : les transferts d’argent, avec un ledger en partie double et des webhooks vérifiés, et les résultats d’IA, avec des citations contrôlées et des calculs confiés au code.',
  ],
}

/** `years: null` = information à fournir, affichée comme un emplacement visible. */
export const parcours: Array<{ years: string | null; title: string; detail: string }> = [
  { years: '2022 → 2025', title: 'Diplôme d’ingénieur généraliste', detail: 'ESIGELEC, Rouen' },
  { years: '2025 → 2026', title: 'Cinq projets, du paiement mobile à l’IA appliquée', detail: 'Voir les projets' },
  { years: '2026', title: 'Expérimentations locales en IA, image, vidéo et 3D', detail: 'Voir les expérimentations' },
]

// Outils réellement utilisés dans les projets présentés (voir les profils).
export const stack: Array<{ domain: string; items: string[] }> = [
  { domain: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'TanStack Query', 'Zustand'] },
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
