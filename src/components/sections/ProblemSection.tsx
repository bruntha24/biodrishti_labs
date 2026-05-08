import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { useRef } from "react";
import { EASE } from "@/utils/motion";

const PARAGRAPHS = [
  "Across universities, ambitious students enter life sciences research with curiosity but without a clear methodological compass. Supervisors are stretched thin, journals are ruthless, and learning by trial leaves careers fragile.",
  "BioDrishti exists to close that gap. We pair early-stage researchers with active scientists who critique ideas, sharpen study design, and prepare manuscripts to the standard real laboratories demand.",
  "The result is not faster output. It is sounder science — work that holds up under peer review, in the lab, and over the arc of a research career.",
];

/* =========================
   PREMIUM LETTER REVEAL
========================= */
const LetterReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="leading-relaxed text-lg text-muted-foreground"
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block mr-[7px] overflow-hidden">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 14,
                  filter: "blur(8px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.75,
                ease: EASE,
                delay: delay + wi * 0.06 + ci * 0.015,
              }}
              className="inline-block will-change-transform"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};

export const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scanY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden container py-28 lg:py-36"
    >
      {/* =========================
         BIO-GLASS GLOW
      ========================= */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]"
      />

      <div className="grid gap-16 lg:grid-cols-12 relative z-10">

        {/* =========================
           DNA SCANNER (LEFT)
        ========================= */}
        <div className="hidden lg:flex lg:col-span-2 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />

          <motion.div
            style={{ y: scanY }}
            className="absolute left-[22px] h-24 w-[2px] bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent blur-[1px]"
          />

          {/* golden node */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.35, 1] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="absolute left-[18px] top-20 h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_22px_rgba(212,175,55,0.9)]"
          />

          {/* green node */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.35, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}
            className="absolute left-[18px] top-52 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.8)]"
          />

          {/* teal node */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.35, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute left-[18px] top-80 h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_18px_rgba(14,158,136,0.8)]"
          />
        </div>

        {/* =========================
           HEADING
        ========================= */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.3,
              ease: EASE,
            }}
          >
            <SectionHeading number="01" label="The Gap" />

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Research deserves better{" "}
              <span className="italic text-primary-glow">
                guidance
              </span>
              .
            </h2>
          </motion.div>
        </div>

        {/* =========================
           LETTER REVEAL TEXT
        ========================= */}
        <div className="space-y-10 lg:col-span-7 lg:col-start-6">
          {PARAGRAPHS.map((p, i) => (
            <LetterReveal key={i} text={p} delay={i * 0.5} />
          ))}
        </div>

      </div>
    </section>
  );
};