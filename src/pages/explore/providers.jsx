import Provider from "./provider"

export default function Providers({ providers }) {
  return (
    <ul className="size-full grid md:grid-cols-2 gap-4">
      {providers.map((provider) => (
        <Provider provider={provider} key={provider.id} />
      ))}
    </ul>
  )
}
