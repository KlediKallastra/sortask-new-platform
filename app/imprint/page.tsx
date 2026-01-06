'use client'

import { useEffect, useRef } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useTranslations } from '../../lib/i18n'

export default function Imprint() {
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
            {t('imprint.title')}
          </h1>

          <div ref={contentRef} className="glass-card rounded-2xl p-8 md:p-12 space-y-8 reveal delay-100">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('imprint.companyInfo.title')}</h2>
              <div className="bg-tech-bg/50 rounded-lg p-6 border border-white/10">
                <ul className="space-y-2 text-tech-dim text-sm">
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.companyName')}:</span> Sortask GmbH
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.address')}:</span> Münzgrabenstraße 44/12
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.postalCode')}:</span> 8010
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.city')}:</span> Graz
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.country')}:</span> {t('imprint.companyInfo.countryValue')}
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.phone')}:</span>{' '}
                    <a href="tel:+436764414020" className="hover:text-tech-accent">
                      +43 676 4414020
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.email')}:</span>{' '}
                    <a href="mailto:office@sortask.com" className="hover:text-tech-accent">
                      office@sortask.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-white">{t('imprint.companyInfo.website')}:</span>{' '}
                    <a href="https://sortask.com" className="hover:text-tech-accent" target="_blank" rel="noopener noreferrer">
                      sortask.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('imprint.legalDetails.title')}</h2>
              <ul className="list-disc ml-6 space-y-2 text-tech-dim">
                <li>
                  <span className="font-semibold text-white">{t('imprint.legalDetails.registerNumber')}:</span>{' '}
                  FN 649289 m
                </li>
                <li>
                  <span className="font-semibold text-white">{t('imprint.legalDetails.registerCourt')}:</span>{' '}
                  Regional Court of Graz
                </li>
                <li>
                  <span className="font-semibold text-white">{t('imprint.legalDetails.vatId')}:</span> ATU82037804
                </li>
                <li>
                  <span className="font-semibold text-white">{t('imprint.legalDetails.ceo')}:</span> Ejon Duka
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('imprint.disclaimer.title')}</h2>
              <div className="space-y-4 text-tech-dim">
                <p className="leading-relaxed">
                  {t('imprint.disclaimer.text')}
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('imprint.copyright.title')}</h2>
              <p className="text-tech-dim leading-relaxed">
                {t('imprint.copyright.text')}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">{t('imprint.contact.title')}</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                {t('imprint.contact.description')}
              </p>
              <div className="bg-tech-primary/5 p-4 rounded-lg border border-tech-primary/20">
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">{t('imprint.contact.email')}:</strong>{' '}
                  <a href="mailto:office@sortask.com" className="hover:text-tech-accent">
                    office@sortask.com
                  </a>
                </p>
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">{t('imprint.contact.website')}:</strong>{' '}
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
                {t('imprint.backToHome')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

