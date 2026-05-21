import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  AnimatedText,
  type AnimatedTextWord,
} from "@/components/ui/AnimatedText";

import { EASE } from "@/utils/motion";

const HEADLINE_WORDS: AnimatedTextWord[] = [
  { text: "Better" },
  { text: "Thinking" },
  { text: "at" },
  { text: "the" },
  { text: "Beginning" },
  { text: "Leads", italic: true },
  { text: "to" },
  { text: "Better" },
  { text: "Science" },
  { text: "at" },
  { text: "the" },
  { text: "End" },
];

const STATS = [
  { value: 12, suffix: "+", label: "Active mentors" },
  { value: 8, suffix: "", label: "Research domains" },
  { value: 50, suffix: "+", label: "Students guided" },
];

interface HeroContentProps {
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

/* ================= FAST COUNT UP ================= */
const CountUp = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 0.9, // 🔥 faster
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, value, isInView]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const HeroContent = ({
  textX,
  textY,
}: HeroContentProps) => (
  <motion.div
    style={{ x: textX, y: textY }}
    className="lg:col-span-6 overflow-visible pb-2"
  >
    {/* ================= HEADLINE ================= */}
    <AnimatedText
      words={HEADLINE_WORDS}
      className="
        font-serif
        text-5xl
        leading-[1.08]   /* 🔥 FIXED (prevents cut g / letters) */
        text-[#0D1B2A]
        md:text-6xl
        lg:text-[4.25rem]
        pb-1
      "
    />

    {/* ================= SUBTEXT ================= */}
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 1.2,
        ease: EASE,
      }}
      className="
        mt-8
        max-w-[42rem]
        text-lg
        leading-[1.9]
        text-[#0D1B2A]/80
      "
    >
      Expert research mentorship for life sciences students across India.
      From idea validation to publication readiness — we help you design
      research that matters, regardless of your institution's infrastructure.
    </motion.p>

    {/* ================= BUTTONS ================= */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        delay: 1.4,
        ease: EASE,
      }}
      className="mt-10 flex flex-wrap items-center gap-5"
    >
      <a href="#contact">
        <Button
          size="lg"
          className="
            bg-[#0A7C6A]
            px-7 py-6
            text-base
            text-white
            shadow-lg
            transition
            hover:scale-[1.03]
          "
        >
          Get in Touch
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </a>

      <a
        href="#services"
        className="
          group inline-flex items-center gap-2
          text-sm font-medium text-[#0A7C6A]
        "
      >
        Explore our services

        <span
          className="
            block h-px w-8 bg-[#0A7C6A]
            transition-all duration-300
            group-hover:w-14
          "
        />
      </a>
    </motion.div>

    {/* ================= STATS ================= */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        delay: 1.5,
        ease: EASE,
      }}
      className="
        mt-16 grid max-w-md grid-cols-3 gap-6
        border-t border-[#0D1B2A]/10 pt-8
      "
    >
      {STATS.map((stat) => (
        <div key={stat.label}>
          <div className="font-serif text-3xl font-semibold text-[#0D1B2A]">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </div>

          <div className="mt-2 text-sm text-[#0D1B2A]/75">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  </motion.div>
);