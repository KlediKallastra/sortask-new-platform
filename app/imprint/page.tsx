'use client'

import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Imprint() {
  return (
    <main>
      <BackgroundGlows />
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Imprint
          </h1>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 reveal delay-100">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Company Information</h2>
              <div className="bg-tech-bg/50 rounded-lg p-6 border border-white/10">
                <ul className="space-y-2 text-tech-dim text-sm">
                  <li>
                    <span className="font-semibold text-white">Company Name:</span> Sortask GmbH
                  </li>
                  <li>
                    <span className="font-semibold text-white">Address:</span> [Address]
                  </li>
                  <li>
                    <span className="font-semibold text-white">Postal Code:</span> [Postal Code]
                  </li>
                  <li>
                    <span className="font-semibold text-white">City:</span> Zurich
                  </li>
                  <li>
                    <span className="font-semibold text-white">Country:</span> Switzerland
                  </li>
                  <li>
                    <span className="font-semibold text-white">Phone:</span>{' '}
                    <a href="tel:+436764414020" className="hover:text-tech-accent">
                      +43 676 4414020
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-white">Email:</span>{' '}
                    <a href="mailto:office@sortask.com" className="hover:text-tech-accent">
                      office@sortask.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-white">Website:</span>{' '}
                    <a href="https://sortask.com" className="hover:text-tech-accent">
                      sortask.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Legal Details</h2>
              <ul className="list-disc ml-6 space-y-2 text-tech-dim">
                <li>
                  <span className="font-semibold text-white">Commercial Register Number:</span>{' '}
                  [Number]
                </li>
                <li>
                  <span className="font-semibold text-white">Commercial Register Court:</span>{' '}
                  [Court]
                </li>
                <li>
                  <span className="font-semibold text-white">VAT ID:</span> [VAT ID]
                </li>
                <li>
                  <span className="font-semibold text-white">CEO:</span> Ejon Duka, Kledi Kallastra
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <div className="space-y-4 text-tech-dim">
                <div>
                  <h3 className="font-bold text-white mb-2">Content</h3>
                  <p className="leading-relaxed">
                    The contents of our pages have been created with the greatest care. However, we
                    cannot guarantee the contents&apos; accuracy, completeness, or topicality.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2">External Links</h3>
                  <p className="leading-relaxed">
                    Our website contains links to external websites. We have no influence on the
                    contents of those websites, therefore we cannot guarantee for those contents.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-2">Liability</h3>
                  <p className="leading-relaxed">
                    As service providers, we are liable for our own contents of these websites
                    according to the general laws. However, we are not obligated to monitor
                    third-party information provided or stored on our website.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Copyright</h2>
              <p className="text-tech-dim leading-relaxed">
                The content and works created by the site operators on these pages are subject to
                copyright law. Duplication, processing, distribution, and any form of
                commercialization of such material beyond the scope of the copyright law shall
                require the prior written consent of its respective author or creator.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                For questions regarding this imprint, please contact us:
              </p>
              <div className="bg-tech-primary/5 p-4 rounded-lg border border-tech-primary/20">
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">Email:</strong> office@sortask.com
                </p>
                <p className="text-sm text-tech-dim">
                  <strong className="text-white">Website:</strong> sortask.com
                </p>
              </div>
            </section>

            <div className="flex justify-center pt-8">
              <Link
                href="/"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-tech-primary to-tech-secondary text-white font-semibold hover:shadow-lg hover:shadow-tech-primary/25 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

