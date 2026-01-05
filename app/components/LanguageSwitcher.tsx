'use client'

import { useTranslations } from '../../lib/i18n'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-tech-dim" />
      <button
        onClick={() => setLocale(locale === 'en' ? 'de' : 'en')}
        className="text-sm font-medium text-tech-dim hover:text-white transition-colors uppercase"
      >
        {locale === 'en' ? 'DE' : 'EN'}
      </button>
    </div>
  )
}

