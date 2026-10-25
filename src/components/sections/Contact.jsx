import { useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from 'react-icons/fi'

const contactMethods = [
  {
    label: 'Email',
    value: 'ikramali91549@gmail.com',
    href: 'mailto:ikramali91549@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '9536060714',
    href: 'tel:9536060714',
    icon: FiPhone,
  },
  {
    label: 'WhatsApp',
    value: '9536060714',
    href: 'https://wa.me/919536071014',
    icon: FiMessageCircle,
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ikram-ali-9b8961273/?isSelfProfile=true',
    icon: FaLinkedinIn,
  },
  { label: 'GitHub', href: 'https://github.com/ikramaly', icon: FaGithub },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_ikram_jk/?hl=en',
    icon: FaInstagram,
  },
  { label: 'Facebook', href: 'https://facebook.com/', icon: FaFacebookF },
]

function Contact() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormMessage(
      'Your details passed validation, but this form is not connected to a message delivery service.',
    )
  }

  return (
    <section
      id="contact"
      data-scroll-reveal
      className="border-t border-white/10 bg-gradient-to-b from-violet-500/[0.06] to-transparent"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-2xl font-semibold tracking-[.2em] text-violet-300">
            LET’S CONNECT
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
            I’m open to Java Full Stack Developer opportunities, collaboration,
            and interesting projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Choose the best way to reach me.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {contactMethods.map((method) => {
                const MethodIcon = method.icon

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.label === 'WhatsApp' ? 'noreferrer' : undefined}
                    className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-violet-400/[0.04] hover:shadow-md hover:shadow-violet-950/20"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-lg text-violet-300">
                      <MethodIcon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {method.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium text-zinc-200 sm:text-base">
                        {method.value}
                      </span>
                    </span>
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-zinc-500 transition group-hover:text-violet-300"
                    />
                  </a>
                )
              })}
            </div>

            <div className="mt-8 pt-6">
              <h4 className="text-sm font-semibold text-white">
                Find me online
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="group inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-400/[0.08] hover:text-white hover:shadow-md hover:shadow-violet-950/20"
                    >
                      <SocialIcon
                        aria-hidden="true"
                        className="shrink-0 text-base text-violet-300"
                      />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Send a message</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Fill in the form and your details will be checked in this demo.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  className="w-full min-w-0 resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/25 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <FiSend aria-hidden="true" />
                Send Message
              </button>

              <p aria-live="polite" className="min-h-5 text-sm leading-5 text-violet-200">
                {formMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
