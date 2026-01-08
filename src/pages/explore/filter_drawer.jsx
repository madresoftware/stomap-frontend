import { useState } from "react"
import FiltersIcon from "../../assets/icons/filters.svg?react"

export default function FilterDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="inline-flex gap-4">
      <button
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
              onClick={() => setOpenDrawer(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <span className="text-xl font-bold leading-none">&times;</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-gray-600">Filter content goes here...</p>
            <div className="h-96"></div>
          </div>

          <div className="p-4 border-t bg-white">
            <button
              onClick={() => {
                setOpenDrawer(false)
              }}
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
