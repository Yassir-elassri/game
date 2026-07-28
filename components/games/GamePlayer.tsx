"use client";

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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gamesooty-surface z-10 min-h-[400px] md:min-h-[560px]">
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-gamesooty-purple/30 border-t-gamesooty-cyan"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="mt-4 text-white/60 text-sm">Loading {game.title}...</p>
          </div>
        )}

        <div className="relative w-full aspect-video md:aspect-[16/10] bg-black">
          <iframe
            src={game.iframeUrl}
            title={game.title}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLightsOn(!lightsOn)}
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label="Toggle lights"
            >
              <Lightbulb className={`w-4 h-4 ${lightsOn ? "text-yellow-400" : "text-white/40"}`} />
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
