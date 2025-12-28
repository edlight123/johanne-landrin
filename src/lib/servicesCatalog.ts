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
    },
  ];
}
