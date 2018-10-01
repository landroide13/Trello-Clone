import React from 'react'
import Projectsumary from './ProjectSumary';

export default ({ projects }) => {
  return (
    <React.Fragment>
      <div className="project-list section">
        { projects && projects.map(project =>{
            return <Projectsumary key={project.id} project={project} />
        })}

      </div>
      
    </React.Fragment>
  )
}
