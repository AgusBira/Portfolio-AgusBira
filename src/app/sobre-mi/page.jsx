import { Righteous } from 'next/font/google'
import React from 'react'
import SobreMiContainer from '../../../components/SobreMiContainer/SobreMiContainer';
export const righteous = Righteous({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
export default function SobreMi() {
  return (
    <>
    <h2 className={`${righteous.className} text-7xl m-10 text-center`}>Estudios</h2>
    <SobreMiContainer/>
    <h2>Experiencia</h2>
    </>
  )
}
