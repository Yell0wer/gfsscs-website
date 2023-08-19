import Image from 'next/image'
import Nav from '@/app/nav.component'
import Hero from './hero.component'
import About from './about.component'
import UpcomingEvents from './upcoming-events.component'
import Footer from './footer.component'

export default function Home() {
  return (
    <div>
      <Nav page="/" />
      <Hero />
      <About />
      <UpcomingEvents />
      <Footer />
    </div>
  )
}