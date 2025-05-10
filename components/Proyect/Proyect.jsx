"use client"
import { use, useEffect,useState } from 'react'
import { data } from '../../data/data'
import { useParams } from 'next/navigation'
import { righteous } from '../MainContainer/MainContainer'
export default function Proyect() {
  const { proyect } = useParams()
  const [proyecto , setProyecto]  = useState([])
  useEffect(() =>{
    const proyectoFiltrado = data.find((item) => item.slug === proyect)
    setProyecto(proyectoFiltrado)
  }, [])
console.log(proyecto)
  return (
    <section className='m-5  min-h-screen'>
      <h1 className={`${righteous.className} text-6xl `}>{proyecto.name}</h1>
      <p>{proyect.longDescription}</p>
      <div className='flex gap-3'>
        {Array.isArray(proyecto.tecnologies) && proyecto.tecnologies.map((item,index) => (
            <div key={index} className='bg-green-800 backdrop-opacity-85 p-2 rounded-xl  w'>
              <p >{item}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
