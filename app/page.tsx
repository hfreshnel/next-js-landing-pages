import GlobalStyles from '@/components/home/GlobalStyles'
import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import Positioning from '@/components/home/Positioning'
import Offer from '@/components/home/Offer'
import Projects from '@/components/home/Projects'
import Process from '@/components/home/Process'
import FAQ from '@/components/home/FAQ'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import { T } from '@/lib/design'

export default function IndexPage() {
  return (
    <>
      <GlobalStyles />
      <div style={{ minHeight: '100vh', background: T.dark, color: T.light, fontFamily: T.sans }}>
        <Nav />
        <Hero />
        <Positioning />
        <Offer />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
