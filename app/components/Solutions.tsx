'use client'

import { useEffect, useRef } from 'react'
import { Layout, Bot, Mic, Workflow, MessageSquare, Database, Check } from 'lucide-react'

export default function Solutions() {
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

  const services = [
    {
      icon: Layout,
      title: 'Modern Web Apps',
      description:
        'High-performance, reactive web applications built on Next.js and React. Stunning visuals meets rock-solid architecture.',
      features: ['3D Interactions', 'Headless CMS'],
      delay: '',
    },
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description:
        'AI agents that plan, execute, and iterate. From research assistants to automated outreach bots that work while you sleep.',
      features: ['Multi-Step Reasoning', 'Tool Usage'],
      delay: 'delay-100',
      featured: true,
    },
    {
      icon: Mic,
      title: 'Voice AI',
      description:
        'Human-like voice assistants for customer support and sales. Low latency, emotional intelligence, and seamless integration.',
      features: ['Real-time Transcription', 'Natural Synthesis'],
      delay: 'delay-200',
    },
    {
      icon: Workflow,
      title: 'AI Automation',
      description:
        'End-to-end workflow automation connecting your favorite apps. Eliminate repetitive tasks and reduce operational costs.',
      delay: '',
    },
    {
      icon: MessageSquare,
      title: 'Custom Chatbots',
      description:
        'RAG-powered chatbots trained on your company data. Instant answers for employees and customers, 24/7.',
      delay: 'delay-100',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description:
        'Structuring your unstructured data. We build the pipelines that feed your AI models with clean, relevant information.',
      delay: 'delay-200',
    },
  ]

  return (
    <section id="solutions" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={(el) => {
            refs.current[0] = el
          }}
          className="text-center max-w-2xl mx-auto mb-16 reveal"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Engineered for Impact
          </h2>
          <p className="text-tech-dim">
            We don&apos;t just write code. We deploy intelligent systems that scale, speak, and
            solve complex problems autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index + 1] = el
                }}
                className={`glass-card p-8 rounded-2xl reveal ${service.delay} ${
                  service.featured
                    ? 'border-tech-primary/30 relative overflow-hidden group'
                    : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute inset-0 bg-gradient-to-b from-tech-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
                <div className={service.featured ? 'relative z-10' : ''}>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                      index === 0
                        ? 'bg-tech-primary/20 text-tech-primary'
                        : index === 1
                        ? 'bg-tech-secondary/20 text-tech-secondary'
                        : index === 2
                        ? 'bg-tech-accent/20 text-tech-accent'
                        : index === 3
                        ? 'bg-orange-500/20 text-orange-400'
                        : index === 4
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-tech-dim text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="text-sm text-tech-dim space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-tech-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

