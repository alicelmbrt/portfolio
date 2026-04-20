interface Props {
  heading: string
}

export default function WorkSection({ heading }: Props) {
  return (
    <section id="work" className="min-h-screen flex items-center px-24 py-32">
      <h2 className="text-5xl font-bold">{heading}</h2>
    </section>
  )
}
