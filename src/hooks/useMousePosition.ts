import { useCallback, type RefObject } from "react";
import type { MotionValue } from "framer-motion";

export function useMouseTracking(
  ref: RefObject<HTMLElement>,
  mx: MotionValue<number>,
  my: MotionValue<number>,
) {
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) / r.width);
      my.set((e.clientY - r.top - r.height / 2) / r.height);
    },
    [ref, mx, my],
  );
  const onMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);
  return { onMouseMove, onMouseLeave };
}
