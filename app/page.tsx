import BackgroundGlows from './components/BackgroundGlows'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <BackgroundGlows />
      <Navbar />
      <Hero />
      <Solutions />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

