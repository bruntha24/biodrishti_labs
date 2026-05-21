import { motion, type MotionValue } from "framer-motion";
import {
  FlaskConical,
  FileCheck,
  BrainCircuit,
  ShieldCheck,
  Microscope,
  Sparkles,
} from "lucide-react";

import { floatingAnimation } from "@/components/animations/floating";
import heroHelix from "@/assets/images/hero-helix.webp";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

/* ================= DATA ================= */

const domains = [
  "Genomics",
  "Molecular Biology",
  "Cell Biology",
  "Biochemistry",
  "Genetics",
  "Proteomics",
  "Transcriptomics",
  "Bioinformatics",
  "Computational Biology",
  "Immunology",
  "Cancer Biology",
  "Neuroscience",
];

const leftDomains = domains.slice(0, 6);
const rightDomains = domains.slice(6, 12);

const highlights = [
  { label: "Idea Validation", icon: FlaskConical, pos: "left-[3%] top-[14%]" },
  { label: "Publication Ready", icon: FileCheck, pos: "right-[3%] top-[14%]" },
  { label: "Structured Mentorship", icon: BrainCircuit, pos: "left-[1%] bottom-[26%]" },
  { label: "Research Culture", icon: Sparkles, pos: "right-[1%] bottom-[26%]" },
  { label: "Scientific Rigor", icon: ShieldCheck, pos: "left-[14%] -top-[2%]" },
  { label: "Methodology Review", icon: Microscope, pos: "right-[14%] -bottom-[2%]" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ================= SCROLL ITEM ================= */

const ScrollColumn = ({ items, direction = "up" }: any) => {
  const looped = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden h-[260px] sm:h-[320px]">
      <motion.div
        className="flex flex-col gap-3"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {looped.map((item: string, i: number) => (
          <div
            key={i}
            className="rounded-full border bg-card/70 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] shadow-sm opacity-70 hover:opacity-100 transition"
          >
            <span className="font-mono text-accent mr-2">
              {(i % items.length + 1).toString().padStart(2, "0")}
            </span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ================= COMPONENT ================= */

export const FloatingDNA = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: FloatingDNAProps) => (
  <motion.div
    style={{
      x: visualX,
      y: visualY,
      rotateX: visualRotX,
      rotateY: visualRotY,
      transformStyle: "preserve-3d",
    }}
    className="relative mx-auto aspect-square w-full max-w-[640px]"
  >
    {/* ================= BACKGLOW ================= */}
    <div className="absolute inset-6 rounded-full bg-primary-glow/10 blur-[90px]" />
    <div className="absolute inset-16 rounded-full bg-accent/10 blur-[70px]" />

    {/* ================= PARTICLES ================= */}
    {Array.from({ length: 18 }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0], y: [0, -20, 0] }}
        transition={{
          duration: 6 + (i % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.2,
        }}
        className="absolute h-1 w-1 rounded-full bg-primary-glow/60"
        style={{
          left: `${(i * 37) % 100}%`,
          top: `${(i * 53) % 100}%`,
        }}
      />
    ))}

    {/* ================= LEFT SCROLL ================= */}
    <div className="absolute left-[5%] top-1/2 -translate-y-1/2">
      <ScrollColumn items={leftDomains} direction="up" />
    </div>

    {/* ================= RIGHT SCROLL ================= */}
    <div className="absolute right-[5%] top-1/2 -translate-y-1/2">
      <ScrollColumn items={rightDomains} direction="down" />
    </div>

    {/* ================= CORE DNA ================= */}
    <motion.div
      variants={floatingAnimation}
      animate="animate"
      className="absolute inset-0 flex items-center justify-center z-20"
    >
      <img
        src={heroHelix}
        alt="DNA Helix"
        className="h-[85%] w-[85%] object-contain drop-shadow-[0_30px_60px_rgba(14,158,136,0.25)]"
      />
    </motion.div>

    {/* ================= CENTER TEXT ================= */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center gap-1 rounded-2xl border bg-card/90 px-4 py-3 text-center backdrop-blur-md shadow-lg">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">
          ◆ BioDrishti ◆
        </div>
        <div className="text-sm font-semibold text-foreground">
          Better Science Through Mentorship
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Research Ecosystem for India
        </div>
      </div>
    </div>

    {/* ================= HIGHLIGHTS ================= */}
    {highlights.map((item, index) => {
      const Icon = item.icon;
      return (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 + index * 0.07, ease: EASE }}
          className={`absolute ${item.pos} z-20`}
        >
          <div className="flex items-center gap-2 rounded-full border bg-card/90 px-3 py-1.5 backdrop-blur-md shadow-md">
            <Icon className="h-3 w-3 text-primary" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/80">
              {item.label}
            </span>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);