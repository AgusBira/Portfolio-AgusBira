"use client"
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
export default function NavBar() {
const [selected, setSelected] = React.useState("/")
const params = useParams()

  // console.log(selected)
  // console.log(params
console.log(params)
  return (

    
    <nav className='flex gap-10 justify-center items-center h-[67px] '>
        <Link  href={"/"}>Inicio</Link>
        <Link  href={"/sobre-mi/Estudios"}>Sobre mi</Link>
    </nav>
  )
}
