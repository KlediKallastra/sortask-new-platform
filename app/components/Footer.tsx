import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 bg-tech-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-tech-primary to-tech-secondary flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-display font-bold text-lg">Sortask</span>
            </Link>
            <p className="text-tech-dim text-sm leading-relaxed">
              Building the cognitive layer for modern enterprises. Based in Zurich, operating
              globally.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-tech-dim text-sm">
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  Voice Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-tech-dim text-sm">
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tech-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
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
          <p>&copy; 2024 Sortask GmbH. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

