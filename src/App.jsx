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
          <div className="h-[60vh] md:h-[75vh] rounded-[2rem] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
              alt="Architecture"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="min-h-screen px-6 md:px-12 lg:px-20 py-32"
      >
        <h2 className="font-serif text-5xl md:text-7xl">
          Selected Works
        </h2>
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