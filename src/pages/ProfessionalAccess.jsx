import { useState } from "react"

const projects = [
    {
        id: "kealakehe",
        number: "01",
        title: "Kealakehe Classroom Building",
    },
    {
        id: "young-residence",
        number: "02",
        title: "Young Residence",
    },
    {
        id: "waipahu-elementary",
        number: "03",
        title: "Waipahu Elementary School",
    },
    {
        id: "whc-healthcare",
        number: "04",
        title: "Waimanalo Health Center",
    },
    {
        id: "pulama",
        number: "05",
        title: "Hokuao Housing Subdivision",
    },
    {
        id: "india-selected-works",
        number: "06",
        title: "India Selected Works",
    },
]

function ProfessionalAccess() {
    const [verificationCode, setVerificationCode] = useState("")
    const [verified, setVerified] = useState(false)
    const [includeResume, setIncludeResume] = useState(false)
    const [accessToken, setAccessToken] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const token = new URLSearchParams(window.location.search).get("token")

    const handleVerify = async (event) => {
        event.preventDefault()

        setError("")

        if (!token) {
            setError("This access link is invalid.")
            return
        }

        if (verificationCode.length !== 6) {
            setError("Please enter the 6-digit verification code.")
            return
        }

        setLoading(true)

        try {
            const response = await fetch("/api/verify-professional-access", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    verificationCode,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.error || "Unable to verify access."
                )
            }

            setAccessToken(data.accessToken)
            setIncludeResume(Boolean(data.includeResume))
            setVerified(true)
        } catch (err) {
            setError(
                err.message ||
                "Something went wrong. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

    const openMaterial = (material) => {
        const url =
            `/api/professional-material?token=${encodeURIComponent(
                accessToken
            )}&material=${encodeURIComponent(material)}`

        window.open(url, "_blank", "noopener,noreferrer")
    }

    if (!verified) {
        return (
            <main className="min-h-screen bg-[#EFEAE3] flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-xl bg-[#F8F5F0] rounded-[2rem] p-8 md:p-12 shadow-xl">
                    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-5">
                        Private Portfolio Access
                    </p>

                    <h1 className="font-serif text-4xl md:text-5xl mb-5">
                        Verification Required
                    </h1>

                    <p className="text-neutral-600 leading-relaxed mb-8">
                        Enter the 6-digit verification code included
                        in your approval email to view the approved
                        professional materials.
                    </p>

                    <form
                        onSubmit={handleVerify}
                        className="space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="verificationCode"
                                className="block text-sm mb-2 text-neutral-700"
                            >
                                Verification Code
                            </label>

                            <input
                                id="verificationCode"
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                maxLength={6}
                                value={verificationCode}
                                onChange={(event) => {
                                    const value =
                                        event.target.value.replace(/\D/g, "")

                                    setVerificationCode(value)
                                }}
                                placeholder="000000"
                                className="w-full rounded-xl border border-neutral-300 bg-white px-5 py-4 text-center text-2xl tracking-[0.4em] outline-none focus:border-neutral-700"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-red-700">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-neutral-900 text-white px-6 py-4 transition hover:bg-neutral-700 disabled:opacity-50"
                        >
                            {loading
                                ? "Verifying..."
                                : "View Approved Materials"}
                        </button>
                    </form>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#EFEAE3] px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14">
                    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-5">
                        Private Portfolio
                    </p>

                    <h1 className="font-serif text-5xl md:text-7xl mb-6">
                        Professional Projects
                    </h1>

                    <p className="max-w-2xl text-neutral-600 leading-relaxed">
                        Your access has been verified. Select a project
                        below to view the approved professional material.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => openMaterial(project.id)}
                            className="group text-left bg-[#F8F5F0] rounded-[1.5rem] p-7 md:p-8 border border-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className="block text-xs tracking-[0.25em] text-neutral-400 mb-5">
                                PROJECT {project.number}
                            </span>

                            <div className="flex items-end justify-between gap-6">
                                <h2 className="font-serif text-2xl md:text-3xl">
                                    {project.title}
                                </h2>

                                <span className="text-2xl transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </div>

                            <p className="text-sm text-neutral-500 mt-4">
                                View project PDF
                            </p>
                        </button>
                    ))}
                </div>

                {includeResume && (
                    <div className="mt-12 pt-10 border-t border-black/10">
                        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-5">
                            Additional Approved Material
                        </p>

                        <button
                            type="button"
                            onClick={() => openMaterial("resume")}
                            className="w-full md:w-auto bg-neutral-900 text-white rounded-full px-8 py-4 transition hover:bg-neutral-700"
                        >
                            View Résumé
                        </button>
                    </div>
                )}

                <p className="mt-14 text-xs text-neutral-400">
                    These materials are provided for authorized
                    professional review only.
                </p>
            </div>
        </main>
    )
}

export default ProfessionalAccess