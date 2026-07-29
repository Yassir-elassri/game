import { useEffect, useState, Suspense } from "react";
import { Link, useSearch } from "wouter";
import { Search } from "lucide-react";
import { GameGrid } from "@/components/games/GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { searchGames, getAllGames } from "@/lib/games";
import type { Game } from "@/lib/types";

function SearchResults() {
  const searchStr = useSearch();
  const params = new URLSearchParams(searchStr);
  const query = params.get("q") || "";
  const [results, setResults] = useState<Game[]>([]);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchGames(query));
    } else {
      setResults(getAllGames());
    }
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <div className="flex items-center gap-3 mb-8">
          <Search className="w-8 h-8" style={{ color: "#06b6d4" }} />
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
          <div className="h-8 w-64 bg-white/10 rounded-lg mb-8 animate-pulse" />
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
