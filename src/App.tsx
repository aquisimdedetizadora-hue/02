import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutIntro } from "./components/AboutIntro";
import { Statement } from "./components/Statement";
import { ServicesSection } from "./components/ServicesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { MetricsSection } from "./components/MetricsSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { ProjectModal } from "./components/ProjectModal";
import { SERVICES_DATA, PROJECTS_DATA, METRICS_DATA } from "./data";
import { ProjectItem } from "./types";

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>("Projeto Completo");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = (service?: string) => {
    if (service) setPrefilledService(service);
    setContactModalOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0071e3]/15 selection:text-[#0071e3]" id="app-root">
      <Header onOpenContact={() => handleOpenContact("Contato Geral")} />

      <main id="main-content">
        <Hero onOpenContact={() => handleOpenContact("Novo Projeto")} />
        <AboutIntro />
        <Statement />
        <ServicesSection
          services={SERVICES_DATA}
          onSelectService={(srv) => handleOpenContact(srv.title)}
        />
        <ShowcaseSection
          projects={PROJECTS_DATA}
          onSelectProject={handleSelectProject}
          onOpenContact={() => handleOpenContact("Portfólio & Parcerias")}
        />
        <MetricsSection metrics={METRICS_DATA} />
        <CtaSection onOpenContact={() => handleOpenContact("Transformação Digital")} />
      </main>

      <Footer />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefilledService={prefilledService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(serviceName) => handleOpenContact(serviceName)}
      />
    </div>
  );
}
