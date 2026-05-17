# Landing Page Generation Prompt

**Instructions pour Claude Code** : Lis ce fichier et génère la landing page selon les informations ci-dessous. Respecte l'architecture existante du projet (route dynamique, tracking, CTA component, LandingLayout).

---

## Informations du projet

**Landing ID** : `{{LANDING_ID}}`  
*(Exemple : `saas-analytics`, `mobile-app`, `crypto-wallet`)*

**Route cible** : `/landing/{{LANDING_ID}}/page.tsx`

**Domaine de déploiement** : `hfreshnel.com/landing/{{LANDING_ID}}`

---

## Contenu de la landing page

### Hero Section

**Titre principal** :  
`{{HERO_TITLE}}`

**Sous-titre / Description** :  
`{{HERO_SUBTITLE}}`

**CTA principal** :
- Texte : `{{PRIMARY_CTA_TEXT}}`
- Lien : `{{PRIMARY_CTA_URL}}`
- Variant : `primary` | `secondary`

**CTA secondaire** (optionnel) :
- Texte : `{{SECONDARY_CTA_TEXT}}`
- Lien : `{{SECONDARY_CTA_URL}}`
- Variant : `primary` | `secondary`

---

### Features / Benefits Section

**Titre de section** :  
`{{FEATURES_TITLE}}`

**Liste des features** (3-6 items) :

1. **{{FEATURE_1_TITLE}}**  
   `{{FEATURE_1_DESCRIPTION}}`

2. **{{FEATURE_2_TITLE}}**  
   `{{FEATURE_2_DESCRIPTION}}`

3. **{{FEATURE_3_TITLE}}**  
   `{{FEATURE_3_DESCRIPTION}}`

*(Ajouter autant que nécessaire)*

---

### Social Proof Section (optionnel)

**Titre** :  
`{{SOCIAL_PROOF_TITLE}}`

**Contenu** :
- Nombre d'utilisateurs : `{{USER_COUNT}}`
- Témoignage : `{{TESTIMONIAL_TEXT}}`
- Auteur : `{{TESTIMONIAL_AUTHOR}}`
- Logo partners (URLs) : `{{PARTNER_LOGOS}}`

---

### Final CTA Section

**Titre** :  
`{{FINAL_CTA_TITLE}}`

**Description** :  
`{{FINAL_CTA_DESCRIPTION}}`

**Bouton** :
- Texte : `{{FINAL_CTA_TEXT}}`
- Lien : `{{FINAL_CTA_URL}}`

---

## Style & Design

**Palette de couleurs** :
- Primaire : `{{PRIMARY_COLOR}}`
- Secondaire : `{{SECONDARY_COLOR}}`
- Background : `{{BACKGROUND_COLOR}}`

**Tone / Atmosphere** :  
`{{TONE}}` *(Exemples : professional, playful, minimal, bold, elegant)*

**Layout preference** :  
`{{LAYOUT}}` *(Exemples : centered, full-width, two-column, single-column)*

---

## Tracking & Conversion

**Event de conversion** :  
Déclencher `trackEvent('{{LANDING_ID}}', 'conversion', { action: '{{CONVERSION_ACTION}}' })` lors de :
- `{{TRIGGER_CONDITION}}`

*(Exemple : clic sur CTA principal, soumission de formulaire, etc.)*

---

## Instructions techniques

- Utiliser `LandingLayout` avec `landingId="{{LANDING_ID}}"`
- Tous les CTA doivent utiliser le composant `<CTA>`
- Styles inline (pas de CSS external)
- Responsive (mobile-first si possible)
- Code en anglais (variables, fonctions, commentaires)
- TypeScript strict

---

## Notes additionnelles

`{{ADDITIONAL_NOTES}}`

*(Tout élément spécifique non couvert ci-dessus)*

---

**Fin du prompt**