import { FadeIn } from '@/components/effects/MotionWrappers';
import { SITE } from '@/lib/types';
import { useSEO } from '@/lib/useSEO';

export default function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy',
    description: `Read the ${SITE.name} Privacy Policy to understand how we collect, use, and protect your data when you play free games on our platform.`,
    canonical: '/privacy',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-8">Last updated: July 28, 2026</p>

        <div className="glass-card p-8 space-y-6 text-white/70 leading-relaxed text-sm">

          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates{' '}
            <a href={SITE.url} style={{ color: '#06b6d4' }} className="hover:underline">{SITE.url}</a>.
            This policy explains how we collect, use, share, and protect information when you use
            our website. By using {SITE.name} you agree to the practices described below.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h2>
            <p className="mb-2">
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-white/90">Usage data:</strong> Pages visited, games played,
                time spent, device type, browser type, and approximate geographic region (country/city level),
                collected automatically via analytics tools.
              </li>
              <li>
                <strong className="text-white/90">Local storage:</strong> We store your recently played
                games and preferences locally in your browser. This data never leaves your device unless
                you explicitly share it.
              </li>
              <li>
                <strong className="text-white/90">Contact information:</strong> If you contact us via
                email, we collect your name and email address solely to respond to your inquiry.
              </li>
            </ul>
            <p className="mt-2">
              We do <strong className="text-white/90">not</strong> collect passwords, payment information,
              or sensitive personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. Cookies &amp; Tracking Technologies</h2>
            <p className="mb-2">
              We use cookies and similar technologies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/90">Essential cookies:</strong> Required for the site to function correctly (e.g. your consent preference).</li>
              <li><strong className="text-white/90">Analytics cookies:</strong> Help us understand how visitors use the site so we can improve it.</li>
              <li><strong className="text-white/90">Advertising cookies:</strong> Used by our advertising partners (see Section 3) to serve relevant ads.</li>
            </ul>
            <p className="mt-2">
              You can manage or disable cookies in your browser settings at any time. Disabling advertising
              cookies will not remove ads — they will simply be less relevant to you.
              See our full{' '}
              <a href="/cookies" style={{ color: '#06b6d4' }} className="hover:underline">Cookies Policy</a>{' '}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. Advertising — Google AdSense</h2>
            <p className="mb-2">
              {SITE.name} uses <strong className="text-white/90">Google AdSense</strong> to display
              advertisements. Google, as a third-party vendor, uses cookies (including the DoubleClick
              cookie) to serve ads based on your prior visits to this website and other websites on
              the internet.
            </p>
            <p className="mb-2">
              Google's use of advertising cookies enables it and its partners to serve ads to you based
              on your visit to our site and/or other sites on the internet. You may opt out of
              personalised advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#06b6d4' }}
                className="hover:underline"
              >
                Google Ads Settings
              </a>.
            </p>
            <p>
              For more information on how Google collects and uses data, please visit{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#06b6d4' }}
                className="hover:underline"
              >
                Google's Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Third-Party Services</h2>
            <p className="mb-2">Our website integrates with third-party services that have their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/90">Google AdSense</strong> — advertising (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4' }} className="hover:underline">Privacy Policy</a>)</li>
              <li><strong className="text-white/90">Google Analytics</strong> — usage analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4' }} className="hover:underline">Privacy Policy</a>)</li>
              <li><strong className="text-white/90">Game providers</strong> — games are served via iframe from their respective providers. Those providers may collect data independently.</li>
            </ul>
            <p className="mt-2">
              We are not responsible for the privacy practices of third-party services. We encourage
              you to review their policies directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To operate and improve the {SITE.name} platform</li>
              <li>To understand which games and features are most popular</li>
              <li>To display relevant advertisements via Google AdSense</li>
              <li>To respond to your support inquiries</li>
              <li>To detect and prevent abuse or technical issues</li>
            </ul>
            <p className="mt-2">
              We do <strong className="text-white/90">not</strong> sell your personal data to third
              parties, and we do not use it for purposes beyond those described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Children's Privacy (COPPA)</h2>
            <p>
              {SITE.name} is intended for users aged <strong className="text-white/90">13 and older</strong>.
              We do not knowingly collect personal information from children under 13. If you are a
              parent or guardian and believe your child has provided us with personal information,
              please contact us immediately at{' '}
              <a href="mailto:privacy@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
                privacy@gamesooty.com
              </a>{' '}
              and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Your Rights (GDPR &amp; CCPA)</h2>
            <p className="mb-2">Depending on your location, you may have the following rights regarding your data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/90">Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong className="text-white/90">Correction:</strong> Request corrections to inaccurate data.</li>
              <li><strong className="text-white/90">Deletion:</strong> Request that we delete your data.</li>
              <li><strong className="text-white/90">Opt-out:</strong> Opt out of personalised advertising via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4' }} className="hover:underline">Google Ads Settings</a> or the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4' }} className="hover:underline">Digital Advertising Alliance opt-out</a>.</li>
              <li><strong className="text-white/90">Do Not Sell (CCPA):</strong> We do not sell personal information.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
                privacy@gamesooty.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">8. Data Retention</h2>
            <p>
              Anonymous analytics data is retained for up to 26 months. Contact inquiry emails
              are retained for up to 12 months. Local storage data (recently played games) is
              stored in your browser until you clear it. We do not retain personal data longer
              than necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Continued use of the site after
              changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">10. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact:{' '}
              <a href="mailto:privacy@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
                privacy@gamesooty.com
              </a>
            </p>
          </section>

        </div>
      </FadeIn>
    </div>
  );
}
