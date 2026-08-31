import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Contact from "../sections/Contact"
import picture1 from "../assets/projects/academic/performing-arts/Picture1.png"
import picture2 from "../assets/projects/academic/performing-arts/Picture2.png"
import picture3 from "../assets/projects/academic/performing-arts/Picture3.png"

function PerformingArts() {
  const images = [picture1, picture2, picture3]

  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Academic Project
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            Institute of Performing Arts
          </h1>
        </motion.div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Institute of Performing Arts - ${index + 1}`}
              className="w-full h-auto block shadow-lg"
            />
          ))}
        </div>
      </section>
      <Contact />
    </main>
  )
}

export default PerformingArts