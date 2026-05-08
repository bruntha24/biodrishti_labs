import type { Variants } from "framer-motion";
import { EASE } from "@/utils/motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
  }),
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: 0.4 + i * 0.09, ease: EASE },
  }),
};
