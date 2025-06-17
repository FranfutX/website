import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPython, FaGit, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiDocker } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3 },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Python', icon: FaPython },
  { name: 'Git', icon: FaGit },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: SiDocker },
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-blue-500 mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center text-gray-300">
        {skills.map(({ name, icon: Icon }, index) => (
          <motion.div
          id="skills"
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <Icon size={40} />
            <p className="text-sm">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}