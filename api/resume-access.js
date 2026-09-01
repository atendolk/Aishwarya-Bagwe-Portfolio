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

  const { data: request, error } = await supabase
    .from("resume_requests")
    .select("*")
    .eq("access_token", token)
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
    return res.status(403).send("This access link has expired.")
  }

  const { data: signedUrlData, error: signedUrlError } =
    await supabase.storage
      .from("resume")
      .createSignedUrl("RESUME_Aishwarya Bagwe.pdf", 300)

  if (signedUrlError || !signedUrlData?.signedUrl) {
    return res.status(500).send("Could not generate resume access.")
  }

  return res.redirect(302, signedUrlData.signedUrl)
}