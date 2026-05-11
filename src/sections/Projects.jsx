import { motion } from "framer-motion"
import projects from "../data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="font-serif text-5xl md:text-7xl mb-24">
          Selected Works
        </h2>

        <div className="flex flex-col gap-40">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* IMAGE */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />

              </div>

              {/* TEXT */}
              <div>

                <p className="uppercase tracking-[0.25em] text-sm text-neutral-500 mb-6">
                  {project.category}
                </p>

                <h3 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                  {project.title}
                </h3>

                <p className="text-lg leading-relaxed text-neutral-700 mb-10">
                  {project.description}
                </p>

                <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                  View Project
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects