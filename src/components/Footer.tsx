'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-slate-600 mb-4">{siteConfig.title}</p>
            <p className="text-sm text-slate-600">{siteConfig.credentials}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {t.office.contactTitle}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.office.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/prendre-rendez-vous"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {t.nav.booking}
                </Link>
              </li>
              <li>
                <Link
                  href="/ateliers-conferences"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {t.nav.workshops}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Suivez-moi
            </h3>
            <div className="flex gap-3">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-4">
            <strong>{t.emergency.title}:</strong> {t.footer.emergency}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © {currentYear} {siteConfig.name}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              href="/confidentialite"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/mentions-legales"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.footer.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
