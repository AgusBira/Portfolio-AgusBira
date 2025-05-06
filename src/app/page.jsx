import Image from "next/image";
import MainContainer from "../../components/MainContainer/MainContainer";
import {Roboto} from "next/font/google"
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
export default function Inicio() {
  return (
    <>
      <section className={`flex justify-center ${roboto.variable}`} >
        <MainContainer/>
      </section >
    </>
  )
}
