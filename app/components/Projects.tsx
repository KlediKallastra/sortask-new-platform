'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Projects() {
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

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      category: 'FinTech',
      categoryColor: 'text-tech-accent',
      title: 'Financial Data Agent',
      description:
        'An autonomous agent that processes invoices and reconciles bank statements automatically.',
      delay: '',
    },
    {
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
      category: 'Healthcare',
      categoryColor: 'text-tech-secondary',
      title: 'Patient Triage Voice Bot',
      description:
        'Voice AI that handles appointment scheduling and basic symptom checking with 99% uptime.',
      delay: 'delay-100',
    },
  ]

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={(el) => {
          refs.current[0] = el
        }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 reveal"
      >
        <div>
          <h2 className="font-display text-3xl font-bold mb-2">Recent Deployments</h2>
          <p className="text-tech-dim">See our technology in action.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-tech-primary hover:text-white transition-colors">
          View All Projects <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              refs.current[index + 1] = el
            }}
            className={`group relative aspect-video rounded-2xl overflow-hidden glass-card border-0 reveal ${project.delay}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-bg via-tech-bg/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span
                    className={`${project.categoryColor} text-xs font-bold uppercase tracking-widest mb-2 block`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-tech-dim text-sm line-clamp-2">{project.description}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-tech-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

