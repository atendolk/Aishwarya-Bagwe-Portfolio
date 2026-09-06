import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import youngResidence from "../assets/projects/professional/young-residence/icon.png"
import kealakehe from "../assets/projects/professional/kealakehe/icon.png"
import waipahuElementary from "../assets/projects/professional/waipahu-elementary/icon.png"
import whcHealthcare from "../assets/projects/professional/whc-healthcare/icon.png"
import pulama from "../assets/projects/professional/pulama/icon.png"
import indiaSelectedWorks from "../assets/projects/professional/india-selected-works/icon.png"

const projects = [
  {
    title: "India Selected Works",
    image: indiaSelectedWorks,
  },
  {
    title: "Pulama",
    image: pulama,
  },
  {
    title: "WHC Healthcare Facility",
    image: whcHealthcare,
  },
  {
    title: "Waipahu Elementary School Renovation",
    image: waipahuElementary,
  },
  {
    title: "Kealakehe",
    image: kealakehe,
  },
  {
    title: "Young Residence",
    image: youngResidence,
  },
]

function ProfessionalProjects() {
  const [showAccessForm, setShowAccessForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    includeResume: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/request-professional-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    setShowAccessForm(false)

    setTimeout(() => {
      setSubmitted(false)
      setError("")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        includeResume: false,
      })
    }, 300)
  }

  return (
    <>
      <section
        id="professional"
        className="px-6 md:px-12 lg:px-20 py-32 bg-[#F6F2ED]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
              Practice
            </p>

            <h2 className="font-serif text-5xl md:text-7xl">
              Professional Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setShowAccessForm(true)}
                className="group block text-left w-full"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500" />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl md:text-3xl text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showAccessForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-xl bg-[#F6F2ED] text-[#1A1A1A] rounded-[2rem] p-8 md:p-10 shadow-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-6 right-7 text-2xl text-neutral-500 hover:text-black"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-4">
                    Professional Projects Access
                  </p>

                  <h3 className="font-serif text-4xl md:text-5xl mb-4">
                    Request Access
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-8">
                    Please provide your information below to request access to
                    Aishwarya Bagwe&apos;s professional project materials.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First name"
                        className="w-full bg-transparent border-b border-black/30 py-3 outline-none focus:border-black"
                      />

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last name"
                        className="w-full bg-transparent border-b border-black/30 py-3 outline-none focus:border-black"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                      className="w-full bg-transparent border-b border-black/30 py-3 outline-none focus:border-black"
                    />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Company"
                      className="w-full bg-transparent border-b border-black/30 py-3 outline-none focus:border-black"
                    />

                    <label className="flex items-start gap-3 pt-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="includeResume"
                        checked={formData.includeResume}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4"
                      />

                      <span className="text-sm leading-relaxed text-neutral-700">
                        Also request access to Aishwarya Bagwe&apos;s résumé
                      </span>
                    </label>

                    {error && (
                      <p className="text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 w-full bg-[#1A1A1A] text-white py-4 rounded-full hover:bg-black/80 transition-colors disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Request Access"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-10">
                  <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-5">
                    Request Received
                  </p>

                  <h3 className="font-serif text-4xl md:text-5xl mb-6">
                    Thank you.
                  </h3>

                  <p className="text-lg leading-relaxed text-neutral-600">
                    Your request to view Aishwarya Bagwe&apos;s professional
                    project materials has been submitted for review. You will
                    be notified by email once access has been approved.
                  </p>

                  {formData.includeResume && (
                    <p className="mt-4 text-neutral-600">
                      Your request also includes access to Aishwarya
                      Bagwe&apos;s résumé.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-8 bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-black/80 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProfessionalProjects