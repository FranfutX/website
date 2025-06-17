import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-blue-500 text-3xl font-bold mb-4">About Me</h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-300 mb-4"
      >
        Hi there! I'm Franco Martelane, a full-stack developer with a passion for building modern, scalable, and user-friendly applications.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-300"
      >
        I'm focused on writing clean, efficient code and continuously improving my skills in web technologies. I enjoy solving real-world problems and working in challenging environments.
      </motion.p>
    </motion.section>
  );
}