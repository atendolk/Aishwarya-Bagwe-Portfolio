import { motion } from "framer-motion"
import Navbar from "../components/Navbar"

import page01 from "../assets/projects/professional/kealakehe/page-01.png"
import page02 from "../assets/projects/professional/kealakehe/page-02.png"
import page03 from "../assets/projects/professional/kealakehe/page-03.png"
import page04 from "../assets/projects/professional/kealakehe/page-04.png"
import page05 from "../assets/projects/professional/kealakehe/page-05.png"
import page06 from "../assets/projects/professional/kealakehe/page-06.png"
import page07 from "../assets/projects/professional/kealakehe/page-07.png"
import page08 from "../assets/projects/professional/kealakehe/page-08.png"
import page09 from "../assets/projects/professional/kealakehe/page-09.png"
import page10 from "../assets/projects/professional/kealakehe/page-10.png"
import page11 from "../assets/projects/professional/kealakehe/page-11.png"

function Kealakehe() {
  const images = [
    page01,
    page02,
    page03,
    page04,
    page05,
    page06,
    page07,
    page08,
    page09,
    page10,
    page11,
  ]

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
            Professional Project
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            Kealakehe
          </h1>
        </motion.div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Kealakehe - ${index + 1}`}
              className="w-full h-auto block shadow-lg"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Kealakehe