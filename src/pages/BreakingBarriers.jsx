import { motion } from "framer-motion"

import BB01 from "../assets/projects/breaking-barriers/BB01.jpg"
import BB02 from "../assets/projects/breaking-barriers/BB02.jpg"
import BB03 from "../assets/projects/breaking-barriers/BB03.jpg"
import BB04 from "../assets/projects/breaking-barriers/BB04.jpg"
import BB05 from "../assets/projects/breaking-barriers/BB05.jpg"
import BB06 from "../assets/projects/breaking-barriers/BB06.jpg"
import BB07 from "../assets/projects/breaking-barriers/BB07.jpg"
import BB08 from "../assets/projects/breaking-barriers/BB08.jpg"

import { Link } from "react-router-dom"

function BreakingBarriers() {
  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-full px-6 py-4">

        <div className="flex items-center gap-6 text-sm md:text-base">

          <Link
            to="/"
            className="hover:opacity-50 transition-all duration-300"
          >
            ← Back
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-20">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              MS ARCH Thesis · Chicago
            </p>

            <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-10">
              Breaking
              <br />
              Barriers
            </h1>

            <p className="text-xl leading-relaxed text-neutral-700 max-w-2xl">
              A speculative architectural intervention investigating
              gendered spatial systems, urban safety, and inclusive
              public infrastructure through research-driven design.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="rounded-[2rem] overflow-hidden shadow-2xl"
          >

            <img
              src={BB01}
              alt="Breaking Barriers"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </div>

      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden shadow-2xl"
        >

          <img
            src={BB02}
            alt="Research"
            className="w-full"
          />

        </motion.div>

      </section>

      {/* CONCEPT STATEMENT */}
      <section className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Concept
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Exploring the relationship between urban infrastructure,
            safety, movement, and gendered spatial experiences
            through layered architectural interventions.
          </h2>

        </motion.div>

      </section>

      {/* IMAGE GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-32">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {[BB03, BB04, BB05, BB06].map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="rounded-[2rem] overflow-hidden shadow-2xl"
            >

              <img
                src={image}
                alt="Breaking Barriers"
                className="w-full h-full object-cover"
              />

            </motion.div>

          ))}

        </div>

      </section>

      {/* LARGE FEATURE IMAGE */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden shadow-2xl"
        >

          <img
            src={BB07}
            alt="Urban Intervention"
            className="w-full"
          />

        </motion.div>

      </section>

      {/* FINAL IMAGE */}
      <section className="px-6 md:px-12 lg:px-20 pb-40">

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden shadow-2xl"
        >

          <img
            src={BB08}
            alt="Final Render"
            className="w-full"
          />

        </motion.div>

      </section>

    </main>
  )
}

export default BreakingBarriers