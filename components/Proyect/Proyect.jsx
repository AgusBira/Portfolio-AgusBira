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
console.log(proyecto.longDescription)
  return (
    <section className='m-5  min-h-screen'>
      <h1 className={`${righteous.className} text-6xl `}>{proyecto.name}</h1>
      <div className='m-10 lg:max-w-[650px]'>
        {
         Array.isArray(proyecto.longDescription) && proyecto.longDescription.map((item,index) =>{
          console.log(item)
            if(item.style === "normal"){
              return(
                <p key={index} className='text-2xl my-5'>{item.text}</p>
              )
            }else if(item.style === "subtitle"){
              return(
                <h2 key={index} className='text-4xl'>{item.text}</h2>
              )
            }else if(item.style === "ul"){
              return(
                <ul className='list-disc list-inside my-5 text-xl' key={index}>
                  { Array.isArray(item.text) && item?.text.map((li,index) =>{
                    return(<li key={index}>{li}</li>)
                  })}
                </ul>)
              }
          })
        }
        <div className='flex gap-3'>
        {Array.isArray(proyecto.tecnologies) && proyecto.tecnologies.map((item,index) => (
            <div key={index} className='bg-green-800 backdrop-opacity-85 p-2 rounded-xl  w'>
              <p >{item}</p>
            </div>
        ))}
      </div>
      </div>
      
    </section>
  )
}
