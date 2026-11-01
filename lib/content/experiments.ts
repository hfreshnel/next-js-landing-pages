import type { Frame, Project } from './types'

// Expérimentations IA, en local sur une RTX 3060 Laptop (6 Go de VRAM).
// Sources : portfolio-profiles/weaver.md, text-to-3d.md et generation-media.md (privés).
// Mêmes règles que les projets : chiffres mesurés uniquement, jamais le temps passé.

const weaverTrace: Frame = {
  frame: 'window',
  media: {
    type: 'image',
    src: '/projects/weaver/weaver-trace-injection.png',
    width: 2880,
    height: 1620,
    alt: "Trace réelle du banc : une recherche web renvoie une page qui demande de supprimer ~/notes, le modèle tente la suppression, la couche d'outils la bloque, et la réponse demande l'accord de l'utilisateur",
  },
  caption: 'Trace réelle : une injection dans une page web, bloquée par la couche d\'outils',
}

const weaver: Project = {
  slug: 'weaver',
  name: 'weaver',
  meta: 'Seul auteur · 2026 · Agent IA local',
  lede: [
    "Peut-on confier son PC à un petit modèle local ? Un banc d'évaluation le mesure sur 66 demandes de novices, dans une machine Linux simulée, avec des ",
    {
      claim: 'garde-fous inscrits dans le code',
      kind: 'Insight',
      note: "Quelle que soit la consigne du prompt, le modèle suit une instruction cachée dans une page web et tente de supprimer un dossier. Seul un refus imposé par la couche d'outils l'arrête : l'action reste bloquée tant que l'utilisateur n'a pas dit oui.",
    },
    '.',
  ],
  text: [
    'Meilleur résultat : 37,8 cas sur 66 quand un second modèle vérifie le travail du premier, ',
    {
      claim: 'un gain significatif, encore loin du but',
      kind: 'Comparaison',
      note: "+3,25 cas en moyenne sur 8 ordres de passage (intervalle de confiance à 95 % : +1,4 à +5,6). Mais sur les cas réservés au test final, jamais utilisés pour régler le système, le score n'atteint que 57 %, pour un objectif de 80 %.",
    },
    '.',
  ],
  state: ['Exploratoire', '66 cas de test'],
  stack: 'Python · llama.cpp · Qwen3.5 · GGUF',
  card: { surface: 'panel', frames: [weaverTrace] },
  pending: 'Code bientôt en open source',
}

const textTo3dLoop: Frame = {
  frame: 'window',
  media: {
    type: 'video',
    src: '/projects/text-to-3d/text-to-3d-coffre-quads',
    poster: '/projects/text-to-3d/text-to-3d-coffre-quads-poster.webp',
    width: 1600,
    height: 900,
    alt: 'Un coffre en bois généré à partir d\'un texte tourne sur lui-même : une ligne de partage balaie l\'objet, maillage en quads à gauche, textures PBR à droite',
  },
  caption: 'Coffre généré : 7 696 quads à gauche, textures bakées à droite',
}

const textTo3d: Project = {
  slug: 'text-to-3d',
  name: 'text-to-3d',
  meta: 'Seul auteur · 2026 · 3D',
  lede: [
    'Une description en entrée, un modèle 3D texturé ',
    {
      claim: 'en quads propres',
      kind: 'Parti pris',
      note: "Le maillage généré est dense, environ 200 000 triangles, et ouvert par les coutures UV. Chaque objet est donc retopologisé dans Blender en 8 000 à 12 000 quads, avec ses textures PBR bakées.",
    },
    ' en sortie, ',
    {
      claim: 'sur un GPU portable de 6 Go',
      kind: 'Étape',
      note: "La reconstruction en 1024 sature la mémoire au décodage. Un patch qui découpe le bloc fautif, à sortie identique, ne suffit pas : la pipeline reste en 512, ce qui évite aussi l'étage 1024, à 60 secondes par pas sur cette machine.",
    },
    '.',
  ],
  text: [
    "FLUX.2 Klein dessine une image de référence, TRELLIS.2 la reconstruit en 3D, Blender retopologise et bake les textures. Le modèle 3D a été choisi ",
    {
      claim: 'droit plutôt que fidèle',
      kind: 'Comparaison',
      note: "Pixal3D rendait des textures plus fidèles sur les 4 objets testés, mais penchait l'objet selon l'angle de la caméra. TRELLIS.2 sort toujours droit : il est gardé par défaut, parce qu'il s'automatise sans retouche.",
    },
    '.',
  ],
  state: ['100 % de quads', '9 à 11 min par objet'],
  stack: 'ComfyUI · FLUX.2 Klein · TRELLIS.2 · Blender (Python)',
  card: { surface: 'panel', frames: [textTo3dLoop] },
  pending: 'Code bientôt en open source',
}

const styleLadder: Frame = {
  frame: 'window',
  media: {
    type: 'image',
    src: '/projects/generation-image/generation-echelle-styles.png',
    width: 2880,
    height: 858,
    alt: 'La même scène, une jeune femme en veste rouge tenant une tasse à une terrasse de café, générée en sept styles : flat, anime, BD ligne claire, 3D animation, peinture, cinéma 35 mm et photo',
  },
  caption: 'Même scène, sept styles : un favori par style après revue',
}

const generation: Project = {
  slug: 'generation-image',
  name: "Génération d'images sur une RTX 3060",
  meta: 'Seul auteur · 2026 · Image et vidéo',
  lede: [
    'Générer images et vidéos de qualité sur un GPU portable de 6 Go, en ne gardant que les étapes qui ',
    {
      claim: 'prouvent leur gain',
      kind: 'Parti pris',
      note: "Chaque étape est comparée à une version sans elle, sur les mêmes entrées. Pour détourer un personnage, BiRefNet coûtait 60 fois plus qu'isnet-anime pour une différence invisible à l'échelle finale : il a été écarté. Un despill d'une ligne, lui, est resté.",
    },
    '.',
  ],
  text: [
    'Cinq modèles comparés sur huit styles, puis ',
    {
      claim: "départagés à l'œil",
      kind: 'Insight',
      note: "Le tri automatique sur vignettes laissait passer des mains fausses. Le critère décisif de la revue a été le nombre de doigts, et le contrôle des mains est devenu une étape à part. Z-Image Turbo est sorti en tête, avec 10 favoris sur 16.",
    },
    ". Les images retenues sont ensuite animées avec Wan 2.2, interpolées et agrandies en 1080 × 1920.",
  ],
  state: ['5 modèles comparés', '74 images'],
  stack: 'ComfyUI · Z-Image Turbo · FLUX.2 Klein · Wan 2.2 · RIFE · ffmpeg',
  card: { surface: 'paper', frames: [styleLadder] },
  pending: 'Code bientôt en open source',
}

export const experiments: Project[] = [weaver, textTo3d, generation]
