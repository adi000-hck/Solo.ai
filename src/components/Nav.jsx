import React from 'react'

export default function Nav(){
  return (
    <header className="fixed w-full z-40 top-0 left-0">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon to-accent shadow-lg flex items-center justify-center text-black font-bold">AI</div>
          <span className="font-semibold">Solo AI Dev</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>
  )
}
