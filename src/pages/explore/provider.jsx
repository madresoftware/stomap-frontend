import { Link } from "react-router";
import NavigateIcon from '../../assets/icons/navigate.svg?react'

const categoryColors = {
  "clinic": "bg-blue-500",
  "cabinet": "bg-yellow-500",
  "xray": "bg-red-500"
}

export default function Provider({ provider }) {
  return (
    <Link to={provider.website} target="_blank" className='bg-white w-full text-black border rounded-2xl p-2 hover:bg-black hover:text-white p-4'>
      <div className="flex justify-between">
        <h1>{provider.name}</h1>
        <NavigateIcon className="w-2 h-2" />
      </div>
      <div className={`px-2 rounded-full ${categoryColors[provider.category]} w-max text-sm text-black`}>{provider.category}</div>
    </Link>
  )
}
