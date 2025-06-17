import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScrollY || currentScroll < 50);
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -40 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 right-0 p-4 z-50 bg-black/50 backdrop-blur-md border border-blue-900 rounded-bl-xl"
    >
      <ul className="flex gap-6 text-sm text-gray-300">
        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
        <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        <li>
          <button onClick={onContactClick} className="hover:text-red-600 transition">
            Contact
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}
