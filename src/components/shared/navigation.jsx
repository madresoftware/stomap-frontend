"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// --- Configuration ---
const homeItems = [
  { title: "Introduction", href: "/docs", description: "Re-usable components built using Radix UI and Tailwind CSS." },
  { title: "Installation", href: "/docs/installation", description: "How to install dependencies and structure your app." },
  { title: "Typography", href: "/docs/primitives/typography", description: "Styles for headings, paragraphs, lists...etc" },
]

const componentItems = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
]

const navConfig = [
  { title: "Home", type: "special-grid", items: homeItems },
  { title: "Components", type: "list-grid", items: componentItems },
  { title: "Docs", type: "link", href: "/docs" },
]

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [accordionValue, setAccordionValue] = React.useState("")

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false)
        setAccordionValue("")
      }
    }
    if (!isMobileOpen) {
      const timer = setTimeout(() => setAccordionValue(""), 300)
      return () => clearTimeout(timer)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileOpen])

  return (
    <>
      {/* ================= MOBILE ================= */}
      <header className="block lg:hidden relative z-50">
        <nav
          className={cn(
            "fixed top-0 w-full mx-auto bg-[#0087BD] text-white transition-all duration-300 ease-in-out overflow-hidden rounded-b-3xl",
            isMobileOpen ? "shadow-xl" : ""
          )}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 h-16 relative z-20 bg-[#0087BD]">
            <span className="font-bold text-lg">MyLogo</span>

            {/* ANIMATED BURGER BUTTON */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center group"
            >
              <span
                className={cn(
                  "absolute h-[2px] w-6 bg-white transition-all duration-300 ease-in-out rounded-full",
                  isMobileOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-6 bg-white transition-all duration-300 ease-in-out rounded-full",
                  isMobileOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                )}
              />
            </button>

          </div>

          {/* Animation Wrapper */}
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-in-out",
              isMobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 pt-2">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  value={accordionValue}
                  onValueChange={setAccordionValue}
                >
                  {navConfig.map((item, index) => {
                    if (item.type === "link") {
                      return (
                        <div key={index} className="py-4 border-b border-white/10 last:border-0">
                          <a href={item.href} className="text-white font-medium text-lg flex w-full">
                            {item.title}
                          </a>
                        </div>
                      )
                    }

                    return (
                      <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline py-4 font-medium text-lg">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 pl-4">
                          {item.type === "special-grid" && (
                            <a href="/" className="block group py-1">
                              <div className="font-medium text-white">shadcn/ui</div>
                              <p className="text-sm text-white/80">Beautifully designed components.</p>
                            </a>
                          )}

                          {item.items?.map((subItem, subIndex) => (
                            <MobileLink key={subIndex} href={subItem.href}>
                              {subItem.title}
                            </MobileLink>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= DESKTOP ================= */}
      <header className="hidden lg:block">
        <div className="fixed inset-4 z-40 pointer-events-none rounded-3xl shadow-[0_0_0_100vmax_#0087BD]"></div>

        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[50] h-20 bg-[#0087BD] w-180 xl:w-250 rounded-b-3xl flex items-center justify-center">
          <div className="absolute -left-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_0%_100%,transparent_1.5rem,#0087BD_1.5rem)]"></div>
          <div className="absolute -right-6 top-0 w-6 h-6 bg-[radial-gradient(circle_at_100%_100%,transparent_1.5rem,#0087BD_1.5rem)]"></div>

          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navConfig.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <a href={item.href} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-white transition-colors hover:text-white/80 focus:text-white/80 outline-none disabled:pointer-events-none disabled:opacity-50">
                          {item.title}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={index}>
                    <NavTrigger>{item.title}</NavTrigger>
                    <NavigationMenuContent>
                      {item.type === "special-grid" && (
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mb-2 text-lg font-medium">shadcn/ui</div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Beautifully designed components built with Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {item.items?.map((subItem, subIndex) => (
                            <ListItem key={subIndex} href={subItem.href} title={subItem.title}>
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      )}

                      {item.type === "list-grid" && (
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem, subIndex) => (
                            <ListItem key={subIndex} href={subItem.href} title={subItem.title}>
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
    </>
  )
}

// --- Helpers ---

function NavTrigger({ children }) {
  return (
    <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/80 focus:text-white/80 data-[state=open]:text-white/80 text-base font-medium">
      {children}
    </NavigationMenuTrigger>
  )
}

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function MobileLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={cn("text-white/80 hover:text-white block py-1 text-base transition-colors", className)}
    >
      {children}
    </a>
  )
}