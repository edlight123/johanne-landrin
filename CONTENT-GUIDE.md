# 📝 Guide d'édition du contenu

Ce guide explique comment modifier le contenu du site sans toucher au code.

## 🎯 Fichiers principaux à connaître

### 1. `/src/lib/siteConfig.ts`
**Toutes les informations personnelles et de configuration**

### 2. `/src/lib/i18n/dictionaries.ts`
**Tous les textes du site (FR et Créole)**

## 📋 Modifications courantes

### Changer votre numéro de téléphone

Fichier: `/src/lib/siteConfig.ts`
```typescript
contact: {
  phone: "+509 XXXX-XXXX",  // ← Ici
```

### Changer votre email

Fichier: `/src/lib/siteConfig.ts`
```typescript
contact: {
  email: "votre-email@example.com",  // ← Ici
```

### Changer l'adresse du cabinet

Fichier: `/src/lib/siteConfig.ts`
```typescript
office: {
  address: "Votre ville",  // ← Affichage court
  detailedAddress: "Adresse complète avec rue",  // ← Détails
  hours: "Vos horaires",
```

### Modifier les horaires

Fichier: `/src/lib/siteConfig.ts`
```typescript
office: {
  hours: "Lundi - Vendredi: 9h00 - 17h00",  // ← Ici
```

### Ajouter vos réseaux sociaux

Fichier: `/src/lib/siteConfig.ts`
```typescript
social: {
  facebook: "https://facebook.com/votre-page",
  instagram: "https://instagram.com/votre-compte",
  linkedin: "https://linkedin.com/in/votre-profil",
},
```

### Modifier la bio (page À propos)

Fichier: `/src/lib/i18n/dictionaries.ts`

Chercher `about:` et modifier:
```typescript
about: {
  bioText: 'Écrivez votre biographie ici...',
  educationText: 'Détails de votre formation...',
  approachText: 'Décrivez votre approche thérapeutique...',
}
```

### Modifier les thématiques d'ateliers

Fichier: `/src/lib/siteConfig.ts`
```typescript
workshopTopics: [
  "Gestion du stress et burnout",
  "Votre thématique personnalisée",
  "Autre thématique",
  // Ajoutez autant que vous voulez
],
```

### Modifier les questions FAQ

Fichier: `/src/lib/i18n/dictionaries.ts`

Section `faq:`:
```typescript
faq: {
  q1: 'Votre question 1?',
  a1: 'Votre réponse 1',
  q2: 'Votre question 2?',
  a2: 'Votre réponse 2',
  // etc.
}
```

## 🌐 Traductions (Créole)

Fichier: `/src/lib/i18n/dictionaries.ts`

Deux sections principales:
- `fr: { ... }` - Textes en français
- `kr: { ... }` - Textes en créole

Pour modifier une traduction créole:
```typescript
kr: {
  home: {
    heroTitle: 'Votre traduction en créole',
  }
}
```

## 🎨 Personnalisation avancée

### Activer/Désactiver des services

Fichier: `/src/lib/siteConfig.ts`
```typescript
features: {
  enableYouthService: true,     // Service adolescents
  enableGroupService: true,     // Groupes
  enableCreole: true,           // Langue créole
  enableTestimonials: false,    // Témoignages
  enableMap: false,             // Carte Google
},
```

### Configurer Calendly

Fichier: `/src/lib/siteConfig.ts`
```typescript
booking: {
  calendlyUrl: "https://calendly.com/votre-lien",
  enableCalendly: true,  // Mettre true pour activer
},
```

### Ajouter une carte Google Maps

1. Aller sur [Google Maps](https://www.google.com/maps)
2. Chercher votre adresse
3. Cliquer "Partager" → "Intégrer une carte"
4. Copier l'URL src="..."
5. Coller dans:

Fichier: `/src/lib/siteConfig.ts`
```typescript
office: {
  mapEmbedUrl: "https://www.google.com/maps/embed?...",
},

features: {
  enableMap: true,  // Activer
}
```

## 📄 Pages statiques

### Politique de confidentialité

Fichier: `/src/lib/i18n/dictionaries.ts`

Section `privacy:`:
```typescript
privacy: {
  section1Title: 'Titre section',
  section1Text: 'Contenu...',
}
```

### Mentions légales

Section `legal:`:
```typescript
legal: {
  hostText: 'Informations hébergeur...',
}
```

## 🔄 Processus de mise à jour

1. **Modifier le fichier concerné**
2. **Sauvegarder**
3. **Tester en local**: `npm run dev`
4. **Vérifier les changements**
5. **Commiter et push**:
```bash
git add .
git commit -m "Mise à jour du contenu"
git push
```
6. **Vercel redéploiera automatiquement**

## ⚠️ Points d'attention

### Ne PAS modifier:
- Les noms de clés (ex: `phone:`, `email:`)
- Les guillemets et virgules
- Les accolades `{ }`

### Toujours vérifier:
- Les guillemets fermés: `"texte"`
- Les virgules après chaque ligne
- L'indentation (espaces)

### Exemple CORRECT:
```typescript
contact: {
  phone: "+509 1234-5678",
  email: "test@example.com",
},
```

### Exemple INCORRECT:
```typescript
contact: {
  phone: +509 1234-5678,        // ❌ Manque guillemets
  email: "test@example.com"     // ❌ Manque virgule
}                                // ❌ Manque virgule
```

## 🆘 En cas d'erreur

Si le site ne fonctionne plus après une modification:

1. Vérifier les erreurs dans le terminal:
```bash
npm run dev
```

2. Chercher les lignes avec des erreurs

3. Vérifier:
   - Guillemets ouverts et fermés
   - Virgules présentes
   - Accolades correctes

4. Annuler les changements si besoin:
```bash
git checkout src/lib/siteConfig.ts
```

## 📞 Structure des fichiers

```
src/
├── lib/
│   ├── siteConfig.ts         ← Infos personnelles
│   └── i18n/
│       └── dictionaries.ts   ← Tous les textes
├── app/
│   ├── page.tsx             ← Page d'accueil
│   ├── services/page.tsx    ← Page services
│   └── ...                  ← Autres pages
└── components/              ← Composants réutilisables
```

## 💡 Conseils

- **Faites des sauvegardes** avant de modifier
- **Testez toujours localement** avant de déployer
- **Modifiez un fichier à la fois**
- **Commitez souvent** avec des messages clairs
- **Gardez une copie** de vos textes importants

## 📚 Pour aller plus loin

Si vous voulez modifier la structure ou le design:
- Consultez le README.md complet
- Voir la documentation Next.js
- Demander de l'aide à un développeur

---

**Ce guide couvre 90% des modifications courantes sans toucher au code!**
