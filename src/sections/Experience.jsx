import { motion } from "framer-motion"

const roles = [
  {
    title: "Project Architect",
    company: "Urban Works, Inc.",
    location: "Honolulu, Hawai‘i",
    dates: "March 2025 — Present",
    summary:
      "Working directly with firm principals and multidisciplinary consultants, contributing to architectural projects from early design through construction documentation and construction-phase coordination.",
    highlights: [
      "Lead architectural project work across design development, documentation, consultant coordination, and project deliverables.",
      "Develop and manage Revit models from initial setup through final coordinated drawing packages.",
      "Perform QA/QC and code reviews with attention to accessibility, constructability, and documentation consistency.",
      "Coordinate with consultants, cost estimators, and specification writers to resolve technical and budget-related issues.",
      "Conduct site visits and provide technical guidance to junior designers.",
    ],
    focus: "Education · Residential · Institutional · Healthcare",
  },
  {
    title: "Architectural Intern / Co-op",
    company: "Reed Architects and Interiors",
    location: "Tulsa, Oklahoma",
    dates: "May 2024 — December 2024",
    summary:
      "Contributed to educational architecture with an emphasis on design communication, BIM workflows, visualization, planning, and technical studies.",
    highlights: [
      "Supported the Sapulpa High School project through conceptual 3D studies and architectural graphics.",
      "Prepared planning, design, and code studies with increasing independence.",
      "Collaborated with architecture and construction professionals, including DLR Group team members.",
      "Developed customized visualization and presentation sets using Enscape and Lumion.",
    ],
    focus: "Educational Design · BIM · Visualization · Design Studies",
  },
  {
    title: "Architect",
    company: "GA Design Consultants LLP",
    location: "Mumbai, India",
    dates: "August 2021 — July 2023",
    summary:
      "Worked closely with the Principal and Studio Manager across multiple project phases, combining design development with technical coordination, regulatory requirements, and project execution.",
    highlights: [
      "Served in a senior architectural role on Vantara, including work across the approximately 50-acre Herbivore Park and Apes Park scope.",
      "Integrated accessibility requirements, National Building Code provisions, and zoning regulations into planning and design.",
      "Coordinated multidisciplinary design and documentation issues with internal teams, consultants, and stakeholders.",
      "Prepared coordination reports, meeting minutes, and deliverable schedules for complex client discussions involving Reliance Group of Industries.",
      "Supported QA/QC, visualization, rendering, and technical development across project teams.",
    ],
    focus:
      "Large-Scale Design · Consultant Coordination · QA/QC · Client Coordination · Technical Delivery",
  },
  {
    title: "Architect",
    company: "Abhikalpan Associates and Planners",
    location: "Mumbai, India",
    dates: "September 2020 — August 2021",
    summary:
      "Worked across data-center, healthcare, education, and commercial architecture within a multidisciplinary design environment.",
    highlights: [
      "Developed architectural layouts, design analyses, and code reviews.",
      "Designed building elevations and podium façades.",
      "Produced architectural studies, presentations, and parametric design explorations using InDesign, SketchUp, and Grasshopper.",
    ],
    focus:
      "Design Development · Façade Design · Parametric Studies · Multidisciplinary Projects",
  },
  {
    title: "Architecture Intern",
    company: "The Firm Associates",
    location: "Mumbai, India",
    dates: "December 2018 — December 2019",
    summary:
      "Built an early foundation in professional architectural practice through design development, documentation, site coordination, and project administration.",
    highlights: [
      "Prepared site-visit reports, meeting minutes, area calculations, area statements, and project schedules.",
      "Contributed to architectural design and documentation both collaboratively and independently.",
    ],
    focus: "Architectural Documentation · Site Coordination · Design Development",
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 pt-32 pb-24 bg-[#EFEAE3]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Career
          </p>

          <h2 className="font-serif text-5xl md:text-7xl">
            Work Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-black/15 py-10 mb-24">
          <div>
            <p className="text-3xl font-serif">~7 Years</p>
            <p className="text-sm text-neutral-500 mt-2">
              Architecture Experience
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif">2 Countries</p>
            <p className="text-sm text-neutral-500 mt-2">
              United States + India
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif">BIM + Delivery</p>
            <p className="text-sm text-neutral-500 mt-2">
              Design → Documentation → Construction
            </p>
          </div>

          <div>
            <p className="text-3xl font-serif">Multi-Sector</p>
            <p className="text-sm text-neutral-500 mt-2">
              Education · Healthcare · Residential
            </p>
          </div>
        </div>

        <div>
          {roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.dates}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-[0.7fr_2fr] gap-8 lg:gap-16 py-16 border-b border-black/15"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  {role.dates}
                </p>

                <h3 className="font-serif text-3xl mb-2">
                  {role.title}
                </h3>

                <p className="text-lg">
                  {role.company}
                </p>

                <p className="text-neutral-500 mt-1">
                  {role.location}
                </p>
              </div>

              <div>
                <p className="text-xl leading-relaxed text-neutral-700 mb-8">
                  {role.summary}
                </p>

                <ul className="space-y-4 text-neutral-700">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 leading-relaxed"
                    >
                      <span className="text-neutral-400">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-sm uppercase tracking-[0.18em] text-neutral-500">
                  {role.focus}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience