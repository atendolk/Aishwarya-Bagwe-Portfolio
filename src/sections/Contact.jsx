import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-40 bg-[#1A1A1A] text-white"
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

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-6">
              Contact
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Let’s build meaningful spaces and stories together.
            </h2>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 text-lg">

            <a
              href="mailto:aishwaryabagwe@gmail.com"
              className="hover:opacity-60 transition-all duration-300"
            >
              aishwaryabagwe@gmail.com
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:opacity-60 transition-all duration-300"
            >
              LinkedIn
            </a>

            <p className="pt-16 text-sm text-neutral-500">
              © 2026 Aishwarya Bagwe
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact