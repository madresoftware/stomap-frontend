import ExplorePage from "@/pages/explore"
import { providersService } from "@/api/providers_service"

export function meta() {
  return [{ title: "Exploreaza" }]
}

export async function loader({request}) {
  const url = new URL(request.url);
  const query = url.searchParams

  const providers = await providersService.getAll(query.get("q") || "")
  return { providers }
}

export default function Explore() {
  return <ExplorePage />
}
