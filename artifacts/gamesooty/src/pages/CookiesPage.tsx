import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">Cookies Policy</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed text-sm">
          <p>
            {SITE.name} uses cookies to deliver its services and analyze traffic.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help us remember preferences
            and improve your browsing experience.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">How We Use Cookies</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Remember recently played games (local storage)</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Improve game recommendations</li>
          </ul>
          <h2 className="text-lg font-semibold text-white pt-4">Managing Cookies</h2>
          <p>
            You can disable cookies in your browser settings, though some features may not work correctly.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
