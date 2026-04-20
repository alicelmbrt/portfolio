interface Props {
  intro: { greeting: string; tagline: string }
}

export default function IntroSection({ intro }: Props) {
  return (
    <section id="intro" className="min-h-screen flex items-center px-24 py-32">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-bold mb-10 leading-tight">{intro.greeting}</h1>
        <p className="text-6xl font-bold leading-tight">{intro.tagline}</p>
      </div>
    </section>
  )
}
