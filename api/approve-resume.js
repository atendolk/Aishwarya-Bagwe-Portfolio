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
        .from("resume_requests")
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
    const accessExpiresAt = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toISOString()

    const {
        error: updateError
    } = await supabase
        .from("resume_requests")
        .update({
            status: "approved",
            approved_at: new Date().toISOString(),
            access_token: accessToken,
            access_expires_at: accessExpiresAt,
        })
        .eq("id", request.id)

    if (updateError) {
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
        process.env.VERCEL_URL ?
        `https://${process.env.VERCEL_URL}` :
        "http://localhost:3000"

    const accessUrl = `${baseUrl}/api/resume-access?token=${accessToken}`
    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: request.email,
        subject: "Your Resume Access Request Has Been Approved",
        html: `
    <h2>Resume Access Approved</h2>
    <p>Hello ${request.first_name},</p>
    <p>Your request to view Aishwarya Bagwe's résumé has been approved.</p>
    <p>
      <a href="${accessUrl}">
        View Resume
      </a>
    </p>
    <p>This access link will expire in 7 days.</p>
  `,
    })
    return res.status(200).send("Resume access approved successfully.")
}