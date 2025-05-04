"use client"
import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function ProyectCard({name , description , img}) {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <section data-aos="fade-left" className='flex gap-10'>
        <div className='flex flex-col gap-10'>
            <h3 className='text-[#5CFD38] font-bold text-3xl'>{name}</h3>
            <p className='w-[416px] text-2xl'>{description}</p>
        </div>
        <Image  src={img} width={432} height={265} alt='Imagen del Proyecto' />
    </section>
  )
}
