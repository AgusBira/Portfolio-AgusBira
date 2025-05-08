"use cleint"
import { useEffect } from 'react';
import { skillsData } from '../../data/timelinedata'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillCard from './SkillCard'
export default function SkillsContaier() {

    useEffect(() => {
        AOS.init({})
    },[])

    return (
        <div>
            {skillsData.map(item => (
                <section key={item.id} className='flex flex-col items-center gap-15 m-10'>
                    <h3 className='text-4xl font-bold'>{item.title}</h3>
                    <div className='flex justify-center gap-10'>
                        {item.images.map((image, index) =>
                            <SkillCard data-aos="fade-down-right" key={index} info={image} width={115} height={115} alt='Icon tecnology' />
                        )}
                    </div>
                </section>
            ))}
        </div>
    )
}
