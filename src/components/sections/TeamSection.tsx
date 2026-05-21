"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

import { DomainTag } from "@/components/cards/DomainTag";
import { ParticleField } from "@/components/ui/ParticleField";

import { domains, teamSection } from "@/data/domains";

import { EASE } from "@/utils/motion";


const floatingParticles = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 8 + Math.random() * 6,
  delay: Math.random() * 5,
}));

// SUB-COMPONENT FOR ANIMATED COUNTERS
const StatCard = ({ 
  value, 
  label, 
  index 
}: { 
  value: string; 
  label: string; 
  index: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (e.g., "20+" -> 20 and "+")
  const numericValue = parseInt(value, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        delay: index * 0.15,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group rounded-2xl border border-[#0A7C6A]/10 bg-white/90 p-5 backdrop-blur-xl transition-all duration-500 hover:border-[#0A7C6A]/30 hover:shadow-[0_12px_40px_rgba(10,124,106,0.08)]"
    >
      <div className="text-4xl font-semibold tracking-tight text-[#0D1B2A] flex items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>

      {/* FIXED: Using direct 'label' prop instead of undefined 'stat.label' */}
      <div className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-[#0A7C6A]">
        {label}
      </div>
    </motion.div>
  );
};

export const TeamSection = () => (
<section
  id="team"
  className="relative overflow-hidden bg-[#F8FBFA] py-28 lg:py-40"
>

    {/* PREMIUM BACKGROUND */}
    <div className="absolute inset-0 -z-30">

      

      {/* BASE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCFDFC] via-[#F8FBFA] to-[#F3F8F7]" />

      {/* CINEMATIC LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,124,106,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.08),transparent_40%)]" />

      {/* TOP TEAL GLOW */}
      <div className="absolute left-[-12%] top-[-10%] h-[620px] w-[620px] rounded-full bg-[#0A7C6A]/10 blur-[160px]" />

      {/* GOLD GLOW */}
      <div className="absolute bottom-[-18%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#C9A84C]/10 blur-[170px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[180px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,124,106,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,124,106,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />

    </div>

    {/* PARTICLES */}
    <ParticleField count={20} className="-z-10 opacity-30" />

    {/* FLOATING PARTICLES */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#C9A84C]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.7, 0.5],
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

    {/* EXTRA SOFT LAYER */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.92))]" />

    <div className="container relative z-20 grid gap-24 lg:grid-cols-12">

      {/* LEFT SIDE */}
      <div className="lg:col-span-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
        >

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-5"
          >

            <motion.div
              animate={{
                width: ["40px", "80px", "40px"],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
            />

            

          </motion.div>

          {/* HEADING */}
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-[#0D1B2A] md:text-5xl lg:text-[3.8rem]">

            Mentors from{" "}

            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(201,168,76,0.15)",
                  "0 0 28px rgba(201,168,76,0.4)",
                  "0 0 10px rgba(201,168,76,0.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="italic text-[#0A7C6A]"
            >
              active research
            </motion.span>

            {" "}— bringing publication culture and scientific rigor to every student.

          </h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-10 text-[18px] leading-[2] text-slate-600"
          >
            {teamSection.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="mt-6 text-[16px] leading-[1.95] text-slate-500"
          >
            Our mentors bring publication culture, modern scientific rigor,
            reviewer-level standards, and methodological depth directly to
            students who otherwise lack structured institutional mentorship.
          </motion.p>

          {/* TRACK RECORD */}
          <div className="mt-14">

            <div className="mb-6 text-[11px] uppercase tracking-[0.35em] text-[#C9A84C]">
              Our Track Record
            </div>

            <div className="space-y-5">

              {teamSection.trackRecord.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-5"
                >

                  {/* GOLD DOT */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(201,168,76,0.2)",
                        "0 0 18px rgba(201,168,76,0.7)",
                        "0 0 0px rgba(201,168,76,0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C9A84C]"
                  />

                  <p className="text-[15px] leading-[1.9] text-slate-600 transition-all duration-300 group-hover:text-[#0A7C6A]">
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-6 lg:col-start-7">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          whileHover={{
            y: -6,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/75 p-8 shadow-[0_25px_90px_rgba(10,124,106,0.08)] backdrop-blur-2xl md:p-10"
        >

          {/* TOP BORDER LIGHT */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

          {/* SHIMMER */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-[120px] bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent blur-2xl"
          />

          <div className="relative z-10">

            <div className="text-[11px] uppercase tracking-[0.35em] text-[#C9A84C]">
              Domains We Cover
            </div>

            <h3 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-[#0D1B2A]">
              Cross-disciplinary expertise across modern life sciences.
            </h3>

            <p className="mt-5 text-[15px] leading-[1.9] text-slate-600">
              From genomics and cancer biology to biomaterials and computational
              biology — our mentorship spans the full spectrum of modern life
              sciences research.
            </p>

          </div>

          {/* TAGS */}
<div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {domains.map((d, i) => (
    <motion.div
      key={d}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: i * 0.03,
        duration: 0.4,
      }}
      whileHover={{ scale: 1.04 }}
      className="w-full"
    >
      {/* 🔥 FIX WRAPPER TO PREVENT OVERLAP */}
      <div className="relative flex items-start gap-4 rounded-2xl border border-[#0A7C6A]/10 bg-white/80 px-5 py-4 backdrop-blur-md shadow-sm">

        {/* NUMBER (SAFE FIXED LAYOUT) */}
        <div className="shrink-0 text-xs font-semibold tracking-widest text-[#C9A84C]">
          {String(i + 1).padStart(2, "0")}
        </div>

        {/* TEXT */}
        <div className="min-w-0">
          <div className="text-[15px] font-medium text-[#0D1B2A] leading-snug break-words">
            {d}
          </div>
        </div>

      </div>
    </motion.div>
  ))}
</div>

          {/* STATS */}
          <div className="relative z-10 mt-14 grid gap-5 sm:grid-cols-3">

            {[
              {
                value: "20+",
                label: "Students mentored across India",
              },
              {
                value: "12+",
                label: "Students currently under mentorship",
              },
              {
                value: "25+",
                label: "Life sciences domains supported",
              },
            ].map((stat, index) => (
              <StatCard 
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}

          </div>

        </motion.div>

      </div>
    </div>
  </section>
);