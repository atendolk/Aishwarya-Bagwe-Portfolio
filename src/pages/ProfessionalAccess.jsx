import { useState } from "react"

import youngResidence from "../assets/projects/professional/young-residence/icon.png"
import kealakehe from "../assets/projects/professional/kealakehe/icon.png"
import waipahuElementary from "../assets/projects/professional/waipahu-elementary/icon.png"
import whcHealthcare from "../assets/projects/professional/whc-healthcare/icon.png"
import pulama from "../assets/projects/professional/pulama/icon.png"
import indiaSelectedWorks from "../assets/projects/professional/india-selected-works/icon.png"

const projects = [
    {
        id: "india-selected-works",
        title: "India Selected Works",
        image: indiaSelectedWorks,
    },
    {
        id: "pulama",
        title: "Pulama",
        image: pulama,
    },
    {
        id: "whc-healthcare",
        title: "WHC Healthcare Facility",
        image: whcHealthcare,
    },
    {
        id: "waipahu-elementary",
        title: "Waipahu Elementary School Renovation",
        image: waipahuElementary,
    },
    {
        id: "kealakehe",
        title: "Kealakehe",
        image: kealakehe,
    },
    {
        id: "young-residence",
        title: "Young Residence",
        image: youngResidence,
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
        <main className="min-h-screen bg-[#F6F2ED] px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
                        Private Portfolio
                    </p>

                    <h1 className="font-serif text-5xl md:text-7xl">
                        Professional Projects
                    </h1>

                    <p className="max-w-2xl text-neutral-600 leading-relaxed mt-6">
                        Your access has been verified. Select a project below
                        to view the approved professional material.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => openMaterial(project.id)}
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
                                    <h2 className="font-serif text-2xl md:text-3xl text-white">
                                        {project.title}
                                    </h2>

                                    <p className="text-sm text-white/80 mt-2">
                                        View Project PDF
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {includeResume && (
                    <div className="mt-16 pt-10 border-t border-black/10">
                        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-5">
                            Additional Approved Material
                        </p>

                        <button
                            type="button"
                            onClick={() => openMaterial("resume")}
                            className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full hover:bg-black/80 transition-colors"
                        >
                            View Résumé
                        </button>
                    </div>
                )}

                <p className="mt-14 text-xs text-neutral-400">
                    These materials are provided for authorized professional review only.
                </p>
            </div>
        </main>
    )
}

export default ProfessionalAccess