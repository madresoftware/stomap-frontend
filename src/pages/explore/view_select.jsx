import { useSearchParams, useSubmit } from "react-router"
import MapView from "../../assets/icons/map-view.svg?react"
import ListView from "../../assets/icons/list-view.svg?react"

const views = [
  { name: "Listă", value: "list", icon: <ListView className="w-4 h-4" /> },
  { name: "Hartă", value: "map", icon: <MapView className="w-4 h-4" /> },
]

export default function ViewSelect() {
  const submit = useSubmit()
  const [searchParams] = useSearchParams()
  const currentView = searchParams.get("view") || "list"

  return (
    <div
      key={currentView}
      className="inline-flex bg-white border-2 items-center rounded-2xl gap-1"
    >
      {views.map((view) => (
        <label key={view.value} className="relative cursor-pointer">
          <input
            type="radio"
            name="view"
            value={view.value}
            defaultChecked={currentView === view.value}
            className="peer sr-only"
            onChange={(e) => {
              submit(e.currentTarget.form, { replace: true })
            }}
          />

          <span className="flex items-center gap-2 px-6 py-2 rounded-2xl text-sm text-black bg-white peer-checked:bg-black peer-checked:text-white">
            {view.icon}
            {view.name}
          </span>
        </label>
      ))}
    </div>
  )
}
