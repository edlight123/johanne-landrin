'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';
import { Shield, Database, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Database,
      title: t.privacy.section1Title,
      content: t.privacy.section1Text,
    },
    {
      icon: Shield,
      title: t.privacy.section2Title,
      content: t.privacy.section2Text,
    },
    {
      icon: Lock,
      title: t.privacy.section3Title,
      content: t.privacy.section3Text,
    },
    {
      icon: UserCheck,
      title: t.privacy.section4Title,
      content: t.privacy.section4Text,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
            {t.privacy.title}
          </h1>
          <p className="text-lg text-black/70">{t.privacy.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 border border-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-green-700" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-black mb-3">
                    {section.title}
                  </h2>
                  <p className="text-black/70 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center text-sm text-black/60">
          Dernière mise à jour: Janvier 2024
        </div>
      </div>
    </div>
  );
}
