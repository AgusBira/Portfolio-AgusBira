import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className='flex gap-10 justify-center items-center h-[67px]'>
        <Link href={"/"}>Inicio</Link>
        <Link href={"/sobre-mi/Estudios"}>Sobre mi</Link>
    </nav>
  )
}
