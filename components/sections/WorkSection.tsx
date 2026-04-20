const projects = [
  {
    id: 1,
    title: 'Transforming the Design Process',
    tags: ['DesignOps', '2024', 'Study case'],
    bg: '#d0d5cf',
  },
  {
    id: 2,
    title: 'AI-Driven MVP for Competitive Analysis',
    tags: ['UX Design', 'UI Design', '2023'],
    bg: '#c8ddf0',
  },
  {
    id: 3,
    title: 'Redefining Experiences',
    tags: ['UX Design', '2023', 'Study case'],
    bg: '#e8e8e8',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="min-h-screen px-24 pt-28 pb-24">
      <div className="grid grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project) => (
          <article key={project.id} className="cursor-pointer group">
            <div
              className="w-full aspect-[4/3] mb-5 rounded-sm overflow-hidden"
              style={{ backgroundColor: project.bg }}
            />
            <h3 className="text-3xl font-bold leading-tight mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-600 bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
