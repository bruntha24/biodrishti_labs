"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/utils/motion";

const PARAGRAPHS = [
  "India produces over 40,000 PhD graduates every year — making it the third largest producer of doctoral researchers in the world. Yet despite this scale, most undergraduate, master's, and early PhD students invest months or even years into research projects without structured guidance on the most critical question: Is this idea worth pursuing at all?",

  "The gap is not a talent problem. It is a structural problem. The average supervisor across Indian institutions manages 8 to 15 students simultaneously while running their own research, teaching full course loads, and navigating institutional administration. One-on-one research mentorship at the idea and design stage — where it has the highest impact — rarely happens.",

  "Many colleges and universities across India, particularly in tier-2 and tier-3 cities, lack the institutional research infrastructure that top institutions have. They do not have well-funded research programs, modern laboratory facilities, or a culture of mentorship built into their academic structure. Their NAAC accreditation scores suffer. Their students graduate without exposure to what rigorous research actually looks like.",

  "The tragedy is this: the students at these institutions are not incapable of doing research. They are smart, motivated, and hungry to learn. What they lack is not ability — it is guidance and exposure. They have never seen a well-designed study or experienced a structured research culture where mentorship is expected and systematic.",

  "This creates a two-tier research ecosystem in India. Students at IITs, IISc, and a handful of central universities receive world-class mentorship, resources, and publication opportunities. Students at hundreds of other colleges get left behind — not because they are less capable, but because their institutions lack the research infrastructure and mentorship culture to support them.",

  "BioDrishti was built to fix this — bringing expert research mentorship and structured scientific guidance to students regardless of the institution they attend or the infrastructure around them. We help under-resourced students access the level of mentorship that top research ecosystems take for granted.",
];

/* =========================
   SMOOTH REVEAL (YELLOW + CLEAN)
========================= */
const SmoothReveal = ({ text }: { text: string }) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <p className="text-lg leading-[2] text-muted-foreground">
        {text}
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex gap-6 text-lg leading-[2] tracking-[0.01em] text-muted-foreground"
    >
      {/* 🟡 PARAGRAPH LEFT YELLOW ACCENT */}
      <div className="relative w-[2px] shrink-0 self-stretch py-2">
        <div className="absolute inset-0 blur-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/60 to-transparent" />

        <div
          className="relative h-full w-full rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C9A84C 20%, #C9A84C 80%, transparent)",
            opacity: 0.75,
            boxShadow: "0 0 18px rgba(201,168,76,0.4)",
          }}
        />
      </div>

      <p className="flex-1">{text}</p>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */
export const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const scanY = useTransform(scrollYProgress, [0, 1], ["-18%", "125%"]);
  const beamOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );
  const trackFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative isolate overflow-hidden py-32 lg:py-44"
    >
      <div className="container grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">

        {/* LEFT RAIL (UNCHANGED) */}
        <div className="relative hidden lg:col-span-1 lg:block">
          <div className="sticky top-20 h-[145vh]">
            <div className="relative mx-auto h-full w-px">

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0A7C6A20,#C9A84C10,transparent)]" />

              <motion.div
                style={{ height: trackFill }}
                className="absolute left-0 top-0 w-full origin-top"
              >
                <div className="h-full w-full bg-gradient-to-b from-[#0A7C6A] via-[#0A7C6A]/40 to-[#C9A84C]/10 shadow-[0_0_30px_rgba(10,124,106,0.4)]" />
              </motion.div>

              <div className="absolute inset-y-2 left-0 flex w-full flex-col justify-between">
                {Array.from({ length: 26 }).map((_, i) => (
                  <span
                    key={i}
                    className="block h-px"
                    style={{
                      width: i % 3 === 0 ? "18px" : "8px",
                      marginLeft: "50%",
                      transform: "translateX(-50%)",
                      background:
                        i % 3 === 0
                          ? "#C9A84C"
                          : "rgba(10,124,106,0.15)",
                    }}
                  />
                ))}
              </div>

              {/* SCAN BEAM */}
              {!reduce && (
                <motion.div
                  style={{
                    top: scanY,
                    opacity: beamOpacity,
                  }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <div className="h-36 w-36 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(10,124,106,0.25),transparent_70%)]" />

                  <div className="absolute left-1/2 top-1/2 h-[2px] w-44 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0A7C6A] to-transparent shadow-[0_0_20px_rgba(10,124,106,0.5)]" />
                </motion.div>
              )}

            </div>
          </div>
        </div>

        {/* HEADING (✨ PREMIUM TEAL LEFT GLOW) */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 relative">

            {/* 🌊 TEAL LEFT GLOW */}
            <div className="absolute -left-10 top-0 h-full w-40 bg-gradient-to-r from-[#0A7C6A]/40 via-[#0A7C6A]/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative"
            >
              <h2 className="font-serif text-4xl leading-[1.1] md:text-5xl lg:text-[3.25rem]">
                The Research Mentorship Gap in India —{" "}
                <span className="italic text-primary">
                  A Structural Problem
                </span>
              </h2>

              <p className="mt-6 max-w-xs text-sm text-muted-foreground">
                A structural look at why talented students across India are left without mentorship.
              </p>
            </motion.div>
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-16 lg:col-span-7">
          {PARAGRAPHS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SmoothReveal text={p} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};