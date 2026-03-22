import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer style={{
      padding: '2rem 4rem', borderTop: '1px solid #1e1e1e',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <p style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em' }}>
        © 2026 Gian Ramanda. All rights reserved.
      </p>
      <p style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em' }}>
        Designed & Built with ♥
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}