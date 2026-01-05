'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '../../lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations().t

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled py-4' : 'py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tech-primary to-tech-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-tech-primary/20 group-hover:shadow-tech-primary/40 transition-all">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Sortask<span className="text-tech-dim font-normal">GmbH</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-tech-dim">
          <Link href="/solutions" className="hover:text-white transition-colors">
            {t('nav.solutions')}
          </Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">
            {t('nav.portfolio')}
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            {t('nav.about')}
          </Link>
          <Link href="/faqs" className="hover:text-white transition-colors">
            {t('nav.faqs')}
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
          >
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}

