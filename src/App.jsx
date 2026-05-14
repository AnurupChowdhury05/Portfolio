import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import BootScreen from './components/BootScreen';
import ResumeModal from './components/ResumeModal';
import VoiceNavigation from './components/VoiceNavigation';
import AllProjectsModal from './components/AllProjectsModal';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [isOverrideMode, setIsOverrideMode] = useState(false);

  useEffect(() => {
    // --- HUD ENHANCEMENTS ---
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    let secretBuffer = '';
    const secretCode = 'friday';
    const handleKeyDown = (e) => {
      secretBuffer += e.key.toLowerCase();
      if (secretBuffer.length > secretCode.length) {
        secretBuffer = secretBuffer.slice(-secretCode.length);
      }
      if (secretBuffer === secretCode) {
        setIsOverrideMode(prev => !prev);
        // Play alert sound if user triggers override
        import('./utils/sounds').then(({ playAlertSound }) => {
          if(playAlertSound) playAlertSound();
        }).catch(() => {});
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const glitchInterval = setInterval(() => {
      const glitchTargets = document.querySelectorAll('.hero-name, .section-title, .project-title');
      if (glitchTargets.length > 0) {
        const randomTarget = glitchTargets[Math.floor(Math.random() * glitchTargets.length)];
        randomTarget.classList.add('glitch-anim');
        setTimeout(() => randomTarget.classList.remove('glitch-anim'), 500);
      }
    }, 8000);

    // --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('skill-bar')) {
            const fill = entry.target.querySelector('.skill-fill');
            if (fill) fill.style.width = entry.target.getAttribute('data-level') + '%';
          }
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // --- DYNAMIC TAB TITLE ---
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "⚠️ CONNECTION LOST...";
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    if (isOverrideMode) {
      document.body.classList.add('override-mode');
    } else {
      document.body.classList.remove('override-mode');
    }
  }, [isOverrideMode]);

  return (
    <>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      <div className="flashlight-overlay"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>
      
      <CustomCursor />
      <ParticleCanvas />
      <div className="grid-overlay"></div>
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <AllProjectsModal isOpen={isAllProjectsOpen} onClose={() => setIsAllProjectsOpen(false)} />
      
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenAllProjects={() => setIsAllProjectsOpen(true)} />
        <Contact />
      </main>
      
      <Footer />
      <VoiceNavigation />
    </>
  );
}

export default App;
