import React from 'react';
import '../src/css/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Home from './pages/home';
import Projects from './pages/projects.jsx';
import Aboutme from './pages/aboutme.jsx';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<Aboutme/>}/>
        </Routes>
      </Router>

  );
}

export default App;
