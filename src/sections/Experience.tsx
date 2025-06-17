import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-blue-500 text-3xl font-bold mb-6">Experience</h2>

      {[ 
        {
          title: "Software Engineer",
          company: "AwesomeTech • Jan 2023 – Present",
          bullets: [
            "Built web apps using React, Node.js, and PostgreSQL.",
            "Designed RESTful APIs and automated CI/CD pipelines.",
          ],
        },
        {
          title: "Frontend Developer",
          company: "OtherCompany • 2021 – 2022",
          bullets: [
            "Maintained Angular-based interfaces.",
            "Improved accessibility and performance.",
          ],
        },
      ].map((job, index) => (
        <motion.div
          key={job.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          <p className="text-gray-400">{job.company}</p>
          <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
            {job.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
}