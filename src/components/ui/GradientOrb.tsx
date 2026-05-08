import { cn } from "@/utils/cn";

interface GradientOrbProps {
  className?: string;
  color?: "primary" | "accent" | "glow";
}

const map = {
  primary: "bg-primary/20",
  accent: "bg-accent/15",
  glow: "bg-primary-glow/15",
};

export const GradientOrb = ({ className, color = "glow" }: GradientOrbProps) => (
  <div className={cn("absolute rounded-full blur-[120px] animate-aurora", map[color], className)} />
);
