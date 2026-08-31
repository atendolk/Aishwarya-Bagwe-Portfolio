import Navbar from "./components/Navbar"
import { motion } from "framer-motion"
import BeyondArchitecture from "./sections/BeyondArchitecture"
import aishuBW from "./assets/about/AishuBW.png"
import heroImage from "./assets/projects/hero-new.png"

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
        className="min-h-screen px-4 md:px-8 lg:px-12 pt-32 pb-16 bg-[#F6F2ED]"
      >
        <div className="max-w-[1600px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >

            {/* LARGE HERO IMAGE */}
            <div className="h-[72vh] md:h-[78vh] overflow-hidden rounded-[2rem]">
              <img
                src={heroImage}
                alt="Aishwarya Bagwe Architecture Portfolio"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* NAME CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="
                relative md:absolute
                md:left-10 md:bottom-[-3rem]
                mt-[-2rem] mx-5 md:mx-0
                bg-[#F6F2ED]
                px-7 py-7 md:px-10 md:py-8
                rounded-[1.5rem]
                shadow-xl
                md:w-[850px]
                max-w-[calc(100%-2.5rem)]
              "
            >

              <div className="flex items-center gap-8 md:gap-10">

                {/* TEXT */}
                <div className="flex-1">

                  <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-4">
                    Project Architect · Architecture / Design / Research
                  </p>

                  <h1 className="font-serif text-5xl md:text-7xl leading-[0.9]">
                    Aishwarya Bagwe
                  </h1>

                  <p className="mt-6 text-sm text-neutral-500">
                    Mumbai · Chicago · Tulsa · Honolulu
                  </p>

                </div>

                {/* B&W PORTRAIT */}
                <div className="
                  hidden md:block
                  w-36
                  h-44
                  flex-shrink-0
                  rounded-[1.25rem]
                  overflow-hidden
                ">
                  <img
                    src={aishuBW}
                    alt="Aishwarya Bagwe"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </motion.div>

          </motion.div>

          <div className="hidden md:flex justify-end mt-5 text-xs uppercase tracking-[0.25em] text-neutral-400">
            Scroll to explore ↓
          </div>

        </div>
      </section>

      <AcademicProjects />
      <ProfessionalProjects />
      <Experience />
      <About />
      <BeyondArchitecture />
      <Contact />

    </main>
  )
}

export default App