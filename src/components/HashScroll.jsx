import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function HashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    if (location.hash === "#contact") {
      let attempts = 0

      const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: attempts === 0 ? "smooth" : "auto",
        })

        attempts += 1

        if (attempts < 20) {
          setTimeout(scrollToBottom, 150)
        }
      }

      scrollToBottom()
      return
    }

    const element = document.querySelector(location.hash)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [location])

  return null
}

export default HashScroll