import { motion } from "framer-motion";
import { EASE } from "@/utils/motion";

interface InstitutionCardProps {
  feature: string;
  index: number;
}

export const InstitutionCard = ({ feature, index }: InstitutionCardProps) => (
  <motion.li
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: 0.8 + index * 0.1, ease: EASE }}
    className="group flex items-center gap-3 rounded-md border border-transparent px-3 py-2 transition-all duration-500 hover:border-primary-glow/20 hover:bg-primary-glow/[0.03]"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_hsl(var(--accent)/0.5)]" />
    <span className="transition-colors group-hover:text-foreground">{feature}</span>
  </motion.li>
);
