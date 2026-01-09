import { useState } from "react"
import { useSearchParams } from "react-router" // Need this to set initial checkboxes
export default function FilterAccordion({ section }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams] = useSearchParams()
  const activeValues = searchParams.getAll(section.key)

  return (
    <div className="bg-white rounded-2xl border border-black shadow-sm overflow-hidden w-full">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black">{section.title}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-5 h-5 text-black transition-transform ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`grid transition-[grid-template-rows] ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pt-0 flex gap-2 flex-wrap ">
            {section.options.map((option) => (
              <label key={option} className="relative cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={option}
                  className="peer sr-only"
                  defaultChecked={activeValues.includes(option)}
                />

                <span className="border max-w-fit flex items-center gap-2 px-6 py-2 rounded-2xl text-sm text-black bg-white peer-checked:bg-black peer-checked:text-white">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
