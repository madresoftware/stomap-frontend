import Emergency from "./emergency"
import "./index.css"
import Search from "./search"

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <div className="mx-4 max-w-xl px-4 py-8 md:p-8 flex flex-col gap-4 font-medium text-black bg-white rounded-2xl">
          <Search />
          <Emergency />
        </div>
      </div>
      <div className="size-full"></div>
    </>
  )
}
