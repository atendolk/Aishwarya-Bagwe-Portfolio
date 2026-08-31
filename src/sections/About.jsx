import { motion } from "framer-motion"
import aishuPhoto from "../assets/about/Aishu.png"

function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-32 bg-[#F6F2ED]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-8">
            About
          </p>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            I’ve always been more interested in the{" "}
            <span className="italic">why</span> behind things than simply
            accepting the way they are.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr_0.8fr] gap-12 lg:gap-16 mt-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[1.5rem]"
          >
            <img
              src={aishuPhoto}
              alt="Aishwarya Bagwe"
              className="w-full aspect-[3/4] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-7 text-lg leading-relaxed text-neutral-700"
          >
            <p>
              I’m Aishwarya Bagwe, an architect interested in how
              space, cities, materials, and human behavior shape one
              another. My journey through Mumbai, Chicago, Oklahoma,
              and Honolulu has allowed me to work across very different
              cultures, climates, scales, and ways of thinking about
              the built environment.
            </p>

            <p>
              My work has ranged from residential, educational, and
              healthcare projects to large-scale planning and research,
              including work on Vantara, a major animal rescue and
              conservation project in India. Along the way, my role has
              evolved from contributing to individual design tasks to
              taking greater ownership through design development,
              technical documentation, consultant coordination, code
              requirements, budgets, and construction administration.
            </p>

            <p>
              I enjoy moving between conceptual thinking and technical
              problem-solving. I’m most interested in architecture that
              begins with a clear idea, responds thoughtfully to people
              and place, and holds onto that idea as it moves from
              concept to something that can actually be built.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="border-t border-black/20 pt-8 space-y-10"
          >
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                Currently
              </p>
              <p className="text-lg">
                Project Architect
                <br />
                Urban Works, Inc.
                <br />
                Honolulu, Hawai‘i
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                Education
              </p>
              <p className="text-lg mb-4">
                M.S. Architecture
                <br />
                Illinois Institute of Technology
              </p>
              <p className="text-lg">
                Bachelor of Architecture
                <br />
                University of Mumbai
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                Focus
              </p>
              <p className="text-lg">
                Architecture · Urban Systems
                <br />
                Research · Visualization
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                Tools
              </p>
              <p className="text-lg">
                Revit · AutoCAD
                <br />
                Adobe Creative Suite
                <br />
                Lumion · Enscape
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About