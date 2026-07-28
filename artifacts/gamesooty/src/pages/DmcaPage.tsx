import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export default function DmcaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">DMCA Notice</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed text-sm">
          <p>
            {SITE.name} respects the intellectual property rights of others and responds to
            valid DMCA takedown notices.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Filing a DMCA Notice</h2>
          <p>
            If you believe content on {SITE.name} infringes your copyright, please send a notice to:
          </p>
          <p>
            <a href="mailto:dmca@gamesooty.com" style={{ color: "#06b6d4" }} className="hover:underline">
              dmca@gamesooty.com
            </a>
          </p>
          <p>Your notice must include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Identification of the copyrighted work</li>
            <li>URL of the infringing material on our site</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief</li>
            <li>A statement of accuracy under penalty of perjury</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}
