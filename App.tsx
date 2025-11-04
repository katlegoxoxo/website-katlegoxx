import React, { useState, useEffect } from 'react';
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
import ImageViewerModal from './components/ImageViewerModal';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewableCertificate, setViewableCertificate] = useState<{ url: string, title: string } | null>(null);
  const [viewableImageCertificate, setViewableImageCertificate] = useState<Certification | null>(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleViewEducationCertificate = (item: EducationItem) => {
    if (item.certificateUrl) {
      setViewableCertificate({ url: item.certificateUrl, title: item.degree });
    }
  };

  const handleViewCertification = (cert: Certification) => {
    if (cert.imageUrl) {
      setViewableImageCertificate(cert);
    } else if (cert.certificateUrl) {
      setViewableCertificate({ url: cert.certificateUrl, title: cert.name });
    } else if (cert.verifyUrl && cert.verifyUrl !== '#') {
      window.open(cert.verifyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={`relative z-10 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ParticleCanvas />
        
        <div>
          <Header />
          <main className="relative z-20 mx-auto max-w-6xl px-6">
            <Hero />
            <About id={NAV_LINKS[1].id} title="About" />
            <Projects id={NAV_LINKS[2].id} title="Projects" onProjectSelect={setSelectedProject} />
            <Skills id={NAV_LINKS[3].id} title="Skills & Tools" />
            <Education id={NAV_LINKS[4].id} title="Education" onCertificateSelect={handleViewEducationCertificate} />
            <Experience id={NAV_LINKS[5].id} title="Experience" />
            <Certifications id={NAV_LINKS[6].id} title="Certifications & Badges" onViewCertificate={handleViewCertification} />
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
              url={viewableCertificate.url}
              title={viewableCertificate.title}
              onClose={() => setViewableCertificate(null)}
            />
          )}
          {viewableImageCertificate && (
              <ImageViewerModal 
                  certificate={viewableImageCertificate}
                  onClose={() => setViewableImageCertificate(null)}
              />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
