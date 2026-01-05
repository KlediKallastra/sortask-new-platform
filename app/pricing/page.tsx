'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Pricing() {
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

  const featuresValue = t('pricing.card.features')
  const includedFeatures: string[] = Array.isArray(featuresValue) 
    ? (featuresValue as unknown as string[]) 
    : []

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
            <span className="text-gradient">{t('pricing.hero.title')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('pricing.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={(el) => {
              refs.current[0] = el
            }}
            className="glass-card rounded-3xl p-8 md:p-12 reveal border-2 border-tech-primary/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-6 py-2 bg-tech-primary text-white text-sm font-semibold rounded-bl-lg">
              {t('pricing.card.badge')}
            </div>

            <div className="text-center mb-8">
              <p className="text-tech-dim text-lg max-w-2xl mx-auto">
                {t('pricing.card.description')}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-xl font-bold mb-6 text-center">
                {t('pricing.card.includedTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-tech-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-tech-accent" size={14} />
                    </div>
                    <span className="text-tech-dim">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-tech-dim text-center mb-6">
                {t('pricing.card.ctaText')}
              </p>
              <Link
                href="/contact"
                className="block w-full text-center py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {t('pricing.card.ctaButton')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 relative z-10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={(el) => {
              refs.current[1] = el
            }}
            className="text-center reveal"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              {t('pricing.info.title')}
            </h3>
            <p className="text-tech-dim max-w-2xl mx-auto">
              {t('pricing.info.description')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
