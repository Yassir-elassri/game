import type { Game } from "@/lib/types";
import { GameCard } from "./GameCard";
import { StaggerContainer, StaggerItem } from "@/components/effects/MotionWrappers";

interface GameGridProps {
  games: Game[];
  size?: "sm" | "md" | "lg";
  showMeta?: boolean;
}

export function GameGrid({ games, size = "md", showMeta = true }: GameGridProps) {
  return (
    <StaggerContainer className="game-grid">
      {games.map((game) => (
        <StaggerItem key={game.slug}>
          <GameCard game={game} size={size} showMeta={showMeta} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
