import { FadeIn, StaggerContainer, StaggerItem } from '@/components/effects/MotionWrappers';
import { Gamepad2, Shield, Zap, Globe, Star, HeartHandshake } from 'lucide-react';
import { SITE } from '@/lib/types';
import { useSEO } from '@/lib/useSEO';

const values = [
  {
    icon: Zap,
    title: 'Instant Play',
    description:
      'No downloads, no installs, no sign-ups. Every game on Gamesooty launches directly in your browser in seconds.',
    color: '#06b6d4',
  },
  {
    icon: Shield,
    title: 'Safe &amp; Family-Friendly',
    description:
      'We manually review every game before it goes live. No hidden downloads, no malware, no inappropriate content.',
    color: '#8b5cf6',
  },
  {
    icon: Globe,
    title: 'Free for Everyone',
    description:
      'All 268+ games on Gamesooty are completely free. Our platform is supported by advertising, never paywalls.',
    color: '#ec4899',
  },
  {
    icon: Star,
    title: 'Quality Curated',
    description:
      'We hand-pick games based on fun, performance, and replay value — not just quantity. Every game earns its place.',
    color: '#f59e0b',
  },
  {
    icon: Gamepad2,
    title: '268+ Games &amp; Growing',
    description:
      'From action and puzzle to sports and strategy, our catalog spans every genre and is updated regularly with new titles.',
    color: '#10b981',
  },
  {
    icon: HeartHandshake,
    title: 'Community First',
    description:
      'Gamesooty is built for players, not shareholders. We listen to feedback and improve the platform every week.',
    color: '#06b6d4',
  },
];

export default function AboutPage() {
  useSEO({
    title: 'About Us',
    description: `Learn about ${SITE.name} — the free online gaming platform with 268+ browser games. No downloads, no sign-ups. Instant play for everyone.`,
    canonical: '/about',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-4">About {SITE.name}</h1>
        <p className="text-white/50 text-lg mb-10 max-w-2xl">
          We believe great games should be accessible to everyone — instantly, for free, in any browser.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="glass-card p-8 mb-8 text-white/70 leading-relaxed space-y-4">
          <p>
            <strong className="text-white">{SITE.name}</strong> launched with a simple mission:
            give anyone on the internet access to high-quality browser games without friction.
            No account required, no app to install, no subscription to buy — just click and play.
          </p>
          <p>
            We built {SITE.name} because we were tired of gaming sites cluttered with broken links,
            low-quality titles, and aggressive pop-ups. Every game in our catalog is tested for
            performance and playability before it goes live. We update the catalog weekly with new
            titles across action, puzzle, arcade, sports, strategy, and more.
          </p>
          <p>
            Today, {SITE.name} hosts <strong className="text-white">268+ free games</strong> enjoyed
            by players worldwide. Whether you have five minutes between meetings or five hours on a
            rainy afternoon, there&apos;s something here for you.
          </p>
          <p>
            The platform is fully supported by advertising — specifically Google AdSense — which
            allows us to keep every game completely free for every player, forever.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="text-2xl font-bold text-white mb-6">What We Stand For</h2>
      </FadeIn>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {values.map((v) => (
          <StaggerItem key={v.title}>
            <div className="glass-card p-6 h-full">
              <v.icon className="w-6 h-6 mb-3" style={{ color: v.color }} />
              <h3
                className="font-semibold text-white mb-2"
                dangerouslySetInnerHTML={{ __html: v.title }}
              />
              <p
                className="text-white/60 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: v.description }}
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.2}>
        <div className="glass-card p-8 text-white/70 leading-relaxed space-y-3">
          <h2 className="text-xl font-semibold text-white mb-1">Get in Touch</h2>
          <p>
            Have a game suggestion, partnership inquiry, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
          <p>
            Reach our team at{' '}
            <a href="mailto:support@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
              support@gamesooty.com
            </a>
            . We typically respond within 24–48 hours.
          </p>
          <p>
            For copyright or DMCA matters, see our{' '}
            <a href="/dmca" style={{ color: '#06b6d4' }} className="hover:underline">DMCA page</a>.
            For privacy questions, email{' '}
            <a href="mailto:privacy@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
              privacy@gamesooty.com
            </a>.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
