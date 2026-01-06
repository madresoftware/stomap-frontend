import { Link } from "react-router"
import React, { useState } from "react"
import logo from "../../assets/logo.png"

export function Navigation() {
  const links = [
    {
      name: "Explorează",
      href: "/exploreaza",
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  return (
    <>
      {/* mobile */}
      <header className="block md:hidden fixed top-0 w-full z-50 text-sm">
        <nav className="bg-white rounded-b-3xl shadow-lg w-full overflow-hidden">
          <div className="h-16 flex items-center justify-between px-4 relative z-20">
            <Link to="/">
              <img src={logo} alt="logo" className="w-24" />
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
        <div className="fixed inset-4 z-50 pointer-events-none rounded-3xl shadow-[0_0_0_100vmax_theme(colors.window-border)]"></div>

        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[50] h-20 bg-window-border w-128 lg:w-180 xl:w-250 rounded-b-3xl">
          <div className="absolute -left-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_0%_100%,transparent_1.5rem,theme(colors.window-border)_1.5rem)]"></div>

          <div className="absolute -right-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_100%_100%,transparent_1.5rem,theme(colors.window-border)_1.5rem)]"></div>

          <div className="flex justify-between items-center h-full gap-8 px-16">
            <Link key={"logo"} to={"/"}>
              <img src={logo} alt="logo" className="w-24" />
            </Link>
            <div className="flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="bg-red-200 p-2 rounded-lg"
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
