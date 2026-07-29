import { useEffect } from 'react';
import { SITE } from '@/lib/types';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object;
}

export function useSEO({ title, description, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — Play Free Games Online`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setOg('og:description', description);
    }

    setOg('og:title', fullTitle);

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${SITE.url}${canonical}`);
    }

    // JSON-LD structured data
    const ldId = 'jsonld-structured-data';
    let ldScript = document.getElementById(ldId);
    if (jsonLd) {
      if (!ldScript) {
        ldScript = document.createElement('script');
        ldScript.id = ldId;
        ldScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(ldScript);
      }
      ldScript.textContent = JSON.stringify(jsonLd);
    } else if (ldScript) {
      ldScript.remove();
    }

    return () => {
      // Reset to defaults on unmount
      document.title = `${SITE.name} — Play Free Games Online`;
      const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', SITE.description);
      const ldEl = document.getElementById(ldId);
      if (ldEl) ldEl.remove();
    };
  }, [title, description, canonical, jsonLd]);
}
