import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

import { GlowBackground } from "@/components/ui/GlowBackground";
import { ParticleField } from "@/components/ui/ParticleField";

import { useParallaxPointer } from "@/components/animations/parallax";
import { useMouseTracking } from "@/hooks/useMousePosition";

import { EASE } from "@/utils/motion";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { mx, my, sx, sy } = useParallaxPointer(1);

  /* =========================================
     PARALLAX
  ========================================== */
  const visualX = useTransform(sx, (v) => v * 24);
  const visualY = useTransform(sy, (v) => v * 24);

  const visualRotX = useTransform(sy, (v) => v * -7);
  const visualRotY = useTransform(sx, (v) => v * 9);

  const auroraX = useTransform(sx, (v) => v * 50);
  const auroraY = useTransform(sy, (v) => v * 50);

  const textX = useTransform(sx, (v) => v * -10);
  const textY = useTransform(sy, (v) => v * -10);

  /* =========================================
     SCROLL ANIMATION
  ========================================== */
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);

  const heroY = useTransform(scrollY, [0, 700], [0, -100]);

  const heroScale = useTransform(scrollY, [0, 700], [1, 0.95]);

  const { onMouseMove, onMouseLeave } = useMouseTracking(
    ref,
    mx,
    my
  );

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="
        relative isolate overflow-hidden
        min-h-screen
        pt-32 pb-24
        lg:pt-40 lg:pb-32
      "
      style={{
        background: "var(--gradient-hero)",
        perspective: 1600,
      }}
    >
      {/* =========================================
         BASE CINEMATIC BACKGROUND
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,hsl(var(--background))_0%,hsl(var(--background-deep))_45%,#020617_100%)]" />

      {/* =========================================
         AURORA BACKGROUND
      ========================================== */}
      <GlowBackground
        auroraX={auroraX}
        auroraY={auroraY}
        variant="hero"
      />

      {/* =========================================
         GOLD AMBIENT LIGHT
      ========================================== */}
      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute left-1/2 top-[-20%]
          -z-20
          h-[700px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[160px]
        "
      />

      {/* =========================================
         EMERALD GLOW
      ========================================== */}
      <div
        className="
          pointer-events-none
          absolute right-[-10%] top-[15%]
          -z-20
          h-[500px] w-[500px]
          rounded-full
          bg-emerald-500/10
          blur-[140px]
        "
      />

      {/* =========================================
         LIGHT BEAMS
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute -left-1/4 top-0
            h-full w-1/2
            animate-beam-sweep
            bg-gradient-to-r
            from-transparent
            via-emerald-400/10
            to-transparent
          "
        />

        <div
          className="
            absolute -left-1/4 top-0
            h-full w-1/3
            animate-beam-sweep
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/10
            to-transparent
          "
          style={{
            animationDelay: "-5s",
            animationDuration: "14s",
          }}
        />
      </div>

      {/* =========================================
         PREMIUM GRID
      ========================================== */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          -z-10
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* =========================================
         PARTICLES
      ========================================== */}
      <ParticleField count={28} className="-z-10" />

      {/* =========================================
         VIGNETTE
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(2,6,23,0.95)_100%)]" />

      {/* =========================================
         TOP SCIENTIFIC LABEL
      ========================================== */}
      <motion.div
  initial={{ opacity: 0, y: -40, scale: 0.94 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    delay: 0.5,
    duration: 1.2,
    ease: EASE,
  }}
  className="
    absolute left-1/2 top-16
    z-20 hidden
    -translate-x-1/2
    lg:flex
    items-center gap-4

    rounded-full
    border border-white/10
    bg-white/[0.04]

    px-6 py-3

    backdrop-blur-2xl
    shadow-[0_10px_50px_rgba(0,0,0,0.45)]

    before:absolute
    before:inset-0
    before:rounded-full
    before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_45%,transparent_100%)]

    overflow-hidden
  "
>
  
  {/* glowing dot */}
  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      relative z-10
      h-2 w-2
      rounded-full
      bg-[#D4AF37]
      shadow-[0_0_18px_rgba(212,175,55,0.9)]
    "
  />

  {/* divider */}
  <div className="relative z-10 h-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

  {/* text */}
  <div className="relative z-10 flex items-center gap-2">
    <span
      className="
        text-[9px]
        font-medium
        uppercase
        tracking-[0.35em]
        text-[#F5D67B]
      "
    >
      BioDrishti
    </span>

    <span className="text-white/20 text-[8px]">•</span>

    <span
      className="
        text-[9px]
        uppercase
        tracking-[0.28em]
        text-white/55
      "
    >
      Research Mentorship
    </span>
  </div>
</motion.div>
      {/* =========================================
         MAIN CONTENT
      ========================================== */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale,
        }}
        className="
          container relative z-10
          grid grid-cols-1
          items-center gap-20
          lg:grid-cols-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 lg:col-span-6">
          <HeroContent textX={textX} textY={textY} />
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative z-10 lg:col-span-6">
          <HeroVisual
            visualX={visualX}
            visualY={visualY}
            visualRotX={visualRotX}
            visualRotY={visualRotY}
          />
        </div>
      </motion.div>

      {/* =========================================
         BOTTOM FADE
      ========================================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-background/70 to-background" />

      {/* =========================================
         SCROLL INDICATOR
      ========================================== */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1.2,
          ease: EASE,
        }}
        style={{ opacity: heroOpacity }}
        className="
          pointer-events-auto
          absolute bottom-8 left-1/2
          hidden -translate-x-1/2
          md:flex flex-col items-center gap-4
        "
      >
        <span className="text-[10px] uppercase tracking-[0.45em] text-white/40">
          Explore
        </span>

        <div
          className="
            relative flex h-14 w-[1px]
            overflow-hidden
            bg-white/10
          "
        >
          <motion.span
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute inset-x-0 top-0
              h-1/2
              bg-gradient-to-b
              from-[#D4AF37]
              to-emerald-400
            "
          />
        </div>
      </motion.a>

      {/* =========================================
         CORNER DETAILS
      ========================================== */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="space-y-4">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

          <p className="rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl]">
            GENETICS · IMMUNOLOGY · BIOMATERIALS
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="space-y-4">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />

          <p className="rotate-180 text-[10px] uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-rl]">
            BIOENGINEERING · MOLECULAR BIOLOGY
          </p>
        </div>
      </div>
    </section>
  );
};