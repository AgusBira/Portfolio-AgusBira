import React from 'react'

export default function ContactForm() {
  return (
    <form action="" className='text-white flex flex-col justify-between items-center w-[550px] h-[430px] bg-violet-600 p-10 border-2 border-[#252424] hover:shadow-2xl transition ease-in-out' >
        <input className='h-[58px] w-full bg-transparent border-b-1 p-1  focus:outline-none text-xl ' type="text" placeholder='Nombre' />
        <input className='h-[58px] w-full bg-transparent border-b-1 p-1  focus:outline-none text-xl' type="text"  placeholder='Email' />
        <textarea className='h-[133px] w-full bg-transparent border-b focus:outline-none text-xl p-3' type="text" placeholder='Mensaje' />
        <button className='bg-gradient-to-r from-violet-400 to-violet-800  p-0.5 w-[100px] h-[50px] rounded-3xl '><div className='w-full h-full bg-[#252424] flex items-center justify-center rounded-3xl'>Enviar</div></button>
    </form>
  )
}
