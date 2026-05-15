import HashScroll from "./components/HashScroll"
import BombayZoo from "./pages/BombayZoo"
import PerformingArts from "./pages/PerformingArts"
import ScrollToTop from "./components/ScrollToTop"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"

import App from "./App"
import BreakingBarriers from "./pages/BreakingBarriers"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <HashScroll />
      <Routes>
        <Route
          path="/projects/performing-arts"
          element={<PerformingArts />}
        />
        {/* HOMEPAGE */}
        <Route path="/" element={<App />} />

        {/* PROJECT PAGE */}
        <Route
          path="/projects/breaking-barriers"
          element={<BreakingBarriers />}
        />
        <Route
          path="/projects/bombay-zoo"
          element={<BombayZoo />}
        />

      </Routes>

    </BrowserRouter>
  </StrictMode>
)