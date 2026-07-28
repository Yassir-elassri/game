import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">Terms of Service</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed text-sm">
          <p>Last updated: July 2026</p>
          <p>
            By using {SITE.name}, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Use of Service</h2>
          <p>
            {SITE.name} provides free browser-based games for personal, non-commercial entertainment.
            You must be at least 13 years old to use this service.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Content</h2>
          <p>
            Games on {SITE.name} are provided by third-party developers. We do not claim ownership
            of game content and respect all intellectual property rights.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Limitation of Liability</h2>
          <p>
            {SITE.name} is provided &quot;as is&quot; without warranties. We are not liable for any
            damages arising from use of our platform.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
