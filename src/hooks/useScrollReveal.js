import { useLayoutEffect } from 'react'

function useScrollReveal() {
  useLayoutEffect(() => {
    const revealElements = document.querySelectorAll('[data-scroll-reveal]')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (
      revealElements.length === 0 ||
      prefersReducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      return undefined
    }

    let observer

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-reveal-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )

      revealElements.forEach((element) => {
        element.classList.add('scroll-reveal-pending')
        observer.observe(element)
      })
    } catch {
      revealElements.forEach((element) => {
        element.classList.remove('scroll-reveal-pending')
      })
      observer?.disconnect()
      return undefined
    }

    const revealFallback = window.setTimeout(() => {
      revealElements.forEach((element) => {
        if (!element.classList.contains('scroll-reveal-visible')) {
          element.classList.add('scroll-reveal-visible')
          observer.unobserve(element)
        }
      })
    }, 8000)

    return () => {
      window.clearTimeout(revealFallback)
      observer.disconnect()
    }
  }, [])
}

export default useScrollReveal
