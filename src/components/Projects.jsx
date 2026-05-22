import React from 'react'
import resumeImg from '../assets/resume.jpg'
import chatbotImg from '../assets/chatbot.jpg'
import contentImg from '../assets/content.jpg'
import studyImg from '../assets/study.jpg'
import saasImg from '../assets/saas.jpg'

const projects = [
  {title:'AI Resume Builder', desc:'Create tailored resumes with AI.', id:'resume', img: resumeImg},
  {title:'AI Business Chatbot', desc:'Customer-facing business chatbot.', id:'chatbot', img: chatbotImg},
  {title:'AI Content Generator', desc:'Generate marketing content at scale.', id:'content', img: contentImg},
  {title:'AI Study Assistant', desc:'Personalized tutoring and notes.', id:'study', img: studyImg},
  {title:'SaaS Dashboard', desc:'Analytics dashboard for SaaS products.', id:'saas', img: saasImg}
]

export default function Projects(){
  return (
    <section id="projects" className="py-12 fade-up">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p=> (
          <div key={p.id} className="card-glass p-4 rounded-xl shadow-lg flex flex-col">
            <img src={p.img} alt={p.title} className="h-36 w-full object-cover rounded-md mb-4" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-300 flex-1">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="px-3 py-2 bg-neon text-black rounded">Live Demo</a>
              <a href="#" className="px-3 py-2 border border-gray-700 rounded">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
