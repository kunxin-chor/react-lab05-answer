import React from 'react';

import Nav from "./components/Nav"
import AboutMe from './pages/AboutMe'
import MyEducation from './pages/MyEducation'
import WorkExperience from './pages/WorkExperience'
import ContactMe from './pages/ContactMe'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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
        
        <Route path='/'>
          <AboutMe/>
        </Route>
        
        
      
      </Switch>
    </Router>
  )
}

export default App;
