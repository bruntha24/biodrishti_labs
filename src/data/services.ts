import { FlaskConical, Microscope, FileCheck2, GraduationCap, type LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const services: Service[] = [
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
