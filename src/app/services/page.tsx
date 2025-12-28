'use client';

import {
  Heart,
  Users,
  Clock,
  MapPin,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ServicesPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const reserveLabel = t.services.reserveLink ?? 'Réserver';
  const viewDetailsLabel = t.services.viewDetails ?? 'Voir détails';

  const services = [
    {
      id: 'individual',
      title: t.services.individual.title,
      description: t.services.individual.description,
      icon: Heart,
      forWho: t.services.individual.forWhoDetails,
      format: t.services.individual.formatDetails,
      duration: t.services.individual.durationDetails,
    },
    {
      id: 'youth',
      title: t.services.youth.title,
      description: t.services.youth.description,
      icon: Users,
      forWho: t.services.youth.forWhoDetails,
      format: t.services.youth.formatDetails,
      duration: t.services.youth.durationDetails,
    },
    {
      id: 'group',
      title: t.services.group.title,
      description: t.services.group.description,
      icon: Users,
      forWho: t.services.group.forWhoDetails,
      format: t.services.group.formatDetails,
      duration: t.services.group.durationDetails,
    },
    {
      id: 'workshops',
      title: t.services.workshops.title,
      description: t.services.workshops.description,
      icon: BookOpen,
      forWho: t.services.workshops.forWhoDetails,
      format: t.services.workshops.formatDetails,
      duration: t.services.workshops.durationDetails,
    },
  ];

  const howItWorks = [
    {
      icon: CalendarCheck,
      title: t.services.howItWorksStep1Title,
      text: t.services.howItWorksStep1Text,
    },
    {
      icon: MessageCircle,
      title: t.services.howItWorksStep2Title,
      text: t.services.howItWorksStep2Text,
    },
    {
      icon: CheckCircle2,
      title: t.services.howItWorksStep3Title,
      text: t.services.howItWorksStep3Text,
    },
  ];

  return (
    <div className="pb-24 sm:pb-0">
      {/* Top */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
              {t.services.title}
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

      {/* Service summary cards */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 border border-black/10">
                    <service.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-black leading-snug">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-black/70 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-black/60 whitespace-nowrap">{t.services.individual.forWho}</p>
                    <p className="text-black/80 text-right">{service.forWho}</p>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-black/60 whitespace-nowrap">{t.services.individual.format}</p>
                    <p className="text-black/80 text-right">{service.format}</p>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-black/60 whitespace-nowrap">{t.services.individual.duration}</p>
                    <p className="text-black/80 text-right">{service.duration}</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-black/10">
                  <a
                    href={`#${service.id}`}
                    className="text-sm font-medium text-teal-700 hover:text-teal-800"
                  >
                    {viewDetailsLabel}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              {t.services.howItWorksTitle}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <Card key={step.title} className="p-6">
                <div className="flex items-start gap-3">
                  <step.icon className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">{step.title}</p>
                    <p className="mt-2 text-sm text-black/70 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-28">
                <div className="flex items-baseline justify-between gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-black/70 leading-relaxed max-w-3xl">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline text-sm font-medium text-teal-700 hover:text-teal-800 whitespace-nowrap"
                  >
                    {reserveLabel}
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-black">{t.services.individual.forWho}</p>
                        <p className="mt-1 text-sm text-black/70">{service.forWho}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-black">{t.services.individual.format}</p>
                        <p className="mt-1 text-sm text-black/70">{service.format}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-black">{t.services.individual.duration}</p>
                        <p className="mt-1 text-sm text-black/70">{service.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:hidden">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-teal-700 hover:text-teal-800"
                    >
                      {reserveLabel}
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA (keep) */}
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

      {/* Mobile sticky booking */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden border-t border-black/10 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="block">
            <Button size="lg" className="w-full">
              {t.common.bookNow}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
