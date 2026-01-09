import { useState } from "react"
import FiltersIcon from "../../assets/icons/filters.svg?react"
import ResetIcon from "../../assets/icons/reset.svg?react"
import FilterAccordion from "./filter_accordion"
import { useSubmit } from "react-router"

const FILTER_SECTIONS = [
  {
    key: "services",
    title: "Services",
    type: "multiple",
    options: ["General", "Specialist", "Emergency"],
  },
]

export default function FilterDrawer() {
  const submit = useSubmit()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="inline-flex gap-4">
      <button
        type='button'
        className="bg-white border text-black rounded-2xl px-6 py-2 text-sm flex items-center gap-2"
        onClick={() => setOpenDrawer(true)}
      >
        <FiltersIcon className="w-4 h-4" />
        Filtre
      </button>

      <div
        className={`fixed inset-0 z-11 bg-black/50 transition-opacity duration-300 ${
          openDrawer ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenDrawer(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-11 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          w-full md:max-w-lg 
          ${openDrawer ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              type='button'
              onClick={() => setOpenDrawer(false)}
              className="p-2 rounded-full text-black hover:bg-black hover:text-white"
            >
              <span className="text-xl font-bold leading-none">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M14.293.293l1.414 1.414L9.414 8l6.293 6.293-1.414 1.414L8 9.414l-6.293 6.293-1.414-1.414L6.586 8 .293 1.707 1.707.293 8 6.586 14.293.293z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {FILTER_SECTIONS.map((section) => {
              return <FilterAccordion key={section.key} section={section} />
            })}
          </div>

          <div className="p-4 border-t border-black bg-white flex gap-4">
            <button className="w-max-fit white text-black border py-3 hover:text-white hover:bg-black rounded-xl px-6 flex gap-2 items-center justify-center">
              <ResetIcon className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={(e) => {
                setOpenDrawer(false)
                submit(e.currentTarget.form, { replace: true })
              }}
              className="w-full bg-white text-black border py-3 rounded-xl hover:text-white hover:bg-black"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
