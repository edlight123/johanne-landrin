'use client';

import { Heart, Users, BookOpen, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function ServicesPage() {
  const { t } = useLanguage();

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
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services
            .filter((service) => service.show)
            .map((service) => (
              <Card key={service.id} id={service.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Icon & Title */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-stone-900" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-stone-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        {t.services.individual.forWho}
                      </h3>
                      <p className="text-stone-600">{service.forWho}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {t.services.individual.format}
                      </h3>
                      <p className="text-stone-600">{service.format}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        {t.services.individual.duration}
                      </h3>
                      <p className="text-stone-600">{service.duration}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <Link href="/prendre-rendez-vous">
                    <Button>{t.common.bookNow}</Button>
                  </Link>
                </div>
              </Card>
            ))}

          {/* Workshops Card */}
          <Card className="bg-teal-700 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                {t.services.workshops.title}
              </h2>
            </div>
            <p className="text-lg text-white/80 mb-6">
              {t.services.workshops.description}
            </p>
            <Link href="/ateliers-conferences">
              <Button className="bg-white text-stone-900 hover:bg-stone-100">
                {t.services.workshops.link}
              </Button>
            </Link>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-stone-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Commencez votre parcours aujourd'hui
          </h2>
          <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
            Prenez rendez-vous pour une première consultation et découvrez comment nous pouvons vous accompagner.
          </p>
          <Link href="/prendre-rendez-vous">
            <Button size="lg">{t.common.bookNow}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
