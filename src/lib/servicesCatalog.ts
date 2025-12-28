import type { LucideIcon } from 'lucide-react';
import { BookOpen, Heart, Users } from 'lucide-react';

export type ServiceCatalogItem = {
  slug: string;
  title: string;
  description: string;
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
      audienceLabel: t.services.workshops.forWhoDetails,
      formatLabel: t.services.workshops.formatDetails,
      icon: BookOpen,
      audienceDetails: t.services.workshops.forWhoDetails,
      formatDetails: t.services.workshops.formatDetails,
    },
  ];
}
