'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from '../../lib/i18n'
import { CheckCircle, XCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { t, locale } = useTranslations()
  const [email, setEmail] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Get available time slots based on selected date
  const getAvailableTimeSlots = () => {
    const timeSlots = [
      { value: '09:00', label: '9:00 AM' },
      { value: '10:00', label: '10:00 AM' },
      { value: '11:00', label: '11:00 AM' },
      { value: '12:00', label: '12:00 PM' },
      { value: '13:00', label: '1:00 PM' },
      { value: '14:00', label: '2:00 PM' },
      { value: '15:00', label: '3:00 PM' },
      { value: '16:00', label: '4:00 PM' },
      { value: '17:00', label: '5:00 PM' },
    ]

    // If today's date is selected, filter out past times
    if (preferredDate === getMinDate()) {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentTime = currentHour * 60 + currentMinute // Convert to minutes

      return timeSlots.filter((slot) => {
        const [hours, minutes] = slot.value.split(':').map(Number)
        const slotTime = hours * 60 + minutes
        return slotTime > currentTime
      })
    }

    return timeSlots
  }

  // Reset time if it becomes invalid when date changes
  useEffect(() => {
    if (preferredDate && preferredTime) {
      const availableSlots = getAvailableTimeSlots()
      const isTimeAvailable = availableSlots.some((slot) => slot.value === preferredTime)
      if (!isTimeAvailable) {
        setPreferredTime('')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferredDate])

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

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Consultation Request',
          email: email.trim(),
          message: preferredDate && preferredTime
            ? `Requested consultation on ${preferredDate} at ${preferredTime}`
            : preferredDate
            ? `Requested consultation on ${preferredDate}`
            : 'User submitted consultation request from home page.',
          preferredDate: preferredDate || undefined,
          preferredTime: preferredTime || undefined,
          language: locale,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      // Success
      setSubmitStatus('success')
      setEmail('')
      setPreferredDate('')
      setPreferredTime('')
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden text-center reveal"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-tech-dim text-lg mb-10">
            {t('contact.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
            <div>
              <input
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors disabled:opacity-50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-white mb-2">
                  {t('contact.preferredDate')}
                </label>
                <div className="relative">
                  <input
                    id="preferredDate"
                    type="date"
                    min={getMinDate()}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors disabled:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
                  {t('contact.preferredTime')}
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-tech-bg/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-tech-dim focus:outline-none focus:border-tech-primary transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                  >
                    <option value="">{t('contact.selectTime')}</option>
                    {getAvailableTimeSlots().map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-tech-bg font-bold py-4 rounded-lg hover:bg-tech-accent hover:text-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? t('contactPage.form.sending') : t('contact.cta')}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-green-400 font-medium text-center">
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
                  <p className="text-sm text-red-400 font-medium text-center">
                    Failed to send. Please try again or visit the contact page.
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-tech-dim text-center mt-4">
              {t('contact.disclaimer')}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

