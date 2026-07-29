"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Trophy } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Instant Play",
    description: "No downloads, no signups. Start playing in seconds directly in your browser.",
  },
  {
    icon: Shield,
    title: "100% Safe",
    description: "All games are virus-free and verified. Your device and data are completely safe.",
  },
  {
    icon: Users,
    title: "Community Powered",
    description: "Join thousands of players, compete on leaderboards, and challenge your friends.",
  },
  {
    icon: Trophy,
    title: "Always Fresh",
    description: "New games added daily. Never run out of things to play and discover.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-3">Why Choose Us?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We&apos;re committed to providing the best free gaming experience with premium quality and zero compromises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="glass-card p-6 h-full hover:shadow-neon transition-all duration-300 group">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-gamesooty-purple/20 to-gamesooty-cyan/20 flex items-center justify-center mb-4 group-hover:shadow-neon transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-gamesooty-cyan" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gamesooty-cyan/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gamesooty-purple/10 rounded-full blur-3xl" />
    </section>
  );
}
