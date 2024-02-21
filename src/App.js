import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Career from './Career';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element ={<Home/>}/>
           <Route path="/About" element ={<About/>}/>
           <Route path="/Services" element ={<Services/>}/>
           <Route path="/Career" element ={<Career/>}/>
           <Route path="/Contact" element ={<Contact/>}/>
        </Routes>
      </Router>
   
  
  
    <Footer/>  
    </div>
    
  );
}

export default App;
