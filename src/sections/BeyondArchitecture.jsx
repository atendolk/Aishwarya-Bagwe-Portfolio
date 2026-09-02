import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const imageModules = import.meta.glob("../assets/photography/*", {
    eager: true,
    import: "default",
})

const getImage = (fileName) =>
    imageModules[`../assets/photography/${fileName}`]

const imageOrder = [
    // Row 1
    "5zMBRq6Q4avSvCTrNZGl5jXy6U.webp",
    "C3aAnNBI9w1DtHNY284eLkXzzs.webp",
    "DQcHkTOu98LTbrQmyLD4OeA7nj8.webp",

    // Row 2
    "FcBR0RyRGSdYFTXhk8egymztHi0.webp",
    "JyJrp1y6xBJ7ExG6sn7QFI21YQ.webp",
    "PkCDqGMuS1nB8oYztmhWNHFyjc.webp",

    // Row 3 — cave pair
    "ST48X3CL5HDEXQqvz5rSryl3buk.avif",
    "lw8tdVpwM3x3jqssGE41Me2NQiM.webp",
    "hUvKSLw7hyJcgmzQJjW783rY0.webp",

    // Row 4
    "j7BjqceDjdrgqtB4mcO5YyKxhQ.webp",
    "XMOJ5yu63VF1lhY7YcQ2n1Bcsw.webp",
    "Tv3Nof3FvwwgOA2fEYIJACZjI.webp",

    // Row 5
    "nLt5k6aBJLQQiFA7BMAIPOqJV4k.webp",
    "pmA7MsQyGZSDuM9WscJa7nrfyM.webp",
    "d3vzLDowOCAKszYnl4TJSiW3m8.avif",

    // Row 6
    "zVzvuU44OXjqxO7SFjA5SEc.webp",
    "sTSJdh54YVHMR7mgtJFsMZA90.avif",
    "uiPBk27udnMu4IcIrQ4OEGeRUA.webp",

    // Final centered image
    "sQ05mP0yoZLViR7AGwGB2qb6tlo.webp",
]

function BeyondArchitecture() {
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <>
            <section
                id="perspective"
                className="px-6 md:px-12 lg:px-20 py-32 bg-[#EFEAE3]"
            >
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="mb-20"
                    >
                        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
                            Photography · Personal Work
                        </p>

                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10">
                            Beyond Architecture
                        </h2>

                        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-700">
                            <p>
                                Photography is something I return to simply because I enjoy
                                observing. I’m drawn to the way light changes a familiar place,
                                the geometry hidden in a city, the scale of a landscape, or an
                                ordinary moment that suddenly feels worth remembering.
                            </p>

                            <p>
                                I don’t approach photography as a profession, but as another way
                                of seeing. It gives me space to notice things without needing to
                                design or solve them — sometimes simply to appreciate the world
                                as I find it.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        {imageOrder.map((fileName, index) => {
                            const image = getImage(fileName)

                            if (!image) return null

                            const isFinalImage = index === imageOrder.length - 1

                            return (
                                <motion.button
                                    key={fileName}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        delay: Math.min(index * 0.03, 0.2),
                                    }}
                                    className={`
                                        overflow-hidden
                                        rounded-[1.25rem]
                                        block
                                        w-full
                                        cursor-pointer
                                        ${isFinalImage ? "lg:col-start-2" : ""}
                                    `}
                                >
                                    <img
                                        src={image}
                                        alt={`Aishwarya Bagwe photography ${index + 1}`}
                                        className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                </motion.button>
                            )
                        })}
                    </div>

                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-default"
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            src={selectedImage}
                            alt="Expanded photography"
                            onClick={(event) => event.stopPropagation()}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default BeyondArchitecture