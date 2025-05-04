import React from 'react'

export default function ContactForm() {
  return (
    <form action="" className='flex flex-col justify-between items-center w-[550px] h-[430px] bg-gradient-to-b from-[#1E760A] to-[rgb(31,166,1)] rounded-2xl p-10 '>
        <input className='h-[58px] w-full bg-[#102610] rounded-xl p-3' type="text" placeholder='Nombre' />
        <input className='h-[58px] w-full bg-[#102610] rounded-xl p-3' type="text"  placeholder='Email' />
        <textarea className='h-[133px] w-full bg-[#102610] rounded-xl p-3' type="text" placeholder='Mensaje' />
        <input type="submit" className='bg-gradient-to-r from-green-500 to-violet-500 h-[50px] w-[100px] rounded-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-violet-500 hover:to-green-500 hover:shadow-2xl hover:shadow-black active:scale-100 transition ease-in-out duration-100' />
    </form>
  )
}
