import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Link from 'next/link';
export default function ButtonComponent({props,link}) {
  const [isClient, setIsClient] = React.useState(false);

useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      AOS.init({ once: true });
    }
  }, []);
  return (
    <Link className='scroll-smooth mx-auto' href={link} scroll={true}><button className='w-52 h-12 p-[3px] rounded-xl ease-in-out bg-gradient-to-r  from-[#1AEC1A] via-[#2BC25B] to-[#49EC9B] hover:to-[#1AEC1A] hover:via-[#2BC25B] hover:from-[#49EC9B] hover:scale-110 hover:shadow-xl hover:shadow-green-600/50 transition duration-300 '><div className='bg-[#252424] w-full h-full rounded-xl flex items-center justify-center'>{props}</div></button></Link>
  )
}
