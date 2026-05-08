import { Dna } from "lucide-react";
import { cn } from "@/utils/cn";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <div className="relative grid h-9 w-9 place-items-center rounded-md border border-primary-glow/40 bg-primary/10">
      <Dna className="h-4 w-4 text-primary-glow" strokeWidth={1.6} />
    </div>
    <div className="leading-tight">
      <div className="font-serif text-lg tracking-tight">BioDrishti</div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Research Mentorship
      </div>
    </div>
  </div>
);
