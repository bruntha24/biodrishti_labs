import type { MotionValue } from "framer-motion";
import { FloatingDNA } from "@/components/hero/FloatingDNA";

interface HeroVisualProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

export const HeroVisual = (props: HeroVisualProps) => (
  <div className="relative lg:col-span-6" style={{ perspective: 1600 }}>
    <FloatingDNA {...props} />
  </div>
);
