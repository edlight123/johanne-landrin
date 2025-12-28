# ✅ Checklist de déploiement

## Avant le lancement

### 📋 Configuration de base

- [ ] **Informations personnelles** complétées dans `/src/lib/siteConfig.ts`
  - [ ] Nom, titre, credentials
  - [ ] Téléphone
  - [ ] Email
  - [ ] WhatsApp
  
- [ ] **Cabinet** configuré
  - [ ] Adresse complète
  - [ ] Horaires d'ouverture
  - [ ] Carte Google Maps (si activée)

- [ ] **Réseaux sociaux** ajoutés
  - [ ] Facebook
  - [ ] Instagram
  - [ ] LinkedIn

- [ ] **Traductions** vérifiées
  - [ ] Textes français corrects
  - [ ] Textes créoles corrects (si activé)

### 📧 Configuration des emails

- [ ] Compte Resend créé
- [ ] Domaine vérifié sur Resend
- [ ] Clé API obtenue
- [ ] Variables d'environnement configurées
  - [ ] `RESEND_API_KEY`
  - [ ] `CONTACT_EMAIL`
  - [ ] `NEXT_PUBLIC_SITE_URL`

### 🧪 Tests

- [ ] **Formulaire de rendez-vous** testé
  - [ ] Validation des champs
  - [ ] Message de succès
  - [ ] Email reçu

- [ ] **Formulaire de contact** testé
  - [ ] Tous les champs fonctionnent
  - [ ] Email reçu

- [ ] **Formulaire d'ateliers** testé
  - [ ] Validation correcte
  - [ ] Email reçu

- [ ] **Navigation** vérifiée
  - [ ] Tous les liens fonctionnent
  - [ ] Menu mobile fonctionne
  - [ ] Footer complet

- [ ] **Changement de langue** testé
  - [ ] Basculement FR/KR fonctionne
  - [ ] Préférence sauvegardée

### 📱 Tests responsive

- [ ] **Mobile** (< 640px)
  - [ ] Toutes les pages lisibles
  - [ ] Formulaires utilisables
  - [ ] Menu hamburger fonctionne

- [ ] **Tablet** (640-1024px)
  - [ ] Layout adapté
  - [ ] Navigation fluide

- [ ] **Desktop** (> 1024px)
  - [ ] Design optimal
  - [ ] Espacement correct

### 🎨 Contenu

- [ ] **Page À propos** complétée
  - [ ] Biographie écrite
  - [ ] Formation détaillée
  - [ ] Approche décrite
  - [ ] Valeurs listées

- [ ] **FAQ** personnalisée
  - [ ] Questions pertinentes
  - [ ] Réponses complètes
  - [ ] Tarifs (si publics)

- [ ] **Politique de confidentialité** revue
- [ ] **Mentions légales** complétées
  - [ ] Informations d'hébergement

- [ ] **Thématiques d'ateliers** listées

### 🔍 SEO

- [ ] Titre du site configuré
- [ ] Meta description écrite
- [ ] Mots-clés définis
- [ ] URL du site correcte
- [ ] Sitemap généré
- [ ] Robots.txt configuré

## Déploiement sur Vercel

### Préparation

- [ ] Code pushé sur GitHub
- [ ] Repository public ou privé
- [ ] `.env.local` dans `.gitignore` (ne pas commiter!)

### Sur Vercel

- [ ] Compte Vercel créé
- [ ] Projet importé depuis GitHub
- [ ] Variables d'environnement ajoutées:
  - [ ] `RESEND_API_KEY`
  - [ ] `CONTACT_EMAIL`
  - [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] Premier déploiement réussi
- [ ] Site accessible via URL Vercel

### Domaine personnalisé

- [ ] Domaine acheté (ex: johannelandrin.com)
- [ ] Domaine ajouté dans Vercel
- [ ] DNS configurés (A/CNAME records)
- [ ] SSL activé (automatique)
- [ ] Domaine accessible

## Après le lancement

### Tests en production

- [ ] Tous les formulaires testés en prod
- [ ] Emails reçus correctement
- [ ] Performance testée (Lighthouse)
- [ ] Accessibilité vérifiée

### SEO

- [ ] Site soumis à Google Search Console
- [ ] Sitemap soumis
- [ ] Google Analytics ajouté (optionnel)

### Monitoring

- [ ] Emails de test envoyés régulièrement
- [ ] Formulaires vérifiés mensuellement
- [ ] Contenu mis à jour régulièrement

### Sécurité

- [ ] Dépendances à jour (`npm update`)
- [ ] Vulnérabilités vérifiées (`npm audit`)
- [ ] Backups configurés

## Maintenance régulière

### Hebdomadaire
- [ ] Vérifier les emails reçus
- [ ] Répondre aux demandes de contact

### Mensuel
- [ ] Mettre à jour les dépendances
- [ ] Vérifier les formulaires
- [ ] Ajouter du contenu (ressources)

### Trimestriel
- [ ] Audit SEO
- [ ] Révision du contenu
- [ ] Test de performance
- [ ] Mise à jour des photos/design

## Ressources utiles

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)

### Outils
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Support
- Vérifier les logs sur Vercel en cas d'erreur
- Consulter QUICKSTART.md et CONTENT-GUIDE.md
- Issues GitHub (si repository partagé)

---

**💡 Conseil:** Cochez chaque élément au fur et à mesure. Ne sautez pas les tests!

**🎯 Objectif:** Site professionnel, fiable, et performant pour vos clients.
