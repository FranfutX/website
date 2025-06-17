import { useState, useEffect } from "react";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import SocialSidebar from "./sections/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactPopup from "./components/ContactPopup";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const body = document.body;

    if (showIntro) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [showIntro]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative bg-black text-white font-sans">
      <IntroOverlay setShowIntro={setShowIntro} />
      {!showIntro && (
        <>
          <ParticlesBackground />
          <ScrollProgressBar />
          <Navbar onContactClick={() => setShowContact(true)} />
          <SocialSidebar />
          <Hero onContactClick={() => setShowContact(true)} />
          <EmailSidebar />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactPopup
            isOpen={showContact}
            onClose={() => setShowContact(false)}
          />
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </div>
  );
}
