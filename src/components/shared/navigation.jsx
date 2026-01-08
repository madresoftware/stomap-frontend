import { Link, useLocation } from "react-router"
import React, { useState } from "react"
import Logo from "../../assets/branding/logo.svg?react"

const links = [
  {
    name: "Explorează",
    href: "/exploreaza",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* mobile */}
      <header className="block md:hidden fixed top-0 w-full z-10 text-sm">
        <nav className="bg-white rounded-b-3xl drop-shadow-xs w-full overflow-hidden">
          <div className="h-16 flex items-center justify-between px-4 relative z-10">
            <Link key={"logo"} to={"/"}>
              <Logo className="max-h-fit w-28" />
            </Link>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 relative flex justify-center items-center text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"}`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1"}`}
              />
            </button>
          </div>
          <div
            className={`
            grid transition-[grid-template-rows] duration-200 ease-in-out
            ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
          `}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col p-4 space-y-4">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className={` ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                  >
                    <Link
                      to={link.href}
                      onClick={toggleMenu}
                      className="text-black block py-2 max-w-fit"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* desktop */}
      <header className="hidden md:block text-sm">
        <div className="fixed inset-4 z-10 pointer-events-none rounded-2xl shadow-[0_0_0_100vmax_var(--color-window-border)]"></div>

        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10 h-20 bg-window-border w-xl rounded-b-3xl shadow-xs">
          {/* Left Wing SVG */}
          <svg
            className="absolute -left-6 top-0 w-6 h-6 text-window-border fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 24 A 24 24 0 0 0 0 0 L 24 0 Z" />
          </svg>

          {/* Right Wing SVG */}
          <svg
            className="absolute -right-6 top-0 w-6 h-6 text-window-border fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M0 24 A 24 24 0 0 1 24 0 L 0 0 Z" />
          </svg>

          <div className="flex justify-between items-center h-full gap-8 px-4">
            <Link key={"logo"} to={"/"}>
              <Logo className="max-h-fit w-28" />
            </Link>
            <div className="flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`hover:bg-black hover:text-white px-2 py-1 rounded-2xl text-black ${isActive(link.href) ? "bg-black text-white" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
