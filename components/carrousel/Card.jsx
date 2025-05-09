import Image from 'next/image'
import {  motion } from "framer-motion"
export default function Card({image}) {
  return (
    <motion.div className='relative overflow-hidden h-[100px] min-w-[100px] flex justify-center items-center'
    >
      <Image src={image} width={110} height={110} style={{objectFit:"cover"}} alt={image}/>
        
    </motion.div>
  )
}
