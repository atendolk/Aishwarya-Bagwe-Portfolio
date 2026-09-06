import RethinkingRehab from "./pages/RethinkingRehab"
import SRMCampus from "./pages/SRMCampus"
import Arcadia from "./pages/Arcadia"
import HashScroll from "./components/HashScroll"
import BombayZoo from "./pages/BombayZoo"
import PerformingArts from "./pages/PerformingArts"
import ScrollToTop from "./components/ScrollToTop"
import ProfessionalAccess from "./pages/ProfessionalAccess"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
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
          path="/professional-access"
          element={<ProfessionalAccess />}
        />

        <Route
          path="/projects/rethinking-rehab"
          element={<RethinkingRehab />}
        />

        <Route
          path="/projects/srm-campus"
          element={<SRMCampus />}
        />

        <Route
          path="/projects/arcadia"
          element={<Arcadia />}
        />

        <Route
          path="/projects/performing-arts"
          element={<PerformingArts />}
        />

        <Route
          path="/projects/breaking-barriers"
          element={<BreakingBarriers />}
        />

        <Route
          path="/projects/bombay-zoo"
          element={<BombayZoo />}
        />

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)