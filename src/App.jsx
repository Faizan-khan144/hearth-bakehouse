import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Menu from './components/Menu.jsx'
import Story from './components/Story.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Menu />
        <Story />
        <Process />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}