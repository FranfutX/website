import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroOverlayProps {
  setShowIntro: (visible: boolean) => void;
}

export default function IntroOverlay({ setShowIntro }: IntroOverlayProps) {
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitAnimation(true);
    }, 1500);

    const cleanup = setTimeout(() => {
      setShowIntro(false);
    }, 250);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [setShowIntro]);

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white tracking-wide"
          >
            Franco Martelane
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
