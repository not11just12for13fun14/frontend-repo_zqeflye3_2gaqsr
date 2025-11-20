import React from 'react'
import Hero from './components/Hero'
import Method from './components/Method'
import Philosophy from './components/Philosophy'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FFF7CC] text-[#0B3350]">
      {/* Hero with Spline ocean animation */}
      <Hero />

      {/* Darker dive into method and proof */}
      <Method />

      {/* Animated flow of philosophy */}
      <Philosophy />

      {/* Footer: minimal, 90s surf zine nod */}
      <footer className="w-full py-10 bg-[#04121B] text-[#C5E8FF]/80">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold tracking-wide uppercase text-xs">© {new Date().getFullYear()} Surf Cult</div>
          <div className="text-xs">Built with ocean blues, soft yellows, and faded negroni accents.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
