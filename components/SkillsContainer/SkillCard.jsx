import React from 'react'
import Image from 'next/image'
export default function SkillCard({info}) {
  return (
    <section className='bg-gradient-to-b from-blue-600 to-violet-600 p-[1.5px] w-[150px] h-[200px] lg:w-[150px] lg:h-[200px] rounded-xl  transition duration-300 ease-in-out'>
      <article className='grid grid-rows-2 items-center justify-center gap-5 bg-[#252424] p-10 h-full rounded-xl'>
          <Image className='mt-2.5' src={info.url} width={110} height={110} alt={info.name}/>
          <h3 className='mt-10   w-full text-center font-bold  '>{info.name}</h3>
      </article>
    </section>
  )
}
