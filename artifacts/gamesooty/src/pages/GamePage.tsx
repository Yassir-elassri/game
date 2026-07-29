import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { Star, Users, Calendar, Tag, Share2, Flag, ChevronDown, ChevronUp } from 'lucide-react';
import { GamePlayer } from '@/components/games/GamePlayer';
import { GameGrid } from '@/components/games/GameGrid';
import { FadeIn } from '@/components/effects/MotionWrappers';
import {
  getGameBySlug,
  getRelatedGames,
  formatPlayers,
  getCategoryInfo,
} from '@/lib/games';
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
      {open && <p className="text-white/60 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function GamePage() {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? getGameBySlug(slug) : undefined;
  const [shareMsg, setShareMsg] = useState('');

  const related = game ? getRelatedGames(game) : [];
  const category = game ? getCategoryInfo(game.category) : undefined;

  const faqs = game
    ? [
        {
          q: `Is ${game.title} free to play?`,
          a: `Yes — ${game.title} is completely free to play on ${SITE.name}. No purchase, subscription, or in-app payment is ever required. Just open the page and click play.`,
        },
        {
          q: `Do I need to download anything to play ${game.title}?`,
          a: `No download is needed. ${game.title} runs entirely inside your web browser using modern web technologies. It works on Chrome, Firefox, Edge, and Safari.`,
        },
        {
          q: `Can I play ${game.title} on my phone or tablet?`,
          a: `Yes. ${game.title} is playable on mobile devices in any modern browser. For the best experience on mobile, use landscape orientation and a stable Wi-Fi connection.`,
        },
        {
          q: `How do I play ${game.title} in fullscreen?`,
          a: `Click the Fullscreen button in the game player toolbar just below the game window. Press Escape at any time to return to the normal view.`,
        },
      ]
    : [];

  useSEO({
    title: game ? `Play ${game.title} Free Online` : 'Game Not Found',
    description: game
      ? `Play ${game.title} free online — no download, no sign-up. ${game.description.slice(0, 130).trimEnd()}…`
      : undefined,
    canonical: game ? `/game/${slug}` : undefined,
    jsonLd: game
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: game.title,
              applicationCategory: 'Game',
              applicationSubCategory: game.categoryName,
              operatingSystem: 'Web Browser',
              description: game.description,
              url: `${SITE.url}/game/${slug}`,
              image: `${SITE.url}/${game.thumbnail}`,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: game.rating.toFixed(1),
                bestRating: '5',
                worstRating: '1',
                ratingCount: game.players,
              },
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: game.categoryName,
                  item: `${SITE.url}/category/${game.category}`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: game.title,
                  item: `${SITE.url}/game/${slug}`,
                },
              ],
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
        }
      : undefined,
  });

  if (!game) return <NotFound />;

  const handleShare = async () => {
    const url = `${SITE.url}/game/${slug}`;
    const text = `Play ${game.title} free on ${SITE.name}!`;
    if (navigator.share) {
      try {
        await navigator.share({ title: game.title, text, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setShareMsg('Link copied!');
      setTimeout(() => setShareMsg(''), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <FadeIn>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap">
          <Link href="/" className="hover:text-gamesooty-cyan transition-colors" style={{ color: 'inherit' }}>
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${game.category}`}
            className="hover:text-gamesooty-cyan transition-colors"
            style={{ color: 'inherit' }}
          >
            {game.categoryName}
          </Link>
          <span>/</span>
          <span className="text-white/80 truncate">{game.title}</span>
        </nav>

        {/* Title + share */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">{game.title}</h1>
          <button
            onClick={handleShare}
            className="btn-ghost text-xs px-4 py-2 flex items-center gap-2 shrink-0"
            title="Share this game"
          >
            <Share2 className="w-4 h-4" />
            {shareMsg || 'Share'}
          </button>
        </div>
      </FadeIn>

      {/* Game player */}
      <FadeIn delay={0.1}>
        <GamePlayer game={game} />
      </FadeIn>

      {/* Content grid */}
      <FadeIn delay={0.2}>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-4">
            {/* About */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-3">About {game.title}</h2>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {game.description}
              </p>
            </div>

            {/* How to play */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-3">How to Play</h2>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {game.title} is a free browser game — no download or sign-up needed. Click{' '}
                <strong className="text-white">OK, PLAY NOW</strong> inside the game window to
                start instantly. Use your mouse or keyboard as directed in-game. For the best
                experience, play on a desktop browser with a stable internet connection. On
                mobile, tap the game area and follow on-screen prompts. Use the Fullscreen
                button in the toolbar below the game to expand to full screen.
              </p>
            </div>

            {/* Game details */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4">Game Details</h2>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Genre</dt>
                  <dd>
                    <Link
                      href={`/category/${game.category}`}
                      style={{ color: '#06b6d4' }}
                      className="hover:underline font-medium"
                    >
                      {game.categoryName}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Platform</dt>
                  <dd className="text-white/70">Web Browser</dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Price</dt>
                  <dd className="text-white/70">Free to play</dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Controls</dt>
                  <dd className="text-white/70">Mouse / Keyboard / Touch</dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Rating</dt>
                  <dd className="text-white/70">{game.rating.toFixed(1)} / 5</dd>
                </div>
                <div>
                  <dt className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Total Plays</dt>
                  <dd className="text-white/70">{formatPlayers(game.players)}</dd>
                </div>
              </dl>
            </div>

            {/* FAQ */}
            <div className="glass-card px-6 py-2">
              <h2 className="text-lg font-semibold py-4">Frequently Asked Questions</h2>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>

            {/* Report issue */}
            <div className="flex justify-end">
              <a
                href={`mailto:support@gamesooty.com?subject=Issue with ${encodeURIComponent(game.title)}&body=Please describe the issue with ${encodeURIComponent(game.title)}:%0A%0A`}
                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                <Flag className="w-3 h-3" />
                Report a problem with this game
              </a>
            </div>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-4">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-xs text-white/40">Rating</p>
                  <p className="font-semibold">{game.rating.toFixed(1)} / 5</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" style={{ color: '#06b6d4' }} />
                <div>
                  <p className="text-xs text-white/40">Total Plays</p>
                  <p className="font-semibold">{formatPlayers(game.players)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                <div>
                  <p className="text-xs text-white/40">Added</p>
                  <p className="font-semibold">{game.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5" style={{ color: '#ec4899' }} />
                <div>
                  <p className="text-xs text-white/40">Category</p>
                  <Link
                    href={`/category/${game.category}`}
                    className="font-semibold transition-colors"
                    style={{ color: '#06b6d4' }}
                  >
                    {game.categoryName}
                  </Link>
                </div>
              </div>

              {category && (
                <div className="pt-2 border-t border-white/10">
                  <Link
                    href={`/category/${game.category}`}
                    className="btn-ghost text-xs w-full text-center block py-2"
                  >
                    More {game.categoryName} Games →
                  </Link>
                </div>
              )}
            </div>

            {/* Quick tips */}
            <div className="glass-card p-5">
              <p className="text-xs text-white/40 uppercase tracking-wide mb-3">Quick Tips</p>
              <ul className="space-y-2 text-xs text-white/60 leading-relaxed">
                <li className="flex gap-2"><span className="text-gamesooty-cyan shrink-0">›</span>Use fullscreen for the best experience</li>
                <li className="flex gap-2"><span className="text-gamesooty-cyan shrink-0">›</span>Check in-game instructions for controls</li>
                <li className="flex gap-2"><span className="text-gamesooty-cyan shrink-0">›</span>Mobile? Rotate to landscape mode</li>
                <li className="flex gap-2"><span className="text-gamesooty-cyan shrink-0">›</span>Refresh the page if the game freezes</li>
              </ul>
              <Link href="/tips" className="block text-xs mt-4" style={{ color: '#06b6d4' }}>
                More gaming tips →
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Related games */}
      {related.length > 0 && (
        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="section-title gradient-text mb-2">
              More {game.categoryName} Games
            </h2>
            <p className="text-sm text-white/50 mb-6">You might also enjoy these</p>
            <GameGrid games={related} />
          </div>
        </FadeIn>
      )}
    </div>
  );
}
