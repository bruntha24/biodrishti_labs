import { motion, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText, type AnimatedTextWord } from "@/components/ui/AnimatedText";
import { EASE } from "@/utils/motion";

const HEADLINE_WORDS: AnimatedTextWord[] = [
  { text: "Advancing" },
  { text: "Life" },
  { text: "Sciences" },
  { text: "Through", italic: true },
  { text: "Research" },
  { text: "Mentorship" },
];

const STATS: [string, string][] = [
  ["12+", "Active mentors"],
  ["8", "Research domains"],
  ["50+", "Students guided"],
];

interface HeroContentProps {
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

export const HeroContent = ({ textX, textY }: HeroContentProps) => (
  <motion.div style={{ x: textX, y: textY }} className="lg:col-span-6">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE }}
      className="glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
      </span>
      Life Sciences · Est. 2024
    </motion.div>

    <AnimatedText
      words={HEADLINE_WORDS}
      className="text-5xl md:text-6xl lg:text-[4.25rem]"
    />

    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.4, ease: EASE }}
      className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
    >
      Structured guidance for students navigating research in genomics, molecular biology, and beyond.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.6, ease: EASE }}
      className="mt-10 flex flex-wrap items-center gap-5"
    >
      <a href="#contact" className="cta-sheen relative overflow-hidden rounded-md">
        <Button variant="hero" size="lg">
          Get in Touch
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </a>
      <a
        href="#services"
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Explore our services
        <span className="block h-px w-8 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-primary-glow" />
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.85, ease: EASE }}
      className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8"
    >
      {STATS.map(([n, l]) => (
        <div key={l}>
          <div className="font-serif text-2xl text-foreground">{n}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
        </div>
      ))}
    </motion.div>
  </motion.div>
);
