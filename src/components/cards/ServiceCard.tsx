import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { EASE } from "@/utils/motion";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
      className="group relative bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-card/80"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px hsl(var(--primary-glow) / 0.4)" }}
      />
      <div className="mb-10 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
        <Icon
          className="h-6 w-6 text-primary-glow transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.4}
        />
      </div>
      <h3 className="font-serif text-2xl leading-tight">{service.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
    </motion.div>
  );
};
