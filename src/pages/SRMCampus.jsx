import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

import picture1 from "../assets/projects/academic/srm-campus/image (2).png"
import picture2 from "../assets/projects/academic/srm-campus/image (3).png"
import picture3 from "../assets/projects/academic/srm-campus/ppt2891.pptx  -  AutoRecovered [Autosaved].jpg"

function SRMCampus() {
  const images = [picture1, picture2, picture3]

  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Academic Project
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            SRM Campus
          </h1>
        </motion.div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`SRM Campus - ${index + 1}`}
              className="w-full h-auto block shadow-lg"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default SRMCampus