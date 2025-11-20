import React from 'react'

function Method() {
  return (
    <section id="method" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#0D2B45] via-[#0A2439] to-[#071C2E] text-[#D8F0FF]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_center,rgba(16,152,255,0.5),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-soft-light bg-[linear-gradient(120deg,rgba(255,107,95,0.08),transparent_40%),linear-gradient(-120deg,rgba(13,43,69,0.4),transparent_30%)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">The Method</h2>
          <p className="text-lg md:text-xl text-[#C5E8FF]/90 mb-10 font-medium">
            A darker dive that reveals our cult creator model — transparent, ritualistic, effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Signal the swell',
              copy: 'We tune to real currents — audience, vibe, constraints. No fluff, just clean lines.'
            },
            {
              title: 'Paddle into form',
              copy: 'Tight scopes, bold choices. We move fast, ship faster, iterate with feel.'
            },
            {
              title: 'Ride and refine',
              copy: 'Proof through momentum. Data and instinct married like wax and board.'
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-7">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-[#C5E8FF]/90">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#105DAA] text-white">Ocean blues</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6B5F] text-white">Negroni red</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5E8A9] text-[#0B3350]">Soft yellow</span>
        </div>
      </div>
    </section>
  )
}

export default Method
