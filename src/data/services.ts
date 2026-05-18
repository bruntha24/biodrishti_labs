import {
  FlaskConical,
  Microscope,
  FileCheck2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: FlaskConical,
    title: "Research Idea Validation",
    desc: "We rigorously evaluate whether your research question is original, feasible, and worth pursuing — identifying gaps your institution may not be equipped to assess before you begin.",
  },
  {
    icon: Microscope,
    title: "Study Design Review",
    desc: "We review your methodology before data collection begins, ensuring strong experimental design, proper controls, and publication-ready research structure.",
  },
  {
    icon: FileCheck2,
    title: "Publication Readiness Assessment",
    desc: "We assess whether your completed work meets journal standards, identify critical gaps, and guide you toward suitable indexed publication targets.",
  },
  {
    icon: GraduationCap,
    title: "Short-term Mentorship Programs",
    desc: "Structured, outcome-driven mentorship programs focused on specific research milestones — designed to fill institutional mentorship gaps with clear, time-bound guidance.",
  },
];