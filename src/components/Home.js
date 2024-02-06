// Home.js
import React from 'react';
import About from './About';
import './Home.css'
import Projects from './Projects';

const Home = () => {
  return (
    <div>
       <div className="homeContent">
       <h1>Liza is a Web Developer from New York</h1>
       
    </div>
    <About/>
    <Projects/>


    </div>
   
    
  );
};

export default Home;



