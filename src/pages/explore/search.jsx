import { useRef, useState } from "react"
import { useSubmit, useSearchParams } from "react-router"
import SearchIcon from "../../assets/icons/search.svg?react"
import SpinnerIcon from "../../assets/icons/spinner.svg?react"

export default function Search() {
  const submit = useSubmit()
  const [searchParams] = useSearchParams()
  
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef(null)

  const q = searchParams.get("q") || ""

  const handleSearchChange = (event) => {
    const form = event.currentTarget.form
    setIsTyping(true)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      submit(form, { replace: true })
      setIsTyping(false)
    }, 500)
  }

  return (
    <div className="relative flex-1 min-w-64">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        {isTyping ? <SpinnerIcon className='w-4' /> : <SearchIcon className='w-4' />}
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


function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}