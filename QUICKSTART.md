# 🚀 Guide de démarrage rapide

## Configuration initiale (5 minutes)

### 1. Informations personnelles

Ouvrir `/src/lib/siteConfig.ts` et remplacer:

```typescript
contact: {
  phone: "+509 XXXX-XXXX",        // ← Votre numéro
  email: "contact@johannelandrin.com",  // ← Votre email
  whatsapp: "+509 XXXX-XXXX",     // ← Votre WhatsApp
},

office: {
  address: "Port-au-Prince, Haïti",     // ← Votre ville
  detailedAddress: "Adresse complète à configurer",  // ← Adresse complète
  hours: "Lundi - Vendredi: 9h00 - 17h00",  // ← Vos horaires
  mapEmbedUrl: "",  // ← URL Google Maps (optionnel)
},

social: {
  facebook: "",    // ← Votre page Facebook
  instagram: "",   // ← Votre Instagram
  linkedin: "",    // ← Votre LinkedIn
},
```

### 2. Configuration des emails

Créer `.env.local`:
```env
RESEND_API_KEY=re_xxxxx  # Obtenir sur resend.com
CONTACT_EMAIL=votre-email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Contenu personnalisé

#### Modifier la bio (À propos)

Fichier: `/src/lib/i18n/dictionaries.ts`

Chercher et modifier:
```typescript
about: {
  bioText: 'Votre bio ici...',
  educationText: 'Votre formation ici...',
  approachText: 'Votre approche ici...',
}
```

#### Modifier les FAQ

Même fichier, section `faq`:
```typescript
faq: {
  q1: 'Votre question 1?',
  a1: 'Votre réponse 1',
  // etc.
}
```

### 4. Activer/Désactiver des fonctionnalités

Dans `/src/lib/siteConfig.ts`:

```typescript
features: {
  enableTestimonials: false,    // Témoignages
  enableMap: false,             // Carte Google Maps
  enableYouthService: true,     // Service jeunes
  enableGroupService: true,     // Service groupe
  enableCreole: true,           // Langue créole
},

booking: {
  enableCalendly: false,        // Calendly (si vous l'utilisez)
  calendlyUrl: "https://...",   // URL Calendly
},
```

## Commandes essentielles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer production
npm start

# Vérifier erreurs
npm run lint
```

## Tester localement

1. `npm run dev`
2. Ouvrir http://localhost:3000
3. Tester:
   - ✅ Navigation entre les pages
   - ✅ Changement de langue (FR/KR)
   - ✅ Formulaires (booking, contact, workshop)
   - ✅ Responsive (mobile, tablet, desktop)

## Déployer sur Vercel

1. Push sur GitHub:
```bash
git add .
git commit -m "Initial commit"
git push
```

2. Aller sur [vercel.com](https://vercel.com)
3. "Import Project" → Sélectionner votre repo
4. Ajouter les variables d'environnement:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
5. Déployer!

## Personnalisation du design

### Couleurs

Fichier: `/src/app/globals.css`

Modifier les couleurs Tailwind ou ajouter des variables CSS custom.

### Police

Fichier: `/src/app/layout.tsx`

Remplacer `Inter` par une autre police Google Fonts.

## Ajouter des articles de blog

1. Créer `/content/posts/mon-article.mdx`
2. Ajouter le frontmatter:
```mdx
---
title: "Titre de l'article"
date: "2024-01-15"
tags: ["Tag1", "Tag2"]
---

Contenu de l'article...
```

3. Implémenter la lecture MDX (voir docs Next.js)

## Support email

### Configuration Resend

1. Créer compte sur resend.com
2. Vérifier votre domaine
3. Obtenir clé API
4. Installer: `npm install resend`
5. Créer `/src/lib/email.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}) {
  return await resend.emails.send({
    from: 'Site Web <onboarding@resend.dev>',
    ...params,
  });
}
```

6. Importer dans les API routes et utiliser

## Problèmes courants

### Formulaires ne fonctionnent pas
- Vérifier que les API routes retournent bien
- Vérifier la console pour les erreurs
- Tester avec console.log dans les API routes

### Build échoue
- Vérifier les erreurs TypeScript
- `npm run lint` pour voir les problèmes
- Vérifier que tous les imports sont corrects

### Images ne s'affichent pas
- Utiliser `next/image` avec des chemins absolus
- Images dans `/public` accessibles via `/nom-image.jpg`

## Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Resend Email](https://resend.com/docs)

## Checklist avant lancement

- [ ] Toutes les infos dans `siteConfig.ts` sont à jour
- [ ] Bio et formation complétées
- [ ] Emails configurés et testés
- [ ] Tous les formulaires testés
- [ ] Site testé sur mobile
- [ ] Domaine configuré
- [ ] SSL activé (automatique sur Vercel)
- [ ] Google Analytics ajouté (optionnel)
- [ ] Backups configurés

---

**Besoin d'aide?** Consultez le README.md complet ou la documentation Next.js.
