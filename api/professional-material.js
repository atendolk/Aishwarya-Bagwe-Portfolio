import {
    createClient
} from "@supabase/supabase-js"

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
)

const PROJECT_FILES = {
    "kealakehe": "01-kealakehe-classroom-building.pdf",
    "young-residence": "02-young-residence.pdf",
    "waipahu-elementary": "03-waipahu-elementary-school.pdf",
    "whc-healthcare": "04-waimanalo-health-center.pdf",
    "pulama": "05-hokuao-housing-subdivision.pdf",
    "india-selected-works": "06-india-selected-works.pdf",
}

export default async function handler(req, res) {
    const {
        token,
        material
    } = req.query

    if (!token || !material) {
        return res.status(400).send("Missing access information.")
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

    if (material === "resume") {
        if (!request.include_resume) {
            return res.status(403).send("Resume access was not approved.")
        }

        const {
            data: signedUrlData,
            error: signedUrlError
        } = await supabase.storage
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

        return res.redirect(
            302,
            signedUrlData.signedUrl
        )
    }

    const projectFile = PROJECT_FILES[material]

    if (!projectFile) {
        return res.status(404).send("Project not found.")
    }

    const {
        data: signedUrlData,
        error: signedUrlError
    } = await supabase.storage
        .from("professional-projects")
        .createSignedUrl(
            projectFile,
            300
        )

    if (
        signedUrlError ||
        !signedUrlData?.signedUrl
    ) {
        return res
            .status(500)
            .send("Could not generate project access.")
    }

    return res.redirect(
        302,
        signedUrlData.signedUrl
    )
}