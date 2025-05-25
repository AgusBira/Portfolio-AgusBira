"use client"
import DisponibleParaTrabajar from './DisponibleParaTrabajar'
import ButtonComponent from '../ButtonComponent'
import Line from "../Line"
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import { data } from '../../data/data';
import ProyectCard from '../ProyectCard/ProyectCard';
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Carrousel from '../carrousel/Carrousel';

export const open_Sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function MainContainer() {

  const [isClient, setIsClient] = useState(false);
  const [text] = useTypewriter({
    words: ["Agustin\nBirarelli", "Front End\nDeveloper"], // Usa \n para separar líneas
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
  <section className="flex flex-col items-center gap-10 m-10 w-full max-w-screen overflow-x-hidden text-white">
    <div className='h-[500px] flex flex-col gap-10'>
        <div className='flex justify-center gap-3 items-center'>
         
          <DisponibleParaTrabajar />
        </div>
        {window.innerWidth < 640 ? ( <h1 className={` flex flex-col gap-3 text-6xl items-center h-[200px] w-screen `}>
          <div className='flex flex-col items-center'>
            {text.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === text.split('\n').length - 1 && <Cursor />}
              </span>
            ))}
            
          </div>

        </h1>) :   <h1 className={` flex flex-col justify-center items-center gap-10 text-6xl  text-center h-[200px] w-screen lg:text-8xl lg:h-[200px] `}>
          <div className='flex justify-center font-semibold '>
             
            {text}<Cursor/>
          </div>

        </h1>}
        <p className='text-xl text-center opacity-80 italic'>Creando experiencias web fluidas y atractivas</p>
        <ButtonComponent props={"Proyectos"} link={"#proyectos"} />
      </div>
      
      <Carrousel/>
      <Line/>
      <section className='flex flex-col lg:flex-row justify-center gap-20 items-center m-10 '>
        <Image  data-aos="flip-left" src={"/images/fotoagusbira.png"} width={window.innerWidth < 640  ? 300 : 419} height={431} alt='Linea de separacion' />
        <div className='flex flex-col  gap-10'>
          <p className=' w-[300px]  text-xl opacity-80 text-center lg:w-[400px]'> Soy apasionado por la creación de experiencias web modernas, accesibles y bien diseñadas. Me encanta combinar diseño y código para construir interfaces limpias, funcionales y centradas en el usuario. Estoy buscando oportunidades como desarrollador front-end en proyectos accesibles e inclusivos</p>
          <ButtonComponent props={"Contacto"} link={"#contacto"}/>
        </div>
      </section>    
      <Line/>
      <section className='flex flex-col items-center gap-10'>
        <h2 className={`text-4xl`} id='proyectos'>Proyectos</h2>
        {data.map((proy, index) => {
          const demoLink = proy.links.find(link => link.name === "Demo")?.url;
          return (
            <ProyectCard
              key={index}
              link={demoLink}
              name={proy.name}
              description={proy.description}
              img={proy.img}
              slug={proy.slug}
            />
          );
        })}
      </section>
      <Line/>
      <h2 className={` text-4xl`}>Contacto</h2>
      <section className='flex flex-col items-center lg:flex-row' id='contacto'>
        <article className='flex flex-col gap-10 p-10 '>
          <div className='flex flex-col gap-3'>
            <h2 className=' font-bold text-4xl '>Dejame un <span className='font-semibold text-violet-400'>mensaje!</span></h2>
            <p>Si queres comunicarte conmigo te invito a que me envies un mensaje asi charlamos</p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=541122608199" target="_blank" className='flex items-center gap-5 p-5 rounded-xl bg-[#252424] hover:shadow-xl hover:shadow-violet-500 transition ease-in-out '>
            <Image  src={"/images/iconotelefono1.png"} width={52} height={52} alt='icono de contacto'/>
            <p className='font-bold text-2xl'>Whatsapp</p>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agusbira398@gmail.com" target='_blank' className='flex items-center gap-5 p-5 rounded-xl bg-[#252424] hover:shadow-xl hover:shadow-violet-500 transition ease-in-out'>
            <Image src={"/images/iconomail.png"} width={52} height={52} alt='icono de contacto'/>
            <p className='font-bold text-2xl'>Email</p>
          </a>
          </article>
      </section>
      </section>
  )
}
