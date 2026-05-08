import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Microscope,
  FlaskConical,
  FileCheck2,
  GraduationCap,
  Menu,
  X,
  Linkedin,
  ArrowUpRight,
  Dna,
} from "lucide-react";
import heroHelix from "@/assets/hero-helix.png";
import teamBg from "@/assets/team-bg.jpg";

/* ---------- shared motion presets ---------- */
const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
  }),
};

/* ---------- Logo ---------- */
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative grid h-9 w-9 place-items-center rounded-md border border-primary-glow/40 bg-primary/10">
      <Dna className="h-4 w-4 text-primary-glow" strokeWidth={1.6} />
    </div>
    <div className="leading-tight">
      <div className="font-serif text-lg tracking-tight">BioDrishti</div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Research Mentorship
      </div>
    </div>
  </div>
);

/* ---------- Scroll progress ---------- */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-primary via-primary-glow to-accent"
    />
  );
};

/* ---------- Navbar ---------- */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Institutions", href: "#institutions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-glow transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact">
            <Button variant="hero" size="sm">Get in Touch</Button>
          </a>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button variant="hero" size="sm" className="w-full">Get in Touch</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ---------- Hero (cinematic) ---------- */
const HEADLINE_WORDS = [
  { text: "Advancing", italic: false },
  { text: "Life", italic: false },
  { text: "Sciences", italic: false },
  { text: "Through", italic: true },
  { text: "Research", italic: false },
  { text: "Mentorship", italic: false },
];

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: 0.4 + i * 0.09, ease: EASE },
  }),
};

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 10,
        size: 1 + Math.random() * 2,
        x: (Math.random() - 0.5) * 60,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 block rounded-full bg-primary-glow/70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error custom CSS vars
            "--p-x": `${p.x}px`,
            "--p-opacity": p.opacity,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Smooth pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const visualX = useTransform(sx, (v) => v * 22);
  const visualY = useTransform(sy, (v) => v * 22);
  const visualRotX = useTransform(sy, (v) => v * -6);
  const visualRotY = useTransform(sx, (v) => v * 8);
  const auroraX = useTransform(sx, (v) => v * 40);
  const auroraY = useTransform(sy, (v) => v * 40);
  const textX = useTransform(sx, (v) => v * -8);
  const textY = useTransform(sy, (v) => v * -8);

  // Scroll-driven hero compression
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.96]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / r.width);
    my.set((e.clientY - r.top - r.height / 2) / r.height);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate min-h-[100svh] overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{ background: "var(--gradient-hero)", perspective: 1400 }}
    >
      {/* Deep space base */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_hsl(var(--background))_0%,_hsl(var(--background-deep))_70%)]" />

      {/* Aurora layers */}
      <motion.div
        style={{ x: auroraX, y: auroraY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-[-10%] h-[640px] w-[640px] rounded-full bg-primary/15 blur-[140px] animate-aurora" />
        <div
          className="absolute bottom-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-primary-glow/10 blur-[140px] animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute left-1/3 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/8 blur-[160px] animate-aurora"
          style={{ animationDelay: "-12s" }}
        />
      </motion.div>

      {/* Volumetric beams */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-full w-1/2 animate-beam-sweep bg-gradient-to-r from-transparent via-primary-glow/8 to-transparent" />
        <div
          className="absolute -left-1/4 top-0 h-full w-1/3 animate-beam-sweep bg-gradient-to-r from-transparent via-accent/6 to-transparent"
          style={{ animationDelay: "-4s", animationDuration: "13s" }}
        />
      </div>

      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-glow)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_hsl(var(--background-deep))_100%)]" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12"
      >
        <motion.div style={{ x: textX, y: textY }} className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
            </span>
            Life Sciences · Est. 2024
          </motion.div>

          <h1 className="font-serif text-balance text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
            {HEADLINE_WORDS.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pr-[0.22em] align-bottom">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={wordReveal}
                  className={`inline-block ${
                    w.italic ? "italic text-primary-glow" : ""
                  }`}
                >
                  {w.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: EASE }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            Structured guidance for students navigating research in genomics,
            molecular biology, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a href="#contact" className="cta-sheen relative overflow-hidden rounded-md">
              <Button variant="hero" size="lg">
                Get in Touch
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore our services
              <span className="block h-px w-8 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-primary-glow" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.85, ease: EASE }}
            className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8"
          >
            {[
              ["12+", "Active mentors"],
              ["8", "Research domains"],
              ["50+", "Students guided"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl text-foreground">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cinematic Visual */}
        <div className="relative lg:col-span-6" style={{ perspective: 1600 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: EASE }}
            style={{
              x: visualX,
              y: visualY,
              rotateX: visualRotX,
              rotateY: visualRotY,
              transformStyle: "preserve-3d",
            }}
            className="relative mx-auto aspect-square w-full max-w-[600px]"
          >
            {/* Outer halo */}
            <div className="absolute inset-2 rounded-full bg-primary-glow/15 blur-[80px]" />
            <div className="absolute inset-12 rounded-full bg-accent/10 blur-[60px]" />

            {/* Orbital rings */}
            <div className="absolute inset-0 animate-hero-orbit-slow">
              <div className="absolute inset-0 rounded-full border border-primary-glow/25 animate-ring-pulse" />
            </div>
            <div className="absolute inset-6 animate-hero-orbit-rev">
              <div
                className="absolute inset-0 rounded-full border border-border/50 animate-ring-pulse"
                style={{ animationDelay: "-2s" }}
              />
            </div>
            <div className="absolute inset-16 animate-hero-orbit-slow" style={{ animationDuration: "120s" }}>
              <div className="absolute inset-0 rounded-full border border-accent/20" />
              {/* orbiting dot */}
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_4px_hsl(var(--accent)/0.5)]" />
            </div>
            <div className="absolute inset-24 rounded-full border border-border/30" />

            {/* Helix with breathing + subsurface glow */}
            <motion.div
              animate={{ rotateZ: [0, 6, -4, 0], y: [0, -10, 4, 0] }}
              transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={heroHelix}
                alt="Translucent 3D DNA double helix scientific render"
                width={1024}
                height={1024}
                className="h-full w-full object-contain drop-shadow-[0_40px_80px_rgba(14,158,136,0.35)]"
              />
              {/* subsurface core glow */}
              <div className="absolute inset-1/3 rounded-full bg-primary-glow/25 blur-3xl mix-blend-screen" />
            </motion.div>

            {/* Reflective shimmer */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary-glow) / 0.18) 60deg, transparent 120deg, transparent 240deg, hsl(var(--accent) / 0.12) 300deg, transparent 360deg)",
                animation: "hero-orbit 24s linear infinite",
                maskImage:
                  "radial-gradient(circle, transparent 55%, black 60%, black 70%, transparent 75%)",
              }}
            />

            {/* Glass corner labels */}
            <div className="glass-panel absolute left-0 top-4 rounded-md px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/90">
              Genomics · 01
            </div>
            <div className="glass-panel absolute bottom-4 right-0 rounded-md px-3 py-1.5 text-right text-[10px] uppercase tracking-[0.25em] text-muted-foreground/90">
              Mol. Biology · 02
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2, ease: EASE }}
        style={{ opacity: heroOpacity }}
        className="pointer-events-auto absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 md:flex"
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-border">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 block h-1/2 bg-primary-glow"
          />
        </span>
      </motion.a>
    </section>
  );
};

/* ---------- Section heading ---------- */
const SectionLabel = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
    <span className="gold-text font-mono">{n}</span>
    <span className="h-px w-10 bg-border" />
    {children}
  </div>
);

/* ---------- Problem ---------- */
const Problem = () => (
  <section id="about" className="container py-28 lg:py-36">
    <div className="grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <SectionLabel n="01">The Gap</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Research deserves better{" "}
            <span className="italic text-primary-glow">guidance</span>.
          </h2>
        </motion.div>
      </div>
      <div className="space-y-7 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
        {[
          "Across universities, ambitious students enter life sciences research with curiosity but without a clear methodological compass. Supervisors are stretched thin, journals are ruthless, and learning by trial leaves careers fragile.",
          "BioDrishti exists to close that gap. We pair early-stage researchers with active scientists who critique ideas, sharpen study design, and prepare manuscripts to the standard real laboratories demand.",
          "The result is not faster output. It is sounder science — work that holds up under peer review, in the lab, and over the arc of a research career.",
        ].map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Services ---------- */
const services = [
  {
    icon: FlaskConical,
    title: "Research Idea Validation",
    desc: "Stress-test hypotheses against current literature, feasibility, and scientific novelty before you invest months of work.",
  },
  {
    icon: Microscope,
    title: "Study Design Review",
    desc: "Methodological critique covering controls, sample size, statistical framing, and reproducibility from day one.",
  },
  {
    icon: FileCheck2,
    title: "Publication Readiness",
    desc: "Manuscript and figure assessment aligned with the standards of indexed journals in life sciences.",
  },
  {
    icon: GraduationCap,
    title: "Short-term Mentorship",
    desc: "Structured 4–12 week programs pairing you with a domain mentor for sustained, project-anchored guidance.",
  },
];

const Services = () => (
  <section id="services" className="relative border-y border-border/60 bg-background-deep/40 py-28 lg:py-36">
    <div className="container">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel n="02">Services</SectionLabel>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Four ways we strengthen your{" "}
            <span className="italic text-primary-glow">research practice</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Each engagement is delivered by a researcher actively working in your
          domain — never a generalist coach.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="group relative bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-card/80"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                 style={{ boxShadow: "inset 0 0 0 1px hsl(var(--primary-glow) / 0.4)" }} />
            <div className="mb-10 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <s.icon
                className="h-6 w-6 text-primary-glow transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.4}
              />
            </div>
            <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Who We Help ---------- */
const audiences = [
  {
    n: "I",
    title: "Undergraduate Students",
    desc: "Building first authentic research exposure beyond coursework — projects, posters, and early publications.",
  },
  {
    n: "II",
    title: "Master's Students",
    desc: "Refining thesis work into rigorous, publishable science with the methodological depth reviewers expect.",
  },
  {
    n: "III",
    title: "Early PhD Students",
    desc: "Sharpening proposals, navigating the literature, and shaping a coherent doctoral research arc.",
  },
];

const WhoWeHelp = () => (
  <section className="container py-28 lg:py-36">
    <div className="mb-16 max-w-2xl">
      <SectionLabel n="03">Who We Help</SectionLabel>
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">
        Built for researchers at the{" "}
        <span className="italic text-primary-glow">earliest stages</span>.
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {audiences.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="border-t border-border pt-8"
        >
          <div className="font-mono text-xs tracking-widest text-accent">
            {a.n}
          </div>
          <h3 className="mt-6 font-serif text-2xl">{a.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {a.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ---------- Team ---------- */
const domains = [
  "Genomics",
  "Molecular Biology",
  "Cancer Biology",
  "Immunology",
  "Biomaterials",
  "Bioinformatics",
  "Biomedical Engineering",
  "Microbiology",
];

const Team = () => (
  <section className="relative overflow-hidden border-y border-border/60 py-32 lg:py-40">
    <div
      className="absolute inset-0 -z-10 animate-drift-slow opacity-40"
      style={{
        backgroundImage: `url(${teamBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />

    <div className="container grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <SectionLabel n="04">Our Team</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Mentors who are still{" "}
            <span className="italic text-primary-glow">at the bench</span>.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            BioDrishti mentors are practicing researchers — postdoctoral
            scientists, principal investigators, and doctoral fellows actively
            running studies, publishing, and reviewing for indexed journals.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Their guidance is not theoretical. It is shaped by current lab
            realities, evolving methods, and the standards reviewers apply this
            year — not a decade ago.
          </p>
        </motion.div>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <div className="rounded-2xl border border-border/70 bg-card/40 p-8 backdrop-blur-md">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Domains of expertise
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
            {domains.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="flex items-center justify-between border-b border-border/60 pb-3 font-serif text-lg"
              >
                <span>{d}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Institutions (cinematic) ---------- */
const INST_HEADLINE = [
  { t: "Partner", i: false },
  { t: "with", i: false },
  { t: "us", i: false },
  { t: "to", i: false },
  { t: "elevate", i: false },
  { t: "research", i: true },
  { t: "culture", i: true },
  { t: "on", i: false },
  { t: "your", i: false },
  { t: "campus.", i: false },
];

const InstitutionParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 16 + Math.random() * 12,
        size: 1 + Math.random() * 2,
        x: (Math.random() - 0.5) * 50,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 block rounded-full bg-primary-glow/60"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error custom CSS vars
            "--p-x": `${p.x}px`,
            "--p-opacity": p.opacity,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
};

const Institutions = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 });
  const auroraX = useTransform(sx, (v) => v * 30);
  const auroraY = useTransform(sy, (v) => v * 30);
  const panelRotX = useTransform(sy, (v) => v * -3);
  const panelRotY = useTransform(sx, (v) => v * 4);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lightIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.7]);
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / r.width);
    my.set((e.clientY - r.top - r.height / 2) / r.height);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const features = [
    "Cohort-based research programs",
    "Faculty alignment workshops",
    "Methodology & writing bootcamps",
    "Publication mentorship tracks",
  ];

  return (
    <section
      id="institutions"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate py-28 lg:py-40"
      style={{ perspective: 1600 }}
    >
      {/* atmospheric background */}
      <motion.div
        style={{ y: bgY, opacity: lightIntensity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px hairline" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_hsl(var(--primary)/0.18),_transparent_55%),radial-gradient(ellipse_at_75%_80%,_hsl(var(--accent)/0.10),_transparent_55%)]" />
      </motion.div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{
            rotateX: panelRotX,
            rotateY: panelRotY,
            transformStyle: "preserve-3d",
          }}
          className="glass-panel relative overflow-hidden rounded-3xl p-10 md:p-16 lg:p-20"
        >
          {/* layered aurora glows */}
          <motion.div style={{ x: auroraX, y: auroraY }} className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
            <div
              className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary-glow/15 blur-[120px] animate-aurora"
              style={{ animationDelay: "-7s" }}
            />
            <div
              className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/12 blur-[140px] animate-aurora"
              style={{ animationDelay: "-13s" }}
            />
          </motion.div>

          {/* light beam sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-0 h-full w-1/2 animate-beam-sweep bg-gradient-to-r from-transparent via-primary-glow/10 to-transparent" />
          </div>

          {/* genomic grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-glow)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse at center, black 25%, transparent 80%)",
            }}
          />

          {/* molecular line pattern (SVG) */}
          <svg
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
            viewBox="0 0 400 400"
            fill="none"
          >
            <defs>
              <radialGradient id="mol-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[
              [80, 60, 200, 140],
              [200, 140, 320, 80],
              [200, 140, 260, 260],
              [260, 260, 140, 320],
              [140, 320, 80, 220],
              [80, 220, 80, 60],
              [200, 140, 80, 220],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(var(--primary-glow))"
                strokeOpacity="0.3"
                strokeWidth="0.6"
              />
            ))}
            {[
              [80, 60], [200, 140], [320, 80], [260, 260], [140, 320], [80, 220],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="14" fill="url(#mol-glow)" />
                <circle cx={cx} cy={cy} r="2.5" fill="hsl(var(--primary-glow))" />
              </g>
            ))}
          </svg>

          {/* particles */}
          <InstitutionParticles />

          {/* vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_transparent_50%,_hsl(var(--background-deep)/0.7)_100%)]" />

          {/* content */}
          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel n="05">For Institutions</SectionLabel>
              <h2 className="font-serif text-balance text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]">
                {INST_HEADLINE.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden pr-[0.22em] align-bottom">
                    <motion.span
                      custom={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={wordReveal}
                      className={`inline-block ${w.i ? "italic text-primary-glow" : ""}`}
                    >
                      {w.t}
                    </motion.span>
                  </span>
                ))}
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                We design tailored mentorship cohorts, faculty-aligned workshops,
                and methodology bootcamps for universities, research institutes,
                and medical colleges — embedded into your existing academic calendar.
              </motion.p>
              <ul className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.8 + i * 0.1, ease: EASE }}
                    className="group flex items-center gap-3 rounded-md border border-transparent px-3 py-2 transition-all duration-500 hover:border-primary-glow/20 hover:bg-primary-glow/[0.03]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_hsl(var(--accent)/0.5)]" />
                    <span className="transition-colors group-hover:text-foreground">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
              className="flex flex-col items-start justify-end gap-6 lg:col-span-5 lg:items-end"
            >
              <div className="glass-panel w-full max-w-sm rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">
                  Collaboration
                </div>
                <div className="mt-3 font-serif text-2xl leading-snug">
                  Long-term academic partnerships with measurable research outcomes.
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" />
                  Currently accepting partner institutions for 2026
                </div>
              </div>
              <a href="#contact" className="cta-sheen relative overflow-hidden rounded-md">
                <Button variant="hero" size="lg">
                  Discuss a Partnership
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Contact ---------- */
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="border-t border-border/60 bg-background-deep/30 py-28 lg:py-36">
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="06">Contact</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Begin a{" "}
            <span className="italic text-primary-glow">conversation</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tell us about your research interest, current stage, or
            institutional needs. We respond within two working days.
          </p>
          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent">Email</span>
              <div className="font-serif text-base text-foreground">hello@biodrishti.org</div>
            </div>
            <div className="pt-3">
              <span className="text-xs uppercase tracking-widest text-accent">Location</span>
              <div className="font-serif text-base text-foreground">Bengaluru, India</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-2xl border border-border/70 bg-card/50 p-8 backdrop-blur-md md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex min-h-[280px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-primary-glow/40 bg-primary/10">
                  <FileCheck2 className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="font-serif text-2xl">Thank you.</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Your message has reached us. A member of the BioDrishti team
                  will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <Field label="Your Name" id="name" type="text" />
                <Field label="Email Address" id="email" type="email" />
                <Field label="Message" id="message" textarea />
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  type = "text",
  textarea = false,
}: {
  label: string;
  id: string;
  type?: string;
  textarea?: boolean;
}) => {
  const base =
    "peer w-full bg-transparent border-b border-border py-3 text-foreground placeholder-transparent outline-none transition-all duration-500 focus:border-primary-glow";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} placeholder={label} rows={4} className={base} required />
      ) : (
        <input id={id} type={type} placeholder={label} className={base} required />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute -top-2 left-0 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:text-primary-glow"
      >
        {label}
      </label>
    </div>
  );
};

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="border-t border-border/60 py-14">
    <div className="container">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Structured research mentorship for the next generation of life
            scientists.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 md:items-end">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BioDrishti. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------- Page ---------- */
const Index = () => {
  useEffect(() => {
    document.title = "BioDrishti — Life Sciences Research Mentorship";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(
        Object.assign(document.createElement("meta"), { name: "description" })
      );
    (meta as HTMLMetaElement).content =
      "Structured research mentorship in genomics, molecular biology and life sciences for undergraduate, master's, and early PhD students.";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <WhoWeHelp />
        <Team />
        <Institutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
