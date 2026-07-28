import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Game } from "@/lib/types";

const STORAGE_KEY = "gamesooty-continue-playing";
const MAX_ITEMS = 8;

interface ContinuePlayingContextValue {
  recentGames: Game[];
  addToRecent: (game: Game) => void;
  clearRecent: () => void;
}

const ContinuePlayingContext = createContext<ContinuePlayingContextValue>({
  recentGames: [],
  addToRecent: () => {},
  clearRecent: () => {},
});

export function ContinuePlayingProvider({ children }: { children: ReactNode }) {
  const [recentGames, setRecentGames] = useState<Game[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRecentGames(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((games: Game[]) => {
    setRecentGames(games);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
    } catch {
      /* ignore */
    }
  }, []);

  const addToRecent = useCallback((game: Game) => {
    setRecentGames((prev) => {
      const filtered = prev.filter((g) => g.slug !== game.slug);
      const next = [game, ...filtered].slice(0, MAX_ITEMS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const clearRecent = useCallback(() => {
    persist([]);
  }, [persist]);

  return (
    <ContinuePlayingContext.Provider value={{ recentGames, addToRecent, clearRecent }}>
      {children}
    </ContinuePlayingContext.Provider>
  );
}

export function useContinuePlaying() {
  return useContext(ContinuePlayingContext);
}
