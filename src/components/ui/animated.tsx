'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AnimatedProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'blur-in'
  delay?: number
  className?: string
  threshold?: number
}

export function Animated({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimatedProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={`animate-on-scroll ${animation} ${className}`}>
      {children}
    </div>
  )
}

export function AnimatedGroup({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  className = '',
}: {
  children: ReactNode[]
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'blur-in'
  staggerDelay?: number
  className?: string
}) {
  return (
    <>
      {children.map((child, index) => (
        <Animated
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          className={className}
        >
          {child}
        </Animated>
      ))}
    </>
  )
}
