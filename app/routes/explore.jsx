import ExplorePage from "@/pages/explore"
// import { providersService } from "@/api/providers_service"
import { turso } from "@/db/connection";

export function meta() {
  return [{ title: "Exploreaza" }]
}

export async function loader({request}) {
  // const url = new URL(request.url);
  // const query = url.searchParams

  // const providers = await providersService.getAll(query.get("q") || "")

  const providers = await turso.execute("SELECT * FROM providers");

  return { providers: providers.rows }
}

export default function Explore() {
  return <ExplorePage />
}
