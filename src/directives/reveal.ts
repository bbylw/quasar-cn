import type { Directive } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

export const revealDirective: Directive<HTMLElement> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value !== undefined) {
      el.style.setProperty('--i', String(binding.value))
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
