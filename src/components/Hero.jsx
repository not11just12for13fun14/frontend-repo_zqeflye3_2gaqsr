import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#FFF7CC] via-[#FDF0B8] to-[#E9E2A7]">
      {/* Subtle texture and color cast */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,102,77,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,152,255,0.08),transparent_45%)]" />
      </div>

      {/* Header badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <span className="tracking-[0.2em] uppercase text-xs md:text-sm font-semibold text-[#0b4a6f]/80 bg-white/60 backdrop-blur-sm border border-[#0b4a6f]/10 rounded-full px-4 py-2 shadow-sm">
          90s surf-cult • bold & minimal
        </span>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-[#0B3350] drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
              Ocean-born creation for the cult of bold makers
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#0B3350]/80 font-medium">
              Clean. Minimal. Salt in the air. We build with freedom and fluid motion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#method" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#105DAA] text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition">
                See the method
              </a>
              <a href="#philosophy" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FF6B5F]/90 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition">
                Feel the flow
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Soft gradient veil to help text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#0A2540]/0" />
    </section>
  )
}

export default Hero
