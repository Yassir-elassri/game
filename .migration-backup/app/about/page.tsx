import type { Metadata } from "next";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — the free online gaming platform built for players worldwide.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">About {SITE.name}</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed">
          <p>
            <strong className="text-white">{SITE.name}</strong> is a free online gaming
            platform where players of all ages can discover, play, and share browser games
            instantly — no downloads, no sign-ups, no hassle.
          </p>
          <p>
            We curate hundreds of high-quality games across every genre: action, puzzle,
            arcade, sports, strategy, and more. Our mission is to make gaming accessible,
            fun, and safe for everyone.
          </p>
          <p>
            Whether you have five minutes or five hours, {SITE.name} has something exciting
            waiting for you. Jump in, play free, and join millions of gamers worldwide.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
