const aboutCards = [
  {
    title: 'Education',
    description: 'B.Tech in Computer Science & Engineering. A foundation in programming, software development, and computer science concepts.',
  },
  {
    title: 'Project Experience',
    description: 'Working on practical projects to apply concepts, improve implementation skills, and understand how applications work.',
  },
  {
    title: 'Problem-Solving',
    description: 'Breaking problems into smaller steps and focusing on clear, maintainable solutions.',
  },
  {
    title: 'Growth & Teamwork',
    description: 'I value continuous learning and hope to contribute, learn, and grow as part of a collaborative development team.',
  },
]

function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-violet-300">
              A LITTLE ABOUT ME
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              I’m Ikram Ali, a Computer Science graduate focused on Java Full Stack Development. I enjoy building web applications, solving problems, and turning ideas into practical software solutions. Through my projects, I aim to strengthen my development skills and create clean, user-friendly applications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#0d0c12] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/40 hover:bg-[#12101a] hover:shadow-lg hover:shadow-violet-950/20 sm:p-6"
              >
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
