import { useState, useEffect } from "react"

import { Document, Page, pdfjs } from "react-pdf"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

function PDFViewer({ startPage, endPage }) {
  const pages = []

  const [selectedPage, setSelectedPage] = useState(null)

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  // ESC KEY CLOSE
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedPage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      {/* NORMAL PAGE VIEW */}
      <div className="space-y-20 max-w-[1800px] mx-auto">

        {pages.map((pageNumber) => (

          <div
            key={pageNumber}
            onClick={() => setSelectedPage(pageNumber)}
            className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 flex justify-center cursor-zoom-in hover:scale-[1.01] transition-all duration-500"
          >

            <Document
              file="/portfolio.pdf"
              loading=""
            >

              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={Math.min(window.innerWidth * 0.9, 1600)}
                devicePixelRatio={window.devicePixelRatio || 1}
              />

            </Document>

          </div>

        ))}

      </div>

      {/* FULLSCREEN MODAL */}
      {selectedPage && (

        <div
          onClick={() => setSelectedPage(null)}
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 md:p-10 overflow-auto"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedPage(null)}
            className="fixed top-6 right-6 text-white text-4xl z-[10000] hover:opacity-60 transition-all duration-300"
          >
            ×
          </button>

          {/* PDF PAGE */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >

            <Document
              file="/portfolio.pdf"
              loading=""
            >

              <Page
                pageNumber={selectedPage}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={Math.min(window.innerWidth * 0.92, 2400)}
                devicePixelRatio={window.devicePixelRatio || 1}
              />

            </Document>

          </div>

        </div>

      )}
    </>
  )
}

export default PDFViewer