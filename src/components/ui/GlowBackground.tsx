import { motion, type MotionValue } from "framer-motion";

interface GlowBackgroundProps {
  auroraX?: MotionValue<number>;
  auroraY?: MotionValue<number>;
  variant?: "hero" | "panel";
}

export const GlowBackground = ({ auroraX, auroraY, variant = "hero" }: GlowBackgroundProps) => {
  const sizes =
    variant === "hero"
      ? ["h-[640px] w-[640px]", "h-[520px] w-[520px]", "h-[420px] w-[420px]"]
      : ["h-[460px] w-[460px]", "h-[420px] w-[420px]", "h-[300px] w-[300px]"];
  return (
    <motion.div
      style={auroraX && auroraY ? { x: auroraX, y: auroraY } : undefined}
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className={`absolute -top-40 right-[-10%] rounded-full bg-primary/15 blur-[140px] animate-aurora ${sizes[0]}`} />
      <div
        className={`absolute bottom-[-15%] left-[-10%] rounded-full bg-primary-glow/10 blur-[140px] animate-aurora ${sizes[1]}`}
        style={{ animationDelay: "-6s" }}
      />
      <div
        className={`absolute left-1/3 top-1/4 rounded-full bg-accent/10 blur-[160px] animate-aurora ${sizes[2]}`}
        style={{ animationDelay: "-12s" }}
      />
    </motion.div>
  );
};
