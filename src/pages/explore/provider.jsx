export default function Provider({ provider }) {
  return (
    <div className="w-full text-black border rounded-2xl p-2">
      <h1>{provider.name}</h1>
    </div>
  )
}
