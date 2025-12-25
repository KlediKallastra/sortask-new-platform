'use client'

import { useEffect, useRef } from 'react'

export default function Stats() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const stats = [
    { value: '98%', label: 'Accuracy Rate', delay: '' },
    { value: '24/7', label: 'Automated Uptime', delay: 'delay-100' },
    { value: '10x', label: 'ROI Average', delay: 'delay-200' },
    { value: '50+', label: 'Agents Deployed', delay: 'delay-300' },
  ]

  return (
    <section className="py-24 border-y border-white/5 bg-tech-surface/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tech-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            ref={(el) => {
              refs.current[index] = el
            }}
            className={`reveal ${stat.delay}`}
          >
            <p className="text-4xl font-display font-bold text-white mb-2">{stat.value}</p>
            <p className="text-tech-dim text-sm uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

