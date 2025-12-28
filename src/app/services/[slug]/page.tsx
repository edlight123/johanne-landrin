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
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <Button size="lg">
                  {t.common.bookNow}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Card className="rounded-lg bg-white border border-black/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-black">Détails</h2>
            <p className="mt-3 text-black/70 leading-relaxed">
              {t.services.detailsPlaceholder ??
                "Détails à venir. Vous pouvez réserver un premier rendez-vous pour clarifier vos besoins et définir ensemble le cadre de l’accompagnement."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
