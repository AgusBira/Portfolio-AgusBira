import React from 'react'
import Link from 'next/link'
export default function () {
  return (
    <nav className='flex gap-15 justify-center bg-transparent'>
        <Link href={"/sobre-mi/Estudios"}>Estudios</Link>
        <Link href={"/sobre-mi/Experiencia"}>Experiencia</Link>
        <Link href={"/sobre-mi/Skills"}>Skills</Link>
    </nav>
  )
}
