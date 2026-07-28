import { Link, useParams } from "wouter";
import { Star, Users, Calendar, Tag } from "lucide-react";
import { GamePlayer } from "@/components/games/GamePlayer";
import { GameGrid } from "@/components/games/GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";
import {
  getGameBySlug,
  getRelatedGames,
  formatPlayers,
  getCategoryInfo,
} from "@/lib/games";
import NotFound from "@/pages/not-found";

export default function GamePage() {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? getGameBySlug(slug) : undefined;

  if (!game) return <NotFound />;

  const related = getRelatedGames(game);
  const category = getCategoryInfo(game.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap">
          <Link href="/" className="hover:text-gamesooty-cyan transition-colors" style={{ color: "inherit" }}>
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${game.category}`}
            className="hover:text-gamesooty-cyan transition-colors"
            style={{ color: "inherit" }}
          >
            {game.categoryName}
          </Link>
          <span>/</span>
          <span className="text-white/80 truncate">{game.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          {game.title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <GamePlayer game={game} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 glass-card p-6">
            <h2 className="text-lg font-semibold mb-3">About this game</h2>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {game.description}
            </p>
          </div>

          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-xs text-white/40">Rating</p>
                <p className="font-semibold">{game.rating.toFixed(1)} / 5</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" style={{ color: "#06b6d4" }} />
              <div>
                <p className="text-xs text-white/40">Total Plays</p>
                <p className="font-semibold">{formatPlayers(game.players)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" style={{ color: "#8b5cf6" }} />
              <div>
                <p className="text-xs text-white/40">Added</p>
                <p className="font-semibold">{game.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5" style={{ color: "#ec4899" }} />
              <div>
                <p className="text-xs text-white/40">Category</p>
                <Link
                  href={`/category/${game.category}`}
                  className="font-semibold transition-colors"
                  style={{ color: "#06b6d4" }}
                >
                  {game.categoryName}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {related.length > 0 && (
        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="section-title gradient-text mb-2">More {game.categoryName} Games</h2>
            <p className="text-sm text-white/50 mb-6">You might also enjoy these</p>
            <GameGrid games={related} />
          </div>
        </FadeIn>
      )}
    </div>
  );
}
