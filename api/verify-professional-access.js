import crypto from "crypto"
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
        token,
        verificationCode
    } = req.body

    if (!token || !verificationCode) {
        return res.status(400).json({
            error: "Access token and verification code are required.",
        })
    }

    const {
        data: request,
        error: findError
    } = await supabase
        .from("professional_access_requests")
        .select("*")
        .eq("access_token", token)
        .single()

    if (findError || !request) {
        return res.status(404).json({
            error: "Invalid access link.",
        })
    }

    if (request.status !== "approved") {
        return res.status(403).json({
            error: "Access has not been approved.",
        })
    }

    if (
        !request.access_expires_at ||
        new Date(request.access_expires_at) < new Date()
    ) {
        return res.status(403).json({
            error: "This access has expired.",
        })
    }

    const verificationCodeHash = crypto
        .createHash("sha256")
        .update(String(verificationCode))
        .digest("hex")

    if (
        !request.verification_code_hash ||
        verificationCodeHash !== request.verification_code_hash
    ) {
        return res.status(403).json({
            error: "Incorrect verification code.",
        })
    }

    return res.status(200).json({
        success: true,
        accessToken: request.access_token,
        includeResume: request.include_resume,
        expiresAt: request.access_expires_at,
    })
}