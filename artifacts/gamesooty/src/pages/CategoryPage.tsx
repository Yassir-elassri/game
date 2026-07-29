import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/effects/MotionWrappers';
import { GameGrid } from '@/components/games/GameGrid';
import { GameCard } from '@/components/games/GameCard';
import { getGamesByCategory, getCategoryInfo, getMostPlayed } from '@/lib/games';
import { CATEGORY_CONTENT } from '@/data/categoryContent';
import { useSEO } from '@/lib/useSEO';
import { SITE } from '@/lib/types';
import NotFound from '@/pages/not-found';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-white/90 text-sm">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 shrink-0 text-white/40" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 text-white/40" />
        )}
      </button>
      {open && (
        <p className="text-white/60 text-sm pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryInfo(slug) : undefined;
  const games = slug ? getGamesByCategory(slug) : [];
  const content = slug ? CATEGORY_CONTENT[slug] : undefined;

  const topGame = [...games].sort((a, b) => b.players - a.players)[0];

  useSEO({
    title: category ? `Free ${category.name} Games` : 'Games',
    description: content?.metaDescription ?? (category
      ? `Play free ${category.name.toLowerCase()} games online — no download, no sign-up. Browse ${games.length} titles and play instantly in your browser.`
      : undefined),
    canonical: slug ? `/category/${slug}` : undefined,
    jsonLd: category && games.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `Free ${category.name} Games — ${SITE.name}`,
          description: content?.metaDescription,
          url: `${SITE.url}/category/${slug}`,
          hasPart: games.slice(0, 10).map((g) => ({
            '@type': 'SoftwareApplication',
            name: g.title,
            url: `${SITE.url}/game/${g.slug}`,
            applicationCategory: 'Game',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          })),
        }
      : undefined,
  });

  if (!category) return <NotFound />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white/80 transition-colors" style={{ color: 'inherit' }}>
            Home
          </Link>
          <span>/</span>
          <span className="text-white/80">{category.name}</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl" role="img" aria-label={category.name}>{category.emoji}</span>
          <div>
            <h1 className="text-4xl font-bold gradient-text">{category.name} Games</h1>
            <p className="text-white/50 text-sm mt-1">{games.length} free games — play instantly in your browser</p>
          </div>
        </div>

        {content && (
          <p className="text-white/60 mt-5 mb-8 max-w-3xl leading-relaxed">
            {content.editorial}
          </p>
        )}
      </FadeIn>

      {/* Highlights + Featured */}
      {content && topGame && (
        <FadeIn delay={0.05}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {/* Highlights */}
            <div className="glass-card p-6">
              <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                Why play {category.name}?
              </h2>
              <ul className="space-y-2">
                {content.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gamesooty-purple shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to play */}
            <div className="glass-card p-6">
              <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                How to play
              </h2>
              <ul className="space-y-2">
                {content.howToPlay.map((tip) => (
                  <li key={tip} className="text-sm text-white/70 leading-relaxed flex gap-2">
                    <span className="text-gamesooty-cyan mt-0.5 shrink-0">›</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured game */}
            <div className="glass-card p-5 flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                Most played
              </h2>
              <GameCard game={topGame} />
            </div>
          </div>
        </FadeIn>
      )}

      {/* Game grid */}
      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold text-white mb-6">
          All {category.name} Games
          <span className="text-sm font-normal text-white/40 ml-3">{games.length} titles</span>
        </h2>
        {games.length > 0 ? (
          <GameGrid games={games} />
        ) : (
          <div className="glass-card p-12 text-center">
            <p className="text-white/60 mb-4">No games in this category yet.</p>
            <Link href="/" className="btn-primary">Browse All Games</Link>
          </div>
        )}
      </FadeIn>

      {/* FAQ */}
      {content?.faq && content.faq.length > 0 && (
        <FadeIn delay={0.15}>
          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="glass-card px-6 divide-y divide-white/10">
              {content.faq.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Cross-link to other categories */}
      <FadeIn delay={0.2}>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-3">Explore more categories</p>
          <div className="flex flex-wrap gap-2">
            {['arcade', 'puzzles', 'adventure', 'strategy', 'sports', 'driving', 'action', 'dress-up']
              .filter((s) => s !== slug)
              .map((s) => (
                <Link
                  key={s}
                  href={`/category/${s}`}
                  className="glass-card px-3 py-1.5 text-xs text-white/60 hover:text-white transition-colors capitalize"
                >
                  {s.replace('-', ' ')}
                </Link>
              ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
