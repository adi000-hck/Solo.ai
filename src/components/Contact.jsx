import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12 fade-up">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-glass p-6 rounded-xl">
          <form action="mailto:hello@example.com" method="post" encType="text/plain">
            <label className="block text-sm mb-1">Email</label>
            <input name="email" className="w-full p-3 mb-3 rounded bg-[#051022] border border-gray-700" />
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" className="w-full p-3 mb-3 rounded bg-[#051022] border border-gray-700" rows="4"></textarea>
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-neon text-black rounded">Send</button>
              <a href="https://linkedin.com" className="px-4 py-2 border border-gray-700 rounded">LinkedIn</a>
              <a href="https://github.com" className="px-4 py-2 border border-gray-700 rounded">GitHub</a>
              <a href="https://wa.me/" className="px-4 py-2 border border-gray-700 rounded">WhatsApp</a>
            </div>
          </form>
        </div>
        <div className="card-glass p-6 rounded-xl flex items-center justify-center">
          <div className="text-gray-300 text-center">Prefer DMs? Reach out on LinkedIn or GitHub, or use the form to email me directly.</div>
        </div>
      </div>
    </section>
  )
}
