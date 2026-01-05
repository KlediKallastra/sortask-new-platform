import BackgroundGlows from './components/BackgroundGlows'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures. The future isn\'t coming, we\'re coding it.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main>
      <BackgroundGlows />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

