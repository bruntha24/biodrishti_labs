import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EASE } from "@/utils/motion";

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

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="border-t border-border/60 bg-background-deep/30 py-28 lg:py-36">
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading number="06" label="Contact" />
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Begin a <span className="italic text-primary-glow">conversation</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tell us about your research interest, current stage, or institutional needs. We respond within two working days.
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
            transition={{ duration: 0.9, ease: EASE }}
            className="rounded-2xl border border-border/70 bg-card/50 p-8 backdrop-blur-md md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex min-h-[280px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-primary-glow/40 bg-primary/10">
                  <FileCheck2 className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="font-serif text-2xl">Thank you.</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Your message has reached us. A member of the BioDrishti team will be in touch shortly.
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
