import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Contact() {
  const [showResumeForm, setShowResumeForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/request-resume", {
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
    setShowResumeForm(false)

    setTimeout(() => {
      setSubmitted(false)
      setError("")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
      })
    }, 300)
  }

  return (
    <>
      <section
        id="contact"
        className="px-6 md:px-12 lg:px-20 py-32 bg-[#1A1A1A] text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-6">
            Get In Touch
          </p>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12">
            Let's create something
            <br />
            meaningful.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg">
            <a
              href="mailto:bagwethearchitect@gmail.com"
              className="hover:opacity-50 transition-opacity"
            >
              bagwethearchitect@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/aishwarya-bagwe-a1b35a256"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              LinkedIn ↗
            </a>

            <button
              type="button"
              onClick={() => setShowResumeForm(true)}
              className="text-left hover:opacity-50 transition-opacity"
            >
              Resume ↗
            </button>
          </div>

          <div className="mt-24 pt-8 border-t border-white/20 text-sm text-neutral-500">
            © {new Date().getFullYear()} Aishwarya Bagwe
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showResumeForm && (
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
                    Resume Access
                  </p>

                  <h3 className="font-serif text-4xl md:text-5xl mb-4">
                    Request Access
                  </h3>

                  <p className="text-neutral-600 leading-relaxed mb-8">
                    Please provide your information below to request access to
                    Aishwarya Bagwe's résumé.
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
                    Your request to view Aishwarya Bagwe's résumé has been
                    submitted for review. You will be notified by email once
                    access has been approved.
                  </p>

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

export default Contact