import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';

const STORAGE_KEY = 'gamesooty_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    return undefined;
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-5xl mx-auto glass-card border border-white/10 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <div className="flex-1 text-sm text-white/70 leading-relaxed">
          <span className="text-white font-semibold">We use cookies</span> to personalise
          content and ads, analyse our traffic, and improve your experience. Our advertising
          partner Google may use cookies to serve personalised ads based on your interests.{' '}
          <Link href="/cookies" className="underline hover:text-gamesooty-cyan transition-colors" style={{ color: '#06b6d4' }}>
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="btn-ghost text-xs px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn-primary text-xs px-5 py-2"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="text-white/40 hover:text-white/80 transition-colors ml-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
