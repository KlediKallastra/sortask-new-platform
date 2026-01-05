'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enMessages from '../messages/en.json'
import deMessages from '../messages/de.json'

type Locale = 'en' | 'de'
type Messages = typeof enMessages

const messages: Record<Locale, Messages> = {
  en: enMessages,
  de: deMessages,
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children, defaultLocale = 'en' }: { children: ReactNode; defaultLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Try to get locale from localStorage or browser
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'de')) {
      setLocale(savedLocale)
    } else {
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'de') {
        setLocale('de')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = messages[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value // Return the value (string, array, object, etc.)
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useTranslations() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslations must be used within I18nProvider')
  }
  return context
}

