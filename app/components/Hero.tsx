'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowDown, CheckCircle, Cpu } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '../../lib/i18n'

export default function Hero() {
  const t = useTranslations().t
  const revealRef = useRef<HTMLDivElement>(null)
  const revealRef2 = useRef<HTMLDivElement>(null)

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

    if (revealRef.current) observer.observe(revealRef.current)
    if (revealRef2.current) observer.observe(revealRef2.current)

    return () => {
      if (revealRef.current) observer.unobserve(revealRef.current)
      if (revealRef2.current) observer.unobserve(revealRef2.current)
    }
  }, [])

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Digital Network Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div ref={revealRef} className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-accent text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
            </span>
            {t('hero.badge')}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            {t('hero.title')} <br />
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="text-tech-dim text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all transform hover:-translate-y-1 text-center"
            >
              {t('hero.ctaStart')}
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {t('hero.ctaExplore')} <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Visual Content */}
        <div ref={revealRef2} className="relative lg:h-[600px] flex items-center justify-center reveal delay-200">
          <div className="relative w-full aspect-square max-w-md animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-primary/30 to-tech-accent/30 rounded-full blur-[80px]"></div>
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
              alt="AI Visualization"
              fill
              className="relative z-10 object-cover rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 p-4 glass-card rounded-xl z-20 animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-tech-dim">{t('hero.agentStatus')}</p>
                  <p className="text-sm font-bold">{t('hero.onlineActive')}</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 p-4 glass-card rounded-xl z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-tech-accent/20 rounded-lg text-tech-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-tech-dim">{t('hero.optimization')}</p>
                  <p className="text-sm font-bold">{t('hero.efficiency')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

