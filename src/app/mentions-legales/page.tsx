'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import { User, Server, Copyright, AlertTriangle } from 'lucide-react';

export default function LegalPage() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: User,
      title: t.legal.ownerTitle,
      content: t.legal.ownerText,
    },
    {
      icon: Server,
      title: t.legal.hostTitle,
      content: t.legal.hostText,
    },
    {
      icon: Copyright,
      title: t.legal.licenseTitle,
      content: t.legal.licenseText,
    },
    {
      icon: AlertTriangle,
      title: t.legal.disclaimerTitle,
      content: t.legal.disclaimerText,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
            {t.legal.title}
          </h1>
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

        {/* Footer Note */}
        <Card className="mt-12 bg-green-50">
          <p className="text-sm text-black/70 text-center">
            Pour toute question concernant ces mentions légales, veuillez contacter:{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-black font-medium hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
