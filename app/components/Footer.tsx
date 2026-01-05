'use client'

import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { useTranslations } from '../../lib/i18n'

export default function Footer() {
  const t = useTranslations().t
  
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 bg-tech-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-tech-primary to-tech-secondary flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-display font-bold text-lg">Sortask</span>
            </Link>
            <p className="text-tech-dim text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-tech-dim text-sm">
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  {t('footer.aiAgents')}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  {t('footer.voiceIntegration')}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  {t('footer.workflowAutomation')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-tech-dim text-sm">
              <li>
                <Link href="/about" className="hover:text-tech-accent transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-tech-accent transition-colors">
                  {t('footer.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tech-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-tech-dim hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-tech-dim hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-tech-dim hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-tech-dim">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/cookie-policy" className="hover:text-white">
              {t('footer.cookiePolicy')}
            </Link>
            <Link href="/imprint" className="hover:text-white">
              {t('footer.imprint')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

