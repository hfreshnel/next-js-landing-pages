# CLAUDE.md — Contexte Projet Freelance

> Fichier de contexte projet. Ne contient que des éléments actés lors des échanges.
> Dernière mise à jour : juin 2026

---

## Identité de Marque — HFreshnel

- **Nom** : HFreshnel (le "H" est assumé dans le branding, pas seulement technique/domaine)
- **Domaine** : hfreshnel.com
- **Tagline** : *"Votre partenaire tech. MVP mobile, périmètre fixe, prix fixe, livraison garantie."*
- **Positionnement perçu** : structure/micro-agence — jamais présenté comme freelance solo
- **Identité visuelle** : pas de photo du fondateur sur le site — HFreshnel doit paraître comme une structure

---

## Modèle Business

- **Type** : Agence solo / Intégrateur — pas du freelance classique
- **Proposition de valeur** : Livraison de MVPs mobiles clé en main, résultat garanti
- **Exécution** : Sous-traitance des parties spécialisées via plateformes (Malt, Upwork)
- **Rôle** : Cadrage, coordination, garantie qualité, livraison — pas production intégrale
- **Le client ne connaît pas les sous-traitants** — interlocuteur unique

---

## Positionnement

- **Offre** : MVPs mobiles clé en main pour porteurs de projet sans équipe tech
- **Type de projets** : Greenfield — livraison de MVP complet, pas de maintenance/existant
- **Complexité cible** : App mobile + backend + dashboard web (niveau intermédiaire)
- **Clients visés** : PME/TPE qui veulent se digitaliser + startups early-stage
- **Géographie** : France, 100% remote

---

## Stack Technique — Produit

| Couche | Technologie |
|---|---|
| Mobile | Expo React Native |
| Backend | Express.js + TypeScript |
| ORM | Prisma ou Drizzle (selon projet) |
| Base de données | PostgreSQL |
| Déploiement simple | Supabase |
| Déploiement avancé | Hetzner (VPS auto-géré) |
| Frontend dashboard | React |

---

## Stack Technique — Site hfreshnel.com

| Élément | Technologie |
|---|---|
| Framework | Next.js (App Router) |
| Déploiement | Vercel |
| Formulaire de contact | Resend |
| Analytics | Plausible |
| Animations | Framer Motion (léger) |
| Contenu projets | MDX local |
| Exploration visuelle | Claude Design (phase exploration uniquement, pas exécution) |

---

## Architecture du Site — hfreshnel.com

> One-page scroll, 7 sections, pas de multi-pages.

### 1. Hero
- Logo HFreshnel
- Titre : "Votre partenaire tech."
- Sous-titre : "MVP mobile, périmètre fixe, prix fixe, livraison garantie."
- CTA unique : "Discutons de votre projet →" (scroll vers formulaire, pas de nouvelle page)
- Pas d'image de fond, pas de photo du fondateur

### 2. Problème / Pourquoi HFreshnel
Comparatif deux colonnes "Sans HFreshnel" vs "Avec HFreshnel" :
- Dev freelance qui disparaît à mi-projet → Interlocuteur unique du cadrage à la livraison
- Prix qui dérive hors scope → Forfait fixe, avenant explicite pour tout ajout
- Délais non tenus → Livraison garantie contractuellement
- Gestion des sous-traitants par le client → On gère tout, le client valide
- **Ne jamais mentionner la sous-traitance explicitement sur le site**

### 3. Offre
- Livrables : App mobile (iOS + Android), Backend API, Dashboard web admin, Déploiement inclus, Documentation technique, Handover complet
- Réassurance : "Chaque projet démarre sur un périmètre contractualisé. Aucune surprise."
- Prix affiché publiquement : "Projets entre 6 000€ et 15 000€ HT selon le périmètre." (filtre les prospects non qualifiés)

### 4. Projets (Portfolio)
3 cards → modal au clic (pas de nouvelle page). Ordre d'affichage : **AppartLink → PackLoop → Pula Pay** (du plus déployé au plus conceptuel).

**AppartLink**
- SaaS multi-rôles (Tenant / Owner / Admin) — visite 3D, paiement caution, validation admin
- Déjà déployé, complexité élevée → présentation via **vidéo démo scriptée 90s** (pas de démo live multi-rôles)
- Script vidéo : 0-10s problème → 10-40s owner/tenant/visite 3D → 40-70s paiement caution + dashboard admin → 70-90s stack + délai de livraison

**PackLoop**
- App mobile de co-bagage entre particuliers
- MVP fonctionnel, **UI polish requis avant déploiement** (point bloquant identifié, à traiter en priorité 2)

**Pula Pay**
- Fintech — vision produit et systèmes de paiement
- MVP fonctionnel mais sensible → **vidéo démo uniquement, jamais de backend exposé publiquement**

### 5. Process
Timeline horizontale (desktop) / verticale (mobile), 5 étapes, **sans durées chiffrées** (pas d'engagement public sur les délais avant track record) :
1. Appel découverte
2. Proposition écrite (périmètre, délais, prix)
3. Signature + acompte
4. Développement — *démo fonctionnelle visible à mi-parcours* (réassurance affichée explicitement)
5. Livraison + transfert des accès

Réassurance : "Vous ne payez le solde qu'à la livraison. Les accès vous sont transférés après encaissement."

### 6. FAQ
5 questions, réponses rédigées et actées :

- **Agence ou freelance ?** → Structure avec interlocuteur unique, réseau de professionnels mobilisés en coulisses
- **Dépassement de périmètre ?** → Avenant chiffré et validé avant intégration, jamais de facturation surprise
- **Délais moyens ?** → Communiqués dans la proposition écrite, contractuels avec marge de sécurité
- **Modification après livraison ?** → Code source + documentation transférés, évolution libre
- **Startups sans financement ?** → Oui, fourchette de prix pensée pour la phase de validation pré-levée

### 7. CTA final + Formulaire
- Titre : "Vous avez un projet ?"
- 3 champs maximum : Prénom, Email, Description du projet
- Pas de champ téléphone
- Pas de Calendly à ce stade — qualification par email avant proposition d'appel
- Destination : Resend → email pro

---

## Checklist Préparation Portfolio (Phase bloquante avant outreach)

- [ ] Zéro erreur console en prod sur les 3 projets
- [ ] Zéro écran blanc / crash au démarrage
- [ ] Données de démo cohérentes (pas de placeholders visibles)
- [ ] README propre par repo (stack, setup, screenshots)
- [ ] AppartLink : vidéo démo scriptée 90s
- [ ] PackLoop : UI polish puis déploiement
- [ ] Pula Pay : vidéo démo (pas de déploiement public)

---

## Structure Juridique

- **Statut** : Auto-entreprise (à créer)
- **Activité** : Développement de logiciels — code APE 6201Z
- **Régime TVA** : Franchise en base (art. 293 B CGI) — tant que CA < 37 500€/an
- **Charges** : 22% sur CA brut (pas sur marge nette)
- **Pays** : France
- **Séquencement** : Portfolio + site avant création de l'entreprise et début de l'outreach

---

## Modèle Économique

- **Pricing** : Au projet (forfait), jamais au jour
- **Acompte** : 50% à la signature — obligatoire avant tout démarrage
- **Solde** : 50% à la livraison — accès transférés après encaissement
- **Calcul prix** : `(coût sous-traitants × 1.5) + charges 22% sur CA total + marge`
- **Marge nette cible** : 30-40% minimum après sous-traitants et charges
- **Fourchette MVP intermédiaire** : 6 000€ — 15 000€ HT

---

## Process Commercial

1. Premier contact (cold email)
2. Appel découverte 30-45 min — écoute, pas de chiffrage oral
3. Proposition écrite sous 48h (périmètre, délais, prix, conditions)
4. Négociation sur le périmètre, jamais sur le prix
5. Signature contrat → acompte → démarrage
6. Point mi-parcours obligatoire avec démo
7. Livraison en recette → validation → facture solde → accès

---

## Règles Opérationnelles Non Négociables

- Signature + acompte avant tout démarrage — sans exception
- Contrat sous-traitant signé avant que le sous-traitant commence
- Tout ajout hors périmètre = avenant facturé
- Délais annoncés au client incluent 10-15% de buffer
- Les deadlines sous-traitants ne sont jamais communiquées au client

---

## Sous-traitance

- **Plateformes** : Malt (priorité), Upwork
- **Ce qui est sous-traité** : UI/UX design, frontend si chargé, DevOps si hors Supabase
- **Ce qui n'est jamais sous-traité** : relation client, cadrage, livraison finale
- **Contrat sous-traitant** : clause de confidentialité + clause de non-sollicitation (2 ans)

---

## Contrats — Éléments Obligatoires

### Contrat client
- Périmètre inclus (features explicites)
- Périmètre exclu (liste explicite)
- Modalités de paiement
- Délais et jalons
- Cession PI au paiement intégral uniquement
- Clause d'avenant pour tout ajout hors scope

### Contrat sous-traitant
- Clause de confidentialité
- Clause de non-sollicitation client
- Livrables attendus précis
- Paiement à la validation par le prestataire principal (pas le client)

---

## Profil Opérateur

- **Statut actuel** : Étudiant / fin d'études
- **Expérience commerciale** : Zéro client à ce jour
- **Réseau sous-traitants** : À construire via plateformes
- **Portfolio** : 3 MVPs fonctionnels existants (AppartLink, PackLoop, Pula Pay) — en cours de préparation pour présentation publique
- **Localisation** : France

---

## Canaux d'Acquisition

- **Cold email outreach — canal principal**
- **LinkedIn exclu des canaux business** — réservé à la recherche d'emploi uniquement
- Malt (profil entrant, secondaire)
- Bouche à oreille (phase ultérieure)

---

## Contexte Marché 2026

- Pression tarifaire due aux outils IA (Bolt, Lovable, v0) — éducation client nécessaire
- Concurrence offshore sur les plateformes — différenciation par crédibilité, pas par prix
- Cycle de décision PME long (2-3 mois) — anticiper trésorerie
- Outils IA utilisés en interne pour compresser le temps d'exécution et augmenter la marge

---

## Ce qui N'est Pas Encore Décidé

- Type de missions préféré (court vs long terme)
- Présentiel vs remote (non arbitré)
- Expansion cible SME/startups au-delà du portfolio initial (évoquée, non tranchée)
