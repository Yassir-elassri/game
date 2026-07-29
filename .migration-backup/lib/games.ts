import gamesData from "@/data/games.json";
import { CATEGORIES, type Game } from "./types";

const games = gamesData as Game[];

export function getAllGames(): Game[] {
  return games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((g) => g.category === category);
}

export function getCategoryInfo(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllCategories() {
  const usedSlugs = new Set(games.map((g) => g.category));
  return CATEGORIES.filter((c) => usedSlugs.has(c.slug));
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return games.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.categoryName.toLowerCase().includes(q)
  );
}

export function getTrendingGames(limit = 12): Game[] {
  return [...games]
    .filter((g) => g.badges.includes("HOT") || g.players > 50000)
    .sort((a, b) => b.players - a.players)
    .slice(0, limit);
}

export function getNewGames(limit = 12): Game[] {
  return [...games]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getMostPlayed(limit = 12): Game[] {
  return [...games].sort((a, b) => b.players - a.players).slice(0, limit);
}

export function getEditorsPicks(limit = 12): Game[] {
  return [...games]
    .filter((g) => g.rating >= 4.5 || g.badges.length > 0)
    .sort((a, b) => b.rating - a.rating || b.players - a.players)
    .slice(0, limit);
}

export function getRelatedGames(game: Game, limit = 8): Game[] {
  return games
    .filter((g) => g.category === game.category && g.slug !== game.slug)
    .sort((a, b) => b.players - a.players)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return games.map((g) => g.slug);
}

export function formatPlayers(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return count.toString();
}

export function getThumbnailUrl(thumbnail: string): string {
  return `/${thumbnail}`;
}
