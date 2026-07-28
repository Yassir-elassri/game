import { Link } from "wouter";
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
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group"
    >
      <Link href={`/game/${game.slug}`} className="block">
        <div className="relative glass-card overflow-hidden neon-border hover:shadow-neon transition-shadow duration-300">
          <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
            <img
              src={getThumbnailUrl(game.thumbnail)}
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            {isHot && (
              <span
                className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase text-white"
                style={{ background: "linear-gradient(to right, #f97316, #ef4444)" }}
              >
                Hot
              </span>
            )}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(to right, #8b5cf6, #06b6d4)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)",
                }}
              >
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </div>
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
