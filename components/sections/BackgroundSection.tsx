interface Props {
  heading: string
}

export default function BackgroundSection({ heading }: Props) {
  return (
    <section id="background" className="min-h-screen flex items-center px-24 py-32">
      <h2 className="text-5xl font-bold">{heading}</h2>
    </section>
  )
}
