'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';
import EmergencyNotice from '@/components/EmergencyNotice';

export default function BookingPage() {
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
      const response = await fetch('/api/booking', {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {t.booking.title}
          </h1>
          <p className="text-xl text-slate-600">{t.booking.subtitle}</p>
        </div>

        <EmergencyNotice />

        {/* Booking Options */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            {t.booking.methodTitle}
          </h2>
        </div>

        {/* Calendly Option */}
        {siteConfig.booking.enableCalendly && siteConfig.booking.calendlyUrl && (
          <Card className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {t.booking.option1}
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 min-h-[600px] flex items-center justify-center">
              <p className="text-slate-600">
                [Calendly widget: {siteConfig.booking.calendlyUrl}]
              </p>
            </div>
          </Card>
        )}

        {/* Form Option */}
        <Card>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            {siteConfig.booking.enableCalendly
              ? t.booking.option2
              : t.booking.formTitle}
          </h3>

          {success ? (
            <Alert variant="success">
              <div>
                <p className="font-semibold mb-2">{t.common.success}</p>
                <p>{t.booking.successMessage}</p>
              </div>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                label={t.booking.name}
                required
                placeholder="Votre nom complet"
              />

              <Input
                name="email"
                type="email"
                label={t.booking.email}
                required
                placeholder="exemple@email.com"
              />

              <Input
                name="phone"
                type="tel"
                label={t.booking.phone}
                required
                placeholder="+509 XXXX-XXXX"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  name="preferredDate"
                  type="date"
                  label={t.booking.preferredDate}
                  required
                />

                <Input
                  name="preferredTime"
                  type="time"
                  label={t.booking.preferredTime}
                  required
                />
              </div>

              <Textarea
                name="message"
                label={t.booking.message}
                placeholder={t.booking.messageDetails}
                rows={4}
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
                {loading ? t.common.loading : t.booking.submit}
              </Button>
            </form>
          )}
        </Card>

        {/* What to Expect */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Étape 1</h3>
              <p className="text-sm text-slate-600">{t.booking.step1}</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Étape 2</h3>
              <p className="text-sm text-slate-600">{t.booking.step2}</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Étape 3</h3>
              <p className="text-sm text-slate-600">{t.booking.step3}</p>
            </div>
          </Card>
        </div>

        {/* Policy */}
        <Card className="mt-12 bg-slate-50">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {t.booking.policyTitle}
              </h3>
              <p className="text-slate-600">{t.booking.policyText}</p>
            </div>
            <div>
              <p className="text-slate-600 flex items-start gap-2">
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                {t.booking.confidentiality}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
