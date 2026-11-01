// Modèle du contenu du portfolio. Tout texte affiché vient des profils de projets
// (dossier privé `portfolio-profiles/`, non versionné) : rien d'inventé, rien d'arrondi à la hausse.

export type NoteKind = 'Parti pris' | 'Comparaison' | 'Étape' | 'Insight'

/** Passage souligné qui ouvre une note. */
export type Claim = { claim: string; kind: NoteKind; note: string }

/** Texte riche : morceaux de texte simples et passages annotés, dans l'ordre. */
export type Rich = Array<string | Claim>

export type Media =
  | { type: 'image'; src: string; width: number; height: number; alt: string }
  | { type: 'video'; src: string; poster: string; width: number; height: number; alt: string }

/** Un visuel posé dans un cadre : téléphone (rendu mobile) ou fenêtre (rendu web, motion design). */
export type Frame = { frame: 'phone' | 'window'; media: Media; caption?: string }

export type Swatch = { hex: string }

export type Challenge = { title: string; body: Rich }

export type ArchitectureId = 'pulapay' | 'kwabo' | 'metrique' | 'weaver'

export type ProjectLink = { label: string; href: string }

export type Fiche = {
  lede: string
  facts: { role: string; period: string; team: string; status: string; stack: string }
  /** Visuel d'ouverture de la fiche. */
  hero: Frame[]
  heroSurface: 'panel' | 'paper'
  problem: Rich[]
  challenges: Challenge[]
  architecture: ArchitectureId
  architectureCaption: string
  decisions: Rich[]
  limits: string[]
  /** Galerie d'écrans en fin de fiche. */
  gallery?: { title: string; frames: Frame[] }
  /** Mention obligatoire sur les projets d'équipe. */
  teamNote?: string
}

export type Project = {
  slug: string
  name: string
  /** Ligne de métadonnées au-dessus du titre (rôle, équipe, années). */
  meta: string
  lede: Rich
  text?: Rich
  state: string[]
  stack: string
  /** Couleurs du produit. Absente pour une expérimentation, qui n'a pas d'identité visuelle propre. */
  palette?: Swatch[]
  /** Visuel de la carte, sur fond graphite (`panel`) ou craie (`paper`). */
  card?: { surface: 'panel' | 'paper'; frames: Frame[] }
  compact?: boolean
  /** Mention affichée tant qu'il n'y a ni fiche ni lien (« Fiche à venir » par défaut). */
  pending?: string
  links?: ProjectLink[]
  fiche?: Fiche
}
