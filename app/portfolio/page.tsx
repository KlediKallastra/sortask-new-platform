'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, TrendingUp, ArrowRight, Code, Zap, Shield, Smartphone } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Portfolio() {
  const refs = useRef<(HTMLElement | null)[]>([])
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
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

    if (heroTitleRef.current) observer.observe(heroTitleRef.current)
    if (heroDescRef.current) observer.observe(heroDescRef.current)
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (heroTitleRef.current) observer.unobserve(heroTitleRef.current)
      if (heroDescRef.current) observer.unobserve(heroDescRef.current)
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const projects = [
    {
      title: t('portfolio.projects.sorsend.title'),
      category: t('portfolio.projects.sorsend.category'),
      description: t('portfolio.projects.sorsend.description'),
      result: t('portfolio.projects.sorsend.result'),
      gradient: 'from-purple-600 to-indigo-600',
      image: '/assets/website-examples/Sorsend.png',
      link: 'https://sorsend.com',
      status: t('portfolio.projects.sorsend.status'),
    },
    {
      title: t('portfolio.projects.aiDeluxeHomes.title'),
      category: t('portfolio.projects.aiDeluxeHomes.category'),
      description: t('portfolio.projects.aiDeluxeHomes.description'),
      result: t('portfolio.projects.aiDeluxeHomes.result'),
      gradient: 'from-blue-600 to-cyan-600',
      image: '/assets/website-examples/AI Deluxe Homes.png',
      link: 'https://ai-deluxe.homes',
      status: t('portfolio.projects.aiDeluxeHomes.status'),
    },
    {
      title: t('portfolio.projects.prestigeCarlusso.title'),
      category: t('portfolio.projects.prestigeCarlusso.category'),
      description: t('portfolio.projects.prestigeCarlusso.description'),
      result: t('portfolio.projects.prestigeCarlusso.result'),
      gradient: 'from-amber-600 to-orange-600',
      image: '/assets/website-examples/PrestigeCar Lusso.png',
      link: 'https://prestigecarlusso.com',
      status: t('portfolio.projects.prestigeCarlusso.status'),
    },
  ]

  return (
    <main>
      <BackgroundGlows />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1
            ref={heroTitleRef}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white reveal"
          >
            {t('portfolio.hero.title')} <span className="text-gradient">{t('portfolio.hero.titleHighlight')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('portfolio.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  refs.current[index] = el
                }}
                className="group glass-card rounded-2xl overflow-hidden border-0 reveal cursor-pointer flex flex-col h-full"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div
                  className={`h-56 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-tech-primary text-white text-xs font-semibold backdrop-blur-sm">
                      {project.status}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs font-semibold text-tech-accent mb-2 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-tech-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-tech-dim text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-tech-accent pt-4 border-t border-white/10">
                    <TrendingUp size={16} />
                    <span>{project.result}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Capabilities Section */}
      <section className="py-24 border-y border-white/5 bg-tech-surface/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-tech-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            ref={(el) => {
              refs.current[3] = el
            }}
            className="text-center mb-12 reveal"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('portfolio.technologies.title')}
            </h2>
            <p className="text-tech-dim max-w-2xl mx-auto">
              {t('portfolio.technologies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: t('portfolio.technologies.modernDevelopment.title'),
                description: t('portfolio.technologies.modernDevelopment.description'),
                color: 'text-tech-primary',
                bgColor: 'bg-tech-primary/20',
              },
              {
                icon: Zap,
                title: t('portfolio.technologies.aiIntegration.title'),
                description: t('portfolio.technologies.aiIntegration.description'),
                color: 'text-tech-secondary',
                bgColor: 'bg-tech-secondary/20',
              },
              {
                icon: Smartphone,
                title: t('portfolio.technologies.responsiveDesign.title'),
                description: t('portfolio.technologies.responsiveDesign.description'),
                color: 'text-tech-accent',
                bgColor: 'bg-tech-accent/20',
              },
              {
                icon: Shield,
                title: t('portfolio.technologies.securityPerformance.title'),
                description: t('portfolio.technologies.securityPerformance.description'),
                color: 'text-green-400',
                bgColor: 'bg-green-500/20',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    refs.current[index + 4] = el
                  }}
                  className="glass-card p-6 rounded-xl reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg ${item.bgColor} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-tech-dim text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div
            ref={(el) => {
              refs.current[8] = el
            }}
            className="glass-card rounded-3xl p-8 md:p-16 text-center reveal"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('portfolio.cta.title')}
            </h2>
            <p className="text-tech-dim text-lg mb-8 max-w-2xl mx-auto">
              {t('portfolio.cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all transform hover:-translate-y-1"
            >
              {t('portfolio.cta.button')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

