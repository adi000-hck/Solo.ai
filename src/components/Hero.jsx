import React from 'react'
import ThreeScene from './ThreeScene'

export default function Hero(){
  return (
    <section className="pt-28 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">I Build AI Chatbots & Web Apps That Help Businesses Grow</h1>
          <p className="text-lg text-gray-300 mb-6">Custom AI solutions, automation systems, and scalable web applications for modern businesses.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="px-5 py-3 bg-neon text-black rounded-lg font-semibold hover:scale-105 transition-transform">View Projects</a>
            <a href="#contact" className="px-5 py-3 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition">Contact Me</a>
          </div>
        </div>
        <div className="relative">
          <div className="card-glass p-3 rounded-3xl shadow-xl glow-accent overflow-hidden h-[420px]">
            <div className="absolute top-4 left-4 z-10 bg-[#060a14]/80 px-4 py-2 rounded-2xl border border-white/10 text-sm text-gray-200">AI 3D Hero Scene</div>
            <ThreeScene />
          </div>
          <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-gradient-to-tr from-neon to-accent opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
