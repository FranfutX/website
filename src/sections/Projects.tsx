import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description: "App that displays real-time weather data using OpenWeather API.",
    link: "https://github.com/tuusuario/weather-app",
  },
  {
    title: "MultiAPI database",
    description: "DB Test with API",
    link: "https://github.com/tuusuario/portfolio",
  },
  {
    title: "2D Platform Game",
    description: "A Game 2D coded in JS, using tools like...",
    link: "https://github.com/tuusuario/task-manager",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold text-blue-500 mb-10">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (<motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block p-6 bg-gray-800 border border-gray-700 rounded-lg shadow transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
