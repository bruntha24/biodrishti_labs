"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

import { GlowBackground } from "@/components/ui/GlowBackground";
import { ParticleField } from "@/components/ui/ParticleField";

import { useParallaxPointer } from "@/components/animations/parallax";
import { useMouseTracking } from "@/hooks/useMousePosition";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const { mx, my, sx, sy } = useParallaxPointer(1);

  const smoothSX = useSpring(sx, {
    stiffness: prefersReducedMotion ? 0 : 120,
    damping: prefersReducedMotion ? 0 : 25,
    mass: 0.5,
  });

  const smoothSY = useSpring(sy, {
    stiffness: prefersReducedMotion ? 0 : 120,
    damping: prefersReducedMotion ? 0 : 25,
    mass: 0.5,
  });

  const visualX = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * 28
  );
  const visualY = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * 28
  );

  const visualRotX = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * -6
  );
  const visualRotY = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * 8
  );

  const auroraX = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * 45
  );
  const auroraY = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * 45
  );

  const textX = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * -10
  );
  const textY = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * -10
  );

  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const heroY = useTransform(scrollY, [0, 700], [
    0,
    prefersReducedMotion ? 0 : -90,
  ]);
  const heroScale = useTransform(scrollY, [0, 700], [
    1,
    prefersReducedMotion ? 1 : 0.97,
  ]);

  const backgroundScale = useTransform(scrollY, [0, 800], [
    1,
    prefersReducedMotion ? 1 : 1.08,
  ]);

  const { onMouseMove, onMouseLeave } = useMouseTracking(ref, mx, my);

  return (
    <section
      ref={ref}
      onMouseMove={prefersReducedMotion ? undefined : onMouseMove}
      onMouseLeave={prefersReducedMotion ? undefined : onMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-background pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{ perspective: 2000 }}
    >
      {/* ================= SAFE BACKGROUND ================= */}
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 -z-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--background))_0%,#e2e8f0_55%,#d6deea_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,184,166,0.08),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(198,179,122,0.06),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(10,124,106,0.04),transparent_60%)]" />
      </motion.div>

      {/* ================= AURORA ================= */}
      <GlowBackground auroraX={auroraX} auroraY={auroraY} variant="hero" />

      {/* ================= FLOATING LIGHTS (REDUCED IMPACT) ================= */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                opacity: [0.04, 0.10, 0.04],
                scale: [1, 1.03, 1],
                y: [0, -10, 0],
              }
        }
        transition={{ duration: 16, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-[-20%] -z-20 h-[520px] w-[520px] md:h-[760px] md:w-[760px] -translate-x-1/2 rounded-full bg-[#C6B37A]/10 blur-[120px] md:blur-[180px]"
      />

      {/* ================= FIXED VISUAL BACKDROP (IMPORTANT) ================= */}
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-0">
        {/* THIS IS THE KEY FIX: dark support behind image */}
        <div className="h-[360px] w-[360px] md:h-[600px] md:w-[600px] bg-black/10 md:bg-black/5 rounded-full blur-[100px]" />
      </div>

      {/* ================= GRID ================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* ================= PARTICLES (SOFT) ================= */}
      <ParticleField
        count={prefersReducedMotion ? 0 : 14}
        className="-z-10 opacity-50 md:opacity-70"
      />

      {/* ================= FLOATING RINGS ================= */}
      <motion.div
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A7C6A]/5"
      />

      <motion.div
        animate={prefersReducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6B37A]/5"
      />

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale,
        }}
        className="relative z-20 container grid grid-cols-1 items-center gap-20 lg:grid-cols-12"
      >
        {/* TEXT */}
        <div className="lg:col-span-6">
          <HeroContent textX={textX} textY={textY} />
        </div>

        {/* VISUAL (FORCED ABOVE EVERYTHING) */}
        <div className="relative lg:col-span-6 z-30">
          <HeroVisual
            visualX={visualX}
            visualY={visualY}
            visualRotX={visualRotX}
            visualRotY={visualRotY}
          />
        </div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.a
        href="#about"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        style={{ opacity: heroOpacity }}
        className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[11px] italic uppercase tracking-[0.45em] text-black/50 pb-1">
          Explore
        </span>

        <div className="relative flex h-14 w-[1px] overflow-hidden bg-black/10">
          <motion.span
            animate={prefersReducedMotion ? {} : { y: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#C6B37A] via-[#7FB8A6] to-transparent"
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;