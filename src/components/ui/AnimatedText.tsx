import { motion } from "framer-motion";
import { wordReveal } from "@/components/animations/fadeUp";
import { cn } from "@/utils/cn";

export interface AnimatedTextWord {
  text: string;
  italic?: boolean;
}

interface AnimatedTextProps {
  words: AnimatedTextWord[];
  className?: string;
  whileInView?: boolean;
}

export const AnimatedText = ({ words, className, whileInView = false }: AnimatedTextProps) => {
  const animateProps = whileInView
    ? { initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden" as const, animate: "show" as const };

  return (
    <h2 className={cn("font-serif text-balance leading-[1.05] tracking-tight", className)}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.22em] align-bottom">
          <motion.span
            custom={i}
            variants={wordReveal}
            {...animateProps}
            className={cn("inline-block", w.italic && "italic text-primary-glow")}
          >
            {w.text}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};
