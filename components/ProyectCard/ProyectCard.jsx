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
    <section data-aos="fade-left" className='flex gap-10'>
        <div className='flex flex-col gap-10'>
            <h3 className='text-violet-300 font-bold text-3xl'>{name}</h3>
            <p className='w-[416px] text-xl opacity-80'>{description}</p>
            <div className='w-full flex justify-center'>
              <VerMas slug={`/${slug}`}/>
            </div>
        </div>
        <Image  src={img} width={432} height={265} alt='Imagen del Proyecto' />
        
    </section>
  )
}
