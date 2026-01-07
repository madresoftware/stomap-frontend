export default function Provider({ provider }) {
  console.log(provider)
  return (
    <div className="flex items-center size-full justify-center p-4 bg-red-200 rounded-3xl">
      <h1>{provider.name}</h1>
    </div>
  )
}
