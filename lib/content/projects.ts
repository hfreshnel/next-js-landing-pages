import { experiments } from './experiments'
import type { Frame, Project } from './types'

// Sources : portfolio-profiles/<projet>.md et synthese.md (privés). Chiffres décrivant le produit
// uniquement, jamais le temps passé. Projets d'équipe : rôle exact de l'auteur.

const phone = (src: string, alt: string, caption?: string): Frame => ({
  frame: 'phone',
  media: { type: 'image', src, width: 1236, height: 2745, alt },
  caption,
})

const windowImage = (src: string, alt: string, caption?: string, height = 1620): Frame => ({
  frame: 'window',
  media: { type: 'image', src, width: 2880, height, alt },
  caption,
})

// ─── PulaPay ──────────────────────────────────────────────────────────────────

const pulapayLoop: Frame = {
  frame: 'phone',
  media: {
    type: 'video',
    src: '/projects/pulapay/pulapay-envoi',
    poster: '/projects/pulapay/pulapay-envoi-poster.webp',
    width: 720,
    height: 1600,
    alt: "PulaPay : envoi de 12 000 F CFA à un contact, du tableau de bord jusqu'à l'écran de succès",
  },
  caption: 'Envoi à un contact, du tableau de bord au succès',
}

const pulapay: Project = {
  slug: 'pulapay',
  name: 'PulaPay',
  meta: 'Seul auteur · 2025 → 2026 · Mobile et API',
  lede: [
    'Un wallet USDC où chaque transfert reste cohérent, ',
    {
      claim: "même quand le webhook n'arrive pas",
      kind: 'Parti pris',
      note: "Un webhook n'est jamais considéré comme garanti. Chaque transfert en attente est revérifié directement auprès de Circle au bout de 2 minutes, et expiré au bout de 20 : l'état final ne dépend jamais d'un message qui peut se perdre.",
    },
    '.',
  ],
  text: [
    'Acheter des USDC par carte, les envoyer à un contact par son numéro et revenir en monnaie locale, avec des montants affichés en francs CFA, euros ou dollars.',
  ],
  state: ['MVP sur testnet', '≈ 317 tests backend'],
  stack: 'Expo · React Native · Express · PostgreSQL · BullMQ · Circle · Coinbase CDP',
  palette: [{ hex: '#FF6B00' }, { hex: '#0A0A0A' }, { hex: '#5B2EFF' }],
  card: { surface: 'panel', frames: [pulapayLoop] },
  fiche: {
    lede: 'Portefeuille mobile USDC non custodial : acheter, envoyer et retirer des dollars numériques, avec des montants affichés en francs CFA ou en euros.',
    facts: {
      role: 'Conception et développement, app mobile et API',
      period: '2025 → 2026',
      team: 'Seul auteur',
      status: 'MVP sur testnet, build Android de production généré',
      stack: 'Expo · React Native · TypeScript · Express · PostgreSQL / Prisma · Redis / BullMQ · XState · Better Auth · Circle · Coinbase CDP',
    },
    heroSurface: 'panel',
    hero: [
      phone('/projects/pulapay/pulapay-dashboard-sombre.png', 'PulaPay : tableau de bord, solde en francs CFA et activité récente', 'Tableau de bord'),
      pulapayLoop,
    ],
    problem: [
      [
        "Envoyer et conserver de l'argent de façon stable reste compliqué pour beaucoup d'utilisateurs en Afrique francophone. PulaPay propose un compte en USDC : un wallet non custodial protégé par un PIN, alimenté par carte via Coinbase, avec des envois par numéro de téléphone.",
      ],
    ],
    challenges: [
      {
        title: 'Aucun solde écrasé sous concurrence',
        body: [
          "La confirmation d'un transfert verrouille la transaction, met à jour les soldes par incrément et écrit le ledger ",
          {
            claim: 'dans le même bloc atomique',
            kind: 'Insight',
            note: 'Deux confirmations simultanées pouvaient lire le même solde puis l\'écraser chacune à leur tour. La correction tient en deux règles : verrouiller la transaction sur son statut, et ne jamais réécrire un solde, seulement l\'incrémenter ou le décrémenter.',
          },
          '.',
        ],
      },
      {
        title: 'Aucun transfert laissé en suspens',
        body: [
          "Les webhooks de Circle et de Coinbase sont vérifiés par signature. S'ils n'arrivent pas, ",
          {
            claim: 'un job de balayage reprend la main',
            kind: 'Comparaison',
            note: 'Un webhook seul est simple mais fragile ; un polling seul est fiable mais lent et coûteux en appels. Les deux ensemble se complètent : le webhook règle le cas normal en quelques secondes, le balayage rattrape les oublis.',
          },
          '.',
        ],
      },
      {
        title: 'Changer de fournisseur sans tout réécrire',
        body: [
          "L'architecture hexagonale a absorbé ",
          {
            claim: "trois migrations d'intégration",
            kind: 'Étape',
            note: "Le paiement passait d'abord par MoMo, remplacé par Coinbase en février 2026. En mars, passage de Polygon à Base, et des wallets gérés par la plateforme aux wallets contrôlés par l'utilisateur, qui signe chaque opération avec son PIN. Chaque changement est passé par les adapters.",
          },
          ' sans réécrire les règles métier.',
        ],
      },
    ],
    architecture: 'pulapay',
    architectureCaption: "Vue simplifiée de l'app mobile et de l'API.",
    decisions: [
      [
        'Ledger en partie double et montants en décimal exact : ',
        {
          claim: 'un déséquilibre lève une erreur',
          kind: 'Insight',
          note: "En partie double, chaque mouvement s'écrit deux fois, au débit et au crédit. Si les deux côtés ne s'équilibrent pas, c'est un bug ; mieux vaut qu'il fasse échouer une transaction que fausser un solde en silence.",
        },
        ' au lieu de passer inaperçu.',
      ],
      ["Création du wallet en deux étapes, pour ne jamais garder de wallet orphelin si l'utilisateur abandonne avant le PIN."],
      ["Réconciliation avec Circle : les dépôts manquants sont recréés de façon idempotente, un écart dans l'autre sens déclenche une alerte sans correction automatique."],
    ],
    limits: [
      'Tourne sur testnet (Base Sepolia, Circle sandbox) : aucun utilisateur réel.',
      "Pas d'intégration continue, et pas de tests côté mobile.",
      'KYC modélisé dans les données mais pas implémenté ; lien de paiement pas encore disponible.',
    ],
    gallery: {
      title: "Parcours dans l'app",
      frames: [
        phone('/projects/pulapay/pulapay-envoi-sombre.png', 'PulaPay : formulaire d\'envoi, bénéficiaire trouvé par son numéro, montant et message saisis', 'Envoi à un contact'),
        phone('/projects/pulapay/pulapay-envoi-succes-sombre.png', 'PulaPay : écran de succès du transfert', 'Transfert réussi'),
        phone('/projects/pulapay/pulapay-reception-sombre.png', 'PulaPay : réception par QR code, avec le réseau et l\'adresse du wallet', 'Réception par QR code'),
        phone('/projects/pulapay/pulapay-activite-sombre.png', 'PulaPay : activité, totaux reçus et envoyés, filtres et liste des transactions', 'Activité'),
      ],
    },
  },
}

// ─── Kwabo ────────────────────────────────────────────────────────────────────

const kwaboMotion: Frame = {
  frame: 'window',
  media: {
    type: 'video',
    src: '/projects/kwabo/kwabo-motion-ma-part',
    poster: '/projects/kwabo/kwabo-motion-ma-part-poster.webp',
    width: 1600,
    height: 900,
    alt: "Animation : une réservation Kwabo, de la demande à la confirmation du paiement Mobile Money, puis le faux backend partagé par l'app et les tests",
  },
  caption: "Ma part : la réservation et le paiement côté app, puis le faux backend",
}

const kwabo: Project = {
  slug: 'kwabo',
  name: 'Kwabo',
  meta: 'App mobile · Équipe · 2026',
  lede: [
    "L'app Android d'une plateforme de location au Bénin : feed d'annonces, carte, réservation et paiement Mobile Money par USSD.",
  ],
  text: [
    "Pour avancer sans attendre l'API, je l'ai développée contre ",
    {
      claim: 'un faux backend fidèle au contrat réel',
      kind: 'Comparaison',
      note: "Des données factices écran par écran auraient été plus rapides à écrire, mais chaque écran aurait été faux à sa manière. Le faux backend applique les mêmes règles et les mêmes refus que l'API Java, et les 88 tests tournent dessus : un écart de contrat casse un test avant de casser l'app.",
    },
    ". Le brancher ensuite sur la vraie API m'a conduit à ",
    {
      claim: "auditer le contrat de l'autre équipe",
      kind: 'Étape',
      note: "Brancher l'app endpoint par endpoint a fait ressortir ce que l'interface ne pouvait pas voir côté serveur. Je l'ai consigné dans un audit écrit de l'app et du contrat d'API, partagé avec l'équipe backend, qui a structuré la suite : tests, puis deux campagnes sur téléphone.",
    },
    '.',
  ],
  state: ['MVP testé sur téléphone', '88 tests'],
  stack: 'Expo · React Native · TypeScript · TanStack Query · Keycloak · FeexPay',
  palette: [{ hex: '#0E7A56' }, { hex: '#FF6A3D' }, { hex: '#FFC20E' }],
  card: {
    surface: 'paper',
    frames: [
      phone('/projects/kwabo/kwabo-feed-clair.png', "Kwabo : feed plein écran, une annonce d'hôtel à Cotonou avec son prix et les boutons Réserver et Contacter", 'Feed d\'annonces'),
      phone('/projects/kwabo/kwabo-paiement-attente-clair.png', 'Kwabo : paiement en attente, « Confirmez sur votre téléphone »', 'Paiement par USSD'),
    ],
  },
  fiche: {
    lede: "L'app Android d'une plateforme de location de logements au Bénin : feed d'annonces, recherche sur carte, réservation en deux temps et paiement Mobile Money par demande USSD.",
    facts: {
      role: "Conception et développement de l'app mobile Android",
      period: '2026',
      team: "Équipe : API, site web et infrastructure par l'équipe backend",
      status: 'MVP validé par deux campagnes de test sur téléphone, pas encore publié',
      stack: 'Expo · React Native · TypeScript strict · expo-router · TanStack Query · Zustand · axios · FlashList · Keycloak · FeexPay · Jest · MSW',
    },
    heroSurface: 'paper',
    hero: [kwaboMotion],
    problem: [
      [
        "Au Bénin, chercher un logement et le payer passe souvent par le téléphone et le Mobile Money plutôt que par la carte bancaire. Kwabo répond à ce besoin avec une plateforme complète. L'API, le site web et l'infrastructure sont portés par une autre équipe ; j'ai pris en charge l'app mobile Android, en Expo et TypeScript strict, en partie à partir d'écrans repris du travail d'un coéquipier et adaptés.",
      ],
      [
        "L'app couvre le feed d'annonces, la recherche sur carte, la réservation avec calendrier, le paiement FeexPay par demande USSD avec suivi en direct, la messagerie, les notifications push, le KYC et la publication d'annonces.",
      ],
    ],
    challenges: [
      {
        title: 'Un paiement qui se joue hors de l\'app',
        body: [
          "La demande attend l'accord de l'hôte, puis le voyageur paie avant un délai. Le paiement se valide sur le téléphone du payeur, par une demande USSD : l'app ",
          {
            claim: "interroge le statut toutes les 3 secondes",
            kind: 'Parti pris',
            note: "Aucune page web ni redirection : l'issue du paiement se lit uniquement via l'API, toutes les 3 secondes, avec un plafond de 5 minutes. Au-delà, l'app propose de revérifier plutôt que d'attendre indéfiniment. La création de la réservation porte une clé d'idempotence, pour qu'un double appui ne crée pas deux réservations.",
          },
          " et gère l'échec, l'expiration et la reprise.",
        ],
      },
      {
        title: 'Un faux backend aussi strict que le vrai',
        body: [
          "Une base en mémoire, des dates relatives au jour et 46 routes qui appliquent les mêmes règles métier et ",
          {
            claim: 'les mêmes refus',
            kind: 'Insight',
            note: "Le faux backend renvoie les mêmes codes et les mêmes messages d'erreur que l'API Java. Les écrans d'erreur se développent donc en même temps que le reste, et les parcours complets (réservation, paiement, avis, KYC, messagerie, inscription) se testent de bout en bout.",
          },
          " que l'API. Le même code sert l'app sur le téléphone et les tests Jest.",
        ],
      },
      {
        title: 'Une session qui tient sous les rafales',
        body: [
          'Les jetons sont rangés dans le stockage sécurisé du téléphone. Sur une réponse 401, ',
          {
            claim: "un seul rafraîchissement part, les autres requêtes attendent",
            kind: 'Insight',
            note: "Sans file d'attente, une rafale de requêtes expirées déclencherait autant de rafraîchissements concurrents. La file n'en lance qu'un, rejoue les requêtes en attente, et déconnecte proprement si le rafraîchissement échoue.",
          },
          '. À la déconnexion, caches et stores liés au compte sont vidés.',
        ],
      },
    ],
    architecture: 'kwabo',
    architectureCaption: "Vue simplifiée : l'app mobile (mon périmètre) et la plateforme de l'équipe backend.",
    decisions: [
      [
        "Connexion native par Keycloak (Direct Access Grant), pour garder un écran de connexion dans l'app plutôt qu'une page web.",
      ],
      [
        'Un mapper par endpoint, du DTO au type de l\'app, et des imports encadrés par une règle de lint : un changement de contrat backend reste localisé.',
      ],
      [
        "Carte Leaflet dans une WebView, sans SDK natif ni clé d'API. La page ne reçoit que des identifiants et des coordonnées, ",
        {
          claim: 'jamais de texte saisi par un hôte',
          kind: 'Étape',
          note: "Une première version injectait des données d'annonce dans le HTML de la carte, ce qui ouvrait une injection. Le texte est désormais affiché par l'app, hors de la WebView, et un test vérifie qu'aucune valeur ne peut fermer la balise de script.",
        },
        '.',
      ],
      ["L'app ne propose que ce que le backend accepte : un équipement ou un choix absent du contrat n'apparaît pas dans l'interface."],
    ],
    limits: [
      'Pas encore publié sur le Play Store ; branchement sur la vraie API testé en environnement de recette.',
      'Messagerie sans temps réel : rafraîchissement toutes les 4 secondes.',
      'Recherche limitée à 20 résultats, sans pagination.',
      "Pas d'intégration continue ni de tests de bout en bout sur l'app mobile.",
    ],
    gallery: {
      title: "Parcours dans l'app",
      frames: [
        phone('/projects/kwabo/kwabo-feed-clair.png', "Kwabo : feed plein écran sur une annonce d'hôtel à Cotonou", "Feed d'annonces"),
        phone('/projects/kwabo/kwabo-recherche-carte-clair.png', 'Kwabo : recherche filtrée sur Cotonou, carte OpenStreetMap et aperçu de l\'annonce sélectionnée', 'Recherche sur carte'),
        phone('/projects/kwabo/kwabo-annonce-clair.png', "Kwabo : fiche d'une annonce, photos, note, hôte et équipements", 'Fiche annonce'),
        phone('/projects/kwabo/kwabo-reservation-clair.png', 'Kwabo : demande de réservation, calendrier de disponibilités et détail du prix', 'Demande de réservation'),
        phone('/projects/kwabo/kwabo-paiement-clair.png', 'Kwabo : paiement Mobile Money, montant, délai, réseau et numéro', 'Paiement Mobile Money'),
        phone('/projects/kwabo/kwabo-paiement-attente-clair.png', 'Kwabo : attente de la validation sur le téléphone du payeur', 'Validation par USSD'),
      ],
    },
    teamNote: "Kwabo est un projet d'équipe. L'API Spring Boot, le site web, l'infrastructure et l'intégration FeexPay côté serveur sont l'œuvre de l'équipe backend ; une partie des écrans reprend le travail d'un coéquipier, adapté. Les écrans montrés sont rendus par l'app avec son faux backend et des données de démonstration.",
  },
}

// ─── DealDraft ────────────────────────────────────────────────────────────────

const dealdraft: Project = {
  slug: 'dealdraft',
  name: 'DealDraft',
  meta: 'Seul auteur · 2026 · En ligne',
  lede: [
    'Une annonce immobilière devient une étude de rendement, ',
    {
      claim: 'sans chiffre inventé',
      kind: 'Parti pris',
      note: 'Le modèle de langage ne fait aucun calcul. Il extrait et cite ; le code vérifie chaque citation mot pour mot, puis calcule. Sur les cas de test, les 237 citations ont toutes été retrouvées dans le texte d\'origine.',
    },
    '.',
  ],
  text: [
    'Une API FastAPI vérifie chaque citation et calcule les rendements, puis n8n range la fiche et prépare l\'e-mail après validation humaine. Le modèle a été ',
    {
      claim: "choisi sur un banc d'évaluation",
      kind: 'Comparaison',
      note: "Sur le même jeu d'annonces piégées (multi-lots, fourchettes de prix, consigne cachée dans le texte), gpt-4o-mini produisait 9 hallucinations critiques sur 60. gpt-4o a été retenu, pour environ 0,008 $ par étude.",
    },
    '.',
  ],
  state: ['Page en ligne', 'Film produit publié'],
  stack: 'FastAPI · Pydantic · n8n · OpenAI · Next.js · Remotion',
  palette: [{ hex: '#142033' }, { hex: '#1F4FB0' }, { hex: '#FFE35A' }],
  links: [{ label: 'Voir la page', href: 'https://deal-draft-nu.vercel.app' }],
}

// ─── excel-course ─────────────────────────────────────────────────────────────

const excelCourse: Project = {
  slug: 'excel-course',
  name: 'excel-course',
  meta: 'Seul auteur · 2026',
  lede: [
    'Un script écrit devient un cours vidéo Excel : voix de synthèse, ',
    {
      claim: 'Excel piloté au mot près',
      kind: 'Parti pris',
      note: 'Excel est piloté en direct, mais les surbrillances sont ajoutées au montage. Excel a sa propre latence : en post-production, on rattrape le décalage sans refaire la prise.',
    },
    ', montage automatique.',
  ],
  text: [
    'Python pilote un vrai Excel pendant la capture d\'écran, puis Remotion compose surbrillances, ',
    {
      claim: 'formules animées',
      kind: 'Comparaison',
      note: 'Simuler la frappe dans Excel aurait paru plus naturel, mais Excel rejette les commandes pendant la saisie. La formule est donc écrite d\'un coup, et c\'est le montage qui la fait apparaître morceau par morceau, au rythme de la voix.',
    },
    ' et avatar.',
  ],
  state: ['23 vidéos rendues'],
  stack: 'Python · COM Excel · Whisper · Remotion · ffmpeg',
  palette: [{ hex: '#217346' }, { hex: '#FFB300' }, { hex: '#FFFFFF' }],
}

// ─── Métrique ─────────────────────────────────────────────────────────────────

const metriqueChatLoop: Frame = {
  frame: 'window',
  media: {
    type: 'video',
    src: '/projects/metrique/metrique-chat-deux-fenetres',
    poster: '/projects/metrique/metrique-chat-deux-fenetres-poster.webp',
    width: 1600,
    height: 900,
    alt: "Métrique : deux fenêtres côte à côte, un message de la cliente arrive en temps réel chez le prestataire, avec l'indicateur de frappe puis l'accusé de lecture",
  },
  caption: 'Messagerie temps réel, côté cliente et côté prestataire',
}

const metriqueMotion: Frame = {
  frame: 'window',
  media: {
    type: 'video',
    src: '/projects/metrique/metrique-motion-ma-part',
    poster: '/projects/metrique/metrique-motion-ma-part-poster.webp',
    width: 1600,
    height: 900,
    alt: "Animation : le trajet d'un message de l'envoi à la lecture, puis une recherche dans le catalogue et l'ajout d'un favori",
  },
  caption: "Ma part : le trajet d'un message, puis le catalogue",
}

const metrique: Project = {
  slug: 'metrique',
  name: 'Métrique',
  meta: 'Contribution backend · Équipe de 3 · 2026',
  compact: true,
  lede: [
    "Marketplace de services au Bénin. J'y ai développé côté backend le catalogue, la recherche plein texte et ",
    {
      claim: 'la messagerie temps réel',
      kind: 'Étape',
      note: 'Première version avec un jeton Centrifugo maison, puis migration vers les JWT Keycloak : une seule identité pour toute la plateforme, un endpoint et un secret en moins.',
    },
    '.',
  ],
  state: ['Plateforme déployée'],
  stack: 'FastAPI · PostgreSQL · MongoDB · Centrifugo · Keycloak',
  palette: [{ hex: '#0D1B2A' }, { hex: '#FBC02D' }],
  card: { surface: 'paper', frames: [metriqueChatLoop] },
  fiche: {
    lede: 'Marketplace de mise en relation entre clients et prestataires de services au Bénin, avec commandes, messagerie temps réel et paiement Mobile Money sous séquestre. Ma part : le backend du catalogue et de la messagerie.',
    facts: {
      role: 'Backend du catalogue et de la messagerie temps réel',
      period: '2026',
      team: 'Équipe de 3 développeurs',
      status: 'Plateforme configurée et déployée pour la production',
      stack: 'FastAPI · PostgreSQL (plein texte) · MongoDB · Centrifugo · Keycloak (OIDC, JWKS) · pytest',
    },
    heroSurface: 'paper',
    hero: [metriqueMotion],
    problem: [
      [
        "Au Bénin, trouver un prestataire fiable et le payer sans risque reste difficile. Métrique répond avec une marketplace où les prestataires sont vérifiés, où les fonds sont bloqués en séquestre jusqu'à validation de la prestation, et où client et prestataire échangent directement dans l'application.",
      ],
      [
        "J'y ai conçu le CRUD du catalogue de services et de packs, la recherche, les likes, favoris et avis, la vérification des JWT Keycloak par JWKS, puis la messagerie temps réel et la première version du support client.",
      ],
    ],
    challenges: [
      {
        title: 'Une messagerie temps réel liée aux commandes',
        body: [
          "Chat par commande et chat direct via Centrifugo, statuts de livraison et de lecture, propositions de prix dont l'état se propage en direct. Les messages sont rangés dans MongoDB ",
          {
            claim: 'par conversation et par jour',
            kind: 'Parti pris',
            note: "Un document par conversation et par jour limite la taille de chaque document et accélère la pagination de l'historique, pendant que les données transactionnelles restent dans PostgreSQL.",
          },
          '.',
        ],
      },
      {
        title: 'Une seule identité pour toute la plateforme',
        body: [
          "L'API vérifie la signature des jetons avec les clés publiques de Keycloak (JWKS) et en extrait les rôles. ",
          {
            claim: 'Centrifugo valide les mêmes jetons',
            kind: 'Étape',
            note: "La messagerie s'appuyait d'abord sur un jeton Centrifugo émis par l'API. Je l'ai remplacé par les JWT Keycloak, vérifiés par Centrifugo avec les mêmes clés publiques : l'identité d'un utilisateur est la même partout, et il n'y a plus de jeton maison à émettre ni de secret à garder.",
          },
          " : le WebSocket et l'API partagent la même identité.",
        ],
      },
      {
        title: 'Un catalogue cherchable et testé',
        body: [
          "CRUD des services et des packs, paramètre de recherche, index plein texte PostgreSQL co-écrit avec l'équipe, likes, favoris et avis, accompagnés de tests d'intégration.",
        ],
      },
    ],
    architecture: 'metrique',
    architectureCaption: 'Vue simplifiée de la plateforme. En accent : ce que j\'ai développé.',
    decisions: [
      ['Centrifugo authentifié directement par les JWT Keycloak plutôt que par un jeton maison : un endpoint et un secret en moins.'],
      ["MongoDB réservé à la messagerie, PostgreSQL pour tout le reste."],
      ['Recherche plein texte dans PostgreSQL, sans moteur de recherche séparé.'],
    ],
    limits: [
      "Le front, le paiement sous séquestre, l'infrastructure et la scène 3D de l'accueil ne sont pas mon travail.",
      "Usage réel de la plateforme non connu.",
    ],
    gallery: {
      title: 'Écrans et site',
      frames: [
        metriqueChatLoop,
        windowImage('/projects/metrique/metrique-chat-clair.png', 'Métrique : messagerie côté cliente, conversation liée à une commande avec proposition de prix payée et accusés de lecture', 'Chat lié à une commande'),
        windowImage('/projects/metrique/metrique-catalogue-clair.png', 'Métrique : catalogue, résultats de recherche et cartes de services avec note, prix et favori', 'Catalogue'),
        windowImage('/projects/metrique/metrique-catalogue-filtres-clair.png', 'Métrique : catalogue, recherche et filtres par ville, secteur, note et prix', 'Recherche et filtres'),
        windowImage('/projects/metrique/metrique-site-secteurs.png', 'Site en ligne de Métrique : parcourir par secteur', 'Site en ligne', 785),
      ],
    },
    teamNote: "Métrique est un projet d'équipe à trois. Les écrans montrés sont le front de l'équipe, branché sur le backend que j'ai écrit pour le catalogue et la messagerie ; les données affichées sont des données de démonstration.",
  },
}

export const projects: Project[] = [pulapay, kwabo, dealdraft, excelCourse, metrique]

// Projets puis expérimentations : les fiches se suivent dans l'ordre de la page.
export const projectsWithFiche = [...projects, ...experiments].filter((p) => p.fiche)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? experiments.find((p) => p.slug === slug)
}

export function isExperiment(slug: string) {
  return experiments.some((p) => p.slug === slug)
}
