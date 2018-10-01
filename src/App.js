import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/layouts/nav';
import Dashboard from './components/dashboard/Dashboard';
import Projectdetails from './components/projects/ProjectsDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signupt';
import CreateProject from './components/projects/CreateProject';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={Projectdetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
