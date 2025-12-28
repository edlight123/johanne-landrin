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
      {/* Hero (profile) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border border-black/10 bg-teal-50">
                <Image
                  src={siteConfig.profile.imageUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="176px"
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

              <div className="mt-6 w-full flex flex-col gap-3">
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

            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                {siteConfig.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-black/70">
                {siteConfig.title}
              </p>

              <div className="mt-8 space-y-5">
                <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP1}</p>
                <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP2}</p>
                <p className="text-lg text-black/70 leading-relaxed">{t.about.bioP3}</p>
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
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
            {/* Main column */}
            <div className="space-y-10">
              <Card>
                <h2 className="text-2xl font-semibold text-black">{t.about.approachTitle}</h2>
                <p className="mt-4 text-black/70 leading-relaxed">{t.about.approachText}</p>
                <div className="mt-6 flex items-start gap-3">
                  <Shield className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-black/70">{t.about.frameText}</p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-semibold text-black">{t.about.themesTitle}</h2>
                <p className="mt-3 text-black/70">{t.about.themesSubtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-3 py-1.5 rounded-full bg-teal-50 border border-black/10 text-sm text-black/80"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </Card>

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

            {/* Right column (education + certifications) */}
            <aside className="space-y-8 lg:sticky lg:top-28">
              <Card>
                <h2 className="text-2xl font-semibold text-black">{t.about.educationTitle}</h2>
                <p className="mt-3 text-black/70">{t.about.educationIntro}</p>

                <div className="mt-5 space-y-4">
                  {siteConfig.education.map((item) => (
                    <div key={`${item.institution}-${item.degree}`} className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-black">{item.institution}</p>
                          {item.years && <p className="text-sm text-black/60">{item.years}</p>}
                        </div>
                        <p className="mt-2 text-black/70">{item.degree}</p>
                        {item.details && <p className="mt-1 text-sm text-black/60">{item.details}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {siteConfig.certifications.length > 0 && (
                <Card>
                  <h2 className="text-2xl font-semibold text-black">{t.about.certificationsTitle}</h2>
                  <p className="mt-3 text-black/70">{t.about.certificationsIntro}</p>
                  <ul className="mt-5 space-y-2 text-black/70">
                    {siteConfig.certifications.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
