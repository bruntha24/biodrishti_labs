"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import dnaImage from "@/assets/images/img.png";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { AudienceCard } from "@/components/cards/AudienceCard";
import { audiences } from "@/data/audiences";

gsap.registerPlugin(ScrollTrigger);

// stable particles (IMPORTANT FIX)
const particles = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 10 + Math.random() * 10,
  delay: Math.random() * 5,
}));

export const WhoWeHelp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -40,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(imgRef.current, {
        scale: 1.02,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative container py-20 lg:py-24 overflow-hidden"
      style={{ perspective: "1200px" }}
    >

      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* DNA IMAGE (clean + visible) */}
        <img
          ref={imgRef}
          src={dnaImage}
          alt="DNA Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
        />

        {/* NAVY BASE */}
        <div className="absolute inset-0 bg-[#0D1B2A]/88" />

        {/* TEAL + GOLD FIELD */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A7C6A]/12 via-transparent to-[#C9A84C]/10" />

        {/* GOLD ENERGY HAZE */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/5 to-transparent blur-3xl" />

        {/* =========================
            ✨ GOLD FLOATING PARTICLES (FIXED + SMOOTH)
        ========================= */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute h-[2px] w-[2px] rounded-full"
              style={{
                backgroundColor: "#C9A84C",
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, -20, 0],
                opacity: [0, 0.7, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* =========================
          HEADER
      ========================= */}
      <div className="mb-14 max-w-xl relative z-20">

        <SectionHeading number="03" label="Who We Help" />

        <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl text-white">
  Built for researchers at the{" "}
  <span style={{ color: "#0A7C6A" }} className="italic">
    earliest stages
  </span>{" "}
  of{" "}
  <span style={{ color: "#0e9e88" }} className="italic">
    research practice
  </span>
</h2>

        <p className="mt-3 text-sm text-white/60">
          A structured biotech intelligence layer aligned with molecular research stages.
        </p>

      </div>

      {/* =========================
          CORE SYSTEM
      ========================= */}
      <div className="relative z-20">

        {/* CENTER SPINE (IMPROVED ENERGY LOOK) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10">

          {/* moving gold beam */}
          <motion.div
            animate={{ y: ["-10%", "110%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-0 w-[6px] h-28 -translate-x-1/2"
          >
            <div
              className="h-full w-full blur-md"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
              }}
            />
          </motion.div>

          {/* soft glow pulse */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 bg-[#C9A84C]/10 blur-xl"
          />
        </div>

        {/* =========================
            NODES
        ========================= */}
        <div className="space-y-20 relative z-30">

          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
              }}
              className="relative grid md:grid-cols-3 items-center"
            >

              {/* LEFT */}
              <div className="text-right pr-10 text-white">
                <div className="text-[10px] tracking-[0.35em] text-white/40 uppercase">
                  Node 0{i + 1}
                </div>
                <div className="mt-1 text-base text-white/90">
                  {a.title}
                </div>
              </div>

              {/* CENTER DOT */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "#C9A84C" }}
                />
              </div>

              {/* RIGHT */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="pl-10"
              >
                <div className="relative group">

                  <div
                    className="absolute -inset-5 opacity-0 group-hover:opacity-100 blur-2xl transition rounded-xl"
                    style={{ backgroundColor: "rgba(10,124,106,0.12)" }}
                  />

                  <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-[#0e9e88]/40 transition" />

                  <AudienceCard audience={a} index={i} />
                </div>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};