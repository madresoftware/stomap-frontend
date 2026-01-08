import "./index.css"
import { useLoaderData } from "react-router"
import Provider from "./provider"
import Filters from "./filters"

// 2. The Component
export default function ExplorePage() {
  const { providers } = useLoaderData()

  return (
    <div className="bg-green-200 size-full px-5">
      <div className="h-16 md:h-24"></div>
      <div className="mx-auto flex flex-col items-center h-full max-w-5xl">
        <Filters />
        <ul className="size-full grid md:grid-cols-2 gap-4">
          {providers.map((provider) => (
            <Provider provider={provider} key={provider.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
