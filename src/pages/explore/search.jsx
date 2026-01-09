import { useRef } from "react"
import { useSubmit, useSearchParams } from "react-router"
import SearchIcon from "../../assets/icons/search.svg?react"

export default function Search() {
  const submit = useSubmit()
  const [searchParams] = useSearchParams()
  
  const timeoutRef = useRef(null)

  const q = searchParams.get("q") || ""

  const handleSearchChange = (event) => {
    const form = event.currentTarget.form

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      submit(form, { replace: true })
    }, 500)
  }

  return (
    <div className="relative flex-1 min-w-64">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        {<SearchIcon className='w-4' />}
      </div>

      <input
        name="q"
        defaultValue={q}
        onChange={handleSearchChange}
        placeholder="Caută..."
        className="w-full pl-10 pr-4 py-2 rounded-2xl border text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  )
}
