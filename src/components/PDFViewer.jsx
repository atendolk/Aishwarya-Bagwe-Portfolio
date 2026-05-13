import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

function PDFViewer({ startPage, endPage }) {
  const pages = []

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="space-y-20 max-w-[1800px] mx-auto">

      {pages.map((pageNumber) => (

        <div
          key={pageNumber}
          className="rounded-[2rem] overflow-hidden shadow-2xl bg-white flex justify-center"
        >

          <Document
            file="/portfolio.pdf"
            loading=""
          >

            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="w-full"
            />

          </Document>

        </div>

      ))}

    </div>
  )
}

export default PDFViewer