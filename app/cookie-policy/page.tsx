'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useTranslations } from '../../lib/i18n'

export default function CookiePolicy() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
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

    if (titleRef.current) observer.observe(titleRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
    }
  }, [])

  return (
    <main>
      <BackgroundGlows />
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-white reveal"
          >
            {t('cookiePolicy.title')}
          </h1>

          <div ref={contentRef} className="glass-card rounded-2xl p-8 md:p-12 space-y-8 reveal delay-100">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('cookiePolicy.introduction.title')}</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('cookiePolicy.introduction.text')}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('cookiePolicy.whatAreCookies.title')}</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('cookiePolicy.whatAreCookies.text')}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('cookiePolicy.whyWeUse.title')}</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('cookiePolicy.whyWeUse.text')}
              </p>
              <ul className="list-disc ml-6 space-y-2 text-tech-dim">
                {(() => {
                  const items = t('cookiePolicy.whyWeUse.items')
                  return Array.isArray(items) ? (items as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : null
                })()}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('cookiePolicy.types.title')}</h2>
              <div className="space-y-4">
                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">{t('cookiePolicy.types.essential.title')}</h3>
                  <p className="text-tech-dim text-sm">
                    {t('cookiePolicy.types.essential.text')}
                  </p>
                </div>

                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">{t('cookiePolicy.types.performance.title')}</h3>
                  <p className="text-tech-dim text-sm">
                    {t('cookiePolicy.types.performance.text')}
                  </p>
                </div>

                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">{t('cookiePolicy.types.functionality.title')}</h3>
                  <p className="text-tech-dim text-sm">
                    {t('cookiePolicy.types.functionality.text')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                {t('cookiePolicy.managing.title')}
              </h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('cookiePolicy.managing.text')}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('cookiePolicy.contact.title')}</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('cookiePolicy.contact.text')}
              </p>
              <div className="bg-tech-primary/5 p-4 rounded-lg border border-tech-primary/20">
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">{t('cookiePolicy.contact.email')}:</strong>{' '}
                  <a href="mailto:office@sortask.com" className="hover:text-tech-accent">
                    office@sortask.com
                  </a>
                </p>
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">{t('cookiePolicy.contact.website')}:</strong>{' '}
                  <a href="https://sortask.com" className="hover:text-tech-accent" target="_blank" rel="noopener noreferrer">
                    sortask.com
                  </a>
                </p>
              </div>
            </section>

            <div className="flex justify-center pt-8">
              <Link
                href="/"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all"
              >
                {t('cookiePolicy.backToHome')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

