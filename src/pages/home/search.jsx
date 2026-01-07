import { useState } from "react"
import { Form, Link } from "react-router"
import DamagedTooth from "../../assets/icons/damaged-tooth.svg?react"

const filters = [
  { label: "Toate", placeholder: "Caută servicii..." },
  {
    label: "Cabinete",
    value: "office",
    placeholder: "Caută cabinete de stomatologie...",
  },
  {
    label: "Clinici",
    value: "clinic",
    placeholder: "Caută clinici de stomatologie...",
  },
  {
    label: "Radiologie",
    value: "xray",
    placeholder: "Caută laboratoare de radiologie...",
  },
]

export default function Search() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0])

  return (
    <>
      <h1 className="text-5xl text-center">
        Găsește serviciile stomatologice potrivite
      </h1>

      <Form action="/exploreaza" method="get" className="flex flex-col gap-4">
        {/* 3. Hidden Input to send the selection to the server */}
        <input type="hidden" name="c" value={selectedFilter.value} />
        {/* 4. The Button Group */}
        <div className="inline-flex w-full gap-4" role="group">
          {filters.map((filter, index) => {
            const isActive = selectedFilter.value === filter.value

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`
                    flex-1 px-2 py-1 text-sm rounded-2xl max-w-fit border
                    ${/* Active vs Inactive Styles */ ""}
                    ${
                      isActive
                        ? "bg-black text-white border-black"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }
                  `}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="q"
            type="text"
            placeholder={selectedFilter.placeholder}
            className="bg-white p-4 w-full rounded-2xl text-black border"
          />

          <button
            type="submit"
            className="bg-black text-white font-bold p-4 rounded-2xl transition-colors"
          >
            Caută
          </button>
        </div>
      </Form>
    </>
  )
}
