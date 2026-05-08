export interface Audience {
  n: string;
  title: string;
  desc: string;
}

export const audiences: Audience[] = [
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
