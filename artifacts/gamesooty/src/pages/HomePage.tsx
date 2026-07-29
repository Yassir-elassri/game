import { useState } from 'react';
import { Flame, Sparkles, Trophy, Star, Zap, Shield, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'wouter';
import { Hero } from '@/components/games/Hero';
import { GameSection } from '@/components/games/GameSection';
import { ContinuePlayingSection } from '@/components/games/ContinuePlayingSection';
import { CategoryGrid } from '@/components/games/CategoryGrid';
import {
  getTrendingGames,
  getNewGames,
  getMostPlayed,
  getEditorsPicks,
  getAllGames,
  getAllCategories,
} from '@/lib/games';
import { useSEO } from '@/lib/useSEO';
import { SITE } from '@/lib/types';

const features = [
  {
    icon: Zap,
    color: '#06b6d4',
    title: 'Instant Play',
    body: 'Every game launches in seconds directly in your browser. No downloads, no installs, no waiting — just click and play.',
  },
  {
    icon: Shield,
    color: '#8b5cf6',
    title: 'Safe & Free Forever',
    body: 'All 268+ games are free to play. No subscriptions, no in-app purchases, no paywalls. Every game is reviewed for safe, appropriate content.',
  },
  {
    icon: Globe,
    color: '#ec4899',
    title: 'Play on Any Device',
    body: 'Gamesooty works on desktop, laptop, tablet, and smartphone. Any modern browser gives you full access to the entire catalog.',
  },
  {
    icon: Star,
    color: '#f59e0b',
    title: 'Curated Quality',
    body: 'We hand-pick every game before it goes live. Only games that are fun, well-made, and worth your time make the cut.',
  },
];

const faqs = [
  {
    q: `Is ${SITE.name} really free?`,
    a: `Yes — every game on ${SITE.name} is completely free to play. The platform is funded by advertising, which means zero cost to you. No subscriptions, no hidden fees, no in-app purchases.`,
  },
  {
    q: 'Do I need to create an account?',
    a: `No account is ever required. Just open any game and start playing. Your recently played games are saved locally in your browser, so you can pick up where you left off without signing in.`,
  },
  {
    q: 'Can I play on mobile?',
    a: `Yes. ${SITE.name} works on all modern mobile browsers. Many games have touch controls built in. For the best mobile experience, use landscape mode and a Wi-Fi connection.`,
  },
  {
    q: 'How many games are available?',
    a: `Currently 268+ free games across 13 categories: Arcade, Puzzles, Adventure, Strategy, Sports, Driving, Action, Dress-Up, Shooting, Board Games, Jigsaw, Multiplayer, and more. We add new games regularly.`,
  },
  {
    q: 'Are games safe for children?',
    a: `${SITE.name} is intended for players aged 13 and over. We review all games for appropriate content before listing them. The catalog contains no adult, violent, or inappropriate material.`,
  },
  {
    q: 'Which browser works best?',
    a: `Google Chrome and Firefox provide the best performance for browser games. Microsoft Edge and Safari also work well. Keep your browser updated to ensure full support for modern web game technologies.`,
  },
];

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
      {open && <p className="text-white/60 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function HomePage() {
  const trending = getTrendingGames(12);
  const newGames = getNewGames(12);
  const mostPlayed = getMostPlayed(12);
  const editorsPicks = getEditorsPicks(12);
  const allGames = getAllGames();
  const categories = getAllCategories();
  const featured = mostPlayed[0];

  useSEO({
    title: undefined, // use default full title
    description: SITE.description,
    canonical: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: SITE.name,
          url: SITE.url,
          description: SITE.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search?q={search_term_string}` },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'Organization',
          name: SITE.name,
          url: SITE.url,
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'support@gamesooty.com',
            contactType: 'customer support',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <Hero featuredGame={featured} />
      <ContinuePlayingSection />

      <GameSection
        id="trending"
        title="Trending Now"
        subtitle="Games everyone is playing right now"
        games={trending}
        icon={<Flame className="w-6 h-6 text-orange-400" />}
      />
      <GameSection
        id="new-games"
        title="New Games"
        subtitle="Fresh releases added recently"
        games={newGames}
        icon={<Sparkles className="w-6 h-6" style={{ color: '#06b6d4' }} />}
      />

      <CategoryGrid />

      <GameSection
        id="most-played"
        title="Most Played"
        subtitle="All-time favourites on Gamesooty"
        games={mostPlayed}
        icon={<Trophy className="w-6 h-6 text-yellow-400" />}
      />
      <GameSection
        id="editors-picks"
        title="Editor's Picks"
        subtitle="Hand-picked gems you'll love"
        games={editorsPicks}
        icon={<Star className="w-6 h-6" style={{ color: '#ec4899' }} />}
      />
      <GameSection
        id="all-games"
        title="All Games"
        subtitle={`Browse all ${allGames.length} free games`}
        games={allGames.slice(0, 24)}
        viewAllHref="/search"
      />

      {/* Why Gamesooty */}
      <section className="mt-16 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Why play on{' '}
            <span className="gradient-text">Gamesooty</span>?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            {allGames.length}+ free games, {categories.length} categories, zero friction.
            Here is what makes Gamesooty different.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-6">
              <f.icon className="w-6 h-6 mb-3" style={{ color: f.color }} />
              <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-6 glass-card p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: `${allGames.length}+`, label: 'Free games' },
            { value: `${categories.length}`, label: 'Categories' },
            { value: '0', label: 'Downloads needed' },
            { value: '100%', label: 'Free, always' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-white/50 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="glass-card px-6 divide-y divide-white/10 max-w-3xl">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
        <p className="mt-4 text-sm text-white/40">
          More questions?{' '}
          <Link href="/tips" style={{ color: '#06b6d4' }} className="hover:underline">
            Read our full gaming tips &amp; FAQ guide
          </Link>{' '}
          or{' '}
          <Link href="/contact" style={{ color: '#06b6d4' }} className="hover:underline">
            contact us
          </Link>.
        </p>
      </section>
    </div>
  );
}
