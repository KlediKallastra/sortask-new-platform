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
      title: 'Business Websites',
      description:
        'Beautiful, fast websites that work perfectly on any device. Update content easily without technical knowledge.',
      features: ['Mobile-friendly design', 'Easy content updates'],
      delay: '',
    },
    {
      icon: Bot,
      title: 'AI Assistants',
      description:
        'Smart AI helpers that handle tasks automatically. They can research, send emails, schedule meetings, and work around the clock.',
      features: ['Works 24/7', 'Saves time and money'],
      delay: 'delay-100',
      featured: true,
    },
    {
      icon: Mic,
      title: 'Voice Assistants',
      description:
        'AI phone assistants that sound natural and handle customer calls. Answer questions, schedule appointments, and provide support.',
      features: ['Natural conversations', 'Available 24/7'],
      delay: 'delay-200',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description:
        'Connect your apps and automate daily tasks. No more manual data entry or switching between tools.',
      delay: '',
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbots',
      description:
        'Chatbots that know your business. Answer customer questions instantly using your company information.',
      delay: 'delay-100',
    },
    {
      icon: Database,
      title: 'Data Organization',
      description:
        'Turn messy files and documents into organized, searchable information. Make your data work for you.',
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
            Solutions That Work
          </h2>
          <p className="text-tech-dim">
            We build AI tools that save you time, reduce costs, and help your business grow. No
            technical jargon, just results.
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

