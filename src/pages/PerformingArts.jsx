import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import PDFViewer from "../components/PDFViewer"

function PerformingArts() {
  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-full px-6 py-4">

        <Link
          to="/"
          className="text-sm md:text-base hover:opacity-50 transition-all duration-300"
        >
          ← Back
        </Link>

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Academic Project · Ahmedabad
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-10">
            Institute of
            <br />
            Performing Arts
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl text-neutral-700">
            A cultural campus designed around movement,
            performance, rhythm, and immersive spatial
            experiences that encourage interaction
            between architecture and public life.
          </p>

        </motion.div>

      </section>

      {/* PDF SPREADS */}
      <section className="px-6 md:px-12 lg:px-20 pb-40">

        <PDFViewer
          startPage={3}
          endPage={4}
        />

      </section>

    </main>
  )
}

export default PerformingArts