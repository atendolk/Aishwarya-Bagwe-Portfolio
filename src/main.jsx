import WHCHealthcare from "./pages/WHCHealthcare"
import WaipahuElementary from "./pages/WaipahuElementary"
import YoungResidence from "./pages/YoungResidence"
import Kealakehe from "./pages/Kealakehe"
import RethinkingRehab from "./pages/RethinkingRehab"
import SRMCampus from "./pages/SRMCampus"
import Arcadia from "./pages/Arcadia"
import HashScroll from "./components/HashScroll"
import BombayZoo from "./pages/BombayZoo"
import PerformingArts from "./pages/PerformingArts"
import ScrollToTop from "./components/ScrollToTop"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pulama from "./pages/Pulama"
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
          path="/projects/pulama"
          element={<Pulama />}
        />
        <Route
          path="/projects/whc-healthcare"
          element={<WHCHealthcare />}
        />
        <Route
          path="/projects/waipahu-elementary"
          element={<WaipahuElementary />}
        />
        <Route
          path="/projects/young-residence"
          element={<YoungResidence />}
        />
        <Route
          path="/projects/kealakehe"
          element={<Kealakehe />}
        />
        <Route
          path="/projects/rethinking-rehab"
          element={<RethinkingRehab />}
        />
        <Route path="/projects/srm-campus" element={<SRMCampus />} />
        <Route path="/projects/arcadia" element={<Arcadia />} />
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