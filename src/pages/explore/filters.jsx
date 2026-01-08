import { Form } from "react-router"
import FilterDrawer from "./filter_drawer"
import ViewSelect from "./view_select"
import Search from "./search"

export default function Filters() {
  return (
    <Form
      role="search"
      className="w-full flex flex-wrap py-4 border-b border-black gap-6"
    >
      <Search />
      <div className="flex gap-4">
        <FilterDrawer />
        <ViewSelect />
      </div>
    </Form>
  )
}
