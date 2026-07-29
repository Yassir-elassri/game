import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Users, Calendar, Tag, Share2, ThumbsUp, Play } from "lucide-react";
import { GamePlayer } from "@/components/games/GamePlayer";
import { GameGrid } from "@/components/games/GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";
import {
  getGameBySlug,
  getAllSlugs,
  getRelatedGames,
  formatPlayers,
  getCategoryInfo,
} from "@/lib/games";
import { SITE } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Not Found" };

  return {
    title: game.title,
    description: game.description.slice(0, 160),
    openGraph: {
      title: `${game.title} | ${SITE.name}`,
      description: game.description.slice(0, 160),
      images: [`/${game.thumbnail}`],
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);
  const category = getCategoryInfo(game.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap">
          <Link href="/" className="hover:text-gamesooty-cyan transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${game.category}`}
            className="hover:text-gamesooty-cyan transition-colors"
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
          <div className="md:col-span-2 space-y-6">
            {/* About section */}
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">About this game</h2>
              <p className="text-white/70 leading-relaxed text-sm md:text-base mb-6">
                {game.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gamesooty-purple/20 hover:bg-gamesooty-purple/30 transition-colors border border-gamesooty-purple/30 text-white font-medium text-sm">
                  <ThumbsUp className="w-4 h-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gamesooty-cyan/20 hover:bg-gamesooty-cyan/30 transition-colors border border-gamesooty-cyan/30 text-white font-medium text-sm">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Trending/Related section */}
            {related.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Players Also Enjoyed</h3>
                <GameGrid games={related.slice(0, 6)} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Stats Card */}
            <div className="glass-card p-6 space-y-4">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Game Stats</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Rating</p>
                  <p className="font-semibold text-lg">{game.rating.toFixed(1)}/5</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gamesooty-cyan/20 to-gamesooty-cyan/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gamesooty-cyan" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Total Plays</p>
                  <p className="font-semibold">{formatPlayers(game.players)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gamesooty-purple/20 to-gamesooty-purple/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gamesooty-purple" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Added</p>
                  <p className="font-semibold">{game.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gamesooty-pink/20 to-gamesooty-pink/20 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-gamesooty-pink" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Category</p>
                  <Link
                    href={`/category/${game.category}`}
                    className="font-semibold hover:text-gamesooty-cyan transition-colors text-sm"
                  >
                    {category?.emoji} {game.categoryName}
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-6 bg-gradient-to-br from-gamesooty-purple/20 to-gamesooty-cyan/10 border border-gamesooty-purple/30">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-5 h-5 text-gamesooty-cyan" />
                <p className="text-sm font-semibold">Ready to play?</p>
              </div>
              <p className="text-xs text-white/60 mb-4">Start playing instantly in the game window above</p>
              <Link href="#player" className="btn-primary w-full justify-center text-sm py-2">
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>


    </div>
  );
}
