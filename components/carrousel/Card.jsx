import Image from 'next/image'
import {  motion } from "framer-motion"
export default function Card({image}) {
  return (
    <motion.div className='relative overflow-hidden h-[50px] min-w-[50px] flex justify-center items-center'
    >
      <Image src={image} width={50} height={50} style={{objectFit:"cover"}} alt={image}/>
        
    </motion.div>
  )
}
