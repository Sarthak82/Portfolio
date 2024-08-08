import React from 'react'
import "./Project.css"
import ProjectData from '../Data Objects/ProjectData'

function Project() {
    return (
      <div className='projects'>
        <h1>Projects</h1>
        {ProjectData.map((project, index) => (
          <div className='project' key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
            <p><strong>Your Role and Contributions:</strong> {project.role}</p>
            <p><strong>Key Features or Outcomes:</strong></p>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className='visitLink'><strong><a href={project.visitLink} target='_blank' rel="noreferrer">VisitLink</a></strong></p>
          </div>

        ))}
      </div>
    )
  }

export default Project