'use client'

import React, { forwardRef } from 'react'
import useInView from '@/hooks/useInView'

/**
 * Reveal: slides content in from left or right when it enters viewport.
 * Props:
 * - from: 'left' | 'right'
 * - distance?: number (px, default 40)
 * - delay?: number (ms)
 * - duration?: number (ms, default 700)
 * - once?: boolean (default true)
 * - as?: React.ElementType (default 'div')
 * - className?: string
 */
const Reveal = forwardRef(function Reveal(
  {
    as: As = 'div',
    from = 'left',
    distance = 40,
    delay = 0,
    duration = 700,
    once = true,
    className = '',
    children,
    ...rest
  },
  forwardedRef
) {
  const [inViewRef, inView] = useInView({ threshold: 0.2, once })

  // Merge refs
  const setRef = (node) => {
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef && typeof forwardedRef === 'object') forwardedRef.current = node
    inViewRef.current = node
  }

  const initialTranslate = from === 'left' ? -Math.abs(distance) : Math.abs(distance)
  const isVisible = inView

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : `translateX(${initialTranslate}px)`,
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    willChange: 'transform',
    ...rest.style,
  }

  return (
    <As
      ref={setRef}
      className={`transition-[transform,opacity] ease-out will-change-transform ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </As>
  )
})

export default Reveal
