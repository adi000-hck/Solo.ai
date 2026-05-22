import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon to-accent flex items-center justify-center text-black font-bold">AI</div>
          <div className="text-sm">© {new Date().getFullYear()} Solo AI Dev</div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
