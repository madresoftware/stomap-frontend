import { useState, useRef } from "react"
// Assuming you are using Vite/SVGR
import FiltersIcon from "../../assets/icons/filters.svg?react"
import { Form, useSubmit, useSearchParams } from "react-router"
import FilterDrawer from "./filter_drawer"
import ViewSelect from "./view_select"

export default function Filters() {
  const submit = useSubmit()
  const [searchParams] = useSearchParams()

  const q = searchParams.get("q") || ""
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
  return (
    <div className="w-full flex flex-wrap p-4 border-b border-black gap-6">
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

      <div className="flex gap-4">
        <FilterDrawer />
        <ViewSelect />
      </div>
    </div>
  )
}
