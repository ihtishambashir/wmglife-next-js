'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * SSR-safe IntersectionObserver hook
 * @param {Object} options
 * @param {string} [options.rootMargin]
 * @param {number|number[]} [options.threshold]
 * @param {boolean} [options.once=true]
 */
export default function useInView({ root = null, rootMargin = '0px', threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === 'undefined') return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setInView(true)
      return
    }

    let stopped = false
    const observer = new IntersectionObserver(
      (entries) => {
        if (stopped) return
        const entry = entries[0]
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { root, rootMargin, threshold }
    )
    observer.observe(el)

    return () => {
      stopped = true
      observer.disconnect()
    }
  }, [root, rootMargin, threshold, once])

  return [ref, inView]
}

