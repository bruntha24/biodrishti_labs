import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { DomainTag } from "@/components/cards/DomainTag";
import { ParticleField } from "@/components/ui/ParticleField";
import { domains } from "@/data/domains";
import { EASE } from "@/utils/motion";
import teamBg from "@/assets/images/team-bg.jpg";

export const TeamSection = () => (
  <section className="relative overflow-hidden border-y border-border/60 py-32 lg:py-40">
    {/* Layered atmosphere */}
    <div
      className="absolute inset-0 -z-10 animate-drift-slow opacity-40"
      style={{ backgroundImage: `url(${teamBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />
    <div className="absolute -top-32 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px] animate-aurora" />
    <div
      className="absolute -bottom-32 left-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px] animate-aurora"
      style={{ animationDelay: "-9s" }}
    />
    <ParticleField count={14} className="-z-10 opacity-60" />

    <div className="container grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <SectionHeading number="04" label="Our Team" />
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Mentors who are still{" "}
            <span className="italic text-primary-glow">at the bench</span>.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            BioDrishti mentors are practicing researchers — postdoctoral scientists, principal investigators, and doctoral fellows actively running studies, publishing, and reviewing for indexed journals.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Their guidance is not theoretical. It is shaped by current lab realities, evolving methods, and the standards reviewers apply this year — not a decade ago.
          </p>
        </motion.div>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <div className="glass-panel rounded-2xl p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Domains of expertise
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
            {domains.map((d, i) => (
              <DomainTag key={d} name={d} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
