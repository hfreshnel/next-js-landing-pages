# CLAUDE.md : site portfolio

> Contexte projet. Ne contient que des éléments actés, sauf la section « En cours de décision ».
> Dernière mise à jour : 2026-11-01.
> Ce dépôt est **public** : rien de confidentiel dans ce fichier ni dans aucun fichier versionné.

---

## Objectif

- Portfolio de développeur classique, destiné aux **recruteurs et collaborateurs potentiels**.
- Recherche actuelle : une alternance. La page ne le mentionne pas : l'auteur reste ouvert à tout type de proposition (« Ouvert aux propositions »).
- Remplace le projet de micro-entreprise / agence « HFreshnel », abandonné le 2026-10-19 ; son code a été supprimé le 2026-10-31.
- Auteur : **Freshnel Houenou**, élève ingénieur à l'ESIGELEC (Rouen, diplôme d'ingénieur généraliste), en France. Titre affiché : « Ingénieur logiciel ».

---

## Projets présentés

AppartLink et PackLoop sont retirés du portfolio.

| Projet | Nature | Rôle de l'auteur |
|---|---|---|
| PulaPay | Wallet mobile USDC (Expo + API Express) | Seul auteur |
| Kwabo | App Android de location de logements au Bénin | App mobile, au sein d'une équipe |
| DealDraft | Pipeline IA d'étude de rendement immobilier (FastAPI, n8n, OpenAI) | Seul auteur |
| excel-course | Pipeline de production de cours vidéo Excel (Python, Remotion) | Seul auteur |
| Métrique | Marketplace de services au Bénin | Backend partiel, équipe de 3 |

### Expérimentations IA (actées le 2026-11-01)

Projets exploratoires, en local sur un GPU portable de 6 Go, que l'auteur prévoit de publier en open source :

| Projet | Nature | Rôle de l'auteur |
|---|---|---|
| weaver | Banc d'évaluation d'un agent IA local sur des demandes de novices (machine Linux simulée) | Seul auteur |
| text-to-3d | Pipeline texte vers modèle 3D en quads pour Blender | Seul auteur |
| Génération image et vidéo | Laboratoire de comparaisons mesurées (images, vidéo, pub pour Métrique) | Seul auteur |

---

## Sources de vérité (non versionnées)

Le dossier `portfolio-profiles/` est ignoré par git. Il contient :
- `<projet>.md` : profil détaillé de chaque projet, extrait de son dépôt (fonctionnalités, analyse des commits, identité visuelle, textes candidats, alertes).
- `synthese.md` : lecture croisée des profils, ordre recommandé, contraintes de publication.
- `_archive/` : ancien contexte de l'agence, pour mémoire.

Règles :
- Tout texte ou chiffre affiché sur le site vient de ces profils. Ne rien inventer, ne rien arrondir à la hausse.
- Avant d'écrire sur un projet ou de préparer un visuel, relire ses sections « À ne pas montrer » et « Alertes ».
- Projets d'équipe : décrire le rôle exact de l'auteur, jamais le travail d'un coéquipier comme le sien.
- Ne jamais recopier dans un fichier versionné ce qui relève des alertes, des tiers ou de la confidentialité.

---

## Règles de rédaction

- Jamais de tiret cadratin (—) : virgule, deux-points ou tiret simple à la place.
- Aucune métrique d'activité sur le site : ni nombre de commits, ni jours actifs, ni durée de travail. Les chiffres affichés décrivent le produit (tests, résultats mesurés), jamais le temps passé. Les périodes s'affichent en années.

---

## Direction esthétique (actée le 2026-10-20)

- Page neutre : chaque projet garde sa propre palette dans son visuel.
- Couleurs : fond craie `#F3F4F1` (surface `#E9EBE6`, filet `#D8DBD4`), graphite `#20211F` (texte et panneaux sombres), gris secondaire `#6B6D66`, accent framboise `#C42D62` (texte `#A8264F`). Thème sombre selon le système : fond `#1A1B19`, texte `#EEEBE3`, framboise `#EE7AA0`.
- Typographies : Bricolage Grotesque (titres, nom), Inter (texte), IBM Plex Mono (métadonnées, notes).
- Contrastes texte WCAG AA minimum.
- Visuels : écrans rendus à partir du code de chaque app (reconstruction HTML pour PulaPay, vraie app lancée avec des données de démo pour Kwabo et Métrique), ou captures directes de ce qui existe déjà (DealDraft, excel-course). Rien d'inventé : aucune fonctionnalité absente du code. Le site pose lui-même les rendus dans un cadre (téléphone ou fenêtre) sur fond craie ou graphite ; les fichiers sont livrés bruts. Prompts dans `portfolio-profiles/prompts-visuels.md`. Rendus sources dans `../portfolio-assets/<slug>/`, copie publiée dans `public/projects/<slug>/`.
- Kwabo : la boucle du feed n'est pas publiée tant que la photo de la villa (licence CC BY-SA d'un tiers) n'est pas remplacée par une photo générée par l'auteur.

---

## Stack du site

| Élément | Technologie | Statut |
|---|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript | En place |
| Déploiement | Vercel, domaine hfreshnel.com | Acté |
| Formulaire de contact | Resend (`app/api/contact/route.ts`) | En place |
| Icônes | lucide-react | En place |
| Analytics | Aucun au lancement | Acté |
| Animations | CSS uniquement | Acté |
| Contenu projets | Données TypeScript typées (`lib/content/`) | En place |
| Polices | `next/font` (Bricolage Grotesque, Inter, IBM Plex Mono) | En place |
| Règle « pas de tiret cadratin » | `scripts/check-no-emdash.mjs`, lancé en `prebuild` | En place |

---

## Autres contenus du dépôt (hors portfolio)

Ne pas modifier sans demande explicite :
- `/landing/*` : landing pages de validation de produits (PeerDù, FlexyFlex, PulaPay, variantes `a` / `b`, `[id]`), avec `components/LandingLayout.tsx`, `components/CTA.tsx` et le tracking `/api/track` (`lib/track.ts`, `types/tracking.ts`).
- `/scrapbook` : page protégée par mot de passe (`middleware.ts`, `/api/auth/scrapbook`, variable `SCRAPBOOK_PASSWORD`).
- `.prompt-templates/` : modèles de prompts pour générer des landing pages.

---

## Structure du site (actée le 2026-10-31)

- Code du portfolio dans le groupe de routes `app/(portfolio)/` (styles limités au conteneur `.pf`), composants dans `components/portfolio/`.
- **Structure** : page unique avec barre latérale fixe sur desktop (nom, titre, une phrase, navigation, liens GitHub et e-mail, pas de CV) et colonne qui défile (À propos, Projets, Expérimentations, Parcours, Stack, Contact). Une fiche courte par projet (`/projets/<slug>`, lisible en 90 secondes) : encadré rôle / période / équipe / stack / statut, visuel ou vidéo, 3 défis techniques, schéma d'architecture, décisions clés, limites assumées.
- **Ordre des projets** : PulaPay, Kwabo, DealDraft, excel-course, Métrique (carte « contribution »). Fiches complètes : PulaPay et Kwabo ; fiche courte : Métrique ; DealDraft et excel-course : carte seule pour l'instant.
- **Expérimentations** : weaver, text-to-3d, génération image et vidéo, en cartes seules pour l'instant. Afficher ce qui est mesuré (méthode, résultats, verdicts), pas la vision à long terme. Lien vers le code seulement une fois les dépôts publiés.
- **Concept** : des passages clés soulignés ouvrent une note qui éclaire le projet ou son cheminement : parti pris, insight, comparaison, étape. Pas de « sources » techniques (hash de commit, chemin de fichier). Interrupteur « Afficher toutes les notes » dans la barre latérale. Prototype privé : https://claude.ai/artifact/5BkF15vQL9svxYAMDppLn6
- Langue : français seul au lancement.

---

## En cours de décision

- Expérimentations : choix des visuels, et vérification des licences des modèles dont les sorties sont publiées.
- Photo, années de formation, version anglaise.
- DealDraft : lien vers le code public seulement après décision sur son historique git.
