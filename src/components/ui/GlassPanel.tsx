import { cn } from "@/utils/cn";
import { type HTMLAttributes, forwardRef } from "react";

export const GlassPanel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("glass-panel rounded-2xl", className)} {...props} />
  ),
);
GlassPanel.displayName = "GlassPanel";
