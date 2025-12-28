'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Card from '@/components/ui/Card';

export default function FAQPage() {
  const { t } = useLanguage();

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
    { question: t.faq.q6, answer: t.faq.a6 },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.faq.title}
          </h1>
          <p className="text-xl text-stone-600">{t.faq.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h2 className="text-xl font-semibold text-stone-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>

        {/* Contact Note */}
        <Card className="mt-12 bg-stone-900 text-white text-center">
          <p className="text-lg mb-4">Vous avez d'autres questions ?</p>
          <p className="text-stone-300">
            N'hésitez pas à me contacter directement pour toute question supplémentaire.
          </p>
        </Card>
      </div>
    </div>
  );
}
