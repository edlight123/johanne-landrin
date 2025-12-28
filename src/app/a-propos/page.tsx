'use client';

import { GraduationCap, Award, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t.about.value1,
    },
    {
      icon: Heart,
      title: t.about.value2,
    },
    {
      icon: Award,
      title: t.about.value3,
    },
    {
      icon: GraduationCap,
      title: t.about.value4,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-slate-600">{t.about.subtitle}</p>
        </div>

        {/* Bio */}
        <Card className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {t.about.bioTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.about.bioText}
          </p>
        </Card>

        {/* Education */}
        <Card className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {t.about.educationTitle}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-slate-700 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-900">
                  {siteConfig.credentials}
                </p>
                <p className="text-slate-600">{t.about.educationText}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Approach */}
        <Card className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {t.about.approachTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.about.approachText}
          </p>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            {t.about.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-slate-900" />
                </div>
                <p className="font-semibold text-slate-900">{value.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-slate-600 mb-6">
            Contactez-moi pour discuter de vos besoins et planifier une première rencontre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prendre-rendez-vous">
              <Button size="lg">{t.common.bookNow}</Button>
            </Link>
            <Link href="/cabinet-contact">
              <Button variant="outline" size="lg">
                {t.common.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
