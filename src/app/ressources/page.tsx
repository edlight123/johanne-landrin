'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';

type ExternalLink = {
  label: string;
  org: string;
  href: string;
};

type TopicResource = {
  topic: string;
  description: string;
  links: ExternalLink[];
};

const topicResources: TopicResource[] = [
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
      {
        org: 'NIMH',
        label: 'Anxiety Disorders',
        href: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
      },
      {
        org: 'APA',
        label: 'Anxiety (repères)',
        href: 'https://www.apa.org/topics/anxiety',
      },
      {
        org: 'NHS',
        label: 'Anxiety (guides)',
        href: 'https://www.nhs.uk/mental-health/conditions/anxiety/',
      },
    ],
  },
  {
    topic: 'Dépression & humeur',
    description: 'Comprendre les symptômes, les traitements possibles et quand chercher de l’aide.',
    links: [
      {
        org: 'NIMH',
        label: 'Depression',
        href: 'https://www.nimh.nih.gov/health/topics/depression',
      },
      {
        org: 'OMS',
        label: 'Dépression (informations générales)',
        href: 'https://www.who.int/news-room/fact-sheets/detail/depression',
      },
      {
        org: 'NHS',
        label: 'Depression (guides)',
        href: 'https://www.nhs.uk/mental-health/conditions/depression/',
      },
    ],
  },
  {
    topic: 'Trauma & événements difficiles',
    description: 'Comprendre les réactions au traumatisme et les ressources d’accompagnement.',
    links: [
      {
        org: 'NHS',
        label: 'PTSD (post-traumatic stress disorder)',
        href: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/',
      },
      {
        org: 'NIMH',
        label: 'Coping With Traumatic Events',
        href: 'https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events',
      },
      {
        org: 'CDC',
        label: 'Coping with Stress (after events)',
        href: 'https://www.cdc.gov/mentalhealth/stress-coping/index.html',
      },
    ],
  },
  {
    topic: 'Relations & communication',
    description: 'Repères sur la communication, les conflits et la qualité des relations.',
    links: [
      {
        org: 'APA',
        label: 'Relationships (repères)',
        href: 'https://www.apa.org/topics/relationships',
      },
      {
        org: 'NHS',
        label: 'Relationships (guides)',
        href: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/relationships/',
      },
    ],
  },
  {
    topic: 'Deuil',
    description: 'Comprendre le processus de deuil et quand demander du soutien.',
    links: [
      {
        org: 'NHS',
        label: 'Bereavement and grief',
        href: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-and-loss/',
      },
      {
        org: 'APA',
        label: 'Grief (repères)',
        href: 'https://www.apa.org/topics/grief',
      },
    ],
  },
  {
    topic: 'Adolescents & jeunes adultes',
    description: 'Ressources sur le bien-être psychologique des adolescents.',
    links: [
      {
        org: 'UNICEF',
        label: 'Mental health',
        href: 'https://www.unicef.org/health/mental-health',
      },
      {
        org: 'NIMH',
        label: 'Child and Adolescent Mental Health',
        href: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health',
      },
    ],
  },
];

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
            {t.resources.title}
          </h1>
          <p className="text-xl text-black/70">{t.resources.subtitle}</p>
        </div>

        {/* Topic-based resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicResources.map((topic) => (
            <Card key={topic.topic} className="h-full">
              <h2 className="text-lg font-semibold text-black">{topic.topic}</h2>
              <p className="mt-2 text-black/70">{topic.description}</p>
              <ul className="mt-5 space-y-3">
                {topic.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg border border-black/10 bg-white px-4 py-3 hover:bg-teal-50 transition-colors"
                    >
                      <p className="text-sm font-medium text-black">{link.label}</p>
                      <p className="text-xs text-black/60 mt-1">{link.org}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Info Note */}
        <Card className="mt-12 bg-teal-50 max-w-3xl mx-auto">
          <p className="text-black/70 text-center">
            <strong>Note:</strong> Ces ressources sont à titre informatif seulement et ne remplacent pas une consultation professionnelle.
          </p>
        </Card>
      </div>
    </div>
  );
}
