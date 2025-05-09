"use cleint"
import { skillsData } from '../../data/timelinedata'
import SkillCard from './SkillCard'
export default function SkillsContaier() {

    return (
        <div>
            {skillsData.map(item => (
                <section key={item.id} className='flex flex-col items-center gap-15 m-10'>
                    <h3 className='text-4xl font-bold'>{item.title}</h3>
                    <div className='flex justify-center gap-10'>
                        {item.images.map((image, index) =>
                            <SkillCard key={index} info={image} width={115} height={115} alt='Icon tecnology' />
                        )}
                    </div>
                </section>
            ))}
        </div>
    )
}
