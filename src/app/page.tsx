'use client';

import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Heart, Users, BookOpen, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import { generateLocalBusinessSchema, generateWebsiteSchema } from '@/lib/schema';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.individual.title,
      description: t.services.individual.description,
      icon: Heart,
      href: '/services#individual',
    },
    ...(siteConfig.features.enableYouthService
      ? [
          {
            title: t.services.youth.title,
            description: t.services.youth.description,
            icon: Users,
            href: '/services#youth',
          },
        ]
      : []),
    ...(siteConfig.features.enableGroupService
      ? [
          {
            title: t.services.group.title,
            description: t.services.group.description,
            icon: Users,
            href: '/services#group',
          },
        ]
      : []),
    {
      title: t.services.workshops.title,
      description: t.services.workshops.description,
      icon: BookOpen,
      href: '/ateliers-conferences',
    },
  ];

  const themes = [
    t.themes.anxiety,
    t.themes.depression,
    t.themes.trauma,
    t.themes.relationships,
    t.themes.selfEsteem,
    t.themes.life,
    t.themes.work,
    t.themes.grief,
  ];

  return (
    <div>
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-100 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prendre-rendez-vous">
                <Button size="lg" className="w-full sm:w-auto">
                  {t.home.heroCTA}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/ateliers-conferences">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t.home.heroSecondaryCTA}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card hover className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.home.themesTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.themesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme, index) => (
              <Card key={index} className="text-center">
                <p className="font-medium text-slate-900">{theme}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {t.home.aboutTitle}
            </h2>
            <p className="text-lg text-slate-600 mb-8">{t.home.aboutTeaser}</p>
            <Link href="/a-propos">
              <Button variant="outline">{t.common.learnMore}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Teaser */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {t.home.officeTitle}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {t.home.officeTeaser}
              </p>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">
                    {siteConfig.office.address}
                  </p>
                  <p className="text-slate-600">{siteConfig.office.hours}</p>
                </div>
              </div>
              <Link href="/cabinet-contact">
                <Button variant="outline">{t.common.learnMore}</Button>
              </Link>
            </div>
            <div className="bg-slate-200 rounded-2xl h-80 lg:h-96 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.home.resourcesTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              {t.home.resourcesSubtitle}
            </p>
            <Link href="/ressources">
              <Button variant="outline">
                {t.common.learnMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Prenez le premier pas vers votre bien-être mental aujourd'hui.
          </p>
          <Link href="/prendre-rendez-vous">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t.home.heroCTA}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
