"use client"
import React from 'react'
import SobreMiContainer from '../../../../components/SobreMiContainer/SobreMiContainer'
import { Righteous } from 'next/font/google'
import { useParams } from 'next/navigation';
export const righteous = Righteous({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
export default function page() {
    const params = useParams() 
  return (
    <div>
        <h2 className={`${righteous.className} text-7xl m-10 text-center`}>{params.id}</h2>
        <SobreMiContainer/>
    </div>
  )
}
