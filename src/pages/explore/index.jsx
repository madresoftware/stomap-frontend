import "./index.css"
import { useLoaderData } from "react-router"
import Provider from "./provider"
import Filters from "./filters"

// 2. The Component
export default function ExplorePage() {
  const { providers } = useLoaderData()

  return (
    <>
      <div className="h-16 md:h-24 bg-blue-400"></div>
      <div className="flex flex-col items-center h-full max-w-xl mx-auto">
        <Filters />
        <div className="flex items-center justify-center w-full">
          <ul className="w-xl flex gap-2 flex-col h-full">
            {providers.map((provider) => (
              <Provider provider={provider} key={provider.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
