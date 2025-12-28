'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, School, Building2, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';

export default function ContactPage() {
  const { t } = useLanguage();

  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState('');

  const [workshopLoading, setWorkshopLoading] = useState(false);
  const [workshopSuccess, setWorkshopSuccess] = useState(false);
  const [workshopError, setWorkshopError] = useState('');

  const audiences = [
    { icon: School, title: t.workshops.schools },
    { icon: Building2, title: t.workshops.ngos },
    { icon: Users, title: t.workshops.companies },
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);
    setContactError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setContactSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setContactError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setContactLoading(false);
    }
  };

  const handleWorkshopSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWorkshopLoading(true);
    setWorkshopError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/workshop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setWorkshopSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setWorkshopError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setWorkshopLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url('/hero-reception.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-700 font-medium mb-3 tracking-wide uppercase text-sm">
                {siteConfig.credentials}
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                {t.office.title}
              </h1>
              <p className="mt-5 text-lg text-black/70 max-w-xl">
                {t.office.subtitle}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="rounded-2xl border border-black/10 bg-white/90 p-5 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="text-sm text-black/60">Téléphone</p>
                      <p className="font-medium text-black">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded-2xl border border-black/10 bg-white/90 p-5 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="text-sm text-black/60">E-mail</p>
                      <p className="font-medium text-black break-all">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white/90 p-5 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-teal-700" />
                    <div>
                      <p className="text-sm text-black/60">WhatsApp</p>
                      <p className="font-medium text-black">{siteConfig.contact.whatsapp}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl border border-black/10 bg-white/90 p-3">
                <div
                  className="rounded-2xl bg-center bg-cover h-[360px]"
                  style={{ backgroundImage: "url('/hero-waiting-room.svg')" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet + Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-teal-700" />
                  {t.office.locationTitle}
                </h2>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-black">{siteConfig.office.address}</p>
                  <p className="text-black/70">{siteConfig.office.detailedAddress}</p>
                </div>

                {siteConfig.features.enableMap && siteConfig.office.mapEmbedUrl ? (
                  <div className="mt-6 rounded-xl overflow-hidden h-64 border border-black/10">
                    <iframe
                      src={siteConfig.office.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : null}
              </Card>

              <Card>
                <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-teal-700" />
                  {t.office.hoursTitle}
                </h2>
                <p className="text-lg text-black/70">{siteConfig.office.hours}</p>
              </Card>

              <Card>
                <h2 className="text-2xl font-semibold text-black mb-6">
                  {t.office.contactTitle}
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-black/70 hover:text-black transition-colors"
                  >
                    <Phone className="w-5 h-5 text-teal-700" />
                    <span className="text-lg">{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-black/70 hover:text-black transition-colors"
                  >
                    <Mail className="w-5 h-5 text-teal-700" />
                    <span className="text-lg break-all">{siteConfig.contact.email}</span>
                  </a>
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <h2 className="text-2xl font-semibold text-black mb-6">
                  {t.office.contactFormTitle}
                </h2>

                {contactSuccess ? (
                  <Alert variant="success">
                    <div>
                      <p className="font-semibold mb-2">{t.common.success}</p>
                      <p>{t.office.successMessage}</p>
                    </div>
                  </Alert>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <Input name="name" label={t.office.name} required placeholder="Votre nom" />
                    <Input
                      name="email"
                      type="email"
                      label={t.office.email}
                      required
                      placeholder="exemple@email.com"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      label={t.office.phone}
                      placeholder="+509 XXXX-XXXX"
                    />
                    <Input
                      name="subject"
                      label={t.office.subject}
                      required
                      placeholder="Objet de votre message"
                    />
                    <Textarea
                      name="message"
                      label={t.office.message}
                      required
                      placeholder="Votre message..."
                      rows={6}
                    />

                    <input
                      type="text"
                      name="website"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {contactError && <Alert variant="error">{contactError}</Alert>}

                    <Button type="submit" disabled={contactLoading} className="w-full">
                      <Send className="mr-2 w-4 h-4" />
                      {contactLoading ? t.common.loading : t.office.send}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ateliers */}
      <section id="ateliers" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              {t.workshops.title}
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              {t.workshops.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <p className="text-lg text-black/70 leading-relaxed">{t.workshops.intro}</p>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-black mb-6">{t.workshops.audienceTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {audiences.map((audience) => (
                    <div
                      key={audience.title}
                      className="rounded-xl border border-black/10 bg-teal-50 p-4 text-center"
                    >
                      <audience.icon className="w-6 h-6 text-teal-700 mx-auto mb-2" />
                      <p className="font-medium text-black">{audience.title}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-black mb-6">{t.workshops.topicsTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {siteConfig.workshopTopics.map((topic) => (
                    <div key={topic} className="rounded-xl border border-black/10 bg-white p-4">
                      <p className="text-black">{topic}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <h3 className="text-2xl font-semibold text-black mb-6">
                  {t.workshops.inquiryTitle}
                </h3>

                {workshopSuccess ? (
                  <Alert variant="success">
                    <div>
                      <p className="font-semibold mb-2">{t.common.success}</p>
                      <p>{t.workshops.successMessage}</p>
                    </div>
                  </Alert>
                ) : (
                  <form onSubmit={handleWorkshopSubmit} className="space-y-6">
                    <Input
                      name="orgName"
                      label={t.workshops.orgName}
                      required
                      placeholder="Nom de votre organisation"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        name="contactName"
                        label={t.workshops.contactName}
                        required
                        placeholder="Votre nom"
                      />

                      <Input
                        name="email"
                        type="email"
                        label={t.workshops.email}
                        required
                        placeholder="exemple@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        name="phone"
                        type="tel"
                        label={t.workshops.phone}
                        required
                        placeholder="+509 XXXX-XXXX"
                      />

                      <Input name="date" type="date" label={t.workshops.date} required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        name="audience"
                        label={t.workshops.audience}
                        required
                        placeholder="Ex: 30-50 personnes"
                      />

                      <Input
                        name="budget"
                        label={t.workshops.budget}
                        placeholder="Budget estimé"
                      />
                    </div>

                    <Input
                      name="location"
                      label={t.workshops.location}
                      required
                      placeholder="Ville ou région"
                    />

                    <Textarea
                      name="message"
                      label={t.workshops.message}
                      required
                      placeholder="Décrivez vos besoins, objectifs, et toute information pertinente..."
                      rows={6}
                    />

                    <input
                      type="text"
                      name="website"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {workshopError && <Alert variant="error">{workshopError}</Alert>}

                    <Button type="submit" disabled={workshopLoading} className="w-full">
                      <Send className="mr-2 w-4 h-4" />
                      {workshopLoading ? t.common.loading : t.workshops.submit}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
