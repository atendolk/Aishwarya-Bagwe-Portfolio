import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-32"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              About
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Architecture rooted in social narratives, resilience, and spatial storytelling.
            </h2>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 text-lg leading-relaxed text-neutral-700">

            <p>
              Aishwarya Bagwe is an architectural designer and
              project architect currently working at Urban Works
              in Hawaii.
            </p>

            <p>
              Her work explores the intersection of architecture,
              systems thinking, urban research, and social
              infrastructure through conceptual and research-driven
              design approaches.
            </p>

            <p>
              Through mapping, speculative intervention, and
              narrative-based spatial design, her projects investigate
              resilience, healing environments, gendered space,
              and collective memory.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About