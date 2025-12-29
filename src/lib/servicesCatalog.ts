import type { LucideIcon } from 'lucide-react';
import { BookOpen, Heart, Users } from 'lucide-react';

export type ServiceCatalogItem = {
  slug: string;
  title: string;
  description: string;
  offerings: string[];
  formatLabel: string;
  audienceLabel: string;
  icon: LucideIcon;

  // Detail-page fields (still part of the same shared array)
  audienceDetails?: string;
  formatDetails?: string;

  introObjective: string;
  formats: {
    cabinet?: string;
    online?: string;
  };
  steps: string[];
  durationFrequency: string;
  expectations: string[];
};

type ServicesDictionary = {
  services: {
    individual: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;
    };
    youth: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;
    };
    group: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;
    };
    workshops: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;
    };
  };
};

export function getServicesCatalog(t: ServicesDictionary): ServiceCatalogItem[] {
  return [
    {
      slug: 'consultation-individuelle',
      title: t.services.individual.title,
      description: t.services.individual.description,
      offerings: [
        'Évaluation et clarification de la demande',
        'Définition d’objectifs et plan d’accompagnement',
        'Soutien émotionnel et stratégies d’adaptation',
        'Suivi et ajustements au fil des séances',
      ],
      audienceLabel: t.services.individual.forWhoDetails,
      formatLabel: t.services.individual.formatDetails,
      icon: Heart,
      audienceDetails: t.services.individual.forWhoDetails,
      formatDetails: t.services.individual.formatDetails,

      introObjective:
        "Un espace confidentiel pour clarifier ce que vous traversez, mieux comprendre vos émotions et avancer vers des solutions concrètes, à votre rythme.",
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
    {
      slug: 'adolescents-jeunes',
      title: t.services.youth.title,
      description: t.services.youth.description,
      offerings: [
        'Espace d’écoute et d’expression',
        'Gestion du stress, des émotions et de l’anxiété',
        'Estime de soi et confiance',
        'Soutien face aux transitions et défis du quotidien',
      ],
      audienceLabel: t.services.youth.forWhoDetails,
      formatLabel: t.services.youth.formatDetails,
      icon: Users,
      audienceDetails: t.services.youth.forWhoDetails,
      formatDetails: t.services.youth.formatDetails,

      introObjective:
        "Un accompagnement pensé pour les adolescents et jeunes adultes, afin d’aider à mieux vivre les émotions, renforcer la confiance et traverser les défis du quotidien.",
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
    {
      slug: 'groupe-psychoeducation',
      title: t.services.group.title,
      description: t.services.group.description,
      offerings: [
        'Psychoéducation autour de thématiques ciblées',
        'Outils concrets et exercices guidés',
        'Partage encadré et apprentissages en groupe',
        'Cadre structuré et bienveillant',
      ],
      audienceLabel: t.services.group.forWhoDetails,
      formatLabel: t.services.group.formatDetails,
      icon: Users,
      audienceDetails: t.services.group.forWhoDetails,
      formatDetails: t.services.group.formatDetails,

      introObjective:
        "Des espaces collectifs structurés pour apprendre, partager et développer des compétences psychologiques utiles au quotidien, dans un cadre bienveillant.",
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
    {
      slug: 'ateliers-conferences',
      title: t.services.workshops.title,
      description: t.services.workshops.description,
      offerings: [
        'Ateliers thématiques (prévention, bien-être, compétences)',
        'Conférences et sensibilisation',
        'Interventions adaptées au contexte (école, entreprise, association)',
        'Contenus pratiques et applicables',
      ],
      audienceLabel: t.services.workshops.forWhoDetails,
      formatLabel: t.services.workshops.formatDetails,
      icon: BookOpen,
      audienceDetails: t.services.workshops.forWhoDetails,
      formatDetails: t.services.workshops.formatDetails,

      introObjective:
        "Des interventions sur mesure pour les organisations (écoles, entreprises, associations) afin de renforcer le bien-être psychologique, la communication et la résilience.",
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
  ];
}
