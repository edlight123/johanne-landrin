'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { siteConfig } from '@/lib/siteConfig';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bookingUrl = siteConfig.booking.calendlyUrl;

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/a-propos' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.booking, href: bookingUrl, isPrimary: true, external: true },
    { name: t.nav.office, href: '/contact' },
    { name: t.nav.resources, href: '/ressources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="leading-tight">
              <div className="text-xl lg:text-2xl font-semibold text-black">
                {siteConfig.name}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navigation
              .filter((item) => !('isPrimary' in item))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-black/70 hover:text-black hover:bg-teal-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}

            {navigation
              .filter((item) => 'isPrimary' in item)
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="ml-2 inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
                >
                  {item.name}
                </a>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black/70 hover:text-black hover:bg-teal-50 rounded-lg"
              aria-label={t.common.toggleMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-black/10">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      'isPrimary' in item
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'text-black/70 hover:text-black hover:bg-teal-50'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      'isPrimary' in item
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'text-black/70 hover:text-black hover:bg-teal-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
