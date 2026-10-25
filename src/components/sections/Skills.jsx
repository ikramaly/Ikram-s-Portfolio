import { FiCode, FiDatabase, FiLayers, FiLayout } from 'react-icons/fi'
import { FiAlertCircle, FiGlobe, FiTool } from 'react-icons/fi'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs } from 'react-icons/fa'
import {
  SiApachemaven,
  SiMysql,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Backend Development',
    icon: FiCode,
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Core', icon: SiSpring },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'JDBC', icon: FiDatabase },
      { name: 'Hibernate', icon: FiDatabase },
    ],
  },
  {
    title: 'Frontend Development',
    icon: FiLayout,
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Database & Tools',
    icon: FiDatabase,
    skills: [
      { name: 'SQL/MySQL', icon: SiMysql },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'VS Code', icon: FiTool },
    ],
  },
  {
    title: 'Core Concepts',
    icon: FiLayers,
    skills: [
      { name: 'OOP', icon: FiCode },
      { name: 'Collections', icon: FiLayers },
      { name: 'Exception Handling', icon: FiAlertCircle },
      { name: 'REST APIs', icon: FiGlobe },
      { name: 'Problem Solving', icon: FiTool },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" data-scroll-reveal className="bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-10 md:mb-12">
          <p className="text-2xl font-semibold tracking-[.01em] text-violet-300">
            WHAT I WORK WITH
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 md:gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <article
                key={category.title}
                className="h-full rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-950/20 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-lg text-violet-300">
                    <CategoryIcon aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <span
                        key={skill.name}
                        className="group/skill inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-zinc-300 transition duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.08] hover:text-white"
                      >
                        <SkillIcon
                          aria-hidden="true"
                          className="shrink-0 text-base text-violet-300 transition-colors duration-200 group-hover/skill:text-violet-200"
                        />
                        <span>{skill.name}</span>
                      </span>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
