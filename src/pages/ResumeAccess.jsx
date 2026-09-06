import { useState } from "react"

function ResumeAccess() {
    const [verificationCode, setVerificationCode] = useState("")
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
            const response = await fetch("/api/verify-resume-access", {
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

            const resumeUrl =
                `/api/resume-access?token=${encodeURIComponent(
                    data.accessToken
                )}`

            window.location.href = resumeUrl
        } catch (err) {
            setError(
                err.message ||
                "Something went wrong. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#EFEAE3] flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-xl bg-[#F8F5F0] rounded-[2rem] p-8 md:p-12 shadow-xl">
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-5">
                    Private Résumé Access
                </p>

                <h1 className="font-serif text-4xl md:text-5xl mb-5">
                    Verification Required
                </h1>

                <p className="text-neutral-600 leading-relaxed mb-8">
                    Enter the 6-digit verification code included
                    in your approval email to view Aishwarya Bagwe&apos;s résumé.
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
                            : "View Résumé"}
                    </button>
                </form>
            </div>
        </main>
    )
}

export default ResumeAccess