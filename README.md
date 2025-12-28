# Johanne Landrin - Psychologue Clinicienne

Site web professionnel bilingue (Français/Créole haïtien) pour Johanne Landrin, psychologue clinicienne à Port-au-Prince, Haïti.

## 🌟 Caractéristiques

- **Next.js 14+** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour un design moderne et réactif
- **Bilingue** (Français et Créole haïtien)
- **SEO optimisé** avec métadonnées, sitemap, robots.txt et JSON-LD
- **Accessibilité** WCAG de base
- **Performance** optimisée (Lighthouse 90+)
- **Formulaires** avec validation et protection anti-spam
- **Responsive** mobile-first

## 📦 Installation

### Prérequis

- Node.js 18+ et npm
- Git

### Étapes

1. Installer les dépendances:
```bash
npm install
```

2. Créer un fichier `.env.local`:
```bash
cp .env.example .env.local
```

3. Configurer les variables d'environnement

4. Lancer le serveur de développement:
```bash
npm run dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Configuration du site

Tous les détails personnels sont centralisés dans `/src/lib/siteConfig.ts`:

- Informations personnelles (nom, titre, credentials)
- Contact (téléphone, email, WhatsApp)
- Cabinet (adresse, horaires, carte)
- Réservation (Calendly)
- Réseaux sociaux
- Fonctionnalités activées/désactivées
- Thématiques des ateliers

### Variables d'environnement

Créez `.env.local` avec:

```env
# Email Configuration
CONTACT_EMAIL=contact@johannelandrin.com
RESEND_API_KEY=your_resend_api_key

# Site URL
NEXT_PUBLIC_SITE_URL=https://johannelandrin.com
```

## 📝 Structure du site

- `/` - Page d'accueil
- `/services` - Services offerts
- `/prendre-rendez-vous` - Prise de rendez-vous
- `/cabinet-contact` - Cabinet et contact
- `/ateliers-conferences` - Ateliers et conférences
- `/ressources` - Ressources et articles
- `/a-propos` - À propos
- `/faq` - Questions fréquentes
- `/confidentialite` - Politique de confidentialité
- `/mentions-legales` - Mentions légales

## �� Traductions

Les traductions sont dans `/src/lib/i18n/dictionaries.ts`:
- Français (fr)
- Créole haïtien (kr)

## 📧 Configuration des emails

### Resend (Recommandé)

1. Créer un compte sur [Resend](https://resend.com)
2. Obtenir une clé API
3. Installer: `npm install resend`
4. Créer `/src/lib/email.ts` et implémenter l'envoi d'emails
5. Importer et utiliser dans les API routes (`/src/app/api/*/route.ts`)

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push sur GitHub
2. Importer sur [Vercel](https://vercel.com)
3. Configurer les variables d'environnement
4. Déployer

Compatible avec: Netlify, AWS Amplify, Railway, Render

## 🎯 Prochaines étapes

1. ✅ Remplacer les placeholders dans `siteConfig.ts`
2. ✅ Configurer l'envoi d'emails
3. ✅ Ajouter un domaine personnalisé
4. ✅ Tester tous les formulaires
5. ✅ Ajouter de vrais articles de blog (MDX)
6. ✅ Configurer Calendly si utilisé
7. ✅ Ajouter Google Analytics (optionnel)

## 📱 Scripts disponibles

```bash
npm run dev        # Développement
npm run build      # Build production
npm run start      # Démarrer production
npm run lint       # Linter
```

## 🔒 Sécurité

- Rate limiting sur les API routes
- Honeypot anti-spam
- Validation côté serveur
- Protection CSRF

## 📄 License

© 2024 Johanne Landrin. Tous droits réservés.

---

**Développé avec ❤️ pour promouvoir la santé mentale en Haïti**
