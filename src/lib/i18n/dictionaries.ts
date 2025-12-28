export type Locale = 'fr' | 'kr';

export const dictionaries = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      services: 'Services',
      booking: 'Prendre rendez-vous',
      office: 'Cabinet',
      workshops: 'Ateliers',
      resources: 'Ressources',
      about: 'À propos',
      faq: 'FAQ',
    },
    
    // Common
    common: {
      learnMore: 'En savoir plus',
      contactUs: 'Nous contacter',
      bookNow: 'Prendre rendez-vous',
      send: 'Envoyer',
      cancel: 'Annuler',
      close: 'Fermer',
      loading: 'Chargement...',
      success: 'Succès',
      error: 'Erreur',
      required: 'Requis',
    },
    
    // Home Page
    home: {
      heroTitle: 'Psychothérapie & accompagnement psychologique',
      heroSubtitle: 'Espace d\'écoute, de soutien et de transformation pour votre bien-être mental',
      heroCTA: 'Prendre rendez-vous',
      heroSecondaryCTA: 'Inviter pour un atelier',
      servicesTitle: 'Services',
      servicesSubtitle: 'Un accompagnement adapté à vos besoins',
      themesTitle: 'Thématiques abordées',
      themesSubtitle: 'Des solutions pour divers défis de la vie',
      aboutTitle: 'À propos',
      aboutTeaser: 'Psychologue clinicienne passionnée par l\'accompagnement des personnes vers un mieux-être durable.',
      officeTitle: 'Cabinet',
      officeTeaser: 'Un espace confidentiel et accueillant au cœur de Port-au-Prince',
      resourcesTitle: 'Ressources',
      resourcesSubtitle: 'Articles et conseils pour votre santé mentale',
    },
    
    // Emergency Notice
    emergency: {
      title: 'En cas d\'urgence',
      message: 'Ce site est informatif. En cas d\'urgence ou de crise, contactez immédiatement les services d\'urgence locaux ou rendez-vous aux urgences de l\'hôpital le plus proche.',
      hotline: 'Ligne d\'aide: [Numéro à configurer]',
    },
    
    // Services Page
    services: {
      title: 'Services',
      subtitle: 'Accompagnement psychologique personnalisé',
      individual: {
        title: 'Consultation individuelle',
        description: 'Séances de psychothérapie en face à face pour adultes',
        forWho: 'Pour qui',
        forWhoDetails: 'Adultes (18 ans et plus) en quête de soutien psychologique',
        format: 'Format',
        formatDetails: 'En présentiel au cabinet ou en ligne (selon disponibilité)',
        duration: 'Durée',
        durationDetails: '50-60 minutes par séance',
      },
      youth: {
        title: 'Accompagnement adolescents et jeunes',
        description: 'Soutien adapté pour les 13-25 ans',
        forWhoDetails: 'Adolescents et jeunes adultes (13-25 ans)',
        formatDetails: 'En présentiel au cabinet',
        durationDetails: '45-50 minutes par séance',
      },
      group: {
        title: 'Groupe et psychoéducation',
        description: 'Ateliers de groupe sur des thématiques spécifiques',
        forWhoDetails: 'Groupes de 6-12 personnes',
        formatDetails: 'En présentiel',
        durationDetails: '90-120 minutes par séance',
      },
      workshops: {
        title: 'Ateliers et conférences',
        description: 'Interventions pour organisations, écoles et entreprises',
        link: 'Voir les ateliers',
      },
    },
    
    // Themes
    themes: {
      anxiety: 'Anxiété et stress',
      depression: 'Dépression et humeur',
      trauma: 'Traumatismes',
      relationships: 'Relations interpersonnelles',
      selfEsteem: 'Estime de soi',
      life: 'Transitions de vie',
      work: 'Difficultés professionnelles',
      grief: 'Deuil et perte',
    },
    
    // Booking Page
    booking: {
      title: 'Prendre rendez-vous',
      subtitle: 'Première étape vers votre mieux-être',
      methodTitle: 'Choisissez votre mode de réservation',
      option1: 'Réservation en ligne',
      option2: 'Demande par formulaire',
      formTitle: 'Demande de rendez-vous',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Téléphone',
      preferredDate: 'Date souhaitée',
      preferredTime: 'Heure souhaitée',
      message: 'Message (optionnel)',
      messageDetails: 'Décrivez brièvement le motif de consultation',
      submit: 'Envoyer la demande',
      successMessage: 'Votre demande a été envoyée. Nous vous contacterons dans les 24-48h.',
      policyTitle: 'Politique d\'annulation',
      policyText: 'Merci d\'annuler au moins 24h à l\'avance. Toute annulation tardive peut être facturée.',
      whatToExpect: 'À quoi s\'attendre',
      step1: 'Confirmation de votre rendez-vous par e-mail ou téléphone',
      step2: 'Première séance d\'évaluation (50-60 min)',
      step3: 'Plan d\'accompagnement personnalisé',
      confidentiality: 'Toutes les séances sont strictement confidentielles.',
    },
    
    // Office & Contact Page
    office: {
      title: 'Cabinet & Contact',
      subtitle: 'Un espace sécurisant pour votre parcours',
      locationTitle: 'Localisation',
      hoursTitle: 'Horaires',
      contactTitle: 'Coordonnées',
      contactFormTitle: 'Formulaire de contact',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      successMessage: 'Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    },
    
    // Workshops Page
    workshops: {
      title: 'Ateliers & Conférences',
      subtitle: 'Interventions pour organisations et collectivités',
      intro: 'J\'accompagne les organisations dans le renforcement du bien-être mental de leurs équipes, élèves ou bénéficiaires.',
      audienceTitle: 'Public cible',
      schools: 'Écoles et universités',
      ngos: 'ONG et associations',
      companies: 'Entreprises',
      topicsTitle: 'Thématiques proposées',
      formatsTitle: 'Formats d\'intervention',
      format1: 'Conférence (1-2 heures)',
      format2: 'Atelier interactif (demi-journée)',
      format3: 'Formation série (plusieurs séances)',
      inquiryTitle: 'Demande d\'intervention',
      orgName: 'Nom de l\'organisation',
      contactName: 'Nom du contact',
      email: 'E-mail',
      phone: 'Téléphone',
      date: 'Date souhaitée',
      audience: 'Taille de l\'audience',
      budget: 'Budget estimé (optionnel)',
      location: 'Lieu',
      message: 'Message et détails',
      submit: 'Envoyer la demande',
      successMessage: 'Votre demande a été envoyée. Je vous contacterai pour discuter des détails.',
    },
    
    // Resources Page
    resources: {
      title: 'Ressources',
      subtitle: 'Articles et conseils en santé mentale',
      searchPlaceholder: 'Rechercher un article...',
      allTopics: 'Tous les sujets',
      readMore: 'Lire la suite',
      noResults: 'Aucun article trouvé.',
    },
    
    // About Page
    about: {
      title: 'À propos',
      subtitle: 'Mon parcours et mon approche',
      bioTitle: 'Qui suis-je ?',
      bioText: 'Psychologue clinicienne diplômée, je suis passionnée par l\'accompagnement des personnes dans leur cheminement vers un mieux-être psychologique durable. Mon approche allie écoute empathique, rigueur clinique et respect profond de l\'unicité de chaque personne.',
      educationTitle: 'Formation',
      educationText: '[Détails de formation à ajouter]',
      approachTitle: 'Mon approche',
      approachText: 'J\'intègre différentes approches thérapeutiques (cognitive-comportementale, humaniste, systémique) selon les besoins uniques de chaque client. Mon objectif est de créer un espace sécurisant où vous pouvez explorer vos difficultés, identifier vos ressources et construire des solutions adaptées.',
      valuesTitle: 'Mes valeurs',
      value1: 'Confidentialité absolue',
      value2: 'Respect et non-jugement',
      value3: 'Approche centrée sur la personne',
      value4: 'Éthique professionnelle',
    },
    
    // FAQ Page
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Réponses aux questions courantes',
      q1: 'Combien coûte une séance ?',
      a1: '[Tarif à configurer] par séance individuelle. Des tarifs ajustés peuvent être discutés selon votre situation.',
      q2: 'Combien de temps dure une thérapie ?',
      a2: 'La durée varie selon vos objectifs. Certaines personnes consultent pour quelques séances, d\'autres s\'engagent sur plusieurs mois.',
      q3: 'Les séances sont-elles confidentielles ?',
      a3: 'Oui, absolument. Le secret professionnel est strictement respecté, sauf dans les cas où la loi impose une exception (danger imminent).',
      q4: 'Proposez-vous des consultations en ligne ?',
      a4: 'Oui, selon disponibilité. Contactez-moi pour vérifier les modalités.',
      q5: 'Comment se déroule la première séance ?',
      a5: 'La première séance est une évaluation où nous explorons votre demande, vos difficultés et vos attentes. Ensemble, nous établissons un plan d\'accompagnement.',
      q6: 'Acceptez-vous les assurances ?',
      a6: 'Contactez-moi pour discuter des options de paiement et de remboursement disponibles.',
    },
    
    // Privacy Page
    privacy: {
      title: 'Politique de confidentialité',
      intro: 'Votre vie privée est importante. Cette page explique comment vos données personnelles sont collectées, utilisées et protégées.',
      section1Title: 'Données collectées',
      section1Text: 'Nous collectons uniquement les informations nécessaires à la gestion de vos rendez-vous et communications (nom, e-mail, téléphone, messages).',
      section2Title: 'Utilisation des données',
      section2Text: 'Vos données sont utilisées exclusivement pour vous contacter et gérer votre suivi psychologique.',
      section3Title: 'Protection',
      section3Text: 'Vos données sont stockées de manière sécurisée et ne sont jamais partagées avec des tiers.',
      section4Title: 'Vos droits',
      section4Text: 'Vous avez le droit d\'accéder, corriger ou supprimer vos données à tout moment en nous contactant.',
    },
    
    // Legal Page
    legal: {
      title: 'Mentions légales',
      ownerTitle: 'Propriétaire du site',
      ownerText: 'Johanne Landrin, Psychologue clinicienne',
      hostTitle: 'Hébergement',
      hostText: '[Informations d\'hébergement à configurer]',
      licenseTitle: 'Propriété intellectuelle',
      licenseText: 'Tous les contenus de ce site (textes, images, logos) sont la propriété de Johanne Landrin et sont protégés par le droit d\'auteur.',
      disclaimerTitle: 'Limitation de responsabilité',
      disclaimerText: 'Ce site est informatif et ne remplace pas une consultation professionnelle. En cas d\'urgence, contactez les services d\'urgence.',
    },
    
    // Footer
    footer: {
      emergency: 'En cas d\'urgence, contactez immédiatement les services d\'urgence locaux.',
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      legal: 'Mentions légales',
    },
  },
  
  kr: {
    // Navigation
    nav: {
      home: 'Akèy',
      services: 'Sèvis',
      booking: 'Pran randevou',
      office: 'Kabinè',
      workshops: 'Atelye',
      resources: 'Resous',
      about: 'Konsènan',
      faq: 'Kesyon',
    },
    
    // Common
    common: {
      learnMore: 'Aprann plis',
      contactUs: 'Kontakte nou',
      bookNow: 'Pran randevou',
      send: 'Voye',
      cancel: 'Anile',
      close: 'Fèmen',
      loading: 'Ap chaje...',
      success: 'Siksè',
      error: 'Erè',
      required: 'Obligatwa',
    },
    
    // Home Page
    home: {
      heroTitle: 'Sikoterapi & akonpayman sikolojik',
      heroSubtitle: 'Espas pou koute, sipò ak transfòmasyon pou byennèt mantal ou',
      heroCTA: 'Pran randevou',
      heroSecondaryCTA: 'Envite pou atelye',
      servicesTitle: 'Sèvis',
      servicesSubtitle: 'Yon akonpayman adapte ak bezwen ou',
      themesTitle: 'Tematik yo trete',
      themesSubtitle: 'Solisyon pou diferan defi nan lavi',
      aboutTitle: 'Konsènan',
      aboutTeaser: 'Sikològ klinik ki pasyone pa akonpayman moun vè yon byennèt dirab.',
      officeTitle: 'Kabinè',
      officeTeaser: 'Yon espas konfidansyèl epi akeyan nan kè Pòtoprens',
      resourcesTitle: 'Resous',
      resourcesSubtitle: 'Atik ak konsèy pou sante mantal ou',
    },
    
    // Emergency Notice
    emergency: {
      title: 'An ka ijans',
      message: 'Sit sa a enfòmatif. An ka ijans oswa kriz, kontakte sèvis ijans lokal yo imedyatman oswa ale nan lopital ki pi pre a.',
      hotline: 'Liy èd: [Nimewo pou konfigire]',
    },
    
    // Services Page
    services: {
      title: 'Sèvis',
      subtitle: 'Akonpayman sikolojik pèsonalize',
      individual: {
        title: 'Konsiltasyon endividyèl',
        description: 'Seyans sikoterapi fas a fas pou granmoun',
        forWho: 'Pou ki moun',
        forWhoDetails: 'Granmoun (18 an e plis) ki chèche sipò sikolojik',
        format: 'Fòma',
        formatDetails: 'Nan kabinè a oswa anliy (selon disponibilite)',
        duration: 'Dire',
        durationDetails: '50-60 minit pa seyans',
      },
      youth: {
        title: 'Akonpayman adolèsan ak jèn',
        description: 'Sipò adapte pou 13-25 an',
        forWhoDetails: 'Adolèsan ak jèn adilt (13-25 an)',
        formatDetails: 'Nan kabinè a',
        durationDetails: '45-50 minit pa seyans',
      },
      group: {
        title: 'Gwoup ak sikoeydikasyon',
        description: 'Atelye gwoup sou tematik espesifik',
        forWhoDetails: 'Gwoup 6-12 moun',
        formatDetails: 'Nan pèsòn',
        durationDetails: '90-120 minit pa seyans',
      },
      workshops: {
        title: 'Atelye ak konferans',
        description: 'Entèvansyon pou òganizasyon, lekòl ak antrepriz',
        link: 'Gade atelye yo',
      },
    },
    
    // Themes
    themes: {
      anxiety: 'Enkyetid ak estrès',
      depression: 'Depresyon',
      trauma: 'Trawmatis',
      relationships: 'Relasyon entèpèsonèl',
      selfEsteem: 'Estimasyon tèt ou',
      life: 'Tranzisyon nan lavi',
      work: 'Difikilte pwofesyonèl',
      grief: 'Dey ak pèt',
    },
    
    // Booking Page
    booking: {
      title: 'Pran randevou',
      subtitle: 'Premye etap vè byennèt ou',
      methodTitle: 'Chwazi fason pou rezevasyon',
      option1: 'Rezève anliy',
      option2: 'Demann pa fòmilè',
      formTitle: 'Demann randevou',
      name: 'Non konplè',
      email: 'Adrès imèl',
      phone: 'Telefòn',
      preferredDate: 'Dat ou vle',
      preferredTime: 'Lè ou vle',
      message: 'Mesaj (opsyonèl)',
      messageDetails: 'Dekri rezon konsiltasyon an',
      submit: 'Voye demann',
      successMessage: 'Demann ou voye. Nap kontakte ou nan 24-48 èdtan.',
      policyTitle: 'Politik anilasyon',
      policyText: 'Tanpri anile omwen 24 èdtan davans. Anilasyon ta kapab fakture.',
      whatToExpect: 'Kisa pou espere',
      step1: 'Konfirmasyon randevou pa imèl oswa telefòn',
      step2: 'Premye seyans evalyasyon (50-60 min)',
      step3: 'Plan akonpayman pèsonalize',
      confidentiality: 'Tout seyans yo konfidansyèl totalman.',
    },
    
    // Office & Contact Page
    office: {
      title: 'Kabinè & Kontak',
      subtitle: 'Yon espas ki gen sekirite pou chemen ou',
      locationTitle: 'Lokalizasyon',
      hoursTitle: 'Orè',
      contactTitle: 'Kòdone',
      contactFormTitle: 'Fòmilè kontak',
      name: 'Non',
      email: 'Imèl',
      phone: 'Telefòn',
      subject: 'Sijè',
      message: 'Mesaj',
      send: 'Voye',
      successMessage: 'Mesaj voye avèk siksè. Nap reponn ou byento.',
    },
    
    // Workshops Page
    workshops: {
      title: 'Atelye & Konferans',
      subtitle: 'Entèvansyon pou òganizasyon ak kolektivite',
      intro: 'Mwen akonpanye òganizasyon yo nan ranfòse byennèt mantal ekip yo, elèv yo oswa benefisyè yo.',
      audienceTitle: 'Piblik sib',
      schools: 'Lekòl ak inivèsite',
      ngos: 'ONG ak asosyasyon',
      companies: 'Antrepriz',
      topicsTitle: 'Tematik ki pwopòze',
      formatsTitle: 'Fòma entèvansyon',
      format1: 'Konferans (1-2 èdtan)',
      format2: 'Atelye entèraktif (demi-jou)',
      format3: 'Fòmasyon seri (plizyè seyans)',
      inquiryTitle: 'Demann entèvansyon',
      orgName: 'Non òganizasyon',
      contactName: 'Non kontak',
      email: 'Imèl',
      phone: 'Telefòn',
      date: 'Dat ou vle',
      audience: 'Gwosè odyans',
      budget: 'Bije estime (opsyonèl)',
      location: 'Kote',
      message: 'Mesaj ak detay',
      submit: 'Voye demann',
      successMessage: 'Demann ou voye. Map kontakte ou pou diskite detay yo.',
    },
    
    // Resources Page
    resources: {
      title: 'Resous',
      subtitle: 'Atik ak konsèy nan sante mantal',
      searchPlaceholder: 'Chèche yon atik...',
      allTopics: 'Tout sijè',
      readMore: 'Li plis',
      noResults: 'Pa gen atik.',
    },
    
    // About Page
    about: {
      title: 'Konsènan',
      subtitle: 'Chemen mwen ak apwòch mwen',
      bioTitle: 'Kiyès mwen ye?',
      bioText: 'Sikològ klinik diplome, mwen pasyone pa akonpayman moun nan chemen yo vè yon byennèt sikolojik dirab. Apwòch mwen melanje koute anpatik, rigè klinik ak respè pwofon pou inikalite chak moun.',
      educationTitle: 'Fòmasyon',
      educationText: '[Detay fòmasyon pou ajoute]',
      approachTitle: 'Apwòch mwen',
      approachText: 'Mwen entegre diferan apwòch terapetik (kognitif-konpòtmantal, imanis, sistemik) selon bezwen inik chak kliyan. Objektif mwen se kreye yon espas sekirite kote ou ka eksplore difikilte ou, idantifye resous ou epi konstwi solisyon adapte.',
      valuesTitle: 'Valè mwen',
      value1: 'Konfidansyalite absoli',
      value2: 'Respè san jijman',
      value3: 'Apwòch santre sou moun nan',
      value4: 'Etik pwofesyonèl',
    },
    
    // FAQ Page
    faq: {
      title: 'Kesyon komen',
      subtitle: 'Repons pou kesyon komen',
      q1: 'Konbyen yon seyans koute?',
      a1: '[Tarif pou konfigire] pa seyans endividyèl. Tarif ajiste ka diskite selon sitiyasyon ou.',
      q2: 'Konbyen tan yon terapi dire?',
      a2: 'Dire varyeselon objektif ou. Kèk moun konsiltepou kèk seyans, lòt yo angaje pou plizyè mwa.',
      q3: 'Èske seyans yo konfidansyèl?',
      a3: 'Wi, totalman. Sekrè pwofesyonèl respekte estrikteman, sof nan ka kote lalwa enpoze yon eksepsyon (danje eminann).',
      q4: 'Èske ou ofri konsiltasyon anliy?',
      a4: 'Wi, selon disponibilite. Kontakte m pou verifye modalite yo.',
      q5: 'Kijan premye seyans an dewoule?',
      a5: 'Premye seyans lan se yon evalyasyon kote nou eksplore demann ou, difikilte ou ak atant ou. Ansanm, nou etabli yon plan akonpayman.',
      q6: 'Èske ou aksepte asirans?',
      a6: 'Kontakte m pou diskite opsyon peman ak ranbousman ki disponib.',
    },
    
    // Privacy Page
    privacy: {
      title: 'Politik konfidansyalite',
      intro: 'Lavi prive ou enpòtan. Paj sa a eksplike kijan done pèsonèl ou kolekte, itilize ak pwoteje.',
      section1Title: 'Done kolekte',
      section1Text: 'Nou kolekte sèlman enfòmasyon ki nesesè pou jere randevou ou ak kominikasyon (non, imèl, telefòn, mesaj).',
      section2Title: 'Itilizasyon done',
      section2Text: 'Done ou yo itilize eksklizivman pou kontakte ou ak jere swivi sikolojik ou.',
      section3Title: 'Pwoteksyon',
      section3Text: 'Done ou yo estoke de fason sekirize epi yo pa janm pataje ak twazyèm pati.',
      section4Title: 'Dwa ou',
      section4Text: 'Ou gen dwa pou jwenn aksè, korije oswa efase done ou nenpòt lè nan kontakte nou.',
    },
    
    // Legal Page
    legal: {
      title: 'Mansyon legal',
      ownerTitle: 'Pwopriyetè sit la',
      ownerText: 'Johanne Landrin, Sikològ klinik',
      hostTitle: 'Ebèjman',
      hostText: '[Enfòmasyon ebèjman pou konfigire]',
      licenseTitle: 'Pwopriyete entèlektyèl',
      licenseText: 'Tout kontni sit sa a (tèks, imaj, logo) se pwopriyete Johanne Landrin epi yo pwoteje pa dwa dotè.',
      disclaimerTitle: 'Limitasyon responsablite',
      disclaimerText: 'Sit sa a enfòmatif epi li pa ranplase yon konsiltasyon pwofesyonèl. An ka ijans, kontakte sèvis ijans yo.',
    },
    
    // Footer
    footer: {
      emergency: 'An ka ijans, kontakte sèvis ijans lokal yo imedyatman.',
      rights: 'Tout dwa rezève.',
      privacy: 'Konfidansyalite',
      legal: 'Mansyon legal',
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.fr;
}
