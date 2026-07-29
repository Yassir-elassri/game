import { Link } from "wouter";
import { SITE } from "@/lib/types";

const footerLinks = {
  play: [
    { href: "/#trending", label: "Trending" },
    { href: "/#new-games", label: "New Games" },
    { href: "/#most-played", label: "Most Played" },
    { href: "/#editors-picks", label: "Editor's Picks" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  legal: [
    { href: "/cookies", label: "Cookies Policy" },
    { href: "/dmca", label: "DMCA" },
    { href: "/tips", label: "Gaming Tips & FAQ" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-20 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.5), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/brand/logo.png"
                alt={SITE.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold gradient-text">{SITE.name}</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Play
            </h3>
            <ul className="space-y-2">
              {footerLinks.play.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gamesooty-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gamesooty-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gamesooty-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            {SITE.tagline} · 268+ free browser games
          </p>
        </div>
      </div>
    </footer>
  );
}
