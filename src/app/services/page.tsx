'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { getServicesCatalog } from '@/lib/servicesCatalog';

export default function ServicesPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const services = getServicesCatalog(t);

  return (
    <div className="bg-white">
      {/* Top */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
              Services
            </h1>
            <p className="mt-4 text-lg text-black/70 leading-relaxed">
              {t.services.subtitle}
            </p>
            <div className="mt-8">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <Button size="lg">
                  {t.common.bookNow}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2x2 grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block">
                <Card
                  hover
                  className="rounded-lg bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 border border-black/10">
                      <service.icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold text-black">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-black/70 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="mt-5 list-disc pl-5 space-y-1 text-sm text-black/70">
                        {service.offerings.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Keep bottom CTA */}
          <div className="mt-16 rounded-2xl border border-black/10 bg-teal-50 p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Commencez votre parcours aujourd'hui
            </h2>
            <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">
              Prenez rendez-vous pour une première consultation et découvrez comment nous pouvons vous accompagner.
            </p>
            <div className="mt-7">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <Button size="lg">{t.common.bookNow}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
