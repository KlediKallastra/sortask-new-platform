'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Testimonials() {
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

  return (
    <section className="py-24 bg-tech-surface/20 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tech-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          ref={(el) => {
            refs.current[0] = el
          }}
          className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 reveal"
        >
          <Quote className="w-8 h-8 text-white" />
        </div>

        <h3
          ref={(el) => {
            refs.current[1] = el
          }}
          className="font-display text-2xl md:text-4xl font-medium leading-relaxed mb-8 reveal delay-100"
        >
          &quot;Sortask transformed our manual customer support into a streamlined, AI-driven
          powerhouse. We reduced response times by 85% in the first month.&quot;
        </h3>

        <div
          ref={(el) => {
            refs.current[2] = el
          }}
          className="flex items-center justify-center gap-4 reveal delay-200"
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
            alt="Client"
            width={48}
            height={48}
            className="rounded-full border-2 border-tech-primary object-cover"
          />
          <div className="text-left">
            <p className="text-white font-bold">David Chen</p>
            <p className="text-tech-dim text-sm">CTO, Nexus Logistics</p>
          </div>
        </div>
      </div>
    </section>
  )
}

