import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Goan Connect',
    image: '/assets/projects/goan-connect.png',
    description:
      'A community-oriented project created to connect people and local information.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js'],
    githubUrl: 'https://github.com/ikramaly/GoanConnect',
  },
  {
    title: 'Portfolio Website',
    image: '/assets/projects/portfolio.png',
    description:
      'A personal portfolio website showcasing my skills, projects, education, and developer journey.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js'],
    githubUrl: 'https://github.com/ikramaly/Ikram-Portfolio',
  },
  {
    title: 'BookMyTrain',
    image: '/assets/projects/book_my_train.png',
    description:
      'A console-based Java train booking application demonstrating core Java programming concepts.',
    technologies: [
      'Core Java',
      'OOP',
      'Exception Handling',
      'Collections Framework',
    ],
    githubUrl: 'https://github.com/ikramaly/BookMyTrain/tree/main/src',
  },
  {
    title: 'Collections Mini JS',
    image: '/assets/projects/collections_mini_js.png',
    description:
      'A collection of small JavaScript projects built to practise programming concepts and interactive functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ikramaly/Collections-JavaScript-Mini-Projects',
  },
  {
    title: 'Car Rental System',
    image: '/assets/projects/car_rental_system.png',
    description:
      'A Java-based car rental application built to practise database connectivity and rental management operations.',
    technologies: ['Core Java', 'JDBC', 'SQL'],
    githubUrl: 'https://github.com/ikramaly/Car-Rental-System',
  },
  {
    title: 'Online Job Portal',
    image: '/assets/projects/online_job_portal.png',
    description:
      'A final-year team project designed to connect job seekers with relevant opportunities.',
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js'],
    githubUrl: 'https://github.com/ikramaly/Online-Job-Portal',
  },
]

function Projects() {
  return (
    <section id="projects" data-scroll-reveal className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mt-[-40px]">
            Projects I’ve Worked On
          </h2>
        </div>

        <div className="grid  gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-48 w-full border-b border-white/10 object-cover object-top"
              />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <h4 className=" mt-2 text-sm font-semibold text-violet-300">
                  Technologies Used
                </h4>
                <div className="mt-3  flex flex-wrap gap-2.5 mb-7">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full cursor-pointer whitespace-normal break-words rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs leading-5 text-zinc-300 transition-colors hover:border-violet-400/40 hover:bg-violet-400/[0.08] hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white"
                  >
                    <FaGithub aria-hidden="true" className="text-base" />
                    Code
                    <FiArrowUpRight aria-hidden="true" className="text-base" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
