import ExplorePage from "@/pages/explore"
import { providersService } from "@/api/providers_service"

export function meta() {
  return [{ title: "Exploreaza" }]
}

export async function loader() {
  const providers = await providersService.getAll()
  return { providers }
}

export default function Explore() {
  return <ExplorePage />
}
