"use client"
import { useRef, useEffect, useState } from 'react'
import { data } from '../../data/data'
import { useParams } from 'next/navigation'
import { righteous } from '../MainContainer/MainContainer'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Line from '../Line'
export default function Proyect() {

  const { proyect } = useParams()
  const [proyecto, setProyecto] = useState([])
  useEffect(() => {
    const proyectoFiltrado = data.find((item) => item.slug === proyect)
    setProyecto(proyectoFiltrado)
  }, [])
  return (
    <section className='m-5 flex flex-col lg:flex-row justify-center items-center gap-10 text-white  min-h-screen'>
      <article>
        <h1 className={`${righteous.className} text-5xl p-5 text-center lg:text-start lg:text-6xl `}>{proyecto.name}</h1>
         <div className='flex flex-wrap justify-center lg:justify-start gap-3 m-5'>
            {Array.isArray(proyecto.tecnologies) && proyecto.tecnologies.map((item, index) => (
              <div key={index} className='bg-[#ab33d7]  opacity-85 p-2 rounded-xl  w'>
                <p >{item}</p>
              </div>
            ))}
          </div>
        <div className=' p-1 lg:max-w-[500px] text-center lg:text-start'>
          {
            Array.isArray(proyecto.longDescription) && proyecto.longDescription.map((item, index) => {
              if (item.style === "normal") {
                return (

                    <p key={index} className='text-xl my-5 opacity-80'>{item.text}</p>

                  
                )
              } else if (item.style === "subtitle") {
                return (
                  <h2 key={index} className='text-4xl font-semibold'>{item.text}</h2>
                )
              } else if (item.style === "ul") {
                return (
                  <ul className='list-disc list-inside my-5 text-xl text-start' key={index}>
                    {Array.isArray(item.text) && item?.text.map((li, index) => {
                      return (<li className='pl-5' key={index}>{li}</li>)
                    })}
                  </ul>)
              }
            })
          }
         
        </div>
            <div className='flex justify-center gap-10'>
              {proyecto.links && proyecto.links.map((link, index) => {
                if (link.name === "Github") {
                  return (
                    <a key={index} href={link.url} target="_blank" className='bg-black text-white backdrop-opacity-85 p-2 rounded-xl  flex items-center justify-center hover:scale-105 transition ease-in-out '>
                       <Image src={link.img} width={30} height={30} alt={link.name} />
                    </a>
                  )
                } else if (link.name === "Demo") {
                  return(
                    <a key={index} href={link.url} target='_blank' className='bg-gradient-to-r from-violet-600 via-blue-500 to-green-500 text-white backdrop-opacity-85 p-[1.5px] rounded-xl  w-[200px] h-[50px] flex items-center justify-center hover:scale-105 hover:text-green-400 transition ease-in-out '><div className='flex bg-[#252424] w-full h-full rounded-xl justify-center items-center'>{proyecto.name} <Image src={link.img} width={30} height={30} alt={link.name}/></div> </a>
                  )
                }
                return null;
              })}
            </div>
      </article>

          <article className='text-black'>
            {proyecto.images ? (<Carousel
          className="w-full max-w-2xl" 
          
        >
          <CarouselContent>
            {Array.isArray(proyecto.images) && proyecto.images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={img}
                    width={1200}  
                    height={800}  
                    className=" object-cover w-full h-[400px]" 
                    alt={`Imagen ${index + 1} del proyecto`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-12 w-6" />  
          <CarouselNext className="h-12 w-6" />     
        </Carousel>) : ""}
        

      </article>
    
    
    </section>
  )
}
