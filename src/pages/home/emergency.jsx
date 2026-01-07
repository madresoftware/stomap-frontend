import { Link } from "react-router"
import DamagedTooth from "../../assets/icons/damaged-tooth.svg?react"

export default function Emergency() {
  return (
    <Link
      key="urgenta"
      to={"/urgenta"}
      className="bg-warning hover:bg-warning-lighter text-white w-full py-4 px-8 rounded-2xl font-black flex justify-center items-center gap-2 hover:scale-101 transition-all"
    >
      <DamagedTooth className="w-4 block size-max" />
      Ai o urgență?
    </Link>
  )
}
