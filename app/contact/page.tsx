'use client'

import { useEffect, useRef, useState } from 'react'
import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, Calendar, Check, CheckCircle, XCircle } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
  const { t, locale } = useTranslations()

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: locale, // Include current language
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      setSubmitStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
            {t('contactPage.hero.title')} <span className="text-gradient">{t('contactPage.hero.titleHighlight')}</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-tech-dim text-lg md:text-xl leading-relaxed max-w-3xl mx-auto reveal delay-100"
          >
            {t('contactPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form and Sidebar */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div
                ref={(el) => {
                  refs.current[0] = el
                }}
                className="glass-card p-8 rounded-2xl reveal"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        {t('contactPage.form.name')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
                        placeholder={t('contactPage.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        {t('contactPage.form.company')}
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
                        placeholder={t('contactPage.form.companyPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        {t('contactPage.form.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
                        placeholder={t('contactPage.form.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        {t('contactPage.form.phone')}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
                        placeholder={t('contactPage.form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      {t('contactPage.form.message')}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-tech-primary/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.submit')}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-green-400 font-medium">
                          {t('contactPage.form.successMessage')}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-red-400 font-medium">
                          {errorMessage || 'Failed to send message. Please try again.'}
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div
                ref={(el) => {
                  refs.current[1] = el
                }}
                className="glass-card rounded-2xl p-8 reveal delay-100"
              >
                <h3 className="font-display text-xl font-bold mb-4">{t('contactPage.sidebar.quickCall.title')}</h3>
                <p className="text-tech-dim mb-6 text-sm">
                  {t('contactPage.sidebar.quickCall.description')}
                </p>
                <a
                  href="mailto:office@sortask.com?subject=Book a 15-minute consultation call"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  {t('contactPage.sidebar.quickCall.button')}
                </a>
              </div>

              <div
                ref={(el) => {
                  refs.current[2] = el
                }}
                className="glass-card rounded-2xl p-8 reveal delay-200"
              >
                <h3 className="font-display text-xl font-bold mb-6">{t('contactPage.sidebar.getInTouch.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-tech-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-tech-accent" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t('contactPage.sidebar.getInTouch.email')}</p>
                      <a href="mailto:office@sortask.com" className="text-sm text-tech-dim hover:text-tech-accent">
                        office@sortask.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-tech-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-tech-accent" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t('contactPage.sidebar.getInTouch.phone')}</p>
                      <a href="tel:+436764414020" className="text-sm text-tech-dim hover:text-tech-accent">
                        +43 676 4414020
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

