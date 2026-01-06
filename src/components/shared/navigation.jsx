import React, { useState } from "react"
import logo from '@/assets/logo.png' // Ensure this path is correct

// 1. UPDATED DATA STRUCTURE
// We added the Logo and the Urgente button here.
// We filter them inside the component to place them correctly.
const navData = [
  { 
    type: "logo", 
    src: logo, 
    href: "/", 
    alt: "Logo" 
  },

  {
    name: "Exploreaza",
    type: "important",
    featured: {
      title: "Vezi Harta",
      description: "Beautifully designed components built with Tailwind CSS.",
      href: "#",
    },
    items: [
      { title: "Clinici", desc: "Re-usable components built using Radix UI.", href: "#" },
      { title: "Cabinete", desc: "How to install dependencies.", href: "#" },
      { title: "Radiologie", desc: "Styles for headings, paragraphs...", href: "#" },
    ],
  },
  {
    name: "Despre",
    type: "simple",
    items: [
      { title: "Alert Dialog", desc: "A modal dialog.", href: "#" },
      { title: "Hover Card", desc: "Preview content.", href: "#" },
      { title: "Progress", desc: "Show completion.", href: "#" },
      { title: "Tabs", desc: "Layered sections.", href: "#" },
    ],
  },
  { 
    name: "Menu", 
    type: "link",
    href: "/" 
  },

  { 
    name: "Urgente", 
    type: "action", 
    href: "/urgente" 
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name)
  }

  const logoItem = navData.find(item => item.type === "logo")
  const actionItem = navData.find(item => item.type === "action")
  const menuItems = navData.filter(item => item.type !== "logo" && item.type !== "action")

  return (
    <>
      {/* --- MOBILE --- */}
      <header className="block lg:hidden relative z-50">
        <nav
          className={`fixed top-0 w-full z-50 bg-white rounded-b-3xl overflow-hidden shadow-xl transition-[max-height] duration-500 ease-in-out
          ${mobileMenuOpen ? "max-h-[85vh]" : "max-h-16"}`}
        >
          {/* Mobile Top Bar */}
          <div className="h-16 bg-black flex items-center justify-between px-6 shrink-0">
            {/* 1. RENDER LOGO FROM DATA */}
            {logoItem && (
              <a href={logoItem.href}>
                <img src={logoItem.src} alt={logoItem.alt} className='h-6 object-contain'/>
              </a>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center
                ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center
                ${mobileMenuOpen ? "-rotate-45" : ""}`}
              />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-4rem)]">
            <div className="p-6 flex flex-col gap-2 pb-8">
              {menuItems.map((item, index) => (
                <div key={index} className="border-gray-100 last:border-0">
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.name)}
                        className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-800"
                      >
                        {item.name}
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeAccordion === item.name ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden">
                          <div className="pb-4 pl-2 flex flex-col gap-3">
                            {item.type === "important" && item.featured && (
                              <a href={item.featured.href} className="block p-3 bg-gray-50 rounded-lg mb-2">
                                <span className="block font-semibold text-blue-600 mb-1">{item.featured.title}</span>
                                <span className="block text-xs text-gray-500">{item.featured.description}</span>
                              </a>
                            )}
                            {item.items.map((sub, i) => (
                              <a key={i} href={sub.href} className="block py-2 text-gray-600 hover:text-blue-500 transition-colors">
                                <span className="block text-base font-medium text-gray-800">{sub.title}</span>
                                <span className="block text-xs text-gray-400 mt-0.5 line-clamp-1">{sub.desc}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a href={item.href} className="block py-4 text-lg font-medium text-gray-800">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* 2. RENDER URGENTE BUTTON IN MOBILE (Bottom of list) */}
              {actionItem && (
                 <div className="mt-4 pt-4">
                    <a href={actionItem.href} className="block w-full text-center py-3 bg-red-600 text-white rounded-lg font-bold">
                       {actionItem.name}
                    </a>
                 </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* --- DESKTOP --- */}
      <header className="hidden lg:block">
        <div className="fixed inset-4 z-50 pointer-events-none rounded-3xl shadow-[0_0_0_100vmax_#fff]"></div>

        <nav className="shadow-md fixed top-4 left-1/2 -translate-x-1/2 z-[50] h-20 bg-[#fff] w-168 xl:w-250 rounded-b-3xl">
          <div className="absolute -left-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_0%_100%,transparent_1.5rem,#fff_1.5rem)]"></div>
          <div className="absolute -right-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_100%_100%,transparent_1.5rem,#fff_1.5rem)]"></div>

          {/* FLEX CONTAINER FOR JUSTIFY-BETWEEN */}
          <div className="h-full flex justify-between items-center px-8">
            
            {/* 1. LEFT: LOGO */}
            {logoItem && (
              <a href={logoItem.href} className="shrink-0">
                <img src={logoItem.src} alt={logoItem.alt} className='h-6 w-auto'/>
              </a>
            )}

            {/* 2. CENTER: MENU LINKS */}
            <ul className="flex justify-center items-center h-full gap-4 text-white font-medium">
              {menuItems.map((item, index) => (
                <li key={index} className="group relative h-full flex items-center">
                  <a
                    href={item.href || "#"}
                    className="px-3 py-2 flex items-center gap-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {item.name}
                    {item.items && (
                      // Changed logic to Group Hover for desktop
                      <svg
                        className="w-4 h-4 text-gray-300 transition-transform duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {item.items && (
                    <div className="absolute top-full left-0 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-1">
                        {item.type === "important" && (
                          <div className="grid grid-cols-[250px_1fr] w-[600px] gap-2 p-2">
                            <a href={item.featured?.href} className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-6 flex flex-col justify-end select-none no-underline hover:bg-gray-200 transition-colors">
                              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.featured?.title}</h3>
                              <p className="text-sm text-gray-500 leading-tight">{item.featured?.description}</p>
                            </a>
                            <div className="flex flex-col gap-1">
                              {item.items.map((sub, i) => (
                                <a key={i} href={sub.href} className="block p-3 hover:bg-gray-100 rounded-lg transition-colors group/item no-underline">
                                  <div className="text-sm font-semibold text-gray-900 mb-1">{sub.title}</div>
                                  <p className="text-xs text-gray-500 leading-snug line-clamp-2">{sub.desc}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                        {item.type === "simple" && (
                          <div className="grid grid-cols-2 w-[500px] gap-2 p-2">
                            {item.items.map((sub, i) => (
                              <a key={i} href={sub.href} className="block p-3 hover:bg-gray-100 rounded-lg transition-colors no-underline">
                                <div className="text-sm font-semibold text-gray-900 mb-1">{sub.title}</div>
                                <p className="text-xs text-gray-500 leading-snug line-clamp-2">{sub.desc}</p>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* 3. RIGHT: URGENTE BUTTON */}
            {actionItem && (
               <a 
                 href={actionItem.href} 
                 className="shrink-0 bg-white text-[#991b1b] px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
               >
                 {actionItem.name}
               </a>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}