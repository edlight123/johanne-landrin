'use client';

import { useState } from 'react';
import { Building2, School, Send, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Alert from '@/components/ui/Alert';

export default function WorkshopsPage() {
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
      if (!String(data[key] ?? '').trim()) return t.forms.errors.missingRequired;
    }

    const email = String(data.email ?? '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return t.forms.errors.invalidEmail;

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
      setWorkshopError(t.forms.errors.generic);
    } finally {
      setWorkshopLoading(false);
    }
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              {t.workshops.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t.workshops.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content + form */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="rounded-lg bg-card border shadow-sm ring-0">
                <p className="text-muted-foreground leading-relaxed">{t.workshops.intro}</p>
              </Card>

              <Card className="rounded-lg bg-card border shadow-sm ring-0">
                <h2 className="text-lg font-semibold text-foreground">{t.workshops.audienceTitle}</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {audiences.map((audience) => (
                    <div key={audience.title} className="rounded-lg border border-black/10 bg-card p-4 text-center">
                      <audience.icon className="w-6 h-6 text-teal-700 mx-auto mb-2" />
                      <p className="font-medium text-foreground">{audience.title}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="rounded-lg bg-card border shadow-sm ring-0">
                <h2 className="text-lg font-semibold text-foreground">{t.workshops.topicsTitle}</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.workshops.topicsList.map((topic) => (
                    <div key={topic} className="rounded-lg border border-black/10 bg-card p-4">
                      <p className="text-muted-foreground">{topic}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="rounded-lg bg-card border shadow-sm ring-0">
                <h2 className="text-2xl font-semibold text-foreground">{t.workshops.inquiryTitle}</h2>
                <p className="mt-2 text-muted-foreground">
                  {t.workshops.inquiryIntro}
                </p>

                <div className="mt-8">
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
                        placeholder={t.workshops.placeholders.orgName}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          name="contactName"
                          label={t.workshops.contactName}
                          required
                          placeholder={t.workshops.placeholders.contactName}
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
                          placeholder={t.workshops.placeholders.phone}
                        />

                        <Input name="date" type="date" label={t.workshops.date} required />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          name="audience"
                          label={t.workshops.audience}
                          required
                          placeholder={t.workshops.placeholders.audience}
                        />

                        <Input name="budget" label={t.workshops.budget} placeholder={t.workshops.placeholders.budget} />
                      </div>

                      <Input
                        name="location"
                        label={t.workshops.location}
                        required
                        placeholder={t.workshops.placeholders.location}
                      />

                      <Textarea
                        name="message"
                        label={t.workshops.message}
                        required
                        placeholder={t.workshops.placeholders.message}
                        rows={6}
                      />

                      <input
                        type="text"
                        name="website"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {workshopError ? <Alert variant="error">{workshopError}</Alert> : null}

                      <Button type="submit" disabled={workshopLoading} className="w-full">
                        <Send className="mr-2 w-4 h-4" />
                        {workshopLoading ? t.common.loading : t.workshops.submit}
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
