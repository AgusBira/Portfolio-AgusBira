"use client"
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Importación CORRECTA de estilos
import { timelineEstudios } from '../../data/timelinedata';
import Image from 'next/image';


export default function TimeLineStudies() {
  return (
    <VerticalTimeline>
      {timelineEstudios.map((item) =>{
        const icon = item.icon === "sound" ? 
        <Image 
        src={"/images/auriculares-redondos.svg"}
        width={40}
        height={40}
        alt='Icono'
        /> : 
        <Image 
        src={"/images/destello.svg"}
        width={40}
        height={40}
        alt='Icono'
        />
        return(
        
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--education"
              date={item.date}
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
                background: '#5CFD38',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              icon={item.icon === "code" ?  (<Image src={"/images/codigo.svg"} width={40} height={40} alt='icono' />) : icon }
            >
              <h3 className="text-3xl">{item.title}</h3>
              <h4 className='vertical-timeline-element-subtitle'>{item.location}</h4>
              <p id='description'>{item.description}</p>
            </VerticalTimelineElement>
          )
      } )}
    </VerticalTimeline>
  );
}