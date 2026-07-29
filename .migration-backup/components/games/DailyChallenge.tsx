"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Target } from "lucide-react";
import type { Game } from "@/lib/types";
import { getThumbnailUrl } from "@/lib/games";

interface DailyChallengeProps {
  game?: Game;
}

export function DailyChallenge({ game }: DailyChallengeProps) {
  // If no game is provided, show a placeholder
  if (!game) {
    return (
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="section-title mb-2">Daily Challenge</h2>
            <p className="section-subtitle">Check back daily for new challenges</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="section-title mb-2">Daily Challenge</h2>
          <p className="section-subtitle">Master today&apos;s featured game</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Link href={`/game/${game.slug}`}>
            <div className="relative group cursor-pointer">
              {/* Gradient background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gamesooty-purple/50 via-gamesooty-cyan/30 to-gamesooty-pink/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative glass-card p-0 overflow-hidden neon-border group-hover:shadow-neon transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto md:aspect-square overflow-hidden">
                    <Image
                      src={getThumbnailUrl(game.thumbnail)}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                    {/* Badge */}
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-gamesooty-purple to-gamesooty-cyan text-white text-sm font-bold shadow-neon flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Today&apos;s Challenge
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <p className="text-xs uppercase tracking-widest text-gamesooty-cyan font-bold mb-2">
                        Featured Challenge
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {game.title}
                      </h3>
                      <p className="text-base text-white/70 mb-6 leading-relaxed">
                        {game.description}
                      </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gamesooty-purple/20 flex items-center justify-center">
                          <Target className="w-5 h-5 text-gamesooty-purple" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Difficulty</p>
                          <p className="text-sm font-semibold text-white">Medium</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gamesooty-cyan/20 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-gamesooty-cyan" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Resets in</p>
                          <p className="text-sm font-semibold text-white">24 hours</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="btn-primary inline-flex text-white bg-gradient-to-r from-gamesooty-purple to-gamesooty-cyan">
                        Play Challenge
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
