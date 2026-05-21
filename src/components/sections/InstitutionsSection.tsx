"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AnimatedText,
  type AnimatedTextWord,
} from "@/components/ui/AnimatedText";
import { useParallaxPointer } from "@/components/animations/parallax";
import { EASE } from "@/utils/motion";

/* ================= HEADLINE ================= */
const INST_HEADLINE: AnimatedTextWord[] = [
  { text: "Improving" },
  { text: "Research" },
  { text: "Output" },
  { text: "and" },
  { text: "Accreditation" },
  { text: "—" },
  { text: "Structured", italic: true },
  { text: "Mentorship", italic: true },
  { text: "for", italic: true },
  { text: "Universities", italic: true },
  { text: "and", italic: true },
  { text: "Colleges.", italic: true },
];

/* ================= CONTENT ================= */
const CONTENT = [
  {
    title: "Institutional Problem",
    text: "Universities and autonomous colleges across India face a critical challenge. Many institutions lack the institutional research infrastructure, faculty expertise, and mentorship culture needed to produce quality student research. This impacts NAAC accreditation scores, NIRF rankings, and student career outcomes.",
  },
  {
    title: "Structural Gap",
    text: "Faculty are under-published. Research programs are underfunded. Mentorship at the idea and design stage is missing. Students graduate without exposure to publishable research standards.",
  },
  {
    title: "Core Issue",
    text: "Institutions want to improve but lack the expertise and systems to build internal research capability at scale.",
  },
];

const OFFERINGS = [
  {
    title: "Research Mentorship Workshops",
    text: "Structured workshops on research question formulation, study design, publication strategy, and ethics delivered by active researchers.",
  },
  {
    title: "Idea Validation Sessions",
    text: "Early-stage idea reviews for originality, feasibility, and publication potential before research begins.",
  },
  {
    title: "Faculty & Student Advisory Programs",
    text: "Direct departmental mentoring to improve supervision quality and institutional research output.",
  },
  {
    title: "Institutional Research Culture Building",
    text: "Long-term mentorship systems to build sustainable research culture and improve NAAC/NIRF performance.",
  },
];

const OUTCOMES = [
  "Higher student publication output",
  "Improved NAAC & NIRF research metrics",
  "Stronger PhD placement outcomes",
  "Improved faculty research confidence",
  "Sustainable institutional research culture",
];

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: EASE },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export const InstitutionsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { sx, sy } = useParallaxPointer(1.2);
  const auroraX = useTransform(sx, (v) => v * 18);
  const auroraY = useTransform(sy, (v) => v * 18);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.35, 1, 0.4],
  );
  const railHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  const viewport = { once: true, margin: "-100px" } as const;

  return (
    <section
      id="institutions"
      ref={ref}
      className="relative isolate overflow-hidden py-28 lg:py-40"
    >
      {/* ================= SOFT BACKGROUND ================= */}
      <motion.div
        aria-hidden
        style={{ opacity: reduceMotion ? 1 : bgOpacity }}
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px hairline" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* ================= AURORA ================= */}
      <motion.div
        aria-hidden
        style={{ x: auroraX, y: auroraY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/[0.08] blur-[140px] animate-orb-drift" />
        <div className="absolute -right-32 bottom-1/4 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-[140px] animate-orb-drift" />
      </motion.div>

      <div className="container relative">
        {/* ================= TOP META BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
        >
          
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-icon-breathe" />
            <span>Cohort 2026 — Now Open</span>
          </div>
        </motion.div>

        {/* ================= HEADLINE ================= */}
        <div className="max-w-5xl">
          <AnimatedText
            whileInView
            words={INST_HEADLINE}
            className="text-4xl md:text-5xl lg:text-[3.5rem]"
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-6 h-px w-24 bg-gradient-to-r from-accent via-primary-glow to-transparent"
        />

        {/* ================= MAIN PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1.1, ease: EASE }}
          className="glass-panel relative mt-14 overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
        >
          {/* corner ornaments */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-6 h-6 w-6 border-l border-t border-accent/40" />
            <div className="absolute right-6 top-6 h-6 w-6 border-r border-t border-accent/40" />
            <div className="absolute left-6 bottom-6 h-6 w-6 border-l border-b border-accent/40" />
            <div className="absolute right-6 bottom-6 h-6 w-6 border-r border-b border-accent/40" />
          </div>

          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* =========== LEFT =========== */}
            <div className="relative lg:col-span-7">
              {/* vertical scroll rail */}
              <div
                aria-hidden
                className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
              >
                <motion.div
                  style={{ height: reduceMotion ? "100%" : railHeight }}
                  className="w-full bg-gradient-to-b from-accent via-primary-glow to-transparent"
                />
              </div>

              {/* CONTENT BLOCKS */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="space-y-10 md:pl-8"
              >
                {CONTENT.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={fadeUp}
                    className="group relative"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-border" />
                      <h3 className="font-serif text-xl text-foreground md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="measure text-[15.5px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* OFFERINGS */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={viewport}
  transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
  className="mt-12 md:mt-16 md:pl-8"
>
  {/* SECTION LABEL */}
  <div className="mb-6 flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground">
    <span className="gold-text font-mono shrink-0">◆</span>

    {/* FIXED TEXT WRAP */}
    <span className="whitespace-nowrap">
      What BioDrishti Offers
    </span>

    <span className="h-px flex-1 bg-border" />
  </div>

  {/* RESPONSIVE GRID */}
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
  >
    {OFFERINGS.map((o, i) => (
      <motion.div
        key={o.title}
        custom={i}
        variants={fadeUp}
        whileHover={{
          y: -4,
          scale: 1.01,
        }}
        transition={{
          duration: 0.4,
          ease: EASE,
        }}

        /* MOBILE FIXED CARD */
        className="
          surface-card
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-border/60
          p-5
          sm:p-6
          backdrop-blur-xl
        "
      >
        {/* TOP GLOW */}
        <div
          aria-hidden
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary-glow/60
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* MOBILE LIGHT EFFECT */}
        <div
          aria-hidden
          className="
            absolute
            -right-10
            -top-10
            h-24
            w-24
            rounded-full
            bg-primary/5
            blur-2xl
          "
        />

        {/* TITLE */}
        <h4
          className="
            relative
            z-10
            font-serif
            text-[16px]
            sm:text-[17px]
            leading-snug
            text-foreground
            break-words
          "
        >
          {o.title}
        </h4>

        {/* TEXT */}
        <p
          className="
            relative
            z-10
            mt-3
            text-[13.5px]
            sm:text-[14px]
            leading-[1.75]
            text-muted-foreground
            break-words
          "
        >
          {o.text}
        </p>

        {/* BOTTOM ACCENT */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-primary-glow
            to-accent
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </motion.div>
    ))}
  </motion.div>
</motion.div>
            </div>

            {/* =========== RIGHT =========== */}
            <div className="relative flex flex-col gap-8 lg:col-span-5">
              {/* OUTCOMES */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                className="surface-card relative overflow-hidden p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    Institutional Outcomes
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    {OUTCOMES.length.toString().padStart(2, "0")} / METRICS
                  </div>
                </div>

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="space-y-3"
                >
                  {OUTCOMES.map((o, i) => (
                    <motion.li
                      key={o}
                      custom={i}
                      variants={fadeUp}
                      className="group flex items-start gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-glow"
                        strokeWidth={1.5}
                      />
                      <span className="text-[14.5px] leading-snug text-foreground/90">
                        {o}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* WHY */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                className="surface-card relative overflow-hidden p-7"
              >
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
                />
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Why BioDrishti
                </div>
                <p className="mt-4 font-serif text-[22px] leading-snug text-foreground">
                  We build long-term research mentorship{" "}
                  <span className="italic text-primary-glow">systems</span> — not
                  one-time consulting.
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-icon-breathe" />
                  Sustained engagement across academic cycles
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
                className="flex flex-col gap-3"
              >
                <a
                  href="#contact"
                  className="cta-sheen relative overflow-hidden rounded-md"
                >
                  <Button
  variant="hero"
  size="lg"
  className="
    w-full
    sm:w-full
    md:w-full
    justify-center
    md:justify-between
    gap-2
    text-center
  "
>
  Discuss Partnership

  <ArrowUpRight className="h-4 w-4 shrink-0" />
</Button>
                </a>
                <p className="text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Limited cohort · 2026 intake
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};     