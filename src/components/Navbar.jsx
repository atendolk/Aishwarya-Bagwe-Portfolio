import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ["Home", "/#home"],
    ["Academic", "/#academic"],
    ["Professional", "/#professional"],
    ["Experience", "/#experience"],
    ["About", "/#about"],
    ["Perspective", "/#perspective"],
    ["Contact", "/#contact"],
  ]

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto">
        <div className="backdrop-blur-md bg-white/40 border border-white/30 shadow-lg rounded-full px-5 py-3 md:px-6 md:py-4">

          <div className="flex items-center justify-between md:justify-center">

            <div className="hidden md:flex items-center gap-6 text-base whitespace-nowrap">
              {links.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  className="hover:opacity-50 transition-all duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="md:hidden text-sm font-medium">
              Menu
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
              aria-label="Toggle navigation menu"
            >
              <span className="w-5 h-[1.5px] bg-black" />
              <span className="w-5 h-[1.5px] bg-black" />
              <span className="w-5 h-[1.5px] bg-black" />
            </button>

          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 md:hidden">
          <div className="bg-[#F6F2ED]/95 backdrop-blur-md shadow-xl rounded-[1.5rem] p-6">
            <div className="flex flex-col gap-5 text-lg">
              {links.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="hover:opacity-50 transition-all duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar