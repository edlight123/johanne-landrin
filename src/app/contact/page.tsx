'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';

export default function ContactPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState('');

  const addressLine = siteConfig.office.address;
  const detailedAddressLine =
    siteConfig.office.detailedAddress && siteConfig.office.detailedAddress !== siteConfig.office.address
      ? siteConfig.office.detailedAddress
      : '';

  const validateContact = (data: Record<string, FormDataEntryValue>) => {
    const name = String(data.name ?? '').trim();
    const email = String(data.email ?? '').trim();
    const subject = String(data.subject ?? '').trim();
    const message = String(data.message ?? '').trim();

    if (!name || !email || !subject || !message) {
      return 'Merci de compléter tous les champs requis.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Merci d’indiquer une adresse e-mail valide.';
    }

    return '';
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);
    setContactError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const validationError = validateContact(data);
    if (validationError) {
      setContactError(validationError);
      setContactLoading(false);
      return;
    }

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

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              {t.office.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t.office.subtitle}
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

      {/* Contact cards */}
      <section className="pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-lg bg-card border shadow-sm ring-0">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-700 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="mt-1 block font-medium text-foreground">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="rounded-lg bg-card border shadow-sm ring-0">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-700 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block font-medium text-foreground break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="rounded-lg bg-card border shadow-sm ring-0">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-700 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block font-medium text-foreground"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location + Hours */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-lg bg-card border shadow-sm ring-0">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-700" />
                {t.office.locationTitle}
              </h2>
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">{addressLine}</p>
                {detailedAddressLine ? (
                  <p className="text-muted-foreground">{detailedAddressLine}</p>
                ) : null}

                {siteConfig.features.enableMap && siteConfig.office.mapEmbedUrl ? (
                  <a
                    href={siteConfig.office.mapEmbedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800"
                  >
                    Voir la carte
                  </a>
                ) : null}
              </div>
            </Card>

            <Card className="rounded-lg bg-card border shadow-sm ring-0">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-700" />
                {t.office.hoursTitle}
              </h2>
              <p className="mt-4 text-muted-foreground">{siteConfig.office.hours}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops teaser */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-lg bg-card border shadow-sm ring-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-3xl">
                <h2 className="text-lg font-semibold text-foreground">{t.workshops.title}</h2>
                <p className="mt-2 text-muted-foreground">{t.workshops.subtitle}</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/ateliers-conferences">
                  <Button variant="outline">Voir les ateliers</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-lg bg-card border shadow-sm ring-0">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-foreground">{t.office.contactFormTitle}</h2>
              <p className="mt-2 text-muted-foreground">
                Envoyez un message et je vous répondrai dans les plus brefs délais.
              </p>
            </div>

            <div className="mt-8">
              {contactSuccess ? (
                <Alert variant="success">
                  <div>
                    <p className="font-semibold mb-2">{t.common.success}</p>
                    <p>{t.office.successMessage}</p>
                  </div>
                </Alert>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input name="name" label={t.office.name} required placeholder="Votre nom" />
                    <Input
                      name="email"
                      type="email"
                      label={t.office.email}
                      required
                      placeholder="exemple@email.com"
                    />
                  </div>

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

                  {contactError ? <Alert variant="error">{contactError}</Alert> : null}

                  <Button type="submit" disabled={contactLoading} className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    {contactLoading ? t.common.loading : t.office.send}
                  </Button>
                </form>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency disclaimer */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-card border border-black/10 p-5 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{t.emergency.title}</p>
            <p className="mt-2">{t.emergency.message}</p>
            <p className="mt-2">{t.emergency.hotline}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
