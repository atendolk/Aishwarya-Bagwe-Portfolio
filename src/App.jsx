/* LANDING PAGE import heroImage from "./assets/projects/hero.jpg"
import rehabImage from "./assets/projects/rehab.jpg"
import rehabImage from "./assets/projects/hero.jpg"
import crimesImage from "./assets/projects/hero.jpg"
import crimesImage from "./assets/projects/crimes.jpg" */

import heroImage from "./assets/projects/hero.jpg"
import rehabImage from "./assets/projects/hero.jpg"
import crimesImage from "./assets/projects/hero.jpg"

const projects = [
  {
    title: "Breaking Barriers",
    category: "MS ARCH Thesis · Chicago",
    description:
      "An exploration of gendered spatial systems, social resilience, and speculative urban intervention.",
    image: heroImage,
  },

  {
    title: "Rethinking Rehab",
    category: "B. Arch Thesis · Assam",
    description:
      "A rehabilitation framework focused on healing, vocational training, and community reintegration.",
    image: rehabImage,
  },

  {
    title: "Revealing Realities",
    category: "Chicago Architecture Biennial",
    description:
      "A global mapping and systems-based study investigating violence and crimes against women.",
    image: crimesImage,
  },
]

function App() {
  return (
    <main className="bg-[#F6F2ED] text-[#1A1A1A] min-h-screen overflow-hidden">

      {/* LANDING PAGE */}
      <section className="min-h-screen px-6 md:px-12 lg:px-20 flex items-center">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

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

            {/* NAVIGATION */}
            <div className="mt-14 flex flex-col gap-5">

              <a
                href="#projects"
                className="group flex items-center gap-4 text-lg hover:translate-x-2 transition-all duration-500"
              >
                <span>Selected Works</span>

                <span className="group-hover:translate-x-2 transition-all duration-500">
                  →
                </span>
              </a>

              <a
                href="#research"
                className="group flex items-center gap-4 text-lg hover:translate-x-2 transition-all duration-500"
              >
                <span>Research & Systems</span>

                <span className="group-hover:translate-x-2 transition-all duration-500">
                  →
                </span>
              </a>

              <a
                href="#philosophy"
                className="group flex items-center gap-4 text-lg hover:translate-x-2 transition-all duration-500"
              >
                <span>Philosophy</span>

                <span className="group-hover:translate-x-2 transition-all duration-500">
                  →
                </span>
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="h-[50vh] md:h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl">

            <img
              src={heroImage}
              alt="Architecture Project"
              className="w-full h-full object-cover object-center"
            />

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="font-serif text-5xl md:text-7xl mb-24">
            Selected Works
          </h2>

          <div className="flex flex-col gap-40">

            {projects.map((project, index) => (

              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >

                {/* IMAGE */}
                <div className="rounded-[2rem] overflow-hidden shadow-2xl">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  />

                </div>

                {/* TEXT */}
                <div>

                  <p className="uppercase tracking-[0.25em] text-sm text-neutral-500 mb-6">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                    {project.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-neutral-700 mb-10">
                    {project.description}
                  </p>

                  <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                    View Project
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RESEARCH SECTION */}
      <section
        id="research"
        className="min-h-screen px-6 md:px-12 lg:px-20 py-32"
      >
        <h2 className="font-serif text-5xl md:text-7xl">
          Research & Systems
        </h2>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section
        id="philosophy"
        className="min-h-screen px-6 md:px-12 lg:px-20 py-32"
      >
        <h2 className="font-serif text-5xl md:text-7xl">
          Philosophy
        </h2>
      </section>

    </main>
  )
}

export default App