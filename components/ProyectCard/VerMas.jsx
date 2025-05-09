import React from 'react'
import Link from 'next/link'
export default function VerMas({slug}) {
  return (
    <Link className='w-52 h-12 p-[3px] rounded-xl ease-in-out bg-gradient-to-r  from-[#1AEC1A]  to-[#a412ed]  hover:from-[#1AEC1A] hover:to-[#a412ed] hover:scale-110 hover:shadow-xl hover:shadow-violet-600/50 transition duration-300 'href={slug}><div className='bg-[#252424] w-full h-full rounded-xl flex items-center justify-center'>Ver mas</div></Link>
  )
}
