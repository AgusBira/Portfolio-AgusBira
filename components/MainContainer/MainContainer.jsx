"use client"
import DisponibleParaTrabajar from './DisponibleParaTrabajar'
import ButtonComponent from '../ButtonComponent'
import Line from "../Line"
import { Righteous } from 'next/font/google';
import Image from 'next/image';
import { data } from '../../data/data';
import ProyectCard from '../ProyectCard/ProyectCard';
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import ContactForm from '../ContactForm.jsx/ContactForm';
import Carrousel from '../carrousel/Carrousel';

export const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function MainContainer() {

  const [isClient, setIsClient] = useState(false);
  const [text] = useTypewriter({
    words: ["Agustin\nBirarelli", "Front End\ndeveloper"], // Usa \n para separar líneas
    typeSpeed: 20,
    loop: true
  })



  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      AOS.init({ once: true });
    }
  }, []);

  if (!isClient) {
    return (

      <section className='flex flex-col items-center gap-10 m-10 w-[1280px] min-h-screen'>
        Cargando...
      </section>
    );
  }
  return (
  <section className="flex flex-col items-center gap-10 m-10 w-full max-w-[1280px] overflow-x-hidden text-white">
    <div>
        <div className='flex justify-center gap-5 items-center'>
          <h3 className='text-3xl opacity-50'>I'am</h3>
          <DisponibleParaTrabajar />
        </div>

        <h1 className={` flex flex-col gap-4 text-6xl  text-center h-[120px] w-screen lg:text-8xl lg:h-[200px] ${righteous.className}`}>
          <div className='flex flex-col'>
            {text.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === text.split('\n').length - 1 && <Cursor />}
              </span>
            ))}
          </div>
        </h1>
      </div>
      <ButtonComponent props={"Proyectos"} link={"#proyectos"} />
      <Carrousel/>
      <Line />
      <section className='flex flex-col lg:flex-row justify-center gap-15 items-center '>
        <Image  data-aos="flip-left" src={"/images/fotoagusbira.png"} width={window.innerWidth < 640  ? 300 : 419} height={431} alt='Linea de separacion' />
        <div className='flex flex-col  gap-5'>
          <h3 className='text-4xl font-bold text-center lg:text-start'>Hola!! 👋</h3>
          <p className=' w-[350px] text-center text-xl opacity-80 lg:text-start lg:w-[552px]'> Soy apasionado por la creación de experiencias web modernas, accesibles y bien diseñadas. Me encanta combinar diseño y código para construir interfaces limpias, funcionales y centradas en el usuario. Estoy buscando oportunidades como desarrollador front-end en proyectos accesibles e inclusivos</p>
          <ButtonComponent props={"Contacto"} link={"#contacto"}/>
        </div>
      </section>    
      <Line/>
      <section className='flex flex-col items-center gap-10'>
        <h2 className={`${righteous.className} text-4xl`} id='proyectos'>Proyectos</h2>
        {data.map((proy, index) => <ProyectCard key={index} name={proy.name} description={proy.description} img={proy.img} slug={proy.slug}/>)}
      </section>
      <Line/>
      <h2 className={`${righteous.className} text-4xl`}>Contacto</h2>
      <section className='flex flex-col items-center lg:flex-row' id='contacto'>
        <article className='flex flex-col gap-10 p-10 w-[398px]'>
          <div className='flex flex-col gap-3'>
            <h2 className=' font-bold text-3xl '>Dejame un <span className='font-semibold text-violet-400'>mensaje!</span></h2>
            <p>Si queres comunicarte conmigo te invito a que me envies un mensaje asi charlamos</p>
          </div>
          <div className='flex items-center gap-5'>
            <Image  src={"/images/iconotelefono1.png"} width={52} height={52} alt='icono de contacto'/>
            <a href="https://api.whatsapp.com/send?phone=541122608199">+54 1122608199</a>
          </div>
          <div className='flex items-center gap-5'>
            <Image src={"/images/iconomail.png"} width={52} height={52} alt='icono de contacto'/>
            <a href="">agusbira398@gmail.com</a>
          </div>
          </article>
          <ContactForm />
      </section>
      </section>
  )
}
