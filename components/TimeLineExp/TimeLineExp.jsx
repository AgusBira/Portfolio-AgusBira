"use client"
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Importación CORRECTA de estilos
import { timelineExp } from '../../data/timelinedata';
import Image from 'next/image';


export default function TimeLineStudies() {
  return (
    <section>
      <VerticalTimeline>
        {timelineExp.map((item) =>{
          const icon = item.icon === "sound" ? 
          <Image 
          src={"/images/auriculares-redondos.svg"}
          width={30}
          height={30}
          alt='Icono'
          /> : 
          <Image 
          src={"/images/destello.svg"}
          width={30}
          height={30}
          alt='Icono'
          />
          return(
          
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--education"
                date={item.date}
                dateClassName='date'
                contentStyle={{
                  background:"#252424",
                  color: '#fff',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
                contentArrowStyle={
                  {
                      borderRight:" 7px solid #252424",
                      
                  }
                }
                iconStyle={{
                  background: '#7F22FE',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                icon={item.icon === "code" ?  (<Image src={"/images/codigo.svg"} width={30} height={30} alt='icono' />) : icon }
              >
                <h3 className="text-3xl">{item.title}</h3>
                <h4 className='vertical-timeline-element-subtitle'>{item.location}</h4>
                <p id='description'>{item.description}</p>
                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {item.tecno && item.tecno.map((tecno, index) => (
                  <div key={index} className="bg-gradient-to-b from-blue-600 to-violet-600 p-[2px] rounded-xl">
                    <div className='bg-[#252424] p-2 rounded-xl'>
                      <span>{tecno}</span>
                    </div>
                  </div>
                ))}
              </div>
              </VerticalTimelineElement>
            )
        } )}
         <VerticalTimelineElement
          iconStyle={{
            background: '#7F22FE',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          icon={
            <Image 
              src={"/images/cohete.svg"} // Puedes usar cualquier icono que prefieras
              width={30}
              height={30}
              alt='Fin de la línea de tiempo'
            />
          }
          contentStyle={{
            background: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          contentArrowStyle={{ display: 'none' }}
        >
          <div className="text-center py-4">
            <h3 className="text-xl font-bold text-gray-800">¡Continuará!</h3>
            <p className="text-#fff">Más aprendizajes por venir</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </section>
    
  );
}