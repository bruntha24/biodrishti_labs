import { ArrowUpRight, Linkedin } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export const Footer = () => (
  <footer className="border-t border-border/60 py-14">
    <div className="container">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Structured research mentorship for the next generation of life scientists.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 md:items-end">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BioDrishti. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);
