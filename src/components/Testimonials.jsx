import React from 'react'

const testimonials = [
  {name:'Acme Corp', quote:'AI chatbot improved lead conversion and saved time.'},
  {name:'Bright Studio', quote:'Automations reduced manual tasks by 40%.'}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-12 fade-up">
      <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map(t=> (
          <div key={t.name} className="card-glass p-6 rounded-xl">
            <p className="text-gray-300 mb-4">“{t.quote}”</p>
            <div className="text-sm font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
