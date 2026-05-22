import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, OrbitControls, RoundedBox } from '@react-three/drei'
import { Vector3 } from 'three'

function Panel({ position, title, desc, onClick }){
  return (
    <group position={position}>
      <RoundedBox args={[3.5, 2, 0.2]} radius={0.15} smoothness={4} onClick={onClick}>
        <meshStandardMaterial color={'#071026'} metalness={0.2} roughness={0.6} />
      </RoundedBox>
      <Html center distanceFactor={6} style={{pointerEvents:'none'}} position={[0,0,0.16]}>
        <div className="w-64 p-4 card-glass rounded-lg text-left" style={{pointerEvents:'auto'}}>
          <div className="text-white font-semibold">{title}</div>
          <div className="text-sm text-gray-300 mt-1">{desc}</div>
        </div>
      </Html>
    </group>
  )
}

function CameraController({ target }){
  const { camera } = useThree()
  const refTarget = useRef(new Vector3(...target))
  useFrame((_, delta) => {
    refTarget.current.lerp(new Vector3(...target), 0.08)
    camera.position.lerp(refTarget.current, 0.06)
    camera.lookAt(0,0,0)
  })
  return null
}

export default function ThreeScene(){
  const [camTarget, setCamTarget] = useState([0,0,8])

  const panels = [
    {title:'Hero', desc:'I build AI chatbots and web apps', pos:[-7,2,0]},
    {title:'About', desc:'Solo developer focused on AI automation', pos:[-3,0, -6]},
    {title:'Services', desc:'Chatbots · Automation · Full-stack', pos:[3,0,-6]},
    {title:'Projects', desc:'AI Resume Builder, Chatbot, SaaS', pos:[7,2,0]},
    {title:'Contact', desc:'Email, LinkedIn, GitHub', pos:[0,-3, -4]}
  ]

  return (
    <div className="h-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,10,5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.2} />

        {panels.map((p,i)=> (
          <Panel key={i} position={p.pos} title={p.title} desc={p.desc} onClick={() => setCamTarget([p.pos[0], p.pos[1], p.pos[2]+6])} />
        ))}

        <mesh position={[0,-4.4,0]} rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[80,80]} />
          <meshStandardMaterial color={'#030416'} />
        </mesh>

        <CameraController target={camTarget} />
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}
