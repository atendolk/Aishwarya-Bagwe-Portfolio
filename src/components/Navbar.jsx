import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-full px-6 py-4">
      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-base whitespace-nowrap">

        <Link
          to="/#home"
          className="hover:opacity-50 transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/#academic"
          className="hover:opacity-50 transition-all duration-300"
        >
          Academic
        </Link>

        <Link
          to="/#professional"
          className="hover:opacity-50 transition-all duration-300"
        >
          Professional
        </Link>

        <Link
          to="/#experience"
          className="hover:opacity-50 transition-all duration-300"
        >
          Experience
        </Link>

        <Link
          to="/#about"
          className="hover:opacity-50 transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/#perspective"
          className="hover:opacity-50 transition-all duration-300"
        >
          Perspective
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