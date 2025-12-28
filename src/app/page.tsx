'use client';

import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
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

      {/* Hero Section - Professional & Clean */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal-700 font-medium mb-4 tracking-wide uppercase text-sm">
              {siteConfig.credentials}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 mb-8 leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prendre-rendez-vous">
                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                  {t.home.heroCTA}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/a-propos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Statement */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed italic">
            {t.home.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Services Section - Cleaner Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              {t.home.servicesTitle}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow border border-stone-200">
                <div className="mb-6">
                  <service.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre parcours?
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.
          </p>
          <Link href="/prendre-rendez-vous">
            <Button size="lg" variant="secondary" className="bg-white text-teal-700 hover:bg-stone-50 px-8 py-4 text-lg">
              Prendre rendez-vous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Themes Section - Simplified */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              {t.home.themesTitle}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t.home.themesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme: string) => (
              <div key={theme} className="p-6 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-medium text-stone-900 text-lg">{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Des questions?
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cabinet-contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Contactez-moi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
