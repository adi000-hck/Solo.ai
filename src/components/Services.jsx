import React from 'react'

const services = [
  {title: 'AI Chatbot Development', desc: 'Conversational agents tailored to customer journeys.'},
  {title: 'AI Automation Workflows', desc: 'Automate repetitive business tasks using AI.'},
  {title: 'Full Stack Web App Development', desc: 'Scalable web apps with clean UX.'},
  {title: 'Business AI Integration', desc: 'Embed AI into CRMs, helpdesks, and tools.'},
  {title: 'Custom Dashboards', desc: 'Visualize AI insights and KPIs.'},
]

export default function Services(){
  return (
    <section id="services" className="py-12 fade-up">
      <h2 className="text-2xl font-bold mb-6">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s=> (
          <div key={s.title} className="card-glass p-5 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
