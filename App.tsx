
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import { NAV_LINKS } from './constants';
import { AnimatePresence } from 'framer-motion';
import type { Project, EducationItem, Certification } from './types';
import Modal from './components/Modal';
import CertificateModal from './components/CertificateModal';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewableCertificate, setViewableCertificate] = useState<{ title: string; imageUrl?: string; pdfUrl?: string; verifyUrl?: string; } | null>(null);

  const handleViewEducationCertificate = (item: EducationItem) => {
    if (item.certificateUrl) {
      setViewableCertificate({ pdfUrl: item.certificateUrl, title: item.degree });
    }
  };

  const handleViewCertification = (cert: Certification) => {
    setViewableCertificate({ 
      title: cert.name,
      imageUrl: cert.imageUrl,
      pdfUrl: cert.certificateUrl,
      verifyUrl: cert.verifyUrl 
    });
  };

  return (
    <div className="relative z-10">
      <ParticleCanvas />
      
      <div>
        <Header />
        <main className="relative z-20 mx-auto max-w-6xl px-6">
          <Hero />
          <About id={NAV_LINKS[1].id} title="About" />
          <Projects id={NAV_LINKS[2].id} title="Projects" onProjectSelect={setSelectedProject} />
          <Skills id={NAV_LINKS[3].id} title="Skills " />
          <Education id={NAV_LINKS[4].id} title="Education" onCertificateSelect={handleViewEducationCertificate} />
          <Experience id={NAV_LINKS[5].id} title="Experience" />
          <Certifications id={NAV_LINKS[6].id} title="Certifications" onViewCertificate={handleViewCertification} />
          <Contact id={NAV_LINKS[7].id} title="Get In Touch" />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {viewableCertificate && (
          <CertificateModal 
            title={viewableCertificate.title}
            imageUrl={viewableCertificate.imageUrl}
            pdfUrl={viewableCertificate.pdfUrl}
            verifyUrl={viewableCertificate.verifyUrl}
            onClose={() => setViewableCertificate(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
