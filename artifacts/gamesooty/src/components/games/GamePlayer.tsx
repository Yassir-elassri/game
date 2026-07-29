import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Lightbulb } from "lucide-react";
import type { Game } from "@/lib/types";
import { useContinuePlaying } from "@/lib/context/ContinuePlayingContext";

interface GamePlayerProps {
  game: Game;
}

export function GamePlayer({ game }: GamePlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const [lightsOn, setLightsOn] = useState(true);
  const { addToRecent } = useContinuePlaying();

  useEffect(() => {
    addToRecent(game);
  }, [game, addToRecent]);

  const openFullscreen = () => {
    window.open(game.iframeUrl, "_blank", "fullscreen=yes");
  };

  return (
    <div className={`relative ${lightsOn ? "" : "brightness-50"}`}>
      <div className="glass-card overflow-hidden neon-border">
        {!loaded && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            style={{ backgroundColor: "#12121f", minHeight: 400 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full border-4"
              style={{ borderColor: "rgba(139,92,246,0.3)", borderTopColor: "#06b6d4" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="mt-4 text-white/60 text-sm">Loading {game.title}...</p>
          </div>
        )}

        <div className="relative w-full bg-black" style={{ aspectRatio: "16/10" }}>
          <iframe
            src={game.iframeUrl}
            title={game.title}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div
          className="flex items-center justify-between px-4 py-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLightsOn(!lightsOn)}
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label="Toggle lights"
            >
              <Lightbulb
                className="w-4 h-4"
                style={{ color: lightsOn ? "#facc15" : "rgba(255,255,255,0.4)" }}
              />
              Lights {lightsOn ? "On" : "Off"}
            </button>
          </div>
          <button
            onClick={openFullscreen}
            className="btn-ghost text-xs py-1.5 px-3"
          >
            <Maximize2 className="w-4 h-4" />
            Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}
