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

      offerings: string[];
      details: {
        introObjective: string;
        formats: {
          cabinet?: string;
          online?: string;
        };
        steps: string[];
        durationFrequency: string;
        expectations: string[];
      };
    };
    youth: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;

      offerings: string[];
      details: {
        introObjective: string;
        formats: {
          cabinet?: string;
          online?: string;
        };
        steps: string[];
        durationFrequency: string;
        expectations: string[];
      };
    };
    group: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;

      offerings: string[];
      details: {
        introObjective: string;
        formats: {
          cabinet?: string;
          online?: string;
        };
        steps: string[];
        durationFrequency: string;
        expectations: string[];
      };
    };
    workshops: {
      title: string;
      description: string;
      forWhoDetails: string;
      formatDetails: string;

      offerings: string[];
      details: {
        introObjective: string;
        formats: {
          cabinet?: string;
          online?: string;
        };
        steps: string[];
        durationFrequency: string;
        expectations: string[];
      };
    };
  };
};

export function getServicesCatalog(t: ServicesDictionary): ServiceCatalogItem[] {
  return [
    {
      slug: 'consultation-individuelle',
      title: t.services.individual.title,
      description: t.services.individual.description,
      offerings: t.services.individual.offerings,
      audienceLabel: t.services.individual.forWhoDetails,
      formatLabel: t.services.individual.formatDetails,
      icon: Heart,
      audienceDetails: t.services.individual.forWhoDetails,
      formatDetails: t.services.individual.formatDetails,

      introObjective: t.services.individual.details.introObjective,
      formats: t.services.individual.details.formats,
      steps: t.services.individual.details.steps,
      durationFrequency: t.services.individual.details.durationFrequency,
      expectations: t.services.individual.details.expectations,
    },
    {
      slug: 'adolescents-jeunes',
      title: t.services.youth.title,
      description: t.services.youth.description,
      offerings: t.services.youth.offerings,
      audienceLabel: t.services.youth.forWhoDetails,
      formatLabel: t.services.youth.formatDetails,
      icon: Users,
      audienceDetails: t.services.youth.forWhoDetails,
      formatDetails: t.services.youth.formatDetails,

      introObjective: t.services.youth.details.introObjective,
      formats: t.services.youth.details.formats,
      steps: t.services.youth.details.steps,
      durationFrequency: t.services.youth.details.durationFrequency,
      expectations: t.services.youth.details.expectations,
    },
    {
      slug: 'groupe-psychoeducation',
      title: t.services.group.title,
      description: t.services.group.description,
      offerings: t.services.group.offerings,
      audienceLabel: t.services.group.forWhoDetails,
      formatLabel: t.services.group.formatDetails,
      icon: Users,
      audienceDetails: t.services.group.forWhoDetails,
      formatDetails: t.services.group.formatDetails,

      introObjective: t.services.group.details.introObjective,
      formats: t.services.group.details.formats,
      steps: t.services.group.details.steps,
      durationFrequency: t.services.group.details.durationFrequency,
      expectations: t.services.group.details.expectations,
    },
    {
      slug: 'ateliers-conferences',
      title: t.services.workshops.title,
      description: t.services.workshops.description,
      offerings: t.services.workshops.offerings,
      audienceLabel: t.services.workshops.forWhoDetails,
      formatLabel: t.services.workshops.formatDetails,
      icon: BookOpen,
      audienceDetails: t.services.workshops.forWhoDetails,
      formatDetails: t.services.workshops.formatDetails,

      introObjective: t.services.workshops.details.introObjective,
      formats: t.services.workshops.details.formats,
      steps: t.services.workshops.details.steps,
      durationFrequency: t.services.workshops.details.durationFrequency,
      expectations: t.services.workshops.details.expectations,
    },
  ];
}
