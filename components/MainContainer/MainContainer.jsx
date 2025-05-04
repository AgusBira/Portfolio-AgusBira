"use client"
import DisponibleParaTrabajar from './DisponibleParaTrabajar'
import ButtonComponent from '../ButtonComponent'
import Line from "../line"
import { Righteous } from 'next/font/google';
import Image from 'next/image';
import { data } from '../../data/data';
import ProyectCard from '../ProyectCard/ProyectCard';
import { useEffect,useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import ContactForm from '../ContactForm.jsx/ContactForm';

export const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function MainContainer() {
  const [text] = useTypewriter({
    words: ["Agustin Birarelli"],
    typeSpeed: 20,
  })

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <section className='flex flex-col items-center gap-10 m-10'>
      <div>
        <div className='flex gap-5 items-center'>
          <h3 className='text-3xl opacity-50'>{text}<Cursor/></h3>
          
          <DisponibleParaTrabajar />
        </div>

         <h1 data-aos="fade-up" className={`text-8xl flex flex-col gap-4 ${righteous.className}`}>Front End <span className='block'>Developer</span> </h1> 

      </div>
      <ButtonComponent props={"Proyectos"} />
      <Line />
      <section className='flex justify-center items-center gap-10'>
        <Image data-aos="flip-left" src={"/images/fotoagusbira.png"} width={419} height={431} alt='Linea de separacion' />
        <div className='flex flex-col items-center gap-5'>
          <h3 className='text-4xl font-bold'>Hola!! 👋</h3>
          <p className='w-[552px] text-3xl'> Soy apasionado por la creación de experiencias web modernas, accesibles y bien diseñadas. Me encanta combinar diseño y código para construir interfaces limpias, funcionales y centradas en el usuario. Estoy buscando oportunidades como desarrollador front-end en proyectos accesibles e inclusivos</p>
          <ButtonComponent props={"Contacto"}/>
        </div>
      </section>    
      <Line/>
      <h2 className={`${righteous.className} text-4xl`}>Proyectos</h2>
      {data.map((proy, index) => <ProyectCard key={index} name={proy.name} description={proy.description} img={proy.img}/>)}
      <Line/>
      <h2 className={`${righteous.className} text-4xl`}>Contacto</h2>
      <section className='flex'>
        <article className='flex flex-col gap-10 w-[398px]'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-[#5CFD38] font-bold text-3xl'>Dejame un mensaje!</h2>
            <p>Si queres comunicarte conmigo te invito a que me envies un mensaje asi charlamos</p>
          </div>
          <div className='flex items-center gap-5'>
            <Image src={"/images/iconotelefono1.png"} width={52} height={52} alt='icono de contacto'/>
            <a href="">+54 1122608199</a>
          </div>
          <div className='flex items-center gap-5'>
            <Image src={"/images/iconomail.png"} width={52} height={52} alt='icono de contacto'/>
            <a href="">agusbira398@gmail.com</a>
          </div>
          </article>
          <ContactForm/>
      </section>
      </section>
  )
}
