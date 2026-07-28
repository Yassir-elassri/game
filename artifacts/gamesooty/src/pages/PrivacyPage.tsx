import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">Privacy Policy</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed text-sm">
          <p>Last updated: July 2026</p>
          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy.
            This policy explains how we collect, use, and protect information when you use our website.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Information We Collect</h2>
          <p>
            We may collect anonymous usage data such as pages visited, games played, and device type
            to improve our service. We use local storage to remember your recently played games.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Cookies</h2>
          <p>
            We use cookies and similar technologies for analytics and to enhance your experience.
            See our Cookies Policy for details.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:privacy@gamesooty.com" style={{ color: "#06b6d4" }} className="hover:underline">
              privacy@gamesooty.com
            </a>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
