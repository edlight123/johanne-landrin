'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { getServicesCatalog } from '@/lib/servicesCatalog';

export default function ServiceDetailPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const services = getServicesCatalog(t);
  const service = services.find((s) => s.slug === slug);

  const publicLabel = t.services.labels?.public ?? 'Public';
  const formatLabel = t.services.labels?.format ?? 'Format';

  if (!service) {
    return (
      <div className="bg-white">
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-sm text-teal-700 hover:text-teal-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.services.backToServices ?? 'Retour aux services'}
            </Link>
            <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-black">Service introuvable</h1>
            <p className="mt-3 text-black/70">Ce service n’existe pas ou a été déplacé.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm text-teal-700 hover:text-teal-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.services.backToServices ?? 'Retour aux services'}
          </Link>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-black/70 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              {service.slug === 'ateliers-conferences' ? (
                <Link href="/contact">
                  <Button size="lg">
                    {t.common.contactUs}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  <Button size="lg">
                    {t.common.bookNow}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-black">Intro / objectif</h2>
              <p className="mt-3 text-black/70 leading-relaxed">{service.introObjective}</p>

              <h2 className="mt-10 text-2xl font-semibold text-black">Déroulé</h2>
              <ol className="mt-4 space-y-3 list-decimal pl-5 text-black/70">
                {service.steps.map((step) => (
                  <li key={step} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>

              <h2 className="mt-10 text-2xl font-semibold text-black">Durée & fréquence</h2>
              <p className="mt-3 text-black/70 leading-relaxed">{service.durationFrequency}</p>

              <h2 className="mt-10 text-2xl font-semibold text-black">
                Ce que vous pouvez en attendre
              </h2>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-black/70">
                {service.expectations.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="rounded-lg bg-white border border-black/10 shadow-sm">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-medium text-black">Pour qui</p>
                    <p className="mt-2 text-black/70">
                      {service.audienceDetails ?? service.audienceLabel}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-black">Formats (cabinet / en ligne)</p>
                    <div className="mt-2 space-y-2 text-black/70">
                      {service.formats.cabinet && (
                        <p>
                          <span className="font-medium text-black">Cabinet:</span> {service.formats.cabinet}
                        </p>
                      )}
                      {service.formats.online && (
                        <p>
                          <span className="font-medium text-black">En ligne:</span> {service.formats.online}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-black">{formatLabel}</p>
                    <p className="mt-2 text-black/70">{service.formatDetails ?? service.formatLabel}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">{publicLabel}</p>
                    <p className="mt-2 text-black/70">{service.audienceDetails ?? service.audienceLabel}</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-lg bg-teal-50 border border-black/10 shadow-sm">
                <h3 className="text-lg font-semibold text-black">Prendre la prochaine étape</h3>
                <p className="mt-2 text-sm text-black/70">
                  {service.slug === 'ateliers-conferences'
                    ? "Parlez-moi de votre contexte et de vos objectifs, et je vous proposerai un format adapté."
                    : "Réservez un premier rendez-vous pour clarifier vos besoins et définir le cadre ensemble."}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {service.slug === 'ateliers-conferences' ? (
                    <>
                      <Link href="/ateliers-conferences">
                        <Button size="lg" className="w-full">
                          Voir les ateliers
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button size="lg" variant="outline" className="w-full">
                          {t.common.contactUs}
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <a href={bookingUrl} target="_blank" rel="noreferrer">
                        <Button size="lg" className="w-full">
                          {t.common.bookNow}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </a>
                      <Link href="/contact">
                        <Button size="lg" variant="outline" className="w-full">
                          {t.common.contactUs}
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
