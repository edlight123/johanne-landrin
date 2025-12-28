'use client';

import Alert from '@/components/ui/Alert';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function EmergencyNotice() {
  const { t } = useLanguage();

  return (
    <Alert variant="warning" className="max-w-4xl mx-auto">
      <div>
        <p className="font-semibold mb-1">{t.emergency.title}</p>
        <p className="mb-2">{t.emergency.message}</p>
        <p className="text-sm">{t.emergency.hotline}</p>
      </div>
    </Alert>
  );
}
