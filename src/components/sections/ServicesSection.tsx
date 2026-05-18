import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export const ServicesSection = () => (
  <section
    id="services"
    className="relative border-y border-border/60 bg-background-deep/40 py-28 lg:py-36 overflow-hidden"
  >
    <div className="container">

      {/* HEADER */}
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          

          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            How we help students overcome{" "}
            <span className="italic text-primary-glow">
              institutional research gaps
            </span>
            .
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Each engagement is delivered by researchers actively working in your domain —
          not generalist academic coaches, but practitioners who understand publication realities.
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div className="relative isolate">

        {/* =========================
           SLOW PREMIUM SCANNER FIELD
        ========================= */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">

          {/* MAIN SCAN BEAM (SLOW + SOFT) */}
          <motion.div
            animate={{ x: ["-40%", "140%"] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[50%] z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent" />
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.9)]" />

            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scaleX: [0.9, 1.2, 0.9],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 h-full w-[8px] -translate-x-1/2 bg-white/10 blur-[2px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent blur-3xl opacity-60" />
          </motion.div>

          {/* SECONDARY VERY SLOW DEPTH SCAN */}
          <motion.div
            animate={{ x: ["-60%", "160%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none absolute inset-y-0 left-0 w-[70%]
              bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent
              blur-2xl opacity-30
            "
          />
        </div>

        {/* GRID */}
        <div className="relative z-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

      </div>
    </div>
  </section>
);