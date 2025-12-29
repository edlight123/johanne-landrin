'use client';

import {
  GraduationCap,
  Globe,
  HeartHandshake,
  MapPin,
  Shield,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const { t } = useLanguage();

  const bookingUrl = siteConfig.booking.calendlyUrl;

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
      {/* Top section (3 columns) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
              {siteConfig.name},
              {' '}
              {siteConfig.title.charAt(0).toLowerCase() + siteConfig.title.slice(1)}
            </h1>
            <div className="mt-4 h-0.5 w-14 bg-teal-600" aria-hidden="true" />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
            {/* Left: photo + bio + approach (independent from sidebar height) */}
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-x-10 items-start">
              {/* Photo */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-full max-w-72 aspect-square rounded-xl overflow-hidden border border-black/10 bg-teal-50">
                  <Image
                    src={siteConfig.profile.imageUrl}
                    alt={siteConfig.name}
                    fill
                    sizes="288px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <p className="text-sm font-medium text-teal-700">{siteConfig.credentials}</p>
                  <div className="mt-2 flex items-center justify-center lg:justify-start gap-2 text-sm text-black/70">
                    <MapPin className="w-4 h-4" />
                    <span>{siteConfig.office.address}</span>
                  </div>
                </div>

                <div className="mt-6 w-full max-w-72 flex flex-col gap-3">
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="w-full">
                    <Button size="lg" className="w-full">{t.common.bookNow}</Button>
                  </a>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" size="lg" className="w-full">
                      {t.common.contactUs}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="space-y-5">
                  <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP1}</p>
                  <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP2}</p>
                  <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP3}</p>
                </div>
              </div>

              {/* Treatment philosophy (directly under bio; spans photo+bio) */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-black">{t.about.approachTitle}</h2>
                <p className="mt-4 text-black/70 leading-relaxed">{t.about.approachText}</p>
                <p className="mt-4 text-sm text-black/70">{t.about.frameText}</p>
              </div>
            </div>

            {/* Right: education, certifications, specializations */}
            <aside className="space-y-6">
              <Card>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-teal-700 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold text-black">{t.about.educationTitle}</h2>
                </div>
                <div className="mt-6 space-y-6">
                  {siteConfig.education.map((item) => (
                    <div key={`${item.institution}-${item.degree}`} className="space-y-2">
                      <p className="text-lg font-semibold text-black">{item.degree}</p>
                      <p className="text-black/70">{item.institution}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {siteConfig.certifications.length > 0 && (
                <Card>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-teal-700 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-black whitespace-nowrap">
                      {t.about.certificationsTitle}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-2 text-black/70">
                    {siteConfig.certifications.map((c) => (
                      <p key={c}>{c}</p>
                    ))}
                  </div>
                </Card>
              )}

              <Card>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-teal-700 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold text-black">{t.about.specializationsTitle}</h2>
                </div>
                <div className="mt-5 space-y-2 text-black/70">
                  {themes.map((theme) => (
                    <p key={theme}>{theme}</p>
                  ))}
                </div>
              </Card>
            </aside>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-6 h-6 text-teal-700 mt-0.5" />
                <div>
                  <p className="font-semibold text-black">{t.about.offer1Title}</p>
                  <p className="mt-1 text-sm text-black/70">{t.about.offer1Text}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-teal-700 mt-0.5" />
                <div>
                  <p className="font-semibold text-black">{t.about.offer2Title}</p>
                  <p className="mt-1 text-sm text-black/70">{t.about.offer2Text}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-teal-700 mt-0.5" />
                <div>
                  <p className="font-semibold text-black">{t.about.offer3Title}</p>
                  <p className="mt-1 text-sm text-black/70">{t.about.offer3Text}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Below */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-2xl border border-black/10 bg-teal-50 p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">{t.about.ctaTitle}</h2>
            <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">{t.about.ctaText}</p>
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
