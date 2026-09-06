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
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed",
        })
    }

    const {
        firstName,
        lastName,
        email,
        company,
        includeResume = false,
    } = req.body

    if (!firstName || !lastName || !email || !company) {
        return res.status(400).json({
            error: "All fields are required",
        })
    }

    const approvalToken = crypto.randomBytes(32).toString("hex")

    const {
        error
    } = await supabase
        .from("professional_access_requests")
        .insert([{
            first_name: firstName,
            last_name: lastName,
            email,
            company,
            include_resume: Boolean(includeResume),
            status: "pending",
            approval_token: approvalToken,
        }])

    if (error) {
        console.error(error)

        return res.status(500).json({
            error: "Could not submit request",
        })
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

    const approvalUrl =
        `${baseUrl}/api/approve-professional-access?token=${approvalToken}`

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: "New Professional Projects Access Request",
            html: `
                <h2>New Professional Projects Access Request</h2>

                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p>
                    <strong>Resume access requested:</strong>
                    ${includeResume ? "Yes" : "No"}
                </p>

                <p>
                    <a href="${approvalUrl}">
                        Approve Professional Projects Access
                    </a>
                </p>
            `,
        })

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Professional Projects Access Request Received",
            html: `
                <h2>Professional Projects Access Request Received</h2>

                <p>Hi ${firstName},</p>

                <p>
                    Your request to view Aishwarya Bagwe's professional
                    project materials has been received and is currently
                    awaiting review.
                </p>

                ${
                    includeResume
                        ? `
                        <p>
                            Your request also includes access to
                            Aishwarya Bagwe's résumé.
                        </p>
                        `
                        : ""
                }

                <p>
                    You'll receive another email once your request
                    has been approved.
                </p>

                <p>Thank you for your interest.</p>
            `,
        })
    } catch (emailError) {
        console.error(emailError)

        return res.status(500).json({
            error: "Request saved, but email could not be sent",
        })
    }

    return res.status(200).json({
        success: true,
    })
}