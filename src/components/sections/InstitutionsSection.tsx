import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { InstitutionCard } from "@/components/cards/InstitutionCard";
import { AnimatedText, type AnimatedTextWord } from "@/components/ui/AnimatedText";
import { ParticleField } from "@/components/ui/ParticleField";
import { useParallaxPointer } from "@/components/animations/parallax";
import { useMouseTracking } from "@/hooks/useMousePosition";
import { institutionFeatures } from "@/data/domains";
import { EASE } from "@/utils/motion";

const INST_HEADLINE: AnimatedTextWord[] = [
  { text: "Partner" },
  { text: "with" },
  { text: "us" },
  { text: "to" },
  { text: "elevate" },
  { text: "research", italic: true },
  { text: "culture", italic: true },
  { text: "on" },
  { text: "your" },
  { text: "campus." },
];

const MOL_LINES: [number, number, number, number][] = [
  [80, 60, 200, 140],
  [200, 140, 320, 80],
  [200, 140, 260, 260],
  [260, 260, 140, 320],
  [140, 320, 80, 220],
  [80, 220, 80, 60],
  [200, 140, 80, 220],
];
const MOL_NODES: [number, number][] = [
  [80, 60], [200, 140], [320, 80], [260, 260], [140, 320], [80, 220],
];

export const InstitutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { mx, my, sx, sy } = useParallaxPointer(1, { stiffness: 50, damping: 20, mass: 0.6 });
  const auroraX = useTransform(sx, (v) => v * 30);
  const auroraY = useTransform(sy, (v) => v * 30);
  const panelRotX = useTransform(sy, (v) => v * -3);
  const panelRotY = useTransform(sx, (v) => v * 4);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lightIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.7]);
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const { onMouseMove, onMouseLeave } = useMouseTracking(ref, mx, my);

  return (
    <section
      id="institutions"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate py-28 lg:py-40"
      style={{ perspective: 1600 }}
    >
      <motion.div
        style={{ y: bgY, opacity: lightIntensity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px hairline" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_hsl(var(--primary)/0.18),_transparent_55%),radial-gradient(ellipse_at_75%_80%,_hsl(var(--accent)/0.10),_transparent_55%)]" />
      </motion.div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ rotateX: panelRotX, rotateY: panelRotY, transformStyle: "preserve-3d" }}
          className="glass-panel relative overflow-hidden rounded-3xl p-10 md:p-16 lg:p-20"
        >
          {/* aurora glows */}
          <motion.div style={{ x: auroraX, y: auroraY }} className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
            <div
              className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary-glow/15 blur-[120px] animate-aurora"
              style={{ animationDelay: "-7s" }}
            />
            <div
              className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/12 blur-[140px] animate-aurora"
              style={{ animationDelay: "-13s" }}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-0 h-full w-1/2 animate-beam-sweep bg-gradient-to-r from-transparent via-primary-glow/10 to-transparent" />
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-glow)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
            }}
          />

          <svg
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
            viewBox="0 0 400 400"
            fill="none"
          >
            <defs>
              <radialGradient id="mol-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0" />
              </radialGradient>
            </defs>
            {MOL_LINES.map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary-glow))" strokeOpacity="0.3" strokeWidth="0.6" />
            ))}
            {MOL_NODES.map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="14" fill="url(#mol-glow)" />
                <circle cx={cx} cy={cy} r="2.5" fill="hsl(var(--primary-glow))" />
              </g>
            ))}
          </svg>

          <ParticleField count={18} />

          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_transparent_50%,_hsl(var(--background-deep)/0.7)_100%)]" />

          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading number="05" label="For Institutions" />
              <AnimatedText
                whileInView
                words={INST_HEADLINE}
                className="text-4xl md:text-5xl lg:text-[3.5rem]"
              />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                We design tailored mentorship cohorts, faculty-aligned workshops, and methodology bootcamps for universities, research institutes, and medical colleges — embedded into your existing academic calendar.
              </motion.p>
              <ul className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                {institutionFeatures.map((f, i) => (
                  <InstitutionCard key={f} feature={f} index={i} />
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
              className="flex flex-col items-start justify-end gap-6 lg:col-span-5 lg:items-end"
            >
              <div className="glass-panel w-full max-w-sm rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Collaboration</div>
                <div className="mt-3 font-serif text-2xl leading-snug">
                  Long-term academic partnerships with measurable research outcomes.
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" />
                  Currently accepting partner institutions for 2026
                </div>
              </div>
              <a href="#contact" className="cta-sheen relative overflow-hidden rounded-md">
                <Button variant="hero" size="lg">
                  Discuss a Partnership
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
