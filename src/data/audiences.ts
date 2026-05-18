export interface Audience {
  n: string;
  title: string;
  desc: string;
}

export const audiences: Audience[] = [
  {
    n: "I",
    title: "Undergraduate Students (BSc, BTech)",
    desc: "You are starting your first independent research project, often without structured mentorship. We help you validate your idea, understand what makes a study publishable, and build a strong research foundation that improves your chances for master's programs and future research opportunities.",
  },
  {
    n: "II",
    title: "Master's Students (MSc, MTech)",
    desc: "Your dissertation is your first real opportunity to produce publishable research. We help you design a robust study, refine methodology, navigate supervisor feedback, and turn your work into a publication-ready output — even in institutions with limited research culture.",
  },
  {
    n: "III",
    title: "Early PhD Students",
    desc: "The first phase of your PhD defines your research trajectory. We help you validate your research direction, avoid methodological errors, and structure your thesis around publishable outcomes — ensuring your work leads to strong academic output, not just a degree.",
  },
];