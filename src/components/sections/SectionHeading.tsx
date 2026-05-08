import type { ReactNode } from "react";

interface SectionHeadingProps {
  number: string;
  label: ReactNode;
}

export const SectionHeading = ({ number, label }: SectionHeadingProps) => (
  <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
    <span className="gold-text font-mono">{number}</span>
    <span className="h-px w-10 bg-border" />
    {label}
  </div>
);
