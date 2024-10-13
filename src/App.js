import React from 'react';
import '../src/css/App.css';
import '../src/css/home.css';
import '../src/css/aboutme.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Home from './pages/home';
import Projects from './pages/projects.jsx';
import Aboutme from './pages/aboutme.jsx';


const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<Aboutme/>}/>
          <Route path='*' element={<h1>Not found!</h1>}/>
        </Routes>
      </Router>

  );
}

export default App;
