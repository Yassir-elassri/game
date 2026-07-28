import { Clock, X } from "lucide-react";
import { useContinuePlaying } from "@/lib/context/ContinuePlayingContext";
import { GameGrid } from "./GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";

export function ContinuePlayingSection() {
  const { recentGames, clearRecent } = useContinuePlaying();

  if (recentGames.length === 0) return null;

  return (
    <section id="continue-playing" className="py-8 md:py-12 scroll-mt-28">
      <FadeIn>
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-6 h-6" style={{ color: "#8b5cf6" }} />
              <h2 className="section-title gradient-text">Continue Playing</h2>
            </div>
            <p className="text-sm text-white/50">Pick up where you left off</p>
          </div>
          <button
            onClick={clearRecent}
            className="btn-ghost text-xs text-white/40 hover:text-white"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        </div>
      </FadeIn>
      <GameGrid games={recentGames} />
    </section>
  );
}
