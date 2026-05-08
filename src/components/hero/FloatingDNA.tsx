import { motion, type MotionValue } from "framer-motion";
import { floatingAnimation } from "@/components/animations/floating";
import heroHelix from "@/assets/images/hero-helix.png";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

export const FloatingDNA = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: FloatingDNAProps) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.82,
      filter: "blur(24px)",
    }}
    animate={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    }}
    style={{
      x: visualX,
      y: visualY,
      rotateX: visualRotX,
      rotateY: visualRotY,
      transformStyle: "preserve-3d",
      perspective: 1800,
    }}
    className="relative mx-auto aspect-square w-full max-w-[760px]"
  >
    {/* =========================================
       CINEMATIC AMBIENT GLOW
    ========================================== */}
    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[160px]" />

    <div className="absolute inset-[10%] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

    <div className="absolute inset-[22%] rounded-full bg-cyan-400/10 blur-[100px]" />

    {/* =========================================
       ENERGY ORBIT RINGS
    ========================================== */}
    <div className="absolute inset-0 animate-hero-orbit-slow">
      <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_120px_rgba(16,185,129,0.15)]" />
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
      <div className="absolute inset-0 rounded-full border border-emerald-300/10" />

      <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.95)]" />
    </div>

    {/* =========================================
       PREMIUM GLASS CONTAINER
    ========================================== */}
    <div className="absolute inset-[10%] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" />

    {/* =========================================
       FLOATING PARTICLES
    ========================================== */}
    <div className="absolute left-[14%] top-[18%] h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.95)] animate-pulse" />

    <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_28px_rgba(253,224,71,0.9)] animate-pulse" />

    <div className="absolute bottom-[18%] left-[20%] h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_32px_rgba(252,211,77,0.9)] animate-pulse" />

    <div className="absolute bottom-[24%] right-[16%] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.85)] animate-pulse" />

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
      {/* DNA IMAGE */}
      <motion.img
        src={heroHelix}
        alt="Premium futuristic DNA double helix for BioDrishti"
        width={1400}
        height={1400}
        initial={{ rotate: -6 }}
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
          drop-shadow-[0_40px_160px_rgba(16,185,129,0.45)]
          brightness-110 contrast-125 saturate-150
        "
      />

      {/* CORE GLOW */}
      <div className="absolute inset-[30%] rounded-full bg-emerald-400/20 blur-[90px] mix-blend-screen" />

      {/* GOLD REFLECTION */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(120deg,transparent_20%,rgba(212,175,55,0.18)_45%,transparent_70%)]
          opacity-70
        "
      />
    </motion.div>

    {/* =========================================
       ROTATING SHIMMER
    ========================================== */}
    <div
      className="pointer-events-none absolute inset-0 rounded-full opacity-80"
      style={{
        background: `
          conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(255,255,255,0.08) 40deg,
            rgba(212,175,55,0.20) 90deg,
            transparent 150deg,
            transparent 240deg,
            rgba(16,185,129,0.18) 300deg,
            transparent 360deg
          )
        `,
        animation: "hero-orbit 18s linear infinite",
        maskImage:
          "radial-gradient(circle, transparent 54%, black 60%, black 70%, transparent 76%)",
      }}
    />

    {/* =========================================
       SCIENTIFIC SCANLINES
    ========================================== */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
        backgroundSize: "100% 6px",
      }}
    />

    {/* =========================================
       FLOATING INFO CARD — GENOMICS
    ========================================== */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="
        glass-panel absolute left-0 top-10
        rounded-2xl border border-white/10
        bg-white/[0.04]
        px-5 py-4
        backdrop-blur-xl
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
      "
    >
      <p className="text-[10px] uppercase tracking-[0.45em] text-amber-200/90">
        GENOMICS
      </p>

      <div className="mt-2 h-px w-full bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />

      <p className="mt-3 text-sm font-medium text-white/80">
        Molecular Intelligence
      </p>

      <p className="mt-1 max-w-[180px] text-xs leading-relaxed text-white/50">
        Research mentorship for future scientists across genetics,
        molecular biology, and biomedical innovation.
      </p>
    </motion.div>

    {/* =========================================
       FLOATING INFO CARD — BIODRISHTI
    ========================================== */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="
        glass-panel absolute bottom-8 right-0
        rounded-2xl border border-white/10
        bg-white/[0.04]
        px-5 py-4
        text-right
        backdrop-blur-xl
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
      "
    >
      <p className="text-[10px] uppercase tracking-[0.45em] text-yellow-100/90">
        BIODRISHTI
      </p>

      <div className="mt-2 h-px w-full bg-gradient-to-l from-yellow-400/70 to-transparent" />

      <p className="mt-3 text-sm font-medium text-white/80">
        Better Thinking. Better Science.
      </p>

      <p className="mt-1 max-w-[210px] text-xs leading-relaxed text-white/50">
        Guiding students from idea validation to publication readiness
        through expert-led scientific mentorship.
      </p>
    </motion.div>

    {/* =========================================
       MICRO TAGS
    ========================================== */}
    <div className="absolute left-[6%] top-1/2 hidden -translate-y-1/2 lg:block">
      <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#F5D67B] backdrop-blur-xl">
        Cancer Biology
      </div>
    </div>

    <div className="absolute right-[4%] top-[40%] hidden lg:block">
      <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200 backdrop-blur-xl">
        Immunology
      </div>
    </div>

    <div className="absolute bottom-[6%] left-1/2 hidden -translate-x-1/2 lg:block">
      <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-xl">
        Biomaterials
      </div>
    </div>

    {/* =========================================
       OUTER VIGNETTE
    ========================================== */}
    <div className="absolute inset-0 rounded-full ring-1 ring-white/5" />
  </motion.div>
);