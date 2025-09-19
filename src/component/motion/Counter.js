'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import useInView from '@/hooks/useInView'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

/**
 * Counter: animates numbers with rAF, optionally when scrolled into view.
 * Props:
 * - to: number (required)
 * - from?: number (default 0)
 * - duration?: number (ms, default 1200)
 * - delay?: number (ms, default 0)
 * - format?: (n:number) => string
 * - startOnView?: boolean (default true)
 * - once?: boolean (default true)
 * - easing?: (t:number)=>number (default easeOutCubic)
 */
export default function Counter({
  to,
  from = 0,
  duration = 1200,
  delay = 0,
  format,
  startOnView = true,
  once = true,
  easing = easeOutCubic,
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.2, once })
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const [value, setValue] = useState(from)
  const rafRef = useRef(null)
  const startedRef = useRef(false)
  const hasAnimatedRef = useRef(false)

  const shouldStart = startOnView ? inView : true

  useEffect(() => {
    if (!shouldStart) return
    if (once && hasAnimatedRef.current) return
    if (startedRef.current) return
    startedRef.current = true

    const start = () => {
      if (prefersReduced) {
        setValue(to)
        hasAnimatedRef.current = true
        return
      }

      const startTime = performance.now()
      const endTime = startTime + duration
      const tick = (now) => {
        const clamped = Math.min(now, endTime)
        const t = (clamped - startTime) / duration
        const eased = easing(t)
        const current = from + (to - from) * eased
        setValue(current)
        if (clamped < endTime) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setValue(to)
          hasAnimatedRef.current = true
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    let timeoutId
    if (delay > 0) {
      timeoutId = setTimeout(start, delay)
    } else {
      start()
    }

    return () => {
      startedRef.current = false
      if (timeoutId) clearTimeout(timeoutId)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [shouldStart, once, delay, duration, easing, prefersReduced, from, to])

  const formatter = format || ((n) => Math.round(n).toLocaleString())

  return (
    <span ref={ref} className={className} {...rest}>
      {formatter(value)}
    </span>
  )
}

