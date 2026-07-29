import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Game } from "@/lib/types";
import { GameGrid } from "./GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";

interface GameSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  games: Game[];
  viewAllHref?: string;
  icon?: ReactNode;
}

export function GameSection({
  id,
  title,
  subtitle,
  games,
  viewAllHref,
  icon,
}: GameSectionProps) {
  if (games.length === 0) return null;

  return (
    <section id={id} className="py-8 md:py-12 scroll-mt-28">
      <FadeIn>
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {icon}
              <h2 className="section-title gradient-text">{title}</h2>
            </div>
            {subtitle && (
              <p className="text-sm text-white/50">{subtitle}</p>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="btn-ghost text-sm shrink-0 text-gamesooty-cyan hover:text-white"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </FadeIn>
      <GameGrid games={games} />
    </section>
  );
}
