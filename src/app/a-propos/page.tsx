'use client';

import { GraduationCap, Award, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useLanguage();

  const bookingUrl = siteConfig.booking.calendlyUrl;

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
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-700 font-medium mb-3 tracking-wide uppercase text-sm">
                {siteConfig.credentials}
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                {t.about.title}
              </h1>
              <p className="mt-5 text-lg text-black/70 max-w-xl">
                {t.about.subtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  <Button size="lg">{t.common.bookNow}</Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    {t.common.contactUs}
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-black/10 bg-white p-3">
                <div
                  className="rounded-2xl bg-center bg-cover h-[380px]"
                  style={{ backgroundImage: "url('/hero-waiting-room.svg')" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Card>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
              {t.about.bioTitle}
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              {t.about.bioText}
            </p>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h2 className="text-2xl font-semibold text-black mb-4">
                {t.about.educationTitle}
              </h2>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black">{siteConfig.credentials}</p>
                  <p className="text-black/70">{t.about.educationText}</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-semibold text-black mb-4">
                {t.about.approachTitle}
              </h2>
              <p className="text-black/70 leading-relaxed">{t.about.approachText}</p>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
              {t.about.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 border border-black/10">
                      <value.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">{value.title}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-green-50 p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Prêt à commencer ?
            </h2>
            <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">
              Contactez-moi pour discuter de vos besoins et planifier une première rencontre.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                <Button size="lg">{t.common.bookNow}</Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {t.common.contactUs}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
