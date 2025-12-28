'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, getDictionary } from './dictionaries';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getDictionary>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [t, setT] = useState(() => getDictionary('fr'));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load locale from localStorage only on client
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && (saved === 'fr' || saved === 'kr')) {
        setLocaleState(saved);
        setT(getDictionary(saved));
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getDictionary(newLocale));
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
