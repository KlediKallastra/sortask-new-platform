'use client'

import { useEffect, useRef, useState } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const faqs = (() => {
    const items = t('faqs.items')
    return Array.isArray(items) ? items : []
  })()

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
            {t('faqs.hero.title')} <span className="text-gradient">{t('faqs.hero.titleHighlight')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('faqs.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index] = el
                }}
                className="glass-card rounded-xl p-6 reveal"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-display text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-tech-dim transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-tech-dim leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center mt-16 reveal">
            <h2 className="font-display text-2xl font-bold mb-4">{t('faqs.cta.title')}</h2>
            <p className="text-tech-dim mb-6">
              {t('faqs.cta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all"
            >
              {t('faqs.cta.button')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

