'use client'

import BackgroundGlows from '../components/BackgroundGlows'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <main>
      <BackgroundGlows />
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Cookie Policy
          </h1>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 reveal delay-100">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                This Cookie Policy explains how Sortask GmbH (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) uses cookies and similar technologies on our website
                (sortask.com) to recognize you when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when
                you visit a website. They are widely used to make websites work more efficiently
                and provide information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Why We Use Cookies</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and
                personalize content. Cookies help us:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-tech-dim">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website&apos;s functionality</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Types of Cookies</h2>
              <div className="space-y-4">
                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">Essential Cookies</h3>
                  <p className="text-tech-dim text-sm">
                    These cookies are necessary for the website to function properly. They enable
                    core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">Performance Cookies</h3>
                  <p className="text-tech-dim text-sm">
                    These cookies help us understand how visitors interact with our website by
                    collecting and reporting information anonymously.
                  </p>
                </div>

                <div className="bg-tech-primary/10 p-4 rounded-lg border border-tech-primary/20">
                  <h3 className="font-bold text-white mb-2">Functionality Cookies</h3>
                  <p className="text-tech-dim text-sm">
                    These cookies allow the website to remember choices you make and provide enhanced
                    features and personalization.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Managing Cookies
              </h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to
                refuse or accept cookies. You can also delete cookies that have already been set.
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-tech-dim leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
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

