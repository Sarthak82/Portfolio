import React from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/about" element={[<Header/>,<About/>]} />
          <Route path="/contact" element={[<Header/>,<Contact/>]} />
          <Route path="/skill" element={[<Header/>,<Skill/>]} />
          <Route path="/project" element={[<Header/>,<Project/>]} />
          <Route path="/education" element={[<Header/>,<Education/>]} />
          <Route path="/" element={[<Header />,<Body/>]}/>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
