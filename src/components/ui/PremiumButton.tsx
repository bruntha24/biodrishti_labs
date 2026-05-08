import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export interface PremiumButtonProps extends ButtonProps {
  href?: string;
}

/** Wraps the cta-sheen anchor + hero button for consistency. */
export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ href, className, children, variant = "hero", size = "lg", ...props }, ref) => {
    const btn = (
      <Button ref={ref} variant={variant} size={size} className={cn(className)} {...props}>
        {children}
      </Button>
    );
    if (!href) return btn;
    return (
      <a href={href} className="cta-sheen relative overflow-hidden rounded-md">
        {btn}
      </a>
    );
  },
);
PremiumButton.displayName = "PremiumButton";
