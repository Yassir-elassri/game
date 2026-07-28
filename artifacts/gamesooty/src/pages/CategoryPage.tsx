import { Link, useParams } from "wouter";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { GameGrid } from "@/components/games/GameGrid";
import { getGamesByCategory, getCategoryInfo } from "@/lib/games";
import NotFound from "@/pages/not-found";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryInfo(slug) : undefined;
  const games = slug ? getGamesByCategory(slug) : [];

  if (!category) return <NotFound />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white/80 transition-colors" style={{ color: "inherit" }}>
            Home
          </Link>
          <span>/</span>
          <span className="text-white/80">{category.name}</span>
        </nav>

        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">{category.emoji}</span>
          <div>
            <h1 className="text-4xl font-bold gradient-text">{category.name} Games</h1>
            <p className="text-white/50 text-sm mt-1">{games.length} games available</p>
          </div>
        </div>
        <p className="text-white/60 mb-8 mt-4">
          Browse all free {category.name.toLowerCase()} games — playable instantly in your browser.
        </p>
      </FadeIn>

      {games.length > 0 ? (
        <FadeIn delay={0.1}>
          <GameGrid games={games} />
        </FadeIn>
      ) : (
        <div className="glass-card p-12 text-center">
          <p className="text-white/60 mb-4">No games in this category yet.</p>
          <Link href="/" className="btn-primary">
            Browse All Games
          </Link>
        </div>
      )}
    </div>
  );
}
