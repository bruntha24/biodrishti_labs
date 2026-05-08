import { motion } from "framer-motion";
import { EASE } from "@/utils/motion";

interface DomainTagProps {
  name: string;
  index: number;
}

export const DomainTag = ({ name, index }: DomainTagProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
    className="flex items-center justify-between border-b border-border/60 pb-3 font-serif text-lg"
  >
    <span>{name}</span>
    <span className="font-mono text-xs text-muted-foreground">
      {String(index + 1).padStart(2, "0")}
    </span>
  </motion.div>
);
