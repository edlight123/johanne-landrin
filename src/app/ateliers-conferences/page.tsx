'use client';

import { useState } from 'react';
import { School, Building2, Users, Clock, Calendar, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';

export default function WorkshopsPage() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const audiences = [
    { icon: School, title: t.workshops.schools },
    { icon: Building2, title: t.workshops.ngos },
    { icon: Users, title: t.workshops.companies },
  ];

  const formats = [
    { icon: Clock, title: t.workshops.format1 },
    { icon: Calendar, title: t.workshops.format2 },
    { icon: Calendar, title: t.workshops.format3 },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/workshop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
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
            {t.workshops.title}
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {t.workshops.subtitle}
          </p>
        </div>

        {/* Intro */}
        <Card className="mb-12">
          <p className="text-lg text-stone-600 leading-relaxed">
            {t.workshops.intro}
          </p>
        </Card>

        {/* Audiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            {t.workshops.audienceTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <Card key={index} className="text-center">
                <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-7 h-7 text-stone-900" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900">
                  {audience.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            {t.workshops.topicsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.workshopTopics.map((topic, index) => (
              <Card key={index} hover>
                <p className="font-medium text-stone-900">{topic}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            {t.workshops.formatsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <format.icon className="w-6 h-6 text-stone-900" />
                </div>
                <p className="font-medium text-stone-900">{format.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <Card className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            {t.workshops.inquiryTitle}
          </h2>

          {success ? (
            <Alert variant="success">
              <div>
                <p className="font-semibold mb-2">{t.common.success}</p>
                <p>{t.workshops.successMessage}</p>
              </div>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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

                <Input
                  name="date"
                  type="date"
                  label={t.workshops.date}
                  required
                />
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
                {loading ? t.common.loading : t.workshops.submit}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
