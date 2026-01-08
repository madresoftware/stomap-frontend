import { useState, useRef } from "react"
// Assuming you are using Vite/SVGR
import MapView from "../../assets/icons/map-view.svg?react"
import ListView from "../../assets/icons/list-view.svg?react"
import FiltersIcon from "../../assets/icons/filters.svg?react"
import { Form, useSubmit, useSearchParams } from "react-router";

const views = [
  {
    name: "Listă",
    value: "list",
    icon: <ListView className={'w-4 h-4'}/>,
  },
  {
    name: "Hartă",
    value: "map",
    icon: <MapView className={'w-4 h-4'}/>,
  },
]

export default function Filters() {
  const [currentView, setCurrentView] = useState(views[0])
  const [openDrawer, setOpenDrawer] = useState(false)
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  
  const q = searchParams.get("q") || "";
  const timeoutRef = useRef(null)

  const handleSearchChange = (event) => {
    const form = event.currentTarget.form
    const isFirstSearch = q === null

    // 1. Clear previous timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // 2. Start new timer (1 second)
    timeoutRef.current = setTimeout(() => {
      submit(form, {
        replace: !isFirstSearch,
      })
    }, 500)
  }
  console.log('render')
  return (
    <div className="w-full flex flex-wrap p-4 border-b border-black gap-6 bg-red-200">
      {/* Search Form */}
      <Form role="search" className="flex-1 min-w-64">
        <input
          name="q"
          defaultValue={q}
          onChange={handleSearchChange}
          placeholder="Caută..."
          className="w-full px-4 py-2 rounded-2xl border text-black bg-white"
        />
      </Form>

    <div className="inline-flex gap-4">
      <button className='bg-white border text-black rounded-2xl px-6 py-2 text-sm flex items-center gap-2'
      onClick={() => setOpenDrawer(true)}>
        <FiltersIcon className="w-4 h-4" />
        Filtre
      </button>
      
      {/* list / map  view */}
      <div className="inline-flex bg-white border-2 rounded-2xl gap-1">
        {views.map((view) => {
          const isActive = currentView.value === view.value

          return (
            <button
              key={view.value}
              onClick={() => setCurrentView(view)}
              className={`flex items-center gap-2 px-6 py-2 rounded-2xl text-sm ${isActive ? "bg-black text-white" : "text-black bg-white"}`}>
                {view.icon}

              {view.name}
            </button>
          )
        })}
      </div>
      </div>
    </div>
  )
}
