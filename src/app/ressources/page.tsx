'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';
import Link from 'next/link';

// Placeholder posts - in production, these would come from MDX files
const samplePosts = [
  {
    slug: 'comprendre-lanxiete',
    title: 'Comprendre l\'anxiété et comment la gérer',
    excerpt: 'L\'anxiété est une réponse naturelle au stress, mais elle peut devenir envahissante. Découvrez des stratégies pour mieux la gérer au quotidien.',
    date: '2024-01-15',
    tags: ['Anxiété', 'Gestion du stress'],
  },
  {
    slug: 'importance-sante-mentale',
    title: 'L\'importance de prendre soin de sa santé mentale',
    excerpt: 'La santé mentale est tout aussi importante que la santé physique. Explorez pourquoi et comment en prendre soin.',
    date: '2024-01-10',
    tags: ['Santé mentale', 'Bien-être'],
  },
  {
    slug: 'communication-relation',
    title: 'Améliorer la communication dans vos relations',
    excerpt: 'Une bonne communication est la clé de relations saines. Découvrez des techniques pratiques pour mieux communiquer.',
    date: '2024-01-05',
    tags: ['Relations', 'Communication'],
  },
];

const externalResources = [
  {
    org: 'Organisation mondiale de la Santé (OMS)'
    ,
    title: 'Santé mentale'
    ,
    description: 'Aperçu des enjeux, déterminants et pistes d’action en santé mentale.'
    ,
    href: 'https://www.who.int/health-topics/mental-health'
  },
  {
    org: 'National Institute of Mental Health (NIMH)'
    ,
    title: 'Mental Health Information'
    ,
    description: 'Fiches et ressources fiables sur les troubles psychiques et les soins.'
    ,
    href: 'https://www.nimh.nih.gov/health'
  },
  {
    org: 'American Psychological Association (APA)'
    ,
    title: 'Psychotherapy'
    ,
    description: 'Comprendre la psychothérapie, ses objectifs et ce à quoi s’attendre.'
    ,
    href: 'https://www.apa.org/topics/psychotherapy'
  },
  {
    org: 'Centers for Disease Control and Prevention (CDC)'
    ,
    title: 'Mental Health'
    ,
    description: 'Informations et recommandations de santé publique liées à la santé mentale.'
    ,
    href: 'https://www.cdc.gov/mentalhealth/index.htm'
  },
  {
    org: 'NHS (Royaume-Uni)'
    ,
    title: 'Mental health'
    ,
    description: 'Guides pratiques et orientations pour chercher de l’aide et des soins.'
    ,
    href: 'https://www.nhs.uk/mental-health/'
  },
  {
    org: 'UNICEF'
    ,
    title: 'Santé mentale des adolescents'
    ,
    description: 'Ressources et repères sur le bien-être psychologique des jeunes.'
    ,
    href: 'https://www.unicef.org/health/mental-health'
  },
];

export default function ResourcesPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = Array.from(
    new Set(samplePosts.flatMap((post) => post.tags))
  );

  // Filter posts
  const filteredPosts = samplePosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
            <input
              type="text"
              placeholder={t.resources.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-black/20 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/10"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !selectedTag
                  ? 'bg-teal-600 text-white'
                  : 'bg-teal-50 text-black/70 hover:bg-teal-100'
              }`}
            >
              {t.resources.allTopics}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-50 text-black/70 hover:bg-teal-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/ressources/${post.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-teal-50 text-black/70 text-xs font-medium rounded border border-black/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-black mb-3">
                      {post.title}
                    </h2>
                    <p className="text-black/70 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <span className="text-sm text-black/60">{post.date}</span>
                    <span className="text-sm font-medium text-black">
                      {t.resources.readMore} →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-black/70">{t.resources.noResults}</p>
          </div>
        )}

        {/* Recommended external resources */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Ressources recommandées
            </h2>
            <p className="mt-3 text-lg text-black/70">
              Sélection de ressources fiables d’organisations reconnues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalResources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Card hover className="h-full">
                  <p className="text-sm font-medium text-black/60">{resource.org}</p>
                  <h3 className="mt-2 text-lg font-semibold text-black">{resource.title}</h3>
                  <p className="mt-2 text-black/70">{resource.description}</p>
                  <p className="mt-4 text-sm font-medium text-teal-700">Ouvrir →</p>
                </Card>
              </a>
            ))}
          </div>
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
