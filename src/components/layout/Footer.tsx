import { ArrowUpRight, Linkedin } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export const Footer = () => (
  <footer className="theme-dark relative bg-background py-16">
    <div className="container">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Structured research mentorship for the next generation of life scientists.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col items-start gap-5 md:items-end">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BioDrishti. All rights reserved.
          </div>
        </nav>
      </div>
    </div>
  </footer>
);
