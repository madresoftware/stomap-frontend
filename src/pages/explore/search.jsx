import { useRef } from "react"
import { useSubmit, useSearchParams } from "react-router"

// 2. The Component
export default function Search() {
  const submit = useSubmit()
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q") || ""
  const timeoutRef = useRef(null)

  const handleSearchChange = (event) => {
    const form = event.currentTarget.form

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      submit(form, { replace: true })
    }, 500)
  }

  return (
    <input
      name="q"
      defaultValue={q}
      onChange={handleSearchChange}
      placeholder="Caută..."
      className="flex-1 min-w-64 px-4 py-2 rounded-2xl border text-black bg-white"
    />
  )
}
