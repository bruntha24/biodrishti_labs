import type { Variants } from "framer-motion";

export const floatingAnimation: Variants = {
  animate: {
    rotateZ: [0, 6, -4, 0],
    y: [0, -10, 4, 0],
    transition: { duration: 16, ease: "easeInOut", repeat: Infinity },
  },
};

export const glowPulse: Variants = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};
