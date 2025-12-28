'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';

export default function OfficePage() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.office.title}
          </h1>
          <p className="text-xl text-stone-600">{t.office.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Location */}
            <Card>
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                {t.office.locationTitle}
              </h2>
              <div className="space-y-3">
                <p className="text-lg font-medium text-stone-900">
                  {siteConfig.office.address}
                </p>
                <p className="text-stone-600">
                  {siteConfig.office.detailedAddress}
                </p>
              </div>

              {/* Map Placeholder */}
              {siteConfig.features.enableMap && siteConfig.office.mapEmbedUrl ? (
                <div className="mt-6 bg-stone-100 rounded-lg overflow-hidden h-64">
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
              ) : (
                <div className="mt-6 bg-stone-100 rounded-lg h-64 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-stone-400" />
                </div>
              )}
            </Card>

            {/* Hours */}
            <Card>
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                {t.office.hoursTitle}
              </h2>
              <p className="text-lg text-stone-600">{siteConfig.office.hours}</p>
            </Card>

            {/* Contact */}
            <Card>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {t.office.contactTitle}
              </h2>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">{siteConfig.contact.email}</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {t.office.contactFormTitle}
              </h2>

              {success ? (
                <Alert variant="success">
                  <div>
                    <p className="font-semibold mb-2">{t.common.success}</p>
                    <p>{t.office.successMessage}</p>
                  </div>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="name"
                    label={t.office.name}
                    required
                    placeholder="Votre nom"
                  />

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

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {error && <Alert variant="error">{error}</Alert>}

                  <Button type="submit" disabled={loading} className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    {loading ? t.common.loading : t.office.send}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
