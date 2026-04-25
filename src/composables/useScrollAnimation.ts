import { onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const animateElement = (
    selector: string,
    options: {
      y?: number
      x?: number
      opacity?: number
      duration?: number
      delay?: number
      stagger?: number
      scale?: number
      start?: string
    } = {}
  ) => {
    const {
      y = 60,
      x = 0,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      scale = 1,
      start = 'top 85%',
    } = options

    gsap.fromTo(
      selector,
      { y, x, opacity, scale },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start,
          toggleActions: 'play none none none',
        },
      }
    )
  }

  const animateCounter = (
    selector: string,
    endValue: number,
    duration: number = 2
  ) => {
    const obj = { value: 0 }
    gsap.to(obj, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
      },
      onUpdate: () => {
        const el = document.querySelector(selector)
        if (el) el.textContent = Math.floor(obj.value).toString()
      },
    })
  }

  const cleanup = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    animateElement,
    animateCounter,
    cleanup,
  }
}
