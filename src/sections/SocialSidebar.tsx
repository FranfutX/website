import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-gray-400"
    >
      <a href="#"><FaGithub size={24} /></a>
      <a href="#"><FaLinkedin size={24} /></a>
      <a href="#"><FaTwitter size={24} /></a>
      <a href="#"><FaInstagram size={24} /></a>
    </motion.div>
  );
}