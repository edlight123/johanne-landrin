'use client';

import { Component, ReactNode } from 'react';
import { LanguageContext, type LanguageContextType } from '@/lib/i18n/LanguageProvider';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  static contextType = LanguageContext;
  declare context: LanguageContextType | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const isProd = process.env.NODE_ENV === 'production';
      const t = this.context?.t;
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-2xl rounded-2xl bg-white border border-black/10 ring-1 ring-black/5 p-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              {t?.errorBoundary?.title ?? 'Une erreur est survenue'}
            </h1>
            <p className="mt-3 text-black/70">
              {t?.errorBoundary?.subtitle ?? 'Veuillez recharger la page. Si le problème persiste, contactez-nous.'}
            </p>

            {!isProd && this.state.error && (
              <pre className="mt-6 text-left text-xs sm:text-sm whitespace-pre-wrap rounded-xl bg-teal-50 border border-black/10 p-4 overflow-auto">
                {this.state.error.toString()}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            )}

            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-white font-medium hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              {t?.errorBoundary?.reload ?? 'Recharger'}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
