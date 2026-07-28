export interface Game {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  thumbnail: string;
  iframeUrl: string;
  path: string;
  date: string;
  rating: number;
  players: number;
  badges: string[];
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  gradient: string;
}

export const SITE = {
  name: "Gamesooty",
  tagline: "Play Free Games Online",
  description:
    "Gamesooty is your ultimate destination for free online games. Play action, puzzle, arcade, sports, and more — instantly in your browser. No downloads, no sign-up.",
  url: "https://gamesooty.com",
} as const;

export const CATEGORIES: Category[] = [
  { slug: "action", name: "Action", emoji: "⚔️", gradient: "from-red-500 to-orange-500" },
  { slug: "adventure", name: "Adventure", emoji: "🗺️", gradient: "from-emerald-500 to-teal-500" },
  { slug: "arcade", name: "Arcade", emoji: "👾", gradient: "from-purple-500 to-pink-500" },
  { slug: "board-game", name: "Board Game", emoji: "🎲", gradient: "from-amber-500 to-yellow-500" },
  { slug: "dress-up", name: "Dress Up", emoji: "👗", gradient: "from-pink-500 to-rose-500" },
  { slug: "driving", name: "Driving", emoji: "🏎️", gradient: "from-blue-500 to-cyan-500" },
  { slug: "jigsaw", name: "Jigsaw", emoji: "🧩", gradient: "from-indigo-500 to-violet-500" },
  { slug: "multiplayer", name: "Multiplayer", emoji: "🎮", gradient: "from-green-500 to-lime-500" },
  { slug: "other", name: "Other", emoji: "✨", gradient: "from-gray-500 to-slate-500" },
  { slug: "puzzles", name: "Puzzles", emoji: "🧠", gradient: "from-violet-500 to-purple-500" },
  { slug: "shooting", name: "Shooting", emoji: "🎯", gradient: "from-orange-500 to-red-500" },
  { slug: "sports", name: "Sports", emoji: "⚽", gradient: "from-sky-500 to-blue-500" },
  { slug: "strategy", name: "Strategy", emoji: "♟️", gradient: "from-teal-500 to-emerald-500" },
];
