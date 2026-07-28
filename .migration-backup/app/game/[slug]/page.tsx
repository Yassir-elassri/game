import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Users, Calendar, Tag } from "lucide-react";
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
              <Users className="w-5 h-5 text-gamesooty-cyan" />
              <div>
                <p className="text-xs text-white/40">Total Plays</p>
                <p className="font-semibold">{formatPlayers(game.players)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gamesooty-purple" />
              <div>
                <p className="text-xs text-white/40">Added</p>
                <p className="font-semibold">{game.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-gamesooty-pink" />
              <div>
                <p className="text-xs text-white/40">Category</p>
                <Link
                  href={`/category/${game.category}`}
                  className="font-semibold hover:text-gamesooty-cyan transition-colors"
                >
                  {category?.emoji} {game.categoryName}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {related.length > 0 && (
        <section className="mt-12">
          <FadeIn>
            <h2 className="section-title gradient-text mb-6">Related Games</h2>
          </FadeIn>
          <GameGrid games={related} />
        </section>
      )}
    </div>
  );
}
