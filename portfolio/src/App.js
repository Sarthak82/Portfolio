import React from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/about" element={[<Header/>,<About/>]} />
          <Route path="/contact" element={<Header/>} />
          <Route path="/skill" element={<Header/>} />
          <Route path="/project" element={<Header/>} />
          <Route path="/education" element={[<Header/>,<Education/>]} />
          <Route path="/" element={[<Header />,<Body/>]}/>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
