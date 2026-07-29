"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category & { gameCount?: number; description?: string };
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const gradients = [
    "from-blue-500/20 to-cyan-500/10",
    "from-purple-500/20 to-pink-500/10",
    "from-green-500/20 to-teal-500/10",
    "from-orange-500/20 to-red-500/10",
  ];

  const gradient = gradients[index % gradients.length];
  const borderColors = [
    "border-blue-500/30",
    "border-purple-500/30",
    "border-green-500/30",
    "border-orange-500/30",
  ];
  const borderColor = borderColors[index % borderColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/category/${category.slug}`}>
        <div className={`group glass-card p-6 border ${borderColor} bg-gradient-to-br ${gradient} hover:shadow-neon transition-all duration-300 cursor-pointer`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{category.emoji}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                {category.name}
              </h3>
              <p className="text-sm text-white/50 truncate">{category.gameCount || 0} games</p>
            </div>
          </div>
          <p className="text-sm text-white/60 line-clamp-2">{category.description}</p>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between group/arrow">
            <span className="text-xs font-medium text-gamesooty-cyan">Explore</span>
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-gamesooty-purple to-gamesooty-cyan flex items-center justify-center group-hover/arrow:scale-110 transition-transform"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white text-sm">→</span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
