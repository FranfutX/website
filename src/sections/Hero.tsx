import { motion } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen flex flex-col justify-start pt-80 ml-40 px-6 max-w-4xl"
    >
      <p className="text-blue-500 text-xl mb-3">Hi, my name is</p>
      <h1 className="text-5xl font-bold text-white">Franco Martelane</h1>
      <h2 className="text-3xl font-bold text-gray-400 mt-2">
        I build app and web experiences.
      </h2>
      <p className="text-gray-500 mt-6 max-w-xl">
        I'm a fullstack developer focused on creating fast, accessible, and elegant apps, websites, and cloud services.
      </p>
      <button
        onClick={onContactClick}
        className="mt-6 w-fit border border-blue-500 text-blue-500 text-base font-medium px-60 py-2 rounded hover:bg-blue-700 hover:text-black transition"
      >
        Get In Touch
      </button>
    </motion.section>
  );
}