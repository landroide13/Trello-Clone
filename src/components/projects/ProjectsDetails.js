import React from 'react'

export default (props) => {

  const id = props.match.params.id;
  
  return (
    <React.Fragment>

      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - { id }</span>
            <p>lorem </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by NN</div>
            <div>2nd Sept</div> 
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}
