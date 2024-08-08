import React from 'react'
import './Skill.css'
import SkillData from '../Data Objects/SkillData'

function Skill(){
    return(
        <div className='skill'>
            <div className='skill__title'>
                <h1> My Skills </h1>
            </div>
            <div className='skill__container'>
                {SkillData.map((skill, index) => (
                    <div className='skill-item' key={index}>
                        <img src={skill.logo} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill