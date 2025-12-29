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

  const bookingUrl = siteConfig.booking.calendlyUrl;

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
      href: '/contact#ateliers',
    },
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

      {/* Hero Section - With waiting room background */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/office-2.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              {(() => {
                const parts = t.home.heroTitle.split(' & ');
                if (parts.length === 2) {
                  return (
                    <>
                      {parts[0]} <span className="text-white/90">&</span>
                      <br />
                      {parts[1]}
                    </>
                  );
                }
                return t.home.heroTitle;
              })()}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full px-7 py-3 text-base sm:text-lg">
                  {t.home.heroCTA}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/a-propos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full px-7 py-3 text-base sm:text-lg border-white/60 text-white hover:bg-white/10"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Single line */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              {t.home.servicesSubtitle}
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              {t.home.heroSubtitle}
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2" aria-label="Services">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 lg:flex-1"
              >
                <Card hover className="h-full">
                  <div className="mb-5">
                    <service.icon className="w-9 h-9 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-black/10 bg-teal-50 p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Prêt à commencer votre parcours?
            </h2>
            <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">
              Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.
            </p>
            <div className="mt-7">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="px-8">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
