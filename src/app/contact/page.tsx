'use client';

import { useState } from 'react';
import { Building2, Calendar, Clock, Mail, MapPin, Phone, School, Send, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';

export default function ContactPage() {
  const { t } = useLanguage();
  const bookingUrl = siteConfig.booking.calendlyUrl;

  const [active, setActive] = useState<'cabinet' | 'ateliers' | null>(null);

  const onToggle = (next: 'cabinet' | 'ateliers') => {
    setActive((current) => (current === next ? null : next));
  };

  return (
    <div className="bg-background text-foreground">
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Cabinet & Contact</h1>
            <p className="mt-3 text-lg text-muted-foreground">{t.office.subtitle}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectableCard
              title="Cabinet"
              description="Rendez-vous, coordonnées, adresse et horaires."
              isActive={active === 'cabinet'}
              onClick={() => onToggle('cabinet')}
            />
            <SelectableCard
              title="Ateliers & conférences"
              description="Interventions pour organisations et collectivités."
              isActive={active === 'ateliers'}
              onClick={() => onToggle('ateliers')}
            />
          </div>

          <div className="mt-8">
            <AnimatedPanel isOpen={active === 'cabinet'}>
              <CabinetPanel bookingUrl={bookingUrl} />
            </AnimatedPanel>

            <AnimatedPanel isOpen={active === 'ateliers'}>
              <AteliersPanel />
            </AnimatedPanel>
          </div>
        </div>
      </section>
    </div>
  );
}


function SelectableCard({
  title,
  description,
  isActive,
  onClick,
}: {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'w-full text-left rounded-lg bg-card border shadow-sm px-6 py-5 transition-colors ' +
        (isActive ? 'border-teal-700/40' : '')
      }
      aria-pressed={isActive}
    >
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </button>
  );
}

function AnimatedPanel({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        'overflow-hidden transition-[max-height,opacity] duration-300 ease-out ' +
        (isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0')
      }
      aria-hidden={!isOpen}
    >
      <div className={isOpen ? 'pt-6' : 'pt-0'}>{children}</div>
    </div>
  );
}

function CabinetPanel({ bookingUrl }: { bookingUrl: string }) {
  const { t } = useLanguage();

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
    <div className="rounded-lg bg-card border shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">Cabinet</p>
          <p className="mt-1 text-sm text-muted-foreground">Prise de rendez-vous et informations pratiques.</p>
        </div>

        <div className="flex-shrink-0">
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            <Button size="lg">
              <Calendar className="mr-2 w-5 h-5" />
              {t.common.bookNow}
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="rounded-lg bg-card border shadow-sm px-4 py-3 flex items-center gap-3"
        >
          <Phone className="w-4 h-4 text-teal-700" />
          <span className="text-sm font-medium">Téléphone</span>
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="rounded-lg bg-card border shadow-sm px-4 py-3 flex items-center gap-3"
        >
          <Mail className="w-4 h-4 text-teal-700" />
          <span className="text-sm font-medium">E-mail</span>
        </a>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-card border shadow-sm px-4 py-3 flex items-center gap-3"
        >
          <Phone className="w-4 h-4 text-teal-700" />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg bg-card border shadow-sm p-5">
          <p className="text-sm font-semibold flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700" />
            {t.office.locationTitle}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{addressLine}</p>
          {detailedAddressLine ? <p className="mt-1 text-sm text-muted-foreground">{detailedAddressLine}</p> : null}
        </div>
        <div className="rounded-lg bg-card border shadow-sm p-5">
          <p className="text-sm font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-700" />
            {t.office.hoursTitle}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.office.hours}</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold">{t.office.contactFormTitle}</p>
        <p className="mt-2 text-sm text-muted-foreground">Optionnel — pour une demande non urgente.</p>

        <div className="mt-6">
          {contactSuccess ? (
            <Alert variant="success">
              <div>
                <p className="font-semibold mb-2">{t.common.success}</p>
                <p>{t.office.successMessage}</p>
              </div>
            </Alert>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input name="name" label={t.office.name} required placeholder="Votre nom" />
                <Input name="email" type="email" label={t.office.email} required placeholder="exemple@email.com" />
              </div>

              <Input name="subject" label={t.office.subject} required placeholder="Objet" />
              <Textarea name="message" label={t.office.message} required placeholder="Votre message..." rows={5} />

              <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              {contactError ? <Alert variant="error">{contactError}</Alert> : null}

              <Button type="submit" disabled={contactLoading} className="w-full">
                <Send className="mr-2 w-4 h-4" />
                {contactLoading ? t.common.loading : t.office.send}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function AteliersPanel() {
  const { t } = useLanguage();

  const [workshopLoading, setWorkshopLoading] = useState(false);
  const [workshopSuccess, setWorkshopSuccess] = useState(false);
  const [workshopError, setWorkshopError] = useState('');

  const audiences = [
    { icon: School, title: t.workshops.schools },
    { icon: Building2, title: t.workshops.ngos },
    { icon: Users, title: t.workshops.companies },
  ];

  const validateWorkshop = (data: Record<string, FormDataEntryValue>) => {
    const requiredKeys = ['orgName', 'contactName', 'email', 'phone', 'date', 'audience', 'location', 'message'];
    for (const key of requiredKeys) {
      if (!String(data[key] ?? '').trim()) return 'Merci de compléter tous les champs requis.';
    }

    const email = String(data.email ?? '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Merci d’indiquer une adresse e-mail valide.';

    return '';
  };

  const handleWorkshopSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWorkshopLoading(true);
    setWorkshopError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const validationError = validateWorkshop(data);
    if (validationError) {
      setWorkshopError(validationError);
      setWorkshopLoading(false);
      return;
    }

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
    <div className="rounded-lg bg-card border shadow-sm p-6">
      <p className="text-lg font-semibold">Ateliers & conférences</p>
      <p className="mt-1 text-sm text-muted-foreground">{t.workshops.subtitle}</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="rounded-lg bg-card border shadow-sm p-5">
            <p className="text-sm font-semibold">{t.workshops.audienceTitle}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {audiences.map((audience) => (
                <div key={audience.title} className="rounded-lg bg-card border shadow-sm p-4 text-center">
                  <audience.icon className="w-6 h-6 text-teal-700 mx-auto mb-2" />
                  <p className="text-sm font-medium">{audience.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-card border shadow-sm p-5">
            <p className="text-sm font-semibold">{t.workshops.formatsTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>{t.workshops.format1}</li>
              <li>{t.workshops.format2}</li>
              <li>{t.workshops.format3}</li>
            </ul>
          </div>

          <div className="rounded-lg bg-card border shadow-sm p-5">
            <p className="text-sm font-semibold">{t.workshops.topicsTitle}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {siteConfig.workshopTopics.slice(0, 6).map((topic) => (
                <div key={topic} className="rounded-lg bg-card border shadow-sm px-3 py-2">
                  <p className="text-sm text-muted-foreground">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-card border shadow-sm p-5">
          <p className="text-sm font-semibold">{t.workshops.inquiryTitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">Formulaire de demande pour votre organisation.</p>

          <div className="mt-6">
            {workshopSuccess ? (
              <Alert variant="success">
                <div>
                  <p className="font-semibold mb-2">{t.common.success}</p>
                  <p>{t.workshops.successMessage}</p>
                </div>
              </Alert>
            ) : (
              <form onSubmit={handleWorkshopSubmit} className="space-y-5">
                <Input name="orgName" label={t.workshops.orgName} required placeholder="Organisation" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input name="contactName" label={t.workshops.contactName} required placeholder="Nom" />
                  <Input name="email" type="email" label={t.workshops.email} required placeholder="exemple@email.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input name="phone" type="tel" label={t.workshops.phone} required placeholder="+509 XXXX-XXXX" />
                  <Input name="date" type="date" label={t.workshops.date} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input name="audience" label={t.workshops.audience} required placeholder="Ex: 30-50" />
                  <Input name="budget" label={t.workshops.budget} placeholder="Optionnel" />
                </div>

                <Input name="location" label={t.workshops.location} required placeholder="Ville ou région" />
                <Textarea name="message" label={t.workshops.message} required placeholder="Votre demande..." rows={5} />

                <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {workshopError ? <Alert variant="error">{workshopError}</Alert> : null}

                <Button type="submit" disabled={workshopLoading} className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  {workshopLoading ? t.common.loading : t.workshops.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
