import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#0a0b0d] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
