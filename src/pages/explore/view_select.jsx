import { useState } from "react"
import MapView from "../../assets/icons/map-view.svg?react"
import ListView from "../../assets/icons/list-view.svg?react"

const views = [
  {
    name: "Listă",
    value: "list",
    icon: <ListView className={"w-4 h-4"} />,
  },
  {
    name: "Hartă",
    value: "map",
    icon: <MapView className={"w-4 h-4"} />,
  },
]

export default function ViewSelect() {
  const [currentView, setCurrentView] = useState(views[0])

  return (
    <div className="inline-flex bg-white border-2 rounded-2xl gap-1">
      {views.map((view) => {
        const isActive = currentView.value === view.value

        return (
          <button
            key={view.value}
            onClick={() => setCurrentView(view)}
            className={`flex items-center gap-2 px-6 py-2 rounded-2xl text-sm ${isActive ? "bg-black text-white" : "text-black bg-white"}`}
          >
            {view.icon}
            {view.name}
          </button>
        )
      })}
    </div>
  )
}
