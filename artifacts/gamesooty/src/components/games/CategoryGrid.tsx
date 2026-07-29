import { Link } from "wouter";
import { FadeIn } from "@/components/effects/MotionWrappers";
import { getAllCategories, getGamesByCategory } from "@/lib/games";

export function CategoryGrid() {
  const categories = getAllCategories();

  return (
    <section className="py-8 md:py-12">
      <FadeIn>
        <h2 className="section-title gradient-text mb-2">Browse Categories</h2>
        <p className="text-sm text-white/50 mb-6">
          Find your favorite genre and start playing
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categories.map((cat, i) => {
          const count = getGamesByCategory(cat.slug).length;
          return (
            <FadeIn key={cat.slug} delay={i * 0.03}>
              <Link
                href={`/category/${cat.slug}`}
                className="group block glass-card p-4 md:p-5 text-center hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl md:text-4xl block mb-2 group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span className="font-semibold text-sm block">{cat.name}</span>
                <span className="text-xs text-white/40 mt-1 block">{count} games</span>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
