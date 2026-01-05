'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Projects() {
  const refs = useRef<(HTMLElement | null)[]>([])
  const t = useTranslations().t

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
      image: '/assets/website-examples/Sorsend.png',
      category: 'SaaS Platform',
      categoryColor: 'text-tech-accent',
      title: 'Sorsend',
      description:
        'Modern SaaS platform with intelligent data processing and AI-powered insights for businesses.',
      delay: '',
      link: 'https://sorsend.com',
    },
    {
      image: '/assets/website-examples/AI Deluxe Homes.png',
      category: 'Real Estate',
      categoryColor: 'text-tech-secondary',
      title: 'AI Deluxe Homes',
      description:
        'Premium real estate platform with AI-powered property matching and virtual tours.',
      delay: 'delay-100',
      link: 'https://ai-deluxe.homes',
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
          <h2 className="font-display text-3xl font-bold mb-2">{t('projects.title')}</h2>
          <p className="text-tech-dim">{t('projects.subtitle')}</p>
        </div>
        <Link
          href="/portfolio"
          className="hidden md:flex items-center gap-2 text-tech-primary hover:text-white transition-colors"
        >
          {t('projects.cta')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link || '/portfolio'}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noopener noreferrer' : undefined}
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
          </Link>
        ))}
      </div>
    </section>
  )
}

