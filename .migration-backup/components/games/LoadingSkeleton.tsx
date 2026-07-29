"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  type?: "card" | "grid" | "hero";
  count?: number;
}

export function LoadingSkeleton({ type = "grid", count = 6 }: LoadingSkeletonProps) {
  const shimmerVariants = {
    initial: { backgroundPosition: "200% 0" },
    animate: {
      backgroundPosition: "-200% 0",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  if (type === "hero") {
    return (
      <div className="space-y-4 animate-pulse">
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-12 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-lg"
          style={{ backgroundSize: "200% 100%" }}
        />
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-8 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-lg w-3/4"
          style={{ backgroundSize: "200% 100%" }}
        />
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-24 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-lg"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="space-y-3 animate-pulse">
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-40 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-lg"
          style={{ backgroundSize: "200% 100%" }}
        />
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded"
          style={{ backgroundSize: "200% 100%" }}
        />
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          className="h-3 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded w-2/3"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
    );
  }

  return (
    <div className="game-grid">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative glass-card overflow-hidden aspect-square rounded-2xl">
            <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
