import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dealerbtn from "./Dealerbtn";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Partners", to: "/partners" },
  { label: "Contact Us", to: "/contact-us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm font-semibold transition-colors duration-200 ${
      isActive ? "text-[#0b766e]" : "text-[#5f6f77] hover:text-[#0b766e]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#dcefeb] bg-white/90 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-full"
            aria-label="Medzy Healthcare home"
          >
            <img
              src="/img/MedzyLogo1.webp"
              alt="Medzy Healthcare"
              className="h-8 w-auto md:h-10"
              loading="eager"
              width="160"
              height="40"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(({ label, to, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClassName}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Dealerbtn title="Become a Dealer" href="/partners" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/partners"
              className="rounded-full bg-[#0b766e] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#0e8a80]"
            >
              Become a Dealer
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="rounded-full border border-[#d1ebe5] bg-white p-2.5 text-[#0b766e] shadow-sm"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="border-t border-[#dcefeb] bg-white px-4 py-4 shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#e6f7f3] text-[#0b766e]"
                      : "text-[#26434a] hover:bg-[#f3fbf9]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
