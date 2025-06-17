import { useState } from "react";
import ScrollProgressBar from "./components/ScrollProgressBar"
import Navbar from "./components/Navbar";
import SocialSidebar from "./sections/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import ContactPopup from "./components/ContactPopup";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";


export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="relative bg-black text-white font-sans">
      <ScrollProgressBar />
      <Navbar onContactClick={() => setShowContact(true)} />
      <SocialSidebar />
      <Hero onContactClick={() => setShowContact(true)} />
      <EmailSidebar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ContactPopup isOpen={showContact} onClose={() => setShowContact(false)} />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}