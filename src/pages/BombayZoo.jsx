import { motion } from "framer-motion"

import PDFViewer from "../components/PDFViewer"

function BombayZoo() {
  return (
    <main className="bg-[#F6F2ED] min-h-screen px-6 md:px-12 lg:px-20 py-32">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mb-32"
      >

        <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-8 text-neutral-600">
          Competition · Mumbai
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light mb-10">
          Bombay Zoo
        </h1>

      </motion.section>

      {/* PDF PAGES */}
      <PDFViewer startPage={9} endPage={10} />

    </main>
  )
}

export default BombayZoo