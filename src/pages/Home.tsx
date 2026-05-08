import { useEffect } from "react";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { TeamSection } from "@/components/sections/TeamSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Home = () => {
  useEffect(() => {
    document.title = "BioDrishti — Life Sciences Research Mentorship";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(
        Object.assign(document.createElement("meta"), { name: "description" }),
      );
    (meta as HTMLMetaElement).content =
      "Structured research mentorship in genomics, molecular biology and life sciences for undergraduate, master's, and early PhD students.";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <WhoWeHelp />
        <TeamSection />
        <InstitutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
