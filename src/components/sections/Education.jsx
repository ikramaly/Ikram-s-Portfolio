const education = [
  {
    level: "BACHELOR'S DEGREE",
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Shri Ram Group of Colleges, Muzaffarnagar (U.P.)',
    description:
      'Focused on computer science fundamentals, programming concepts, and developing practical projects during my academic journey.',
    duration: '2022–2026',
    result: 'CGPA: 7.6/10',
    image: '/assets/education/degree_college.jpg',
  },
  {
    level: 'CLASS XII',
    title: 'Higher Secondary — Intermediate',
    institution: 'DAV Inter College, Budhana, Muzaffarnagar',
    description:
      'Built a foundation in core academic subjects while preparing for higher education.',
    duration: '2022',
    result: 'Percentage: 74%',
    image: '/assets/education/inter_college.jpeg',
  },
  {
    level: 'CLASS X',
    title: 'Secondary — High School',
    institution: 'BSS Inter College, Budhana, Muzaffarnagar',
    description:
      'Developed a foundation in school-level subjects and essential learning skills.',
    duration: '2020',
    result: 'Percentage: 84%',
    image: '/assets/education/high_school.jpeg',
  },
]

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-[.2em] text-violet-300">
          MY EDUCATION
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Education &amp; Academic Background
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/35 hover:shadow-lg hover:shadow-violet-950/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <img
              src={item.image}
              alt={`${item.institution} campus`}
              className="h-48 w-full border-b border-white/10 object-cover object-center transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-3 py-1.5 text-[11px] font-semibold tracking-[.12em] text-violet-200">
                  {item.level}
                </span>
                <span className="text-sm font-medium text-zinc-400">
                  {item.duration}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-violet-300">
                {item.institution}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
              <div className="pt-4">
                <p className="inline-flex  mt-[20px] max-w-full rounded-lg border border-violet-400/20 bg-violet-400/[0.08] px-3 py-1.5 text-sm font-medium leading-5 text-violet-200">
                  {item.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
