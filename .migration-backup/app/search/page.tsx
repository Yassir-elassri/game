"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import { GameGrid } from "@/components/games/GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { searchGames, getAllGames } from "@/lib/games";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const results = useMemo(() => {
    if (!query.trim()) return getAllGames();
    return searchGames(query);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <div className="flex items-center gap-3 mb-8">
          <Search className="w-8 h-8 text-gamesooty-cyan" />
          <div>
            <h1 className="text-3xl font-bold gradient-text">
              {query ? `Results for "${query}"` : "All Games"}
            </h1>
            <p className="text-white/50 text-sm mt-1">
              {results.length} game{results.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </FadeIn>

      {results.length > 0 ? (
        <GameGrid games={results} />
      ) : (
        <div className="glass-card p-12 text-center">
          <p className="text-white/60 mb-4">No games found for &quot;{query}&quot;</p>
          <Link href="/" className="btn-primary">
            Browse All Games
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <div className="animate-pulse h-8 w-64 bg-white/10 rounded-lg mb-8" />
          <div className="game-grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
