import { motion } from "framer-motion"
import philosophyImage from "../assets/projects/philosophy.jpg"

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]"
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
            Philosophy
          </p>

          <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-5xl">
            Architecture should create equitable, emotionally responsive,
            and research-informed environments that strengthen the relationship
            between people, systems, and the urban fabric.
          </h2>

        </motion.div>

        {/* IMAGE + TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >

          {/* IMAGE */}
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">

            <img
              src={philosophyImage}
              alt="Philosophy"
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-12">

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Human-Centered Environments
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                The work prioritizes emotional experience,
                collective interaction, and the social impact
                of spatial design across urban and architectural scales.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Research as Design Foundation
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                Mapping, systems analysis, and interdisciplinary
                investigation inform architectural interventions
                that respond to real social and environmental conditions.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl mb-4">
                Spatial Storytelling
              </h3>

              <p className="text-lg leading-relaxed text-neutral-700">
                Architecture is approached as a narrative medium —
                shaping movement, perception, memory, and human
                connection through carefully curated spatial experiences.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Philosophy