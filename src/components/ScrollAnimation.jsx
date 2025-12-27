import React, { useEffect, useRef, useState } from 'react'

/**
 * ScrollAnimation component - Animates elements when they come into view
 * Uses Intersection Observer API to detect when element enters viewport
 * Optional delay parameter for staggered animations
 */
const ScrollAnimation = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  // Observe when element enters viewport and trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation



