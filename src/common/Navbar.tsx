import { useState } from 'react'
import Dealerbtn from './Dealerbtn'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/img/MedzyLogo1.webp"
                alt="Medzy Logo"
                className="h-7 md:h-10 w-auto"
                loading="eager"
                width="160"
                height="40"
              />

            </a >
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {["Home", "About Us", "Services", "Partners", "Contact"].map((item, i) => (
              <a
                key={i}
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s/g, "")}`}
                className="font-body text-[#8C8C8C] hover:text-[#00a9ae] font-medium transition"
              >
                 {item}
              </a>
            ))} */}
            {["Home", "About Us", "Services", "Partners", "Contact Us"].map((item, i) => (
              <a
                key={i}
                href={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-[#8C8C8C] hover:text-[#00a9ae] font-medium transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Dealerbtn title='Become a Dealer' href="/partners" />
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Small Button */}
            <a href="/partners" className="font-body bg-[#00a9ae] text-white px-3 py-1 rounded-full text-[12px] sm:text-sm">
              Become a Dealer
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-[#00a9ae]`}
      >
        <div className="px-4 py-4 space-y-2">
          {["Home", "About Us", "Services", "Partners", "Contact Us"].map((item, i) => (
            <a
              key={i}
              href={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-body block px-3 py-2 text-white rounded-md hover:bg-white/10"
            >

              {item}
            </a>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
