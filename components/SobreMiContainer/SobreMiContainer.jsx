import React from 'react'
import TimeLineStudies from '../TimeLineStudies/TimeLineStudies'
import TimeLineExp from '../TimeLineExp/TimeLineExp'
import SkillsContaier from '../SkillsContainer/SkillsContaier'
export default function SobreMiContainer({slug}) {
  if(slug === "Estudios"){
    return <TimeLineStudies/>

  }else if(slug === "Experiencia"){
    return <TimeLineExp/>
  }else if(slug === "Skills"){
    return <SkillsContaier/>
  }
 
}
