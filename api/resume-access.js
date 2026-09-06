import crypto from "crypto"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
)

export default async function handler(req, res) {
    const { token } = req.query

    if (!token) {
        return res.status(400).send("Missing access token.")
    }

    const tokenHash = crypto
        .createHash("sha256")
        .update(String(token))
        .digest("hex")

    const { data: request, error } = await supabase
        .from("resume_requests")
        .select("*")
        .eq("verified_view_token_hash", tokenHash)
        .single()

    if (error || !request) {
        return res.status(404).send("Invalid access link.")
    }

    if (request.status !== "approved") {
        return res.status(403).send("Access has not been approved.")
    }

    if (
        !request.access_expires_at ||
        new Date(request.access_expires_at) < new Date()
    ) {
        return res.status(403).send("This access has expired.")
    }

    if (
        !request.verified_view_token_expires_at ||
        new Date(request.verified_view_token_expires_at) < new Date()
    ) {
        return res.status(403).send(
            "This verified access session has expired."
        )
    }

    const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
            .from("resume")
            .createSignedUrl(
                "RESUME_Aishwarya Bagwe.pdf",
                300
            )

    if (
        signedUrlError ||
        !signedUrlData?.signedUrl
    ) {
        return res
            .status(500)
            .send("Could not generate resume access.")
    }

    await supabase
        .from("resume_requests")
        .update({
            verified_view_token_hash: null,
            verified_view_token_expires_at: null,
        })
        .eq("id", request.id)

    return res.redirect(
        302,
        signedUrlData.signedUrl
    )
}