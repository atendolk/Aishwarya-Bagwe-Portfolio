import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-full px-6 py-4">

      <div className="flex items-center gap-6 text-sm md:text-base">

        <Link
          to="/#projects"
          className="hover:opacity-50 transition-all duration-300"
        >
          Works
        </Link>

        <Link
          to="/#research"
          className="hover:opacity-50 transition-all duration-300"
        >
          Research
        </Link>

        <Link
          to="/#philosophy"
          className="hover:opacity-50 transition-all duration-300"
        >
          Philosophy
        </Link>

        <Link
          to="/#about"
          className="hover:opacity-50 transition-all duration-300"
        >
          About
        </Link>

        <Link
          to="/#contact"
          className="hover:opacity-50 transition-all duration-300"
        >
          Contact
        </Link>

      </div>

    </nav>
  )
}

export default Navbar