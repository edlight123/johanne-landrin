export type Locale = 'fr' | 'kr';

export const dictionaries = {
  fr: {
    // Site
    site: {
      role: 'Psychologue clinicienne',
      roleLower: 'psychologue clinicienne',
    },

    // Forms
    forms: {
      errors: {
        missingRequired: 'Merci de compléter tous les champs requis.',
        invalidEmail: 'Merci d’indiquer une adresse e-mail valide.',
        generic: 'Une erreur est survenue. Veuillez réessayer.',
      },
    },

    // Navigation
    nav: {
      home: 'Accueil',
      services: 'Services',
      booking: 'Prendre rendez-vous',
      office: 'Contact',
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
      toggleMenu: 'Ouvrir/fermer le menu',
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
      heroTitle: 'Psychothérapie & soutien psychologique',
      heroSubtitle: 'Un accompagnement psychothérapeutique expert dans un environnement chaleureux et bienveillant. Commencez votre chemin vers l’apaisement et l’épanouissement.',
      heroCTA: 'Prendre rendez-vous',
      heroSecondaryCTA: 'Inviter pour un atelier',
      ctaTitle: 'Prêt à commencer votre parcours?',
      ctaText: "Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.",
      ctaButton: 'Prendre rendez-vous',
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
      learnMore: 'En savoir plus',
      backToServices: 'Retour aux services',
      notFoundTitle: 'Service introuvable',
      notFoundText: 'Ce service n’existe pas ou a été déplacé.',

      detail: {
        introTitle: 'Intro / objectif',
        stepsTitle: 'Déroulé',
        durationTitle: 'Durée & fréquence',
        expectationsTitle: 'Ce que vous pouvez en attendre',
        forWhoTitle: 'Pour qui',
        formatsTitle: 'Formats (cabinet / en ligne)',
        cabinetLabel: 'Cabinet',
        onlineLabel: 'En ligne',
        nextStepTitle: 'Prendre la prochaine étape',
        nextStepWorkshopText:
          'Parlez-moi de votre contexte et de vos objectifs, et je vous proposerai un format adapté.',
        nextStepDefaultText:
          'Réservez un premier rendez-vous pour clarifier vos besoins et définir le cadre ensemble.',
        viewWorkshopsButton: 'Voir les ateliers',
      },

      bottomCtaTitle: "Commencez votre parcours aujourd'hui",
      bottomCtaText:
        'Prenez rendez-vous pour une première consultation et découvrez comment nous pouvons vous accompagner.',

      detailsPlaceholder:
        "Détails à venir. Vous pouvez réserver un premier rendez-vous pour clarifier vos besoins et définir ensemble le cadre de l’accompagnement.",
      labels: {
        format: 'Format',
        public: 'Public',
      },
      viewDetails: 'Voir détails',
      reserveLink: 'Réserver',
      howItWorksTitle: 'Comment ça se passe ? ',
      howItWorksStep1Title: 'Réserver',
      howItWorksStep1Text: 'Choisissez un créneau via Calendly pour une première consultation.',
      howItWorksStep2Title: 'Se rencontrer',
      howItWorksStep2Text: 'Nous clarifions votre demande et définissons ensemble le cadre de travail.',
      howItWorksStep3Title: 'Avancer',
      howItWorksStep3Text: 'Nous construisons un accompagnement adapté, à votre rythme.',
      individual: {
        title: 'Consultation individuelle',
        description: 'Séances de psychothérapie en face à face pour adultes',
        forWho: 'Pour qui',
        forWhoDetails: 'Adultes (18 ans et plus) en quête de soutien psychologique',
        format: 'Format',
        formatDetails: 'En présentiel au cabinet ou en ligne (selon disponibilité)',
        duration: 'Durée',
        durationDetails: '50-60 minutes par séance',

        offerings: [
          'Évaluation et clarification de la demande',
          'Définition d’objectifs et plan d’accompagnement',
          'Soutien émotionnel et stratégies d’adaptation',
          'Suivi et ajustements au fil des séances',
        ],
        details: {
          introObjective:
            'Un espace confidentiel pour clarifier ce que vous traversez, mieux comprendre vos émotions et avancer vers des solutions concrètes, à votre rythme.',
          formats: {
            cabinet: 'Au cabinet (Pétion-Ville) dans un cadre sécurisant et discret.',
            online: 'En ligne (visioconférence) selon les besoins et la disponibilité.',
          },
          steps: [
            'Premier échange : clarifier la demande et vos objectifs.',
            'Mise en place du cadre : fréquence, priorités, modalités.',
            'Travail thérapeutique : exploration, outils, ajustements.',
            'Bilan régulier : observer les progrès et réajuster si nécessaire.',
          ],
          durationFrequency:
            'Séances de 50–60 minutes. La fréquence est définie ensemble (souvent hebdomadaire ou bimensuelle au démarrage).',
          expectations: [
            'Un espace d’écoute sans jugement',
            'Des repères et outils adaptés à votre situation',
            'Une meilleure compréhension de vos schémas et ressources',
            'Un accompagnement structuré et évolutif',
          ],
        },
      },
      youth: {
        title: 'Accompagnement adolescents et jeunes',
        description: 'Soutien adapté pour les 13-25 ans',
        forWhoDetails: 'Adolescents et jeunes adultes (13-25 ans)',
        formatDetails: 'En présentiel au cabinet',
        durationDetails: '45-50 minutes par séance',

        offerings: [
          'Espace d’écoute et d’expression',
          'Gestion du stress, des émotions et de l’anxiété',
          'Estime de soi et confiance',
          'Soutien face aux transitions et défis du quotidien',
        ],
        details: {
          introObjective:
            'Un accompagnement pensé pour les adolescents et jeunes adultes, afin d’aider à mieux vivre les émotions, renforcer la confiance et traverser les défis du quotidien.',
          formats: {
            cabinet: 'Au cabinet, dans un cadre rassurant et adapté.',
          },
          steps: [
            'Accueil et alliance : instaurer un espace de confiance.',
            'Compréhension : identifier les difficultés et les besoins.',
            'Outils : émotions, stress, estime de soi, relations.',
            'Consolidation : renforcer les acquis et l’autonomie.',
          ],
          durationFrequency:
            'Séances de 45–50 minutes. La fréquence est ajustée selon le besoin et le rythme scolaire.',
          expectations: [
            'Un espace d’expression sécurisé',
            'Des stratégies pour gérer le stress et les émotions',
            'Un soutien pour les transitions et changements',
            'Un travail sur la confiance et l’estime de soi',
          ],
        },
      },
      group: {
        title: 'Groupe et psychoéducation',
        description: 'Ateliers de groupe sur des thématiques spécifiques',
        forWhoDetails: 'Groupes de 6-12 personnes',
        formatDetails: 'En présentiel',
        durationDetails: '90-120 minutes par séance',

        offerings: [
          'Psychoéducation autour de thématiques ciblées',
          'Outils concrets et exercices guidés',
          'Partage encadré et apprentissages en groupe',
          'Cadre structuré et bienveillant',
        ],
        details: {
          introObjective:
            'Des espaces collectifs structurés pour apprendre, partager et développer des compétences psychologiques utiles au quotidien, dans un cadre bienveillant.',
          formats: {
            cabinet: 'En présentiel (groupe), selon les sessions proposées.',
            online: 'En ligne possible selon les besoins du groupe et l’organisation.',
          },
          steps: [
            'Introduction : cadre, objectifs et règles de sécurité.',
            'Psychoéducation : comprendre une thématique (stress, émotions, relations…).',
            'Mise en pratique : exercices guidés et outils concrets.',
            'Intégration : plan d’action simple entre les séances.',
          ],
          durationFrequency:
            'Séances de 90–120 minutes selon la formule. La fréquence dépend du programme (atelier ponctuel ou cycle).',
          expectations: [
            'Des outils pratiques et applicables',
            'Un cadre clair, respectueux et confidentiel',
            'Le bénéfice du partage et de l’apprentissage en groupe',
          ],
        },
      },
      workshops: {
        title: 'Ateliers et conférences',
        description: 'Interventions pour organisations, écoles et entreprises',
        forWhoDetails: 'Organisations, écoles, associations, entreprises',
        formatDetails: 'En présentiel ou en ligne (selon besoin)',
        durationDetails: 'Variable selon l’intervention',
        link: 'Voir les ateliers',

        offerings: [
          'Ateliers thématiques (prévention, bien-être, compétences)',
          'Conférences et sensibilisation',
          'Interventions adaptées au contexte (école, entreprise, association)',
          'Contenus pratiques et applicables',
        ],
        details: {
          introObjective:
            'Des interventions sur mesure pour les organisations (écoles, entreprises, associations) afin de renforcer le bien-être psychologique, la communication et la résilience.',
          formats: {
            cabinet: 'En présentiel (sur site) selon le contexte et la logistique.',
            online: 'En ligne (visioconférence) pour certains formats.',
          },
          steps: [
            'Échange initial : objectifs, public, contraintes et attentes.',
            'Proposition : format, contenu, durée, modalités.',
            'Intervention : atelier/conférence, avec outils concrets.',
            'Suivi : recommandations et pistes de continuité.',
          ],
          durationFrequency:
            'Durée variable (1–2h, demi-journée, cycle). La fréquence dépend du programme et des objectifs.',
          expectations: [
            'Un contenu clair et adapté au public',
            'Des outils applicables (stress, communication, dynamique d’équipe)',
            'Une approche participative et structurée',
          ],
        },
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
      hoursValue: 'Lundi - Vendredi: 9h00 - 17h00',
      contactTitle: 'Coordonnées',
      contactFormTitle: 'Formulaire de contact',
      optionalNote: 'Optionnel — pour une demande non urgente.',

      selectionCabinetTitle: 'Cabinet',
      selectionCabinetDescription: 'Rendez-vous, coordonnées, adresse et horaires.',
      selectionWorkshopsTitle: 'Ateliers & conférences',
      selectionWorkshopsDescription: 'Interventions pour organisations et collectivités.',

      cabinetPanelTitle: 'Cabinet',
      cabinetPanelSubtitle: 'Prise de rendez-vous et informations pratiques.',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',

      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      successMessage: 'Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',

      placeholders: {
        name: 'Votre nom',
        email: 'exemple@email.com',
        subject: 'Objet',
        message: 'Votre message...',
      },
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
      inquiryIntro:
        'Décrivez votre besoin et je vous recontacte pour préciser le format, le contenu et les modalités.',
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

      topicsList: [
        'Gestion du stress et burnout',
        'Intelligence émotionnelle',
        'Communication non-violente',
        'Santé mentale en milieu scolaire',
        'Prévention du harcèlement',
        'Résilience et traumatisme',
        'Développement personnel',
        'Gestion de conflits',
        'Bien-être au travail',
        'Parentalité positive',
      ],

      placeholders: {
        orgName: 'Nom de votre organisation',
        contactName: 'Votre nom',
        email: 'exemple@email.com',
        phone: '+509 XXXX-XXXX',
        audience: 'Ex: 30-50 personnes',
        budget: 'Budget estimé',
        location: 'Ville ou région',
        message: 'Décrivez vos besoins, objectifs, et toute information pertinente...',
      },
    },
    
    // Resources Page
    resources: {
      title: 'Ressources',
      subtitle: 'Articles et conseils en santé mentale',
      searchPlaceholder: 'Rechercher un article...',
      allTopics: 'Tous les sujets',
      readMore: 'Lire la suite',
      noResults: 'Aucun article trouvé.',

      topicResources: [
        {
          topic: 'Stress & burnout',
          description: 'Comprendre le stress, ses impacts et des pistes pour retrouver un équilibre.',
          links: [
            {
              org: 'Organisation mondiale de la Santé (OMS)',
              label: 'Santé mentale — repères et recommandations',
              href: 'https://www.who.int/health-topics/mental-health',
            },
            {
              org: 'NHS',
              label: 'Stress, anxiety and depression (guides)',
              href: 'https://www.nhs.uk/mental-health/',
            },
            {
              org: 'Mayo Clinic',
              label: 'Burnout: symptômes et prise en charge',
              href: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642',
            },
          ],
        },
        {
          topic: 'Anxiété',
          description: 'Ressources fiables pour identifier l’anxiété et explorer des options de prise en charge.',
          links: [
            { org: 'NIMH', label: 'Anxiety Disorders', href: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
            { org: 'APA', label: 'Anxiety (repères)', href: 'https://www.apa.org/topics/anxiety' },
            { org: 'NHS', label: 'Anxiety (guides)', href: 'https://www.nhs.uk/mental-health/conditions/anxiety/' },
          ],
        },
        {
          topic: 'Dépression & humeur',
          description: 'Comprendre les symptômes, les traitements possibles et quand chercher de l’aide.',
          links: [
            { org: 'NIMH', label: 'Depression', href: 'https://www.nimh.nih.gov/health/topics/depression' },
            { org: 'OMS', label: 'Dépression (informations générales)', href: 'https://www.who.int/news-room/fact-sheets/detail/depression' },
            { org: 'NHS', label: 'Depression (guides)', href: 'https://www.nhs.uk/mental-health/conditions/depression/' },
          ],
        },
        {
          topic: 'Trauma & événements difficiles',
          description: 'Comprendre les réactions au traumatisme et les ressources d’accompagnement.',
          links: [
            { org: 'NHS', label: 'PTSD (post-traumatic stress disorder)', href: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/' },
            { org: 'NIMH', label: 'Coping With Traumatic Events', href: 'https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events' },
            { org: 'CDC', label: 'Coping with Stress (after events)', href: 'https://www.cdc.gov/mentalhealth/stress-coping/index.html' },
          ],
        },
        {
          topic: 'Relations & communication',
          description: 'Repères sur la communication, les conflits et la qualité des relations.',
          links: [
            { org: 'APA', label: 'Relationships (repères)', href: 'https://www.apa.org/topics/relationships' },
            { org: 'NHS', label: 'Relationships (guides)', href: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/relationships/' },
          ],
        },
        {
          topic: 'Deuil',
          description: 'Comprendre le processus de deuil et quand demander du soutien.',
          links: [
            { org: 'NHS', label: 'Bereavement and grief', href: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-and-loss/' },
            { org: 'APA', label: 'Grief (repères)', href: 'https://www.apa.org/topics/grief' },
          ],
        },
        {
          topic: 'Adolescents & jeunes adultes',
          description: 'Ressources sur le bien-être psychologique des adolescents.',
          links: [
            { org: 'UNICEF', label: 'Mental health', href: 'https://www.unicef.org/health/mental-health' },
            { org: 'NIMH', label: 'Child and Adolescent Mental Health', href: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health' },
          ],
        },
      ],
      noteLabel: 'Note',
      noteText:
        'Ces ressources sont à titre informatif seulement et ne remplacent pas une consultation professionnelle.',
    },
    
    // About Page
    about: {
      title: 'À propos',
      subtitle: 'Mon parcours et mon approche',

      // Bio (split for layout)
      bioP1: 'Johanne Landrin est psychologue clinicienne à Pétion-Ville, en Haïti. Elle accompagne des personnes qui souhaitent mieux comprendre leurs émotions, traverser une période difficile ou retrouver un équilibre au quotidien.',
      bioP2: 'Dans un cadre confidentiel, respectueux et sans jugement, elle propose un accompagnement centré sur la personne, adapté à votre rythme et à votre réalité. Les consultations peuvent aborder, entre autres, la gestion du stress, les relations familiales et affectives, l\'estime de soi, ou encore les transitions de vie.',
      bioP3: 'Johanne Landrin reçoit au cabinet (Berthé, Pétion-Ville) et propose également des séances en ligne selon les besoins. Elle intervient aussi auprès d\'organisations (écoles, associations, entreprises) à travers des ateliers et conférences autour du bien-être psychologique, de la communication et des dynamiques familiales.',

      educationTitle: 'Formation',
      educationIntro: '',
      approachTitle: 'Mon approche',
      approachText: 'J\'intègre différentes approches thérapeutiques (cognitive-comportementale, humaniste, systémique) selon les besoins uniques de chaque client. Mon objectif est de créer un espace sécurisant où vous pouvez explorer vos difficultés, identifier vos ressources et construire des solutions adaptées.',
      frameText: 'Confidentialité, respect, et un espace sans jugement — à votre rythme.',

      certificationsTitle: 'Licences & certifications',
      certificationsIntro: '',

      specializationsTitle: 'Spécialisations',
      specializationsSubtitle: '',

      themesTitle: 'Thématiques abordées',
      themesSubtitle: 'Quelques exemples de sujets travaillés en consultation (liste non exhaustive).',

      offer1Title: 'Consultations au cabinet',
      offer1Text: 'Au cabinet à Berthé, Pétion-Ville, dans un cadre confidentiel.',
      offer2Title: 'Séances en ligne',
      offer2Text: 'Selon vos besoins et possibilités, en toute discrétion.',
      offer3Title: 'Ateliers & conférences',
      offer3Text: 'Interventions pour écoles, associations et entreprises.',

      ctaTitle: 'Prêt(e) à commencer ?',
      ctaText: 'Contactez-moi pour discuter de vos besoins et planifier une première rencontre.',
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

      contactNoteTitle: "Vous avez d'autres questions ?",
      contactNoteText: "N'hésitez pas à me contacter directement pour toute question supplémentaire.",
    },
    
    // Privacy Page
    privacy: {
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour: Janvier 2024',
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
    
    legal: {
      title: 'Mentions légales',
      ownerTitle: 'Éditeur du site',
      ownerText: 'Johanne Landrin, Psychologue clinicienne',
      hostTitle: 'Hébergement',
      hostText: "[Informations d'hébergement à configurer]",
      licenseTitle: 'Propriété intellectuelle',
      licenseText:
        'Tous les contenus de ce site (textes, images, logos) sont la propriété de Johanne Landrin et sont protégés par le droit d\'auteur.',
      disclaimerTitle: 'Limitation de responsabilité',
      disclaimerText:
        "Ce site est informatif et ne remplace pas une consultation professionnelle. En cas d'urgence, contactez les services d'urgence.",
      footerNotePrefix: 'Pour toute question concernant ces mentions légales, veuillez contacter: ',
    },

    // Footer
    footer: {
      quickLinksTitle: 'Liens rapides',
      followTitle: 'Suivez-moi',
      languageLabel: 'Langue',
      languageFrench: 'Français',
      languageCreole: 'Créole',
      emergency: "En cas d'urgence, contactez immédiatement les services d'urgence locaux.",
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      legal: 'Mentions légales',
    },

    // Error Boundary
    errorBoundary: {
      title: 'Une erreur est survenue',
      subtitle: 'Veuillez recharger la page. Si le problème persiste, contactez-nous.',
      reload: 'Recharger',
    },
  },

  kr: {
    // Site
    site: {
      role: 'Sikològ klinik',
      roleLower: 'sikològ klinik',
    },

    // Forms
    forms: {
      errors: {
        missingRequired: 'Tanpri ranpli tout chan ki obligatwa yo.',
        invalidEmail: 'Tanpri antre yon adrès imèl ki valab.',
        generic: 'Gen yon erè ki rive. Tanpri eseye ankò.',
      },
    },

    // Navigation
    nav: {
      home: 'Akèy',
      services: 'Sèvis',
      booking: 'Pran randevou',
      office: 'Kontak',
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
      toggleMenu: 'Ouvri/fèmen meni a',
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
      heroTitle: 'Sikoterapi & sipò sikolojik',
      heroSubtitle: 'Yon sipò sikoterapetik pwofesyonèl nan yon anviwònman cho epi ki ankourajan. Kòmanse chemen ou pou plis lapè ak devlopman pèsonèl.',
      heroCTA: 'Pran randevou',
      heroSecondaryCTA: 'Envite pou atelye',
      ctaTitle: 'Ou pare pou kòmanse chemen ou?',
      ctaText: 'Pran randevou jodi a pou yon konsiltasyon pèsonalize.',
      ctaButton: 'Pran randevou',
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
      learnMore: 'Aprann plis',
      backToServices: 'Retounen sou sèvis yo',
      notFoundTitle: 'Sèvis la pa jwenn',
      notFoundText: 'Sèvis sa a pa egziste oswa li te deplase.',
      detailsPlaceholder:
        'Detay ap vini. Ou ka rezève yon premye randevou pou klarifye bezwen ou epi mete kad akonpayman an ansanm.',
      bottomCtaTitle: 'Kòmanse chemen ou jodi a',
      bottomCtaText:
        'Pran randevou pou yon premye konsiltasyon epi dekouvri kijan nou ka akonpaye ou.',
      detail: {
        introTitle: 'Entwodiksyon / objektif',
        stepsTitle: 'Kouman sa dewoule',
        durationTitle: 'Dire & frekans',
        expectationsTitle: 'Sa ou ka atann',
        forWhoTitle: 'Pou kiyès',
        formatsTitle: 'Fòma (kabinè / anliy)',
        cabinetLabel: 'Kabinè',
        onlineLabel: 'Anliy',
        nextStepTitle: 'Pran pwochen etap la',
        nextStepWorkshopText:
          'Pale m de kontèks ou ak objektif ou yo, epi m ap pwopoze yon fòma ki adapte.',
        nextStepDefaultText:
          'Rezève yon premye randevou pou klarifye bezwen ou epi defini kad la ansanm.',
        viewWorkshopsButton: 'Gade atelye yo',
      },
      labels: {
        format: 'Fòma',
        public: 'Piblik',
      },
      viewDetails: 'Gade detay yo',
      reserveLink: 'Rezève',
      howItWorksTitle: 'Kijan sa fèt?',
      howItWorksStep1Title: 'Rezève',
      howItWorksStep1Text: 'Chwazi yon lè sou Calendly pou premye konsiltasyon an.',
      howItWorksStep2Title: 'Rankontre',
      howItWorksStep2Text: 'Nou klarifye demann ou epi mete kad travay la ansanm.',
      howItWorksStep3Title: 'Avanse',
      howItWorksStep3Text: 'Nou bati yon akonpayman adapte, selon rit ou.',
      individual: {
        title: 'Konsiltasyon endividyèl',
        description: 'Seyans sikoterapi fas a fas pou granmoun',
        forWho: 'Pou ki moun',
        forWhoDetails: 'Granmoun (18 an e plis) ki chèche sipò sikolojik',
        format: 'Fòma',
        formatDetails: 'Nan kabinè a oswa anliy (selon disponibilite)',
        duration: 'Dire',
        durationDetails: '50-60 minit pa seyans',
        offerings: [
          'Evalyasyon ak klarifikasyon demann nan',
          'Definisyon objektif ak plan akonpayman',
          'Sipò emosyonèl ak estrateji adaptasyon',
          'Swivi ak ajisteman pandan seyans yo',
        ],
        details: {
          introObjective:
            'Yon espas konfidansyèl pou klarifye sa w ap viv, konprann emosyon ou pi byen, epi avanse nan solisyon konkrè sou ritm ou.',
          formats: {
            cabinet: 'Nan kabinè a (Pétion-Ville) nan yon kad ki sekirize e diskre.',
            online: 'Anliy (videyo) selon bezwen ak disponibilite.',
          },
          steps: [
            'Premye echanj: klarifye demann ou ak objektif ou.',
            'Mete kad la: frekans, priyorite, modalite.',
            'Travay terapetik: eksplorasyon, zouti, ajisteman.',
            'Bilan regilye: obsève pwogrè epi ajiste si sa nesesè.',
          ],
          durationFrequency:
            'Seyans 50–60 minit. Frekans lan detèmine ansanm (souvan chak semèn oswa chak 2 semèn nan kòmansman).',
          expectations: [
            'Yon espas pou koute san jijman',
            'Zouti ki adapte ak sitiyasyon ou',
            'Pi bon konpreyansyon sou modèl ou ak resous ou',
            'Yon akonpayman estriktire ki evolye',
          ],
        },
      },
      youth: {
        title: 'Akonpayman adolèsan ak jèn',
        description: 'Sipò adapte pou 13-25 an',
        forWhoDetails: 'Adolèsan ak jèn adilt (13-25 an)',
        formatDetails: 'Nan kabinè a',
        durationDetails: '45-50 minit pa seyans',
        offerings: [
          'Espas pou koute ak eksprime',
          'Jesyon estrès, emosyon ak enkyetid',
          'Konfyans ak estim tèt ou',
          'Sipò pou tranzisyon ak defi chak jou',
        ],
        details: {
          introObjective:
            'Yon akonpayman pou adolèsan ak jèn adilt, pou ede viv emosyon yo pi byen, ranfòse konfyans, epi fè fas ak defi yo.',
          formats: {
            cabinet: 'Nan kabinè a, nan yon kad ki rassiran e adapte.',
          },
          steps: [
            'Akey ak alyans: kreye yon espas konfyans.',
            'Konpreyansyon: idantifye difikilte ak bezwen yo.',
            'Zouti: emosyon, estrès, estim tèt ou, relasyon.',
            'Konsolidasyon: ranfòse sa ki aprann ak otonomi.',
          ],
          durationFrequency:
            'Seyans 45–50 minit. Frekans lan ajiste selon bezwen ak ritm lekòl la.',
          expectations: [
            'Yon espas sekirize pou eksprime',
            'Estrateji pou jere estrès ak emosyon',
            'Sipò pou tranzisyon ak chanjman',
            'Travay sou konfyans ak estim tèt ou',
          ],
        },
      },
      group: {
        title: 'Gwoup ak sikoeydikasyon',
        description: 'Atelye gwoup sou tematik espesifik',
        forWhoDetails: 'Gwoup 6-12 moun',
        formatDetails: 'Nan pèsòn',
        durationDetails: '90-120 minit pa seyans',
        offerings: [
          'Sikoedikasayon sou tèm ki vize',
          'Zouti konkrè ak egzèsis gide',
          'Pataj gide ak aprantisaj an gwoup',
          'Kad estriktire ak byenveyan',
        ],
        details: {
          introObjective:
            'Espas kolektif ki estriktire pou aprann, pataje, epi devlope konpetans sikolojik itil chak jou, nan yon kad byenveyan.',
          formats: {
            cabinet: 'Nan pèsòn (an gwoup), selon sesyon yo pwopoze.',
            online: 'Anliy posib selon bezwen gwoup la ak òganizasyon an.',
          },
          steps: [
            'Entwodiksyon: kad, objektif ak règ sekirite.',
            'Sikoedikasayon: konprann yon tèm (estrès, emosyon, relasyon…).',
            'Pratik: egzèsis gide ak zouti konkrè.',
            'Entègrasyon: yon plan aksyon senp ant sesyon yo.',
          ],
          durationFrequency:
            'Seyans 90–120 minit selon fòmil la. Frekans lan depann de pwogram nan (yon atelye sèl oswa yon sik).',
          expectations: [
            'Zouti pratik ou ka aplike',
            'Yon kad klè, respekte, e konfidansyèl',
            'Benefis pataj ak aprantisaj an gwoup',
          ],
        },
      },
      workshops: {
        title: 'Atelye ak konferans',
        description: 'Entèvansyon pou òganizasyon, lekòl ak antrepriz',
        forWhoDetails: 'Òganizasyon, lekòl, asosyasyon, antrepriz',
        formatDetails: 'Nan pèsòn oswa anliy (selon bezwen)',
        durationDetails: 'Varye selon entèvansyon an',
        link: 'Gade atelye yo',
        offerings: [
          'Atelye tematik (prevansyon, byennèt, konpetans)',
          'Konferans ak sansibilizasyon',
          'Entèvansyon adapte ak kontèks la (lekòl, antrepriz, asosyasyon)',
          'Kontni pratik e fasil pou aplike',
        ],
        details: {
          introObjective:
            'Entèvansyon sou mezi pou òganizasyon (lekòl, antrepriz, asosyasyon) pou ranfòse byennèt sikolojik, kominikasyon ak rezilyans.',
          formats: {
            cabinet: 'Nan pèsòn (sou sit) selon kontèks ak lojistik.',
            online: 'Anliy (videyo) pou kèk fòma.',
          },
          steps: [
            'Premye echanj: objektif, piblik, kontrent ak atant.',
            'Pwopozisyon: fòma, kontni, dire, modalite.',
            'Entèvansyon: atelye/konferans, ak zouti konkrè.',
            'Swivi: rekòmandasyon ak pwochen etap posib.',
          ],
          durationFrequency:
            'Dire a varye (1–2è, demi-jou, sik). Frekans lan depann de pwogram nan ak objektif yo.',
          expectations: [
            'Yon kontni klè ki adapte ak piblik la',
            'Zouti ou ka aplike (estrès, kominikasyon, dinamik ekip)',
            'Yon apwòch patisipatif ak estriktire',
          ],
        },
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
      hoursValue: 'Lendi - Vandredi: 9:00 - 17:00',
      contactTitle: 'Kòdone',
      contactFormTitle: 'Fòmilè kontak',
      optionalNote: 'Opsyonèl — pou yon demann ki pa ijans.',
      selectionCabinetTitle: 'Kabinè',
      selectionCabinetDescription: 'Randevou, kòdone, adrès ak orè.',
      selectionWorkshopsTitle: 'Atelye & konferans',
      selectionWorkshopsDescription: 'Entèvansyon pou òganizasyon ak kolektivite.',
      cabinetPanelTitle: 'Kabinè',
      cabinetPanelSubtitle: 'Pran randevou ak enfòmasyon pratik.',
      phoneLabel: 'Telefòn',
      emailLabel: 'Imèl',
      whatsappLabel: 'WhatsApp',
      name: 'Non',
      email: 'Imèl',
      phone: 'Telefòn',
      subject: 'Sijè',
      message: 'Mesaj',
      send: 'Voye',
      successMessage: 'Mesaj voye avèk siksè. Nap reponn ou byento.',
      placeholders: {
        name: 'Non ou',
        email: 'egzanp@email.com',
        subject: 'Sijè',
        message: 'Mesaj ou...',
      },
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
      inquiryIntro:
        'Dekri bezwen ou epi m ap rekontakte ou pou presize fòma a, kontni an ak modalite yo.',
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
      topicsList: [
        'Jesyon estrès ak epwizman (burnout)',
        'Entèlijans emosyonèl',
        'Kominikasyon san vyolans',
        'Sante mantal nan lekòl',
        'Prevansyon arasman',
        'Rezilyans ak chòk',
        'Devlopman pèsonèl',
        'Jesyon konfli',
        'Byennèt nan travay',
        'Paranaj pozitif',
      ],
      placeholders: {
        orgName: 'Non òganizasyon ou',
        contactName: 'Non ou',
        email: 'egzanp@email.com',
        phone: '+509 XXXX-XXXX',
        audience: 'Eg: 30-50 moun',
        budget: 'Bidjè estime',
        location: 'Vil oswa rejyon',
        message: 'Dekri bezwen, objektif, ak tout enfòmasyon enpòtan...',
      },
    },
    
    // Resources Page
    resources: {
      title: 'Resous',
      subtitle: 'Atik ak konsèy nan sante mantal',
      searchPlaceholder: 'Chèche yon atik...',
      allTopics: 'Tout sijè',
      readMore: 'Li plis',
      noResults: 'Pa gen atik.',
      topicResources: [
        {
          topic: 'Estrès & epwizman (burnout)',
          description: 'Konprann estrès, efè li, epi kèk chemen pou retounen nan ekilib.',
          links: [
            {
              org: 'Organisation mondiale de la Santé (OMS)',
              label: 'Santé mentale — repères et recommandations',
              href: 'https://www.who.int/health-topics/mental-health',
            },
            { org: 'NHS', label: 'Stress, anxiety and depression (guides)', href: 'https://www.nhs.uk/mental-health/' },
            {
              org: 'Mayo Clinic',
              label: 'Burnout: symptômes et prise en charge',
              href: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642',
            },
          ],
        },
        {
          topic: 'Enkyetid',
          description: 'Resous serye pou idantifye enkyetid epi eksplore opsyon pou sipò ak swen.',
          links: [
            { org: 'NIMH', label: 'Anxiety Disorders', href: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
            { org: 'APA', label: 'Anxiety (repères)', href: 'https://www.apa.org/topics/anxiety' },
            { org: 'NHS', label: 'Anxiety (guides)', href: 'https://www.nhs.uk/mental-health/conditions/anxiety/' },
          ],
        },
        {
          topic: 'Depresyon & atitid',
          description: 'Konprann sentòm yo, tretman posib, epi kilè pou chèche èd.',
          links: [
            { org: 'NIMH', label: 'Depression', href: 'https://www.nimh.nih.gov/health/topics/depression' },
            { org: 'OMS', label: 'Dépression (informations générales)', href: 'https://www.who.int/news-room/fact-sheets/detail/depression' },
            { org: 'NHS', label: 'Depression (guides)', href: 'https://www.nhs.uk/mental-health/conditions/depression/' },
          ],
        },
        {
          topic: 'Chòk & evènman difisil',
          description: 'Konprann reyaksyon apre chòk epi resous pou jwenn akonpayman.',
          links: [
            { org: 'NHS', label: 'PTSD (post-traumatic stress disorder)', href: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/' },
            { org: 'NIMH', label: 'Coping With Traumatic Events', href: 'https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events' },
            { org: 'CDC', label: 'Coping with Stress (after events)', href: 'https://www.cdc.gov/mentalhealth/stress-coping/index.html' },
          ],
        },
        {
          topic: 'Relasyon & kominikasyon',
          description: 'Pwen referans sou kominikasyon, konfli, ak kalite relasyon yo.',
          links: [
            { org: 'APA', label: 'Relationships (repères)', href: 'https://www.apa.org/topics/relationships' },
            { org: 'NHS', label: 'Relationships (guides)', href: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/relationships/' },
          ],
        },
        {
          topic: 'Dèy',
          description: 'Konprann pwosesis dèy la epi kilè pou mande sipò.',
          links: [
            { org: 'NHS', label: 'Bereavement and grief', href: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-and-loss/' },
            { org: 'APA', label: 'Grief (repères)', href: 'https://www.apa.org/topics/grief' },
          ],
        },
        {
          topic: 'Adolèsan & jèn adilt',
          description: 'Resous sou byennèt sikolojik adolèsan yo.',
          links: [
            { org: 'UNICEF', label: 'Mental health', href: 'https://www.unicef.org/health/mental-health' },
            { org: 'NIMH', label: 'Child and Adolescent Mental Health', href: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health' },
          ],
        },
      ],
      noteLabel: 'Nòt',
      noteText: 'Resous sa yo se pou enfòmasyon sèlman; yo pa ranplase yon konsiltasyon pwofesyonèl.',
    },
    
    // About Page
    about: {
      title: 'Konsènan',
      subtitle: 'Chemen mwen ak apwòch mwen',
      bioP1: 'Johanne Landrin se yon sikològ klinik nan Pétion-Ville, Ayiti. Li akonpaye moun ki vle pi byen konprann emosyon yo, travèse yon peryòd difisil, oswa jwenn ekilib nan lavi chak jou.',
      bioP2: 'Nan yon kad konfidansyèl, respèkte, san jijman, li pwopoze yon akonpayman ki santre sou moun nan, adapte ak rit ou ak reyalite ou. Konsiltasyon yo ka abòde, pami lòt bagay, jesyon estrès, relasyon familyal ak afektif, estim tèt ou, oswa tranzisyon lavi.',
      bioP3: 'Johanne Landrin resevwa nan kabinè a (Berthé, Pétion-Ville) epi li pwopoze tou seyans anliy selon bezwen yo. Li entèvni tou ak òganizasyon (lekòl, asosyasyon, antrepriz) atravè atelye ak konferans sou byennèt sikolojik, kominikasyon ak dinamik familyal.',

      educationTitle: 'Fòmasyon',
      educationIntro: '',
      approachTitle: 'Apwòch mwen',
      approachText: 'Mwen entegre diferan apwòch terapetik (kognitif-konpòtmantal, imanis, sistemik) selon bezwen inik chak kliyan. Objektif mwen se kreye yon espas sekirite kote ou ka eksplore difikilte ou, idantifye resous ou epi konstwi solisyon adapte.',
      frameText: 'Konfidansyalite, respè, epi yon espas san jijman — selon rit ou.',

      certificationsTitle: 'Lisans & sètifikasyon',
      certificationsIntro: '',

      specializationsTitle: 'Espesyalisasyon',
      specializationsSubtitle: '',

      themesTitle: 'Tematik yo trete',
      themesSubtitle: 'Kèk egzanp sijè nou ka travay ansanm (lis la pa fini).',

      offer1Title: 'Konsiltasyon nan kabinè',
      offer1Text: 'Nan kabinè a nan Berthé, Pétion-Ville, nan yon kad konfidansyèl.',
      offer2Title: 'Seyans anliy',
      offer2Text: 'Selon bezwen ou ak posiblite ou, ak anpil diskresyon.',
      offer3Title: 'Atelye & konferans',
      offer3Text: 'Entèvansyon pou lekòl, asosyasyon, ak antrepriz.',

      ctaTitle: 'Ou pare pou kòmanse?',
      ctaText: 'Kontakte m pou n pale de bezwen ou epi planifye yon premye rankont.',
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
      contactNoteTitle: 'Ou gen lòt kesyon?',
      contactNoteText: 'Pa ezite kontakte m dirèkteman pou nenpòt kesyon anplis.',
    },
    
    // Privacy Page
    privacy: {
      title: 'Politik konfidansyalite',
      lastUpdated: 'Dènye mizajou: Janvye 2024',
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
      footerNotePrefix: 'Pou nenpòt kestyon sou mansyon legal sa yo, tanpri kontakte: ',
    },
    
    // Footer
    footer: {
      quickLinksTitle: 'Lyen rapid',
      followTitle: 'Swiv mwen',
      languageLabel: 'Lang',
      languageFrench: 'Franse',
      languageCreole: 'Kreyòl',
      emergency: 'An ka ijans, kontakte sèvis ijans lokal yo imedyatman.',
      rights: 'Tout dwa rezève.',
      privacy: 'Konfidansyalite',
      legal: 'Mansyon legal',
    },

    // Error Boundary
    errorBoundary: {
      title: 'Gen yon erè ki rive',
      subtitle: 'Tanpri rechaje paj la. Si pwoblèm nan kontinye, kontakte nou.',
      reload: 'Rechaje',
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.fr;
}
