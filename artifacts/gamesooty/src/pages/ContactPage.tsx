import { FadeIn } from "@/components/effects/MotionWrappers";
import { SITE } from "@/lib/types";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-6">Contact Us</h1>
        <div className="glass-card p-8 space-y-4 text-white/70 leading-relaxed">
          <p>
            Have a question, suggestion, or partnership inquiry? We&apos;d love to hear from you.
          </p>
          <p>
            Email us at{" "}
            <a
              href="mailto:support@gamesooty.com"
              style={{ color: "#06b6d4" }}
              className="hover:underline"
            >
              support@gamesooty.com
            </a>
          </p>
          <p className="text-sm text-white/40">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
