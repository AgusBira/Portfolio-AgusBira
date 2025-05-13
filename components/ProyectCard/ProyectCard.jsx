"use client"
import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import VerMas from './VerMas';
export default function ProyectCard({name , description , img,slug}) {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <section data-aos="fade-left" className='flex  flex-col-reverse  items-center lg:flex-row gap-10'>
        <div className='flex flex-col items-center gap-10'>
            <h3 className='text-center text-violet-300 font-bold text-3xl lg:text-start'>{name}</h3>
            <p className='w-[300px]  text-center lg:text-start lg:w-[416px] text-xl opacity-80'>{description}</p>
            <div className='w-full flex justify-center'>
              <VerMas slug={`/${slug}`}/>
            </div>
        </div>
        <Image  src={img} width={400} height={265} alt='Imagen del Proyecto' />
        
    </section>
  )
}
