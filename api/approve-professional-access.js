import crypto from "crypto"
import nodemailer from "nodemailer"
import {
    createClient
} from "@supabase/supabase-js"

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
)

export default async function handler(req, res) {
    const {
        token
    } = req.query

    if (!token) {
        return res.status(400).send("Missing approval token.")
    }

    const {
        data: request,
        error: findError
    } = await supabase
        .from("professional_access_requests")
        .select("*")
        .eq("approval_token", token)
        .single()

    if (findError || !request) {
        return res.status(404).send("Invalid or expired approval link.")
    }

    if (request.status === "approved") {
        return res.status(200).send("This request has already been approved.")
    }

    const accessToken = crypto.randomBytes(32).toString("hex")

    const verificationCode = crypto
        .randomInt(100000, 1000000)
        .toString()

    const verificationCodeHash = crypto
        .createHash("sha256")
        .update(verificationCode)
        .digest("hex")

    const accessExpiresAt = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toISOString()

    const {
        error: updateError
    } = await supabase
        .from("professional_access_requests")
        .update({
            status: "approved",
            approved_at: new Date().toISOString(),
            access_token: accessToken,
            access_expires_at: accessExpiresAt,
            verification_code_hash: verificationCodeHash,
        })
        .eq("id", request.id)

    if (updateError) {
        console.error(updateError)

        return res.status(500).send("Could not approve request.")
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    })

    const baseUrl =
        process.env.NODE_ENV === "production"
            ? "https://aishwarya-bagwe-portfolio.vercel.app"
            : "http://localhost:3000"

    const accessUrl =
        `${baseUrl}/professional-access?token=${accessToken}`

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: request.email,
            subject: "Your Professional Projects Access Has Been Approved",
            html: `
                <h2>Professional Projects Access Approved</h2>

                <p>Hello ${request.first_name},</p>

                <p>
                    Your request to view Aishwarya Bagwe's professional
                    project materials has been approved.
                </p>

                ${
                    request.include_resume
                        ? `
                        <p>
                            Your approved access also includes
                            Aishwarya Bagwe's résumé.
                        </p>
                        `
                        : ""
                }

                <p>
                    <strong>Your verification code:</strong>
                </p>

                <p style="font-size: 28px; letter-spacing: 6px;">
                    <strong>${verificationCode}</strong>
                </p>

                <p>
                    <a href="${accessUrl}">
                        View Approved Portfolio Materials
                    </a>
                </p>

                <p>
                    This access will expire in 7 days.
                </p>

                <p>
                    Please keep your verification code private.
                </p>
            `,
        })
    } catch (emailError) {
        console.error(emailError)

        return res.status(500).send(
            "Access was approved, but the approval email could not be sent."
        )
    }

    return res
        .status(200)
        .send("Professional projects access approved successfully.")
}