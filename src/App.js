import React from 'react';

import Nav from "./components/Nav"
import AboutMe from './pages/AboutMe'
import MyEducation from './pages/MyEducation'
import WorkExperience from './pages/WorkExperience'
import ContactMe from './pages/ContactMe'
import ViewCount from './pages/ViewCount'

// for question 2
import Counter from './pages/Counter'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

class App extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <Router>
        <Nav/>
        <Switch>
        
         <Route path='/my-education'>
            <MyEducation/>
          </Route>
        
          <Route path='/work-experience'>
            <WorkExperience/>
          </Route>
          
          <Route path='/contact-me'>
            <ContactMe/>
          </Route>
          
          <Route path='/counter'>
            <Counter increaseCount={this.increment}/>
          </Route>
          
          <Route path='/view-count'>
            <ViewCount count={this.state.count}/>
          </Route>
          
          <Route path='/'>
            <AboutMe/>
          </Route>
          
          
          
          </Switch>
      </Router>
    )
  }
}

export default App;
