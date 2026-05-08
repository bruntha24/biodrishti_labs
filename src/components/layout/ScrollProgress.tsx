import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const scrollYProgress = useScrollProgress();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-primary via-primary-glow to-accent"
    />
  );
};
