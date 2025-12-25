'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

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

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden text-center reveal"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-tech-dim text-lg mb-10">
            Schedule a free consultation. We&apos;ll analyze your current stack and identify
            high-impact opportunities for AI automation.
          </p>

          <form className="space-y-4 text-left max-w-md mx-auto">
            <div>
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-tech-bg font-bold py-4 rounded-lg hover:bg-tech-accent transition-colors"
            >
              Book Strategy Call
            </button>
            <p className="text-xs text-tech-dim text-center mt-4">
              No commitment required. 14-day implementation guarantee.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

