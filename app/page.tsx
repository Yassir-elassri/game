import {
  Flame,
  Sparkles,
  Trophy,
  Star,
} from "lucide-react";
import { Hero } from "@/components/games/Hero";
import { GameSection } from "@/components/games/GameSection";
import { ContinuePlayingSection } from "@/components/games/ContinuePlayingSection";
import { CategoryGrid } from "@/components/games/CategoryGrid";
import {
  getTrendingGames,
  getNewGames,
  getMostPlayed,
  getEditorsPicks,
  getAllGames,
} from "@/lib/games";

export default function HomePage() {
  const trending = getTrendingGames(12);
  const newGames = getNewGames(12);
  const mostPlayed = getMostPlayed(12);
  const editorsPicks = getEditorsPicks(12);
  const allGames = getAllGames();
  const featured = mostPlayed[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <Hero featuredGame={featured} />

      <ContinuePlayingSection />

      <GameSection
        id="trending"
        title="Trending Now"
        subtitle="Games everyone is playing right now"
        games={trending}
        icon={<Flame className="w-6 h-6 text-orange-400" />}
      />

      <GameSection
        id="new-games"
        title="New Games"
        subtitle="Fresh releases added recently"
        games={newGames}
        icon={<Sparkles className="w-6 h-6 text-gamesooty-cyan" />}
      />

      <CategoryGrid />

      <GameSection
        id="most-played"
        title="Most Played"
        subtitle="All-time favorites on Gamesooty"
        games={mostPlayed}
        icon={<Trophy className="w-6 h-6 text-yellow-400" />}
      />

      <GameSection
        id="editors-picks"
        title="Editor's Picks"
        subtitle="Hand-picked gems you'll love"
        games={editorsPicks}
        icon={<Star className="w-6 h-6 text-gamesooty-pink" />}
      />

      <GameSection
        id="all-games"
        title="All Games"
        subtitle={`Browse all ${allGames.length} free games`}
        games={allGames.slice(0, 24)}
        viewAllHref="/search"
      />
    </div>
  );
}
