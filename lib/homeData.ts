export type Project = {
  id: string
  name: string
  sector: string
  type: string
  stack: string[]
  problem: string
  solution: string
  result: string
  href: string | null
  demo: string | null
}

export const projects: Project[] = [
  {
    id: 'appartlink',
    name: 'AppartLink',
    sector: 'Proptech',
    type: 'MVP mobile',
    stack: ['React Native', 'Node.js', 'PostgreSQL'],
    problem: 'Les propriétaires perdaient des heures à gérer états des lieux et communication locataire via email et WhatsApp, sans traçabilité.',
    solution: "Application mobile centralisant la gestion locative : états des lieux digitaux, suivi des demandes d'intervention, messagerie intégrée.",
    result: 'MVP livré en 8 semaines, déployé sur App Store et Play Store.',
    href: '/landing/appartlink',
    demo: null,
  },
  {
    id: 'packloop',
    name: 'PackLoop',
    sector: 'Logistique',
    type: 'MVP mobile',
    stack: ['React Native', 'Express', 'MongoDB'],
    problem: 'À compléter.',
    solution: 'À compléter.',
    result: 'À compléter.',
    href: null,
    demo: null,
  },
  {
    id: 'pulapay',
    name: 'Pula Pay',
    sector: 'Fintech',
    type: 'MVP mobile',
    stack: ['React Native', 'Express', 'PostgreSQL'],
    problem: "Les PME africaines n'avaient pas accès à des outils de paiement adaptés à leurs flux métier spécifiques et aux contraintes de connectivité locale.",
    solution: 'Système de paiement mobile avec gestion des devises locales, réconciliation automatique et dashboard web admin.',
    result: 'Architecture définie et proof of concept validé avec deux entreprises pilotes.',
    href: '/landing/pulapay',
    demo: null,
  },
]

export const faqItems = [
  {
    q: 'Vous êtes une agence ou un freelance ?',
    a: "HFreshnel est une structure dédiée aux projets MVP. Vous avez un interlocuteur unique du cadrage à la livraison. Vous ne gérez personne d'autre que nous.",
  },
  {
    q: 'Faut-il déjà avoir un cahier des charges ?',
    a: "Non. Le premier échange sert justement à clarifier le besoin. Une idée claire suffit pour démarrer, le périmètre se construit ensemble pendant le cadrage.",
  },
  {
    q: "Pouvez-vous reprendre un projet commencé avec l'IA ?",
    a: "Oui. Beaucoup de projets démarrent avec des outils comme Bolt, Lovable ou v0. Nous évaluons ce qui est réutilisable et structurons la suite du développement sur une base solide.",
  },
  {
    q: 'Que se passe-t-il si le projet dépasse le périmètre ?',
    a: "Le périmètre est contractualisé avant le démarrage. Toute modification hors scope fait l'objet d'un avenant écrit et signé avant exécution. Aucun travail supplémentaire n'est facturé sans votre accord explicite.",
  },
  {
    q: 'Quels sont vos délais moyens ?',
    a: 'Un MVP mobile complet (iOS + Android + backend + déploiement) est livré en 6 à 10 semaines selon la complexité du périmètre. Les délais sont contractuels.',
  },
  {
    q: "Puis-je modifier l'application après livraison ?",
    a: "Oui. À la livraison, vous recevez l'intégralité des accès : dépôt de code, serveurs, stores. Vous pouvez reprendre le projet en interne ou nous confier un second périmètre.",
  },
  {
    q: 'Est-ce que je possède le code à la fin ?',
    a: "Oui. Le code et la propriété intellectuelle vous sont cédés intégralement à réception du paiement final. Vous repartez avec un projet qui vous appartient totalement.",
  },
]

export const expertise = [
  {
    num: '01',
    title: 'Cadrage produit',
    desc: 'Transformer une idée, un prompt ou une maquette en périmètre clair : objectifs, priorités, contraintes, risques.',
  },
  {
    num: '02',
    title: 'Interface & expérience',
    desc: 'Concevoir des parcours lisibles, fluides et compréhensibles par vos utilisateurs.',
  },
  {
    num: '03',
    title: 'Développement fullstack',
    desc: "Construire le frontend, le backend, l'API, la base de données et les intégrations.",
  },
  {
    num: '04',
    title: 'Livraison & évolution',
    desc: 'Déployer une version exploitable, documentée, prête à tester et améliorer.',
  },
]

export const comparisonRows: [string, string][] = [
  ['Vous arrivez avec une demande', 'Nous clarifions le besoin'],
  ['Chaque idée devient une fonctionnalité', 'Chaque fonctionnalité est questionnée'],
  ['Le budget suit les changements', 'Le périmètre est cadré avant d\'engager le développement'],
  ['Les choix techniques restent opaques', 'Les options sont expliquées, puis validées ensemble'],
  ['Vous recevez du code', 'Vous repartez avec un produit exploitable'],
  ['Le projet s\'arrête à la livraison', 'Le produit peut évoluer sur une base saine'],
]

export const processSteps = [
  { num: '01', title: 'Comprendre', desc: "Clarifier l'idée, les objectifs et les contraintes." },
  { num: '02', title: 'Cadrer', desc: "Le périmètre et le budget sont définis avant d'engager le développement. Le prix est fixé à l'avance, les ajouts validés séparément." },
  { num: '03', title: 'Concevoir', desc: 'Préparer les parcours, les écrans et les choix techniques.' },
  { num: '04', title: 'Construire', desc: "Développement par étapes, avec des jalons visibles pour suivre l'avancement sans attendre la fin." },
  { num: '05', title: 'Livrer', desc: 'Déployer une version exploitable et documentée. Les accès et le code sont transférés après règlement.' },
]
