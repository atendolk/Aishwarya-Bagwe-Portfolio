import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import performingArts from "../assets/projects/academic/performing-arts/Picture1.png"

const projects = [
  {
    title: "Institute of Performing Arts",
    image: performingArts,
    path: "/projects/performing-arts",
  },
]

function AcademicProjects() {
  return (
    <section
      id="academic"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Selected Work
          </p>

          <h2 className="font-serif text-5xl md:text-7xl">
            Academic Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.path}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AcademicProjects