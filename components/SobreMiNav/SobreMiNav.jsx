import React from 'react'
import Link from 'next/link'
export default function () {
  return (
    <nav className='flex gap-15 justify-center bg-transparent'>
        <Link href={"/sobre-mi/estudios"}>Estudios</Link>
        <Link href={"/sobre-mi/experiencia"}>Experiencia</Link>
        <Link href={"/sobre-mi/skills"}>Skills</Link>
    </nav>
  )
}
