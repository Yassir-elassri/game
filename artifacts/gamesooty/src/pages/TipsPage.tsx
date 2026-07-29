import { Link } from 'wouter';
import { Zap, Monitor, Smartphone, Keyboard, Maximize2, Star, Shield, RefreshCw } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/effects/MotionWrappers';
import { useSEO } from '@/lib/useSEO';
import { SITE } from '@/lib/types';

const tips = [
  {
    icon: Zap,
    color: '#06b6d4',
    title: 'Use a fast, stable connection',
    body: 'Browser games stream content in real time. A stable broadband or Wi-Fi connection prevents stuttering and lag. If a game feels slow, try closing other tabs or switching from mobile data to Wi-Fi.',
  },
  {
    icon: Monitor,
    color: '#8b5cf6',
    title: 'Play on desktop for the best experience',
    body: 'Most browser games are designed with desktop in mind. A larger screen, a proper keyboard, and a mouse give you a significant advantage in precision-based games like shooters and strategy titles.',
  },
  {
    icon: Maximize2,
    color: '#ec4899',
    title: 'Use fullscreen mode',
    body: 'Nearly every game on Gamesooty has a fullscreen button in the game player toolbar. Fullscreen removes distractions and gives you more visual real estate — especially valuable for adventure and strategy games.',
  },
  {
    icon: Keyboard,
    color: '#f59e0b',
    title: 'Learn the keyboard shortcuts first',
    body: 'Most browser games support keyboard controls. Check the in-game help or instructions panel before starting. Knowing your hotkeys from the beginning will save you fumbling mid-game.',
  },
  {
    icon: Smartphone,
    color: '#10b981',
    title: 'Mobile? Use landscape mode',
    body: 'When playing on a phone or tablet, rotate your device to landscape orientation. This gives the game more horizontal space and makes controls easier to reach with both thumbs.',
  },
  {
    icon: RefreshCw,
    color: '#06b6d4',
    title: 'Refresh if a game freezes',
    body: 'Browser games occasionally freeze due to memory or network issues. A simple page refresh (F5 or Cmd+R) almost always fixes it. Most games save your progress automatically, so you rarely lose much.',
  },
  {
    icon: Shield,
    color: '#8b5cf6',
    title: 'Keep your browser updated',
    body: 'Modern browser games use WebGL, Web Audio, and other APIs that improve with every browser update. Chrome, Firefox, Edge, and Safari all support the latest standards — make sure you are running a current version.',
  },
  {
    icon: Star,
    color: '#ec4899',
    title: 'Start on easy, master on hard',
    body: 'Even if you are an experienced gamer, start new games on easy or normal difficulty. Learning the mechanics first means you can push for harder challenges later with a clear strategy — rather than failing repeatedly without understanding why.',
  },
];

const genreTips: { category: string; slug: string; emoji: string; tips: string[] }[] = [
  {
    category: 'Puzzle Games',
    slug: 'puzzles',
    emoji: '🧠',
    tips: [
      'Work out loud — talking through a puzzle (even silently in your head) often reveals the answer.',
      'If stuck, reset and look at the puzzle fresh rather than trying the same failed approach repeatedly.',
      'Edge pieces first in jigsaw puzzles — they define the boundary and orient everything else.',
    ],
  },
  {
    category: 'Arcade Games',
    slug: 'arcade',
    emoji: '👾',
    tips: [
      'Patience beats speed. Wait for safe windows to move rather than reacting frantically.',
      'Watch the first 30 seconds of a new arcade game without playing to understand enemy patterns.',
      'Chase power-ups aggressively — they swing the game in your favour significantly.',
    ],
  },
  {
    category: 'Strategy Games',
    slug: 'strategy',
    emoji: '♟️',
    tips: [
      'Economy first. A strong resource base makes every other part of the game easier.',
      'Never overextend — secure one objective before committing to the next.',
      'Observe what your opponent builds before deciding your counter-strategy.',
    ],
  },
  {
    category: 'Driving Games',
    slug: 'driving',
    emoji: '🏎️',
    tips: [
      'Brake before corners, not during. Enter slowly, exit fast.',
      'Look two obstacles ahead in traffic games, not at what is directly in front of you.',
      'Drift only when it is faster than the straight-line alternative — often it is not.',
    ],
  },
  {
    category: 'Shooting Games',
    slug: 'shooting',
    emoji: '🎯',
    tips: [
      'Aim for weak points — head shots or highlighted zones deal significantly more damage in most games.',
      'Move between shots to make yourself a harder target in any game with enemy return fire.',
      'Conserve ammo in survival shooters — the hardest enemies arrive later.',
    ],
  },
  {
    category: 'Dress-Up Games',
    slug: 'dress-up',
    emoji: '👗',
    tips: [
      'Build an outfit from the base layer up — shoes, clothes, then accessories.',
      'Try one unexpected combination before settling on your favourite — the results often surprise you.',
      'Screenshot your favourite looks before moving on to a new game.',
    ],
  },
];

const faqs = [
  {
    q: `Are all games on ${SITE.name} really free?`,
    a: `Yes — every single game on ${SITE.name} is free to play. The platform is funded by advertising, which means you never pay anything to play. There are no subscriptions, no in-app purchases, and no premium tiers.`,
  },
  {
    q: 'Do I need to create an account?',
    a: `No account is ever required on ${SITE.name}. Your recently played games are remembered locally in your browser using local storage. Just open a game and start playing.`,
  },
  {
    q: 'Which browser works best for browser games?',
    a: 'Google Chrome and Mozilla Firefox both provide excellent browser gaming performance. Microsoft Edge and Safari also work well with modern games. Make sure your browser is up to date to ensure full support for WebGL and Web Audio.',
  },
  {
    q: 'Can I play on my phone or tablet?',
    a: `Yes. ${SITE.name} works on all modern mobile browsers. Many games include touch controls designed for smartphones and tablets. For the best experience, use landscape mode and a stable Wi-Fi connection.`,
  },
  {
    q: 'Why is a game loading slowly?',
    a: 'Slow loading is usually caused by a slow internet connection or a large game file. Try refreshing the page, closing other tabs, or switching to a faster network. Most games load fully within a few seconds on broadband.',
  },
  {
    q: 'A game is broken or not working — what should I do?',
    a: `First, try a hard refresh (Ctrl+Shift+R on Windows or Cmd+Shift+R on Mac). If the game still does not work, try a different browser or clear your browser cache. You can also contact us at support@${SITE.url.replace('https://', '')} to report a broken game.`,
  },
  {
    q: 'Can I suggest a game to be added?',
    a: `Absolutely. We are always looking for great new browser games to add to the catalog. Send your suggestions to support@${SITE.url.replace('https://', '')} and we will review them.`,
  },
  {
    q: 'How do I enable fullscreen?',
    a: 'Every game on Gamesooty has a fullscreen button in the player toolbar below the game. Click it to expand the game to fill your screen. Press Escape to exit fullscreen at any time.',
  },
];

export default function TipsPage() {
  useSEO({
    title: 'Browser Gaming Tips & FAQ',
    description: `Get the most out of free browser games with ${SITE.name}'s guide. Tips for performance, controls, mobile play, and answers to common questions.`,
    canonical: '/tips',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <Link href="/" style={{ color: 'inherit' }} className="hover:text-white/80 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Browser Gaming Tips</span>
        </nav>

        <h1 className="text-4xl font-bold gradient-text mb-3">
          Browser Gaming Tips &amp; FAQ
        </h1>
        <p className="text-white/50 text-lg mb-12 max-w-2xl leading-relaxed">
          Get the most out of free online games — better performance, smarter play,
          and answers to the questions every browser gamer asks.
        </p>
      </FadeIn>

      {/* Universal tips */}
      <FadeIn delay={0.05}>
        <h2 className="text-2xl font-bold text-white mb-6">8 Tips for Every Browser Gamer</h2>
      </FadeIn>
      <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-16">
        {tips.map((tip) => (
          <StaggerItem key={tip.title}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <tip.icon className="w-5 h-5 shrink-0" style={{ color: tip.color }} />
                <h3 className="font-semibold text-white text-sm">{tip.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{tip.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Genre-specific tips */}
      <FadeIn delay={0.1}>
        <h2 className="text-2xl font-bold text-white mb-6">Tips by Game Category</h2>
        <div className="space-y-4 mb-16">
          {genreTips.map((g) => (
            <div key={g.slug} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={g.category}>{g.emoji}</span>
                <Link
                  href={`/category/${g.slug}`}
                  className="font-semibold text-white hover:text-gamesooty-cyan transition-colors"
                >
                  {g.category}
                </Link>
              </div>
              <ul className="space-y-2">
                {g.tips.map((tip) => (
                  <li key={tip} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                    <span className="text-gamesooty-cyan mt-0.5 shrink-0">›</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* FAQ */}
      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2 text-sm">{faq.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.2}>
        <div className="glass-card p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">Ready to play?</p>
          <p className="text-white/60 text-sm mb-6">
            Browse 268+ free games across 13 categories — no download, no sign-up.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary px-6 py-2.5">Browse All Games</Link>
            <Link href="/category/arcade" className="btn-ghost px-6 py-2.5">Arcade Games</Link>
            <Link href="/category/puzzles" className="btn-ghost px-6 py-2.5">Puzzle Games</Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
