import { useState } from "react"
import { Form } from "react-router"

const filters = [
  { label: "Toate", value: "all" },
  { label: "Cabinete", value: "office" },
  { label: "Clinici", value: "clinic" },
  { label: "Radiologie", value: "xray" },
]

export default function Search() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <div className="max-w-xl px-4 py-8 md:p-8 flex flex-col gap-4 mx-auto rounded-lg">
      <h1 className="text-5xl text-center">
        Găsește serviciile stomatologice potrivite
      </h1>

      <Form action="/exploreaza" method="get" className="flex flex-col gap-4">
        {/* 3. Hidden Input to send the selection to the server */}
        <input type="hidden" name="category" value={selectedFilter} />
        {/* 4. The Button Group */}
        <div className="inline-flex w-full gap-4" role="group">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.value

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                className={`
                    flex-1 px-2 py-1 text-sm rounded-md max-w-fit
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
            placeholder="Cauta..."
            className="bg-white p-4 w-full rounded-md text-black"
          />

          <button
            type="submit"
            className="bg-black text-white font-bold p-4 rounded-md transition-colors"
          >
            Caută
          </button>
        </div>
        Ai o urgenta?
      </Form>
    </div>
  )
}
