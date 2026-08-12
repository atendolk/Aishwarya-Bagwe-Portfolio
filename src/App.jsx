import Navbar from "./components/Navbar"
import { motion } from "framer-motion"

import heroImage from "./assets/projects/hero.jpg"

import AcademicProjects from "./sections/AcademicProjects"
import ProfessionalProjects from "./sections/ProfessionalProjects"
import Experience from "./sections/Experience"
import About from "./sections/About"
import Contact from "./sections/Contact"

function App() {
  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] min-h-screen overflow-hidden">

      <Navbar />

      {/* LANDING PAGE */}
      <section
        id="home"
        className="min-h-screen px-6 md:px-12 lg:px-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >

            <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-8 text-neutral-600">
              Project Architect · Urban Works · Hawaii
            </p>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-light">
              Aishwarya
              <br />
              Bagwe
            </h1>

            <p className="mt-10 max-w-md text-base md:text-lg leading-relaxed text-neutral-700">
              Architecture, urban systems, and spatial storytelling
              shaped through thoughtful conceptual design.
            </p>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[50vh] md:h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl"
          >

            <img
              src={heroImage}
              alt="Architecture Project"
              className="w-full h-full object-cover object-center"
            />

          </motion.div>

        </div>

      </section>

      <AcademicProjects />
      <ProfessionalProjects />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}

export default App