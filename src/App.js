import './App.css';
import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <main className="text-gray-300 bg-gray-900 body-font min-h-screen">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </main>
   </div>
  );
}

export default App;
