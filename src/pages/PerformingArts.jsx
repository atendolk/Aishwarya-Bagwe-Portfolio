import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import PDFViewer from "../components/PDFViewer"

function PerformingArts() {
  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] overflow-hidden">

       <Navbar />

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