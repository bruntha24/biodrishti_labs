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
import heroHelix from "@/assets/images/hero-helix.png";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

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

const highlights = [
  {
    label: "Idea Validation",
    icon: FlaskConical,
  },
  {
    label: "Publication Ready",
    icon: FileCheck,
  },
  {
    label: "Structured Mentorship",
    icon: BrainCircuit,
  },
  {
    label: "Research Culture",
    icon: Sparkles,
  },
  {
    label: "Scientific Rigor",
    icon: ShieldCheck,
  },
  {
    label: "Methodology Review",
    icon: Microscope,
  },
];

export const FloatingDNA = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: FloatingDNAProps) => (
  <motion.div
    initial={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    }}
    animate={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    }}
    style={{
      x: visualX,
      y: visualY,
      rotateX: visualRotX,
      rotateY: visualRotY,
      transformStyle: "preserve-3d",
      perspective: 2200,
    }}
    className="relative mx-auto aspect-square w-full max-w-[760px]"
  >
    {/* =========================================
        PREMIUM BACKGROUND GLOWS
    ========================================== */}
    <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-[180px]" />

    <div className="absolute inset-[8%] rounded-full bg-[#D4AF37]/12 blur-[140px]" />

    <div className="absolute inset-[20%] rounded-full bg-cyan-300/10 blur-[120px]" />

    {/* DIRECTIONAL LIGHT */}
    <div
      className="
        absolute inset-0 rounded-full
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),transparent_35%)]
        opacity-70
      "
    />

    {/* =========================================
        FLOATING PARTICLES
    ========================================== */}
    {Array.from({ length: 34 }).map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4 + (i % 5),
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
        className={`
          absolute rounded-full
          ${
            i % 3 === 0
              ? "bg-emerald-400"
              : i % 3 === 1
              ? "bg-cyan-300"
              : "bg-[#D4AF37]"
          }
        `}
        style={{
          width: `${2 + (i % 3)}px`,
          height: `${2 + (i % 3)}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow:
            i % 3 === 0
              ? "0 0 14px rgba(16,185,129,0.9)"
              : i % 3 === 1
              ? "0 0 14px rgba(103,232,249,0.9)"
              : "0 0 14px rgba(212,175,55,0.9)",
        }}
      />
    ))}

    {/* =========================================
        DOMAIN CLOUD
    ========================================== */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      {domains.map((domain, index) => {
        const angle = (index / domains.length) * Math.PI * 2;
        const radius = 305;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={domain}
            animate={{
              opacity: [0.45, 1, 0.45],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5 + (index % 4),
              repeat: Infinity,
              delay: index * 0.12,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className="
                relative overflow-hidden
                whitespace-nowrap rounded-full
                border border-white/60
                bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.62))]
                px-4 py-2
                backdrop-blur-2xl
                shadow-[0_12px_40px_rgba(15,23,42,0.06)]
              "
            >
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent_40%)]
                "
              />

              <span className="relative text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                <span className="mr-2 text-[#B8860B]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {domain}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* =========================================
        PREMIUM FLOATING TAGS (CORRECTED POSITIONS)
    ========================================== */}
    {highlights.map((item, index) => {
      // Re-calibrated positions to balance out layout spacing 
      // and prevent collision with the center text or other tags.
      const positions = [
        "left-[4%] top-[16%]",     // Idea Validation
        "right-[4%] top-[16%]",    // Publication Ready
        "left-[2%] bottom-[28%]",  // Structured Mentorship
        "right-[2%] bottom-[28%]", // Research Culture
        "left-[15%] top-[4%]",     // Scientific Rigor
        "right-[15%] bottom-[6%]", // Methodology Review
      ];

      const Icon = item.icon;

      return (
        <motion.div
          key={item.label}
          animate={{
            y: [0, index % 2 === 0 ? -12 : 12, 0],
            rotate: [0, index % 2 === 0 ? -1 : 1, 0],
          }}
          whileHover={{
            scale: 1.08,
            y: -6,
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute z-20 ${positions[index]}`}
          style={{
            transform: "translateZ(40px)",
          }}
        >
          <div
            className="
              group relative overflow-hidden
              rounded-full
              border border-white/50
              bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.58))]
              px-5 py-2.5
              backdrop-blur-2xl
              shadow-[0_12px_40px_rgba(15,23,42,0.08)]
            "
          >
            {/* TOP LIGHT */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(180deg,rgba(255,255,255,0.65),transparent_45%)]
                opacity-80
              "
            />

            {/* GOLD SHIMMER */}
            <motion.div
              animate={{
                x: ["-120%", "140%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.7,
              }}
              className="
                absolute inset-y-0
                w-[35%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/30
                to-transparent
                blur-xl
              "
            />

            {/* INNER BORDER */}
            <div
              className="
                absolute inset-[1px]
                rounded-full
                border border-white/40
              "
            />

            {/* CONTENT */}
            <div className="relative flex items-center gap-3">
              {/* ICON */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md" />

                <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-white/80">
                  <Icon className="h-3.5 w-3.5 text-[#B8860B]" />
                </div>
              </div>

              {/* TEXT */}
              <span
                className="
                  bg-gradient-to-r
                  from-slate-800
                  via-slate-700
                  to-[#B8860B]
                  bg-clip-text
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-transparent
                "
              >
                {item.label}
              </span>
            </div>

            {/* OUTER GLOW */}
            <div
              className="
                absolute inset-0 rounded-full
                opacity-0 blur-2xl transition-opacity duration-500
                group-hover:opacity-100
                bg-[#D4AF37]/20
              "
            />
          </div>
        </motion.div>
      );
    })}

    {/* =========================================
        LIGHT ORBIT RINGS
    ========================================== */}
    <div className="absolute inset-0 animate-hero-orbit-slow">
      <div className="absolute inset-0 rounded-full border border-slate-200/60 shadow-[0_0_120px_rgba(16,185,129,0.08)]" />
    </div>

    <div
      className="absolute inset-8 animate-hero-orbit-rev"
      style={{ animationDuration: "52s" }}
    >
      <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20" />
    </div>

    <div
      className="absolute inset-16 animate-hero-orbit-slow"
      style={{ animationDuration: "80s" }}
    >
      <div className="absolute inset-0 rounded-full border border-emerald-300/20" />

      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.7)]" />
    </div>

    {/* =========================================
        GLASS CONTAINER
    ========================================== */}
    <div className="absolute inset-[10%] rounded-full border border-white/60 bg-white/55 backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_80px_rgba(15,23,42,0.06)]" />

    {/* =========================================
        CENTER LABEL (BETTER SCIENCE THROUGH MENTORSHIP)
    ========================================== */}
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute left-1/2 top-12
        z-30 -translate-x-1/2
        rounded-full
        border border-white/70
        bg-white/85
        px-6 py-3
        backdrop-blur-2xl
        shadow-[0_10px_50px_rgba(15,23,42,0.06)]
        w-max max-w-[90%]
      "
    >
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
        </div>

        <div>
          <p
            className="
              bg-gradient-to-r
              from-emerald-600
              via-cyan-500
              to-[#D4AF37]
              bg-clip-text
              text-[10px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-transparent
            "
          >
            Better Science Through Mentorship
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-slate-500">
            India’s Emerging Research Ecosystem
          </p>
        </div>
      </div>
    </motion.div>

    {/* =========================================
        DNA CORE
    ========================================== */}
    <motion.div
      variants={floatingAnimation}
      animate="animate"
      className="absolute inset-0"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* BACKDROP */}
      <div
        className="
          absolute inset-[18%]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96)_0%,rgba(240,249,255,0.88)_35%,rgba(236,253,245,0.72)_60%,transparent_100%)]
          blur-[14px]
        "
      />

      {/* BLUR LAYER */}
      <motion.img
        src={heroHelix}
        alt=""
        className="absolute inset-0 scale-[1.03] opacity-40 blur-xl"
      />

      {/* SECONDARY LAYER */}
      <motion.img
        src={heroHelix}
        alt=""
        className="absolute inset-0 scale-[1.01] opacity-50 blur-md"
      />

      {/* MAIN DNA */}
      <motion.img
        src={heroHelix}
        alt="Premium futuristic DNA double helix"
        width={1400}
        height={1400}
        initial={{ rotate: -4 }}
        animate={{
          rotate: [0, 2, -2, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          }}
          className="
            relative z-10
            h-full w-full object-contain
            brightness-[0.98]
            contrast-[1.45]
            saturate-[1.6]
            drop-shadow-[0_35px_120px_rgba(16,185,129,0.22)]
          "
        />

        {/* HOLOGRAPHIC LIGHT SWEEP */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute inset-y-0
            left-0
            z-20
            w-[40%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            blur-2xl
          "
        />

        {/* INNER HIGHLIGHT */}
        <div
          className="
            absolute inset-[22%]
            rounded-full
            border border-white/80
            shadow-[0_0_100px_rgba(255,255,255,0.7)]
          "
        />

        {/* CORE GLOW */}
        <div className="absolute inset-[30%] rounded-full bg-emerald-300/20 blur-[100px]" />

        {/* GOLD REFLECTION */}
        <div
          className="
            absolute inset-0 rounded-full
            bg-[linear-gradient(120deg,transparent_20%,rgba(212,175,55,0.12)_45%,transparent_70%)]
            opacity-80
          "
        />
      </motion.div>

      {/* =========================================
          ROTATING SHIMMER
      ========================================== */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-70"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(255,255,255,0.14) 40deg,
              rgba(212,175,55,0.16) 90deg,
              transparent 150deg,
              transparent 240deg,
              rgba(16,185,129,0.14) 300deg,
              transparent 360deg
            )
          `,
          animation: "hero-orbit 18s linear infinite",
          maskImage:
            "radial-gradient(circle, transparent 54%, black 60%, black 70%, transparent 76%)",
        }}
      />

      {/* OUTER RING */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/50" />
    </motion.div>
  );