"use client";

import { ContinuePlayingProvider } from "@/lib/context/ContinuePlayingContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ContinuePlayingProvider>{children}</ContinuePlayingProvider>;
}
