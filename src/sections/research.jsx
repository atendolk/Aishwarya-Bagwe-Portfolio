import { motion } from "framer-motion"
import researchImage from "../assets/projects/research.jpg"

function Research() {
  return (
    <section
      id="research"
      className="px-6 md:px-12 lg:px-20 py-32"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Research & Systems
          </p>

          <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-5xl">
            Investigating spatial systems, social infrastructure,
            and urban narratives through research-driven design.
          </h2>

        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >

          {/* IMAGE */}
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">

            <img
              src={researchImage}
              alt="Research Systems"
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-12">

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Urban Safety & Gendered Space
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                Through mapping, spatial analysis, and research-driven
                methodologies, the work investigates how architecture
                and urban systems influence safety, accessibility,
                and public experience across cities.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Systems Thinking
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                The portfolio explores architecture beyond individual
                buildings by examining relationships between
                infrastructure, ecology, movement, policy,
                and collective social behavior.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Research-Driven Intervention
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                Analytical frameworks, narrative mapping,
                and interdisciplinary investigation inform
                speculative architectural interventions focused
                on resilience, inclusion, and human-centered design.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Research