import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#1A1A1A] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-6">
          Get In Touch
        </p>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12">
          Let's create something
          <br />
          meaningful.
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg">
          <a
            href="mailto:bagwethearchitect@gmail.com"
            className="hover:opacity-50 transition-opacity"
          >
            bagwethearchitect@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/aishwarya-bagwe-a1b35a256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-white/20 text-sm text-neutral-500">
          © {new Date().getFullYear()} Aishwarya Bagwe
        </div>
      </motion.div>
    </section>
  )
}

export default Contact