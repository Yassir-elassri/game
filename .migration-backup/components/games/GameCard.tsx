"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import type { Game } from "@/lib/types";
import { formatPlayers, getThumbnailUrl } from "@/lib/games";

interface GameCardProps {
  game: Game;
  size?: "sm" | "md" | "lg";
  showMeta?: boolean;
}

const sizeClasses = {
  sm: "aspect-square",
  md: "aspect-[4/5]",
  lg: "aspect-[3/4]",
};

export function GameCard({ game, size = "md", showMeta = true }: GameCardProps) {
  const isHot = game.badges.includes("HOT");

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group h-full"
    >
      <Link href={`/game/${game.slug}`} className="block h-full">
        <div className="relative glass-card overflow-hidden neon-border hover:shadow-neon transition-all duration-300 h-full group-hover:border-gamesooty-cyan/60">
          <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
            <Image
              src={getThumbnailUrl(game.thumbnail)}
              alt={game.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            {isHot && (
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-orange-500 to-red-500 shadow-neon-pink">
                Hot
              </span>
            )}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.div
                initial={false}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-gamesooty-purple to-gamesooty-cyan flex items-center justify-center shadow-neon"
              >
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </motion.div>
            </div>

            {showMeta && (
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-white drop-shadow-lg">
                  {game.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-white/70">
                  <span className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {game.rating.toFixed(1)}
                  </span>
                  <span>·</span>
                  <span>{formatPlayers(game.players)} plays</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
