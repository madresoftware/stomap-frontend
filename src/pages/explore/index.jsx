import "./index.css"
import { useLoaderData, useNavigation } from "react-router" // 1. Import useNavigation
import Filters from "./filters"
import Providers from "./providers"
import SpinnerIcon from "../../assets/icons/spinner.svg?react"

// 2. The Component
export default function ExplorePage() {
  const { providers } = useLoaderData()
  const navigation = useNavigation()

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q")

  const isLoading = navigation.state === "loading" && isSearching

  return (
    <div className="size-full px-5">
      <div className="h-16 md:h-24"></div>
      <div className="mx-auto flex flex-col items-center h-full max-w-5xl">
        <Filters />

        {isLoading ? <SpinnerIcon className="w-16" /> : <Providers providers={providers} />}
      </div>
    </div>
  )
}
