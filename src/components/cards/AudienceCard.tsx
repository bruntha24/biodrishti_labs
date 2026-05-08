import { motion } from "framer-motion";
import type { Audience } from "@/data/audiences";
import { EASE } from "@/utils/motion";

interface AudienceCardProps {
  audience: Audience;
  index: number;
}

export const AudienceCard = ({ audience, index }: AudienceCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: EASE }}
    className="border-t border-border pt-8"
  >
    <div className="font-mono text-xs tracking-widest text-accent">{audience.n}</div>
    <h3 className="mt-6 font-serif text-2xl">{audience.title}</h3>
    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{audience.desc}</p>
  </motion.div>
);
