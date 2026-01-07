import { useState } from "react"
// Assuming you are using Vite/SVGR
import MapView from "../../assets/icons/map-view.svg?react"
import ListView from "../../assets/icons/list-view.svg?react"

const views = [
  {
    name: "Listă",
    value: "list",
    icon: ListView,
  },
  {
    name: "Hartă",
    value: "map",
    icon: MapView,
  },
]

export default function Filters() {
  const [currentView, setCurrentView] = useState(views[0])

  return (
    <div className="w-full flex justify-center p-4 bg-black/10">
      <div className="inline-flex items-center bg-white rounded-2xl border gap-1">
        {views.map((view) => {
          const isActive = currentView.value === view.value
          const Icon = view.icon

          return (
            <button
              key={view.value}
              onClick={() => setCurrentView(view)}
              className={`
                flex items-center gap-2 px-6 py-2 rounded-2xl text-sm transition-all
                ${isActive ? "bg-black text-white" : "text-black bg-white"}
              `}
            >
              <Icon
                className={`w-4 h-4 ${isActive ? "text-white" : "stroke-red-500"}`}
              />

              {view.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
