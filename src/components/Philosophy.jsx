import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { k: 'Rooted', d: 'We honor origins — surf zines, DIY, and minimal forms.' },
  { k: 'Flow', d: 'Movement over noise. Rhythm over clutter.' },
  { k: 'Bold', d: 'High contrast, decisive typography, and confident color.' },
  { k: 'Proof', d: 'We show, not tell. Shipping is the sermon.' },
]

function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#071C2E] via-[#051723] to-[#04121B] text-[#D8F0FF]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,rgba(16,152,255,0.6),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-soft-light bg-[linear-gradient(160deg,rgba(255,107,95,0.08),transparent_40%),linear-gradient(-160deg,rgba(13,43,69,0.5),transparent_30%)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-[#C5E8FF]/90 mt-3">Animated values that move like tide and wind.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.div>
              <h3 className="mt-4 text-xl font-bold text-white">{s.k}</h3>
              <p className="mt-2 text-[#C5E8FF]/90">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <a href="#" className="px-5 py-3 rounded-full bg-[#FF6B5F]/90 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition">Join the cult</a>
          <span className="text-[#C5E8FF]/70">or keep drifting</span>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
