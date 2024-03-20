import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Nav from './components/Nav';
import About from './pages/About';
import Experience from './pages/Experience';
import LandingPage from './pages/LandingPage';
import Skills from './pages/Skills';
import React from 'react'
import { useState } from 'react';

function App() {
  
  const [currentPage, setCurrentPage] = useState('landing')
  
  const goToPage = (page) => {
    setCurrentPage(page)
};
  
  const Gradient = () => {
    return(
        <div id="gradient"></div>
    )
  }

  
  return (
    <div className="App">
      <Nav/>
      <LandingPage/>
      <Gradient/>
      <About/>
      <Skills/>
      <Experience/>
      <Logo/>
      <Footer/>
    </div>
  );
}

export default App;
