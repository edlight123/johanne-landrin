'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';

export default function ResourcesPage() {
  const { t } = useLanguage();
  const topicResources = t.resources.topicResources;

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
            <strong>{t.resources.noteLabel}:</strong> {t.resources.noteText}
          </p>
        </Card>
      </div>
    </div>
  );
}
