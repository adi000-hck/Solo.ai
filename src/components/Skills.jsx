import React from 'react'

const skills = ['JavaScript','React','Node.js','APIs','OpenAI Integration','HTML/CSS','GitHub','Figma']

export default function Skills(){
  return (
    <section id="skills" className="py-12 fade-up">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s=> (
          <div key={s} className="px-4 py-2 bg-[#071026] rounded-full border border-gray-700 text-sm">{s}</div>
        ))}
      </div>
    </section>
  )
}
