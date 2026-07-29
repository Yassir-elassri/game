import { motion } from "framer-motion";

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          top: "-50%",
          left: "-25%",
          width: 600,
          height: 600,
          background: "rgba(139, 92, 246, 0.20)",
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          top: "33%",
          right: "-25%",
          width: 500,
          height: 500,
          background: "rgba(6, 182, 212, 0.15)",
        }}
        animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          bottom: "-25%",
          left: "33%",
          width: 450,
          height: 450,
          background: "rgba(236, 72, 153, 0.10)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
