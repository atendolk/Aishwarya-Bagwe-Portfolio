import { motion } from "framer-motion"

function ProfessionalProjects() {
  return (
    <section
      id="professional"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#F6F2ED]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Practice
          </p>

          <h2 className="font-serif text-5xl md:text-7xl">
            Professional Projects
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Four selected professional projects will be presented here.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default ProfessionalProjects