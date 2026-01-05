'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import {
  Layout,
  Bot,
  Mic,
  Workflow,
  MessageSquare,
  Database,
  Check,
  ArrowRight,
} from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Solutions() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
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

  const getFeaturesArray = (key: string): string[] => {
    const value = t(key)
    return Array.isArray(value) ? (value as unknown as string[]) : []
  }

  const solutions = [
    {
      icon: Layout,
      title: t('solutions.businessWebsites.title'),
      description: t('solutions.businessWebsites.description'),
      features: getFeaturesArray('solutions.businessWebsites.features'),
      delay: '',
      color: 'bg-tech-primary/20',
      iconColor: 'text-tech-primary',
    },
    {
      icon: Bot,
      title: t('solutions.aiAssistants.title'),
      description: t('solutions.aiAssistants.description'),
      features: getFeaturesArray('solutions.aiAssistants.features'),
      delay: 'delay-100',
      featured: true,
      color: 'bg-tech-secondary/20',
      iconColor: 'text-tech-secondary',
    },
    {
      icon: Mic,
      title: t('solutions.voiceAssistants.title'),
      description: t('solutions.voiceAssistants.description'),
      features: getFeaturesArray('solutions.voiceAssistants.features'),
      delay: 'delay-200',
      color: 'bg-tech-accent/20',
      iconColor: 'text-tech-accent',
    },
    {
      icon: Workflow,
      title: t('solutions.workflowAutomation.title'),
      description: t('solutions.workflowAutomation.description'),
      features: getFeaturesArray('solutions.workflowAutomation.features'),
      delay: '',
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: MessageSquare,
      title: t('solutions.smartChatbots.title'),
      description: t('solutions.smartChatbots.description'),
      features: getFeaturesArray('solutions.smartChatbots.features'),
      delay: 'delay-100',
      color: 'bg-green-500/20',
      iconColor: 'text-green-400',
    },
    {
      icon: Database,
      title: t('solutions.dataOrganization.title'),
      description: t('solutions.dataOrganization.description'),
      features: getFeaturesArray('solutions.dataOrganization.features'),
      delay: 'delay-200',
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
    },
  ]

  const steps = [
    { number: '01', title: t('solutions.howItWorks.step1.title'), description: t('solutions.howItWorks.step1.description') },
    { number: '02', title: t('solutions.howItWorks.step2.title'), description: t('solutions.howItWorks.step2.description') },
    { number: '03', title: t('solutions.howItWorks.step3.title'), description: t('solutions.howItWorks.step3.description') },
    { number: '04', title: t('solutions.howItWorks.step4.title'), description: t('solutions.howItWorks.step4.description') },
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
            {t('solutions.hero.title')} <span className="text-gradient">{t('solutions.hero.titleHighlight')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('solutions.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    refs.current[index] = el
                  }}
                  className={`glass-card p-8 rounded-2xl reveal ${solution.delay} ${
                    solution.featured
                      ? 'border-tech-primary/30 relative overflow-hidden group'
                      : ''
                  }`}
                >
                  {solution.featured && (
                    <div className="absolute inset-0 bg-gradient-to-b from-tech-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  )}
                  <div className={solution.featured ? 'relative z-10' : ''}>
                    <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-6`}>
                      <Icon className={`${solution.iconColor} w-6 h-6`} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-tech-dim text-sm leading-relaxed mb-6">{solution.description}</p>
                    {solution.features && (
                      <ul className="text-sm text-tech-dim space-y-2">
                        {solution.features.map((feature, idx) => (
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

          {/* How It Works */}
          <div
            ref={(el) => {
              refs.current[6] = el
            }}
            className="glass-card rounded-3xl p-8 md:p-16 mb-16 reveal"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              {t('solutions.howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-display font-bold text-tech-accent/30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-tech-dim text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center reveal">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all transform hover:-translate-y-1"
            >
              {t('solutions.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
