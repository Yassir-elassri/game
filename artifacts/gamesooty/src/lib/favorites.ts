import { useState, useEffect } from 'react';

const STORAGE_KEY = 'gamesooty_favorites';
const CHANGE_EVENT = 'gamesooty_favorites_changed';

function readSlugs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function writeSlugs(slugs: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Hook to read and toggle game favorites.
 * Uses localStorage + window events so all mounted instances stay in sync
 * without requiring a context provider.
 */
export function useFavorites() {
  const [slugs, setSlugs] = useState<string[]>(readSlugs);

  useEffect(() => {
    const sync = () => setSlugs(readSlugs());
    window.addEventListener(CHANGE_EVENT, sync);
    return () => window.removeEventListener(CHANGE_EVENT, sync);
  }, []);

  function toggle(slug: string) {
    const current = readSlugs();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [slug, ...current];
    writeSlugs(next);
  }

  function isFav(slug: string) {
    return slugs.includes(slug);
  }

  return { slugs, toggle, isFav };
}

/** Get favorite slugs without a hook (for one-off reads outside React) */
export function getFavoriteSlugs(): string[] {
  return readSlugs();
}
