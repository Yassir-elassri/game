import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { SITE } from "@/lib/types";
import type { Game } from "@/lib/types";
import { getThumbnailUrl } from "@/lib/games";

interface HeroProps {
  featuredGame?: Game;
}

export function Hero({ featuredGame }: HeroProps) {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6"
              style={{ color: "#06b6d4" }}
            >
              <Sparkles className="w-4 h-4" />
              268+ free games · No download needed
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="gradient-text">{SITE.name}</span>
              <br />
              <span className="text-white">Play. Compete. Repeat.</span>
            </h1>

            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              Dive into the ultimate free gaming universe. Action, puzzles, sports,
              and more — all instantly playable in your browser.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={featuredGame ? `/game/${featuredGame.slug}` : "/#trending"}
                className="btn-primary"
              >
                <Play className="w-5 h-5 fill-white" />
                Play Now
              </Link>
              <Link href="/#new-games" className="btn-ghost">
                Explore New Games
              </Link>
            </div>
          </motion.div>

          {featuredGame && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{
                  background:
                    "linear-gradient(to right, rgba(139,92,246,0.3), rgba(6,182,212,0.2), rgba(236,72,153,0.3))",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
              />
              <Link
                href={`/game/${featuredGame.slug}`}
                className="relative block glass-card overflow-hidden neon-border group"
              >
                <div className="relative aspect-video">
                  <img
                    src={getThumbnailUrl(featuredGame.thumbnail)}
                    alt={featuredGame.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#06b6d4" }}>
                      Featured Game
                    </p>
                    <h2 className="text-2xl font-bold">{featuredGame.title}</h2>
                    <p className="text-sm text-white/60 mt-1 line-clamp-2">
                      {featuredGame.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to right, #8b5cf6, #06b6d4)",
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <Play className="w-8 h-8 fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
