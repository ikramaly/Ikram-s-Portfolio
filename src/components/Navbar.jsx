import { useState } from 'react'
import { FiMenu, FiX, FiMail } from 'react-icons/fi'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <a href="#home" className="shrink-0 text-2xl font-bold tracking-tight text-white">Ikram<span className="text-violet-400">.</span></a>

        <button
          type="button"
          className="ml-auto rounded-lg p-2 text-xl text-zinc-200 transition hover:bg-white/5 md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-4 border-b border-white/10 bg-[#09090b] px-5 py-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm text-zinc-300 transition hover:text-violet-300">
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:brightness-110">
            Get in Touch <FiMail aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
