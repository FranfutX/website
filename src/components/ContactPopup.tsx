import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Detectar clic fuera del recuadro
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex justify-end items-end p-6"
        >
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-xl w-72 z-50"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
            <div className="flex items-center gap-2 mb-3 text-blue-400">
              <FaEnvelope />
              <a href="mailto:francomartelane@gmail.com" className="hover:underline">
                francomartelane@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/francomartelane"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/francomartelane
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
