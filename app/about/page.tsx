'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Zap, Heart, Shield, Users, Target, Globe } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from '../../lib/i18n'

export default function About() {
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

    // Observe hero elements
    if (heroTitleRef.current) observer.observe(heroTitleRef.current)
    if (heroDescRef.current) observer.observe(heroDescRef.current)

    // Observe other elements
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

  const values = [
    {
      icon: Zap,
      title: t('about.values.speed.title'),
      description: t('about.values.speed.description'),
    },
    {
      icon: Heart,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
    {
      icon: Shield,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
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
            {t('about.hero.title')} <span className="text-gradient">{t('about.hero.titleHighlight')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div
              ref={(el) => {
                refs.current[0] = el
              }}
              className="reveal"
            >
              <h2 className="font-display text-4xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-tech-dim text-lg leading-relaxed mb-6">
                {t('about.mission.p1')}
              </p>
              <p className="text-tech-dim text-lg leading-relaxed">
                {t('about.mission.p2')}
              </p>
            </div>
            <div
              ref={(el) => {
                refs.current[1] = el
              }}
              className="reveal delay-100"
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-16 h-16 rounded-lg bg-tech-primary/20 text-tech-primary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
                <p className="text-tech-dim leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    refs.current[index + 2] = el
                  }}
                  className="glass-card p-8 rounded-2xl reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-tech-primary/20 text-tech-primary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-tech-dim text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Team Section */}
          <div
            ref={(el) => {
              refs.current[5] = el
            }}
            className="text-center reveal"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">{t('about.team.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-tech-primary to-tech-secondary flex items-center justify-center text-white font-bold text-2xl">
                  ED
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{t('about.team.ejon.name')}</h3>
                <p className="text-tech-dim text-sm">{t('about.team.ejon.role')}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-tech-secondary to-tech-accent flex items-center justify-center text-white font-bold text-2xl">
                  KK
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{t('about.team.kledi.name')}</h3>
                <p className="text-tech-dim text-sm">{t('about.team.kledi.role')}</p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-tech-accent to-orange-500 flex items-center justify-center text-white font-bold text-2xl">
                  AZ
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{t('about.team.avdyl.name')}</h3>
                <p className="text-tech-dim text-sm">{t('about.team.avdyl.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

