import React, { Component } from 'react';
import Notifications from './Notifications';
import Projectlist from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {


  render() {
    // console.log(this.props);
    const { projects } = this.props;

    return (
      <React.Fragment>

        <div className="container dashboard">
          <div className="row">
            <div className="col s12 m6">
              <Projectlist projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
            
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    projects: state.project.projects
  }
}


export default connect(mapStateToProps)(Dashboard);
