import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('visible')
      })
    },{threshold:0.15})
    document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el))
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03040a] via-[#06060f] to-[#040718] text-gray-100">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
