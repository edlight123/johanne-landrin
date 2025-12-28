'use client';

import { Heart, Users, Clock, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function ServicesPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const services = [
    {
      id: 'individual',
      title: t.services.individual.title,
      description: t.services.individual.description,
      icon: Heart,
      forWho: t.services.individual.forWhoDetails,
      format: t.services.individual.formatDetails,
      duration: t.services.individual.durationDetails,
      show: true,
    },
    {
      id: 'youth',
      title: t.services.youth.title,
      description: t.services.youth.description,
      icon: Users,
      forWho: t.services.youth.forWhoDetails,
      format: t.services.youth.formatDetails,
      duration: t.services.youth.durationDetails,
      show: siteConfig.features.enableYouthService,
    },
    {
      id: 'group',
      title: t.services.group.title,
      description: t.services.group.description,
      icon: Users,
      forWho: t.services.group.forWhoDetails,
      format: t.services.group.formatDetails,
      duration: t.services.group.durationDetails,
      show: siteConfig.features.enableGroupService,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/hero-reception.jpg')" }}
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-700 font-medium mb-3 tracking-wide uppercase text-sm">
                {siteConfig.credentials}
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                {t.services.title}
              </h1>
              <p className="mt-5 text-lg text-black/70 max-w-xl">
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

            <div>
              <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm p-3">
                <div
                  className="rounded-2xl bg-center bg-cover h-[320px]"
                  style={{ backgroundImage: "url('/hero-reception.jpg')" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((service) => service.show)
              .map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-28">
                  <Card hover className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 border border-black/10">
                        <service.icon className="w-6 h-6 text-teal-700" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-black">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-black/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-black">{t.services.individual.forWho}</p>
                          <p className="text-black/70">{service.forWho}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-black">{t.services.individual.format}</p>
                          <p className="text-black/70">{service.format}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-black">{t.services.individual.duration}</p>
                          <p className="text-black/70">{service.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 pt-6 border-t border-black/10">
                      <a href={bookingUrl} target="_blank" rel="noreferrer">
                        <Button className="w-full">{t.common.bookNow}</Button>
                      </a>
                    </div>
                  </Card>
                </div>
              ))}
          </div>

          <div className="mt-12">
            <Card>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 border border-black/10">
                    <BookOpen className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-black">{t.services.workshops.title}</h2>
                    <p className="mt-2 text-black/70">{t.services.workshops.description}</p>
                  </div>
                </div>
                <Link href="/contact#ateliers">
                  <Button variant="outline">{t.services.workshops.link}</Button>
                </Link>
              </div>
            </Card>
          </div>

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
