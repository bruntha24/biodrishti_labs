"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { audiences } from "@/data/audiences";

const particles = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 10 + Math.random() * 8,
  delay: Math.random() * 5,
}));

export const WhoWeHelp = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-white to-[#f5f7fa]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A7C6A]/5 via-transparent to-[#C9A84C]/5" />

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute h-[2px] w-[2px] rounded-full"
              style={{
                backgroundColor: "#0A7C6A",
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, -15, 0],
                opacity: [0, 0.5, 0],
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

      <div className="container relative z-20">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mt-3 max-w-4xl font-serif text-3xl leading-[1.2] text-[#0D1B2A] md:text-4xl lg:text-5xl">
            For students at every stage —
            <span className="italic text-[#0A7C6A]">
              {" "}especially those without strong institutional research support
            </span>
            .
          </h2>

          <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-slate-600 md:text-[17px]">
            Structured guidance for students navigating research without access
            to strong publication culture, experienced mentorship, or modern
            methodological support.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER SPINE */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 bg-[#0D1B2A]/10 md:block">

            <motion.div
              animate={{ y: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-0 h-24 w-[6px] -translate-x-1/2"
            >
              <div className="h-full w-full blur-md bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
            </motion.div>
          </div>

          <div className="space-y-16">

            {audiences.map((a, i) => (
              <motion.div
                key={a.n}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid items-center gap-6 md:grid-cols-3"
              >

                {/* LEFT BOX */}
                <div className="flex justify-end pr-8">
                  <div className="relative">

                    <div className="absolute right-[-32px] top-1/2 h-[2px] w-12 bg-gradient-to-r from-[#C9A84C] via-[#0A7C6A] to-transparent opacity-70" />

                    <div className="min-w-[230px] rounded-2xl border border-[#0D1B2A]/10 bg-white/80 px-7 py-6 backdrop-blur-md shadow-sm">

                      {/* ❌ REMOVED "Stage" TEXT */}
                      <h3 className="mt-1 text-[17px] font-medium text-[#0D1B2A] leading-snug">
                        {a.title}
                      </h3>

                    </div>
                  </div>
                </div>

                {/* CENTER NODE */}
                <div className="hidden justify-center md:flex relative">

                  <motion.div
                    className="absolute h-14 w-14 rounded-full border border-[#C9A84C]/30"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2.5, repeat: Infinity },
                    }}
                  />

                  <motion.div
                    className="absolute h-10 w-10 rounded-full border border-[#0A7C6A]/30"
                    animate={{
                      scale: [0.8, 1.4, 0.8],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0px rgba(201,168,76,0.3)",
                        "0 0 25px rgba(10,124,106,0.4)",
                        "0 0 0px rgba(201,168,76,0.3)",
                      ],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="h-3 w-3 rounded-full bg-[#C9A84C]"
                  />
                </div>

                {/* RIGHT BOX */}
                <div className="flex justify-start pl-8">
                  <div className="relative">

                    <div className="absolute left-[-32px] top-1/2 h-[2px] w-12 bg-gradient-to-l from-[#C9A84C] via-[#0A7C6A] to-transparent opacity-70" />

                    <div className="min-w-[320px] rounded-2xl border border-[#0D1B2A]/10 bg-white/80 px-7 py-6 backdrop-blur-md shadow-sm">

                      <p className="text-[15px] leading-[1.9] text-slate-600">
                        {a.desc}
                      </p>

                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};