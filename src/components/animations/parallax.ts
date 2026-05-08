import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useParallaxPointer(
  factor = 1,
  spring = { stiffness: 60, damping: 18, mass: 0.6 },
) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);
  const x = useTransform(sx, (v) => v * factor);
  const y = useTransform(sy, (v) => v * factor);
  return { mx, my, sx, sy, x, y };
}
