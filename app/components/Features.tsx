'use client'

import { useEffect, useRef } from 'react'
import { Zap, Shield, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
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

  const features = [
    {
      icon: Zap,
      title: t('features.lightningFast.title'),
      description: t('features.lightningFast.description'),
      color: 'bg-tech-primary/20',
      iconColor: 'text-tech-primary',
    },
    {
      icon: Shield,
      title: t('features.enterpriseGrade.title'),
      description: t('features.enterpriseGrade.description'),
      color: 'bg-tech-secondary/20',
      iconColor: 'text-tech-secondary',
    },
    {
      icon: TrendingUp,
      title: t('features.provenResults.title'),
      description: t('features.provenResults.description'),
      color: 'bg-tech-accent/20',
      iconColor: 'text-tech-accent',
    },
    {
      icon: Users,
      title: t('features.expertSupport.title'),
      description: t('features.expertSupport.description'),
      color: 'bg-green-500/20',
      iconColor: 'text-green-400',
    },
  ]

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={(el) => {
            refs.current[0] = el
          }}
          className="text-center max-w-2xl mx-auto mb-16 reveal"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-tech-dim">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index + 1] = el
                }}
                className="glass-card p-8 rounded-2xl reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className={`${feature.iconColor} w-6 h-6`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-tech-dim text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center reveal">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all"
          >
            {t('features.cta')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

