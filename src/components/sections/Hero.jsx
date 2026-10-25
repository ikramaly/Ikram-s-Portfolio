import { useEffect, useState } from 'react'
import { FiArrowRight, FiCode, FiDatabase, FiDownload, FiLayers, FiTrendingUp } from 'react-icons/fi'
import { FaCss3Alt, FaGithub, FaHtml5, FaJava, FaJs } from 'react-icons/fa'
import { SiReact, SiSpringboot } from 'react-icons/si'

const technologies = [
  { icon: FaHtml5, label: 'HTML' },
  { icon: FaCss3Alt, label: 'CSS' },
  { icon: FaJs, label: 'JavaScript' },
  { icon: SiReact, label: 'React' },
  { icon: FaJava, label: 'Java' },
  { icon: SiSpringboot, label: 'Spring Boot' },
  { icon: FiDatabase, label: 'SQL' },
  { icon: FaGithub, label: 'GitHub' },
]

const jobTitles = ['Java Full Stack Developer', 'Frontend Developer']

const highlights = [
  { title: 'Java & React', detail: 'Primary stack' },
  { title: 'Clean code', detail: 'Development focus' },
  { title: 'Problem solving', detail: 'Approach' },
]

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayTitle, setDisplayTitle] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = jobTitles[titleIndex]
    let delay = isDeleting ? 45 : 85

    if (!isDeleting && displayTitle === currentTitle) {
      delay = 1400
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayTitle === currentTitle) {
        setIsDeleting(true)
      } else if (isDeleting && displayTitle === '') {
        setIsDeleting(false)
        setTitleIndex((titleIndex + 1) % jobTitles.length)
      } else if (isDeleting) {
        setDisplayTitle(displayTitle.slice(0, -1))
      } else {
        setDisplayTitle(currentTitle.slice(0, displayTitle.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [displayTitle, isDeleting, titleIndex])

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-8 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-12 h-[34rem] w-[34rem] rounded-full bg-purple-700/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:py-20 md:gap-10 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-14 lg:py-20">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm font-medium text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            Available for Opportunities
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] xl:text-6xl">
            Hi, I'm Ikram Ali.
            <span className="mt-2 block min-h-[2.25em] text-violet-400 sm:min-h-[1.2em]">
              {displayTitle}<span aria-hidden="true" className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-0.5 animate-pulse bg-violet-300" />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            I build web applications using Java, Spring Boot, React, and SQL. I enjoy solving problems, writing clean code, and turning ideas into practical software solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/35 transition hover:-translate-y-0.5 hover:brightness-110">
              Explore My Work <FiArrowRight aria-hidden="true" />
            </a>
            <a href="/assets/resume/Ikram_Ali_Resume.pdf" download="Ikram_Ali_Resume.pdf" className="inline-flex items-center gap-3 rounded-xl border border-violet-400/40 bg-[#0b0a10]/60 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-400/10">
              <FiDownload aria-hidden="true" className="text-violet-300" /> View Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Technologies">
            {technologies.map(({ icon: Icon, label }) => (
              <span key={label} role="img" aria-label={label} title={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-lg text-zinc-200 transition hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300 sm:h-12 sm:w-12 sm:text-xl">
                <Icon aria-hidden="true" />
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-y-4 border-t border-white/10 pt-5">
            {highlights.map((item, index) => (
              <div key={item.title} className={`min-w-[9rem] pr-5 ${index > 0 ? 'border-l border-white/15 pl-5' : ''}`}>
                <p className="text-sm font-semibold text-violet-300 sm:text-base">{item.title}</p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-64 px-3 pb-8 sm:max-w-72 md:max-w-80 lg:order-2 lg:my-4 lg:max-w-md sm:px-5">
          <div aria-hidden="true" className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-400 via-purple-600 to-violet-900 opacity-80 blur-[1px] lg:rounded-[2rem]" />
          <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-violet-400/20 bg-violet-500/[0.035] rotate-[-3deg] lg:rounded-[2.2rem]" />
          <div className="relative overflow-hidden rounded-full border border-violet-300/50 bg-zinc-900 shadow-[0_0_55px_rgba(124,58,237,0.22)] lg:rounded-[1.8rem]">
            <img src="/assets/profile/Ikram_Profile_Img.png" alt="Ikram Ali" className="aspect-square w-full object-cover object-top lg:aspect-[4/4.7]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-1 top-10 hidden items-center gap-3 rounded-xl border border-violet-300/20 bg-[#111019]/95 px-3 py-3 shadow-xl shadow-black/30 backdrop-blur sm:-left-2 sm:px-4 lg:flex">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-400/15 text-lg text-violet-200"><FiCode aria-hidden="true" /></span>
            <span className="text-xs font-medium leading-5 text-zinc-200 sm:text-sm">Clean code<br /><span className="text-zinc-500">Better solutions</span></span>
          </div>

          <div className="absolute -bottom-1 right-0 flex items-center gap-3 rounded-xl border border-violet-300/20 bg-[#111019]/95 px-3 py-3 shadow-xl shadow-black/30 backdrop-blur sm:right-0 sm:px-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-400/15 text-lg text-violet-200"><FiTrendingUp aria-hidden="true" /></span>
            <span className="text-xs font-medium leading-5 text-zinc-200 sm:text-sm">Turn ideas into<br /><span className="text-zinc-500">practical software</span></span>
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-xl border border-violet-300/20 bg-[#111019]/95 px-3 py-3 text-xs text-zinc-300 shadow-xl shadow-black/30 backdrop-blur sm:flex">
            <FiLayers className="text-lg text-violet-300" aria-hidden="true" /> Full stack development
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
