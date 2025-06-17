import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function EmailSidebar() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Mapea el scroll (de 0 a 1) a una posición vertical (ej: de 40% a 90%)
  const topOffset = useTransform(scrollYProgress, [0, 1], ["25%", "90%"]);

  return (
    <motion.div
      ref={containerRef}
      style={{ top: topOffset }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute right-6 rotate-90 origin-right text-lg text-gray-400">
      <a
    href="mailto:francomartelane@gmail.com"
    className="hover:text-red-500 transition-colors duration-150">francomartelane@gmail.com</a>
    </motion.div>
  );
}
