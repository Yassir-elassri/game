import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GameGrid } from "@/components/games/GameGrid";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { getGamesByCategory, getCategoryInfo } from "@/lib/games";
import { CATEGORIES, SITE } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryInfo(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Games`,
    description: `Play free ${category.name.toLowerCase()} games on ${SITE.name}. Browse our collection of browser games — no download required.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryInfo(slug);
  if (!category) notFound();

  const games = getGamesByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <FadeIn>
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-gamesooty-cyan transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/80">{category.name}</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-5xl">{category.emoji}</span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              {category.name} Games
            </h1>
            <p className="text-white/50 mt-1">
              {games.length} free games to play instantly
            </p>
          </div>
        </div>
      </FadeIn>

      <GameGrid games={games} />
    </div>
  );
}
