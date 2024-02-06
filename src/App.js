// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = ()=> {
    switch (currentPage) {
      case 'about':
        return<About/>;
      case 'projects':
        return <Projects/>;        
    
      default:
        return <Home/>;
    }
  };
  return (
      <div>
        <Navbar setCurrentPage ={setCurrentPage} />
        {renderPage()}
      </div>
  );
};

export default App;
