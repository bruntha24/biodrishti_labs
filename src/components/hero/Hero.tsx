"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
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

  const { mx, my, sx, sy } = useParallaxPointer(1);

  /* ================= SMOOTH PARALLAX ================= */
  const smoothSX = useSpring(sx, {
    stiffness: 60,
    damping: 20,
    mass: 0.7,
  });

  const smoothSY = useSpring(sy, {
    stiffness: 60,
    damping: 20,
    mass: 0.7,
  });

  /* ================= VISUAL PARALLAX ================= */
  const visualX = useTransform(smoothSX, (v) => v * 28);
  const visualY = useTransform(smoothSY, (v) => v * 28);

  const visualRotX = useTransform(smoothSY, (v) => v * -6);
  const visualRotY = useTransform(smoothSX, (v) => v * 8);

  /* ================= AURORA ================= */
  const auroraX = useTransform(smoothSX, (v) => v * 45);
  const auroraY = useTransform(smoothSY, (v) => v * 45);

  /* ================= TEXT PARALLAX ================= */
  const textX = useTransform(smoothSX, (v) => v * -10);
  const textY = useTransform(smoothSY, (v) => v * -10);

  /* ================= SCROLL EFFECTS ================= */
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const heroY = useTransform(scrollY, [0, 700], [0, -90]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.97]);

  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.08]);

  /* ================= MOUSE TRACK ================= */
  const { onMouseMove, onMouseLeave } = useMouseTracking(ref, mx, my);

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{
        perspective: 2000,
      }}
    >
      {/* ================= CINEMATIC BACKGROUND ================= */}
      <motion.div
        style={{
          scale: backgroundScale,
        }}
        className="absolute inset-0 -z-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white_0%,#f8fafc_40%,#eef2f7_100%)]" />

        {/* RADIAL GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,184,166,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(198,179,122,0.14),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(10,124,106,0.08),transparent_40%)]" />
      </motion.div>

      {/* ================= AURORA ================= */}
      <GlowBackground
        auroraX={auroraX}
        auroraY={auroraY}
        variant="hero"
      />

      {/* ================= FLOATING LIGHTS ================= */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.08, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-20%] -z-20 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#C6B37A]/10 blur-[190px]"
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-10%] top-[15%] -z-20 h-[520px] w-[520px] rounded-full bg-[#7FB8A6]/10 blur-[170px]"
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] -z-20 h-[420px] w-[420px] rounded-full bg-[#0A7C6A]/10 blur-[150px]"
      />

      {/* ================= GRID ================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
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

      {/* ================= PARTICLES ================= */}
      <ParticleField count={22} className="-z-10 opacity-70" />

      {/* ================= VIGNETTE ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(255,255,255,0.95)_100%)]" />

      {/* ================= FLOATING RINGS ================= */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A7C6A]/5"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6B37A]/5"
      />

      {/* ================= MAIN CONTENT ================= */}
      {/* FIXED: removed delayed appearance issue */}
      <motion.div
        initial={false}
        style={{
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale,
        }}
        className="container relative z-10 grid grid-cols-1 items-center gap-20 lg:grid-cols-12"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 lg:col-span-6"
        >
          <HeroContent textX={textX} textY={textY} />
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 lg:col-span-6"
        >
          <HeroVisual
            visualX={visualX}
            visualY={visualY}
            visualRotX={visualRotX}
            visualRotY={visualRotY}
          />
        </motion.div>
      </motion.div>

      {/* ================= BOTTOM LIGHT FADE ================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-white/70 to-white" />

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.a
        href="#about"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          y: [0, 6, 0],
        }}
        transition={{
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{ opacity: heroOpacity }}
        className="pointer-events-auto absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.45em] text-black/40">
          Explore
        </span>

        <div className="relative flex h-14 w-[1px] overflow-hidden bg-black/10">
          <motion.span
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#C6B37A] to-[#7FB8A6]"
          />
        </div>
      </motion.a>
    </section>
  );
};