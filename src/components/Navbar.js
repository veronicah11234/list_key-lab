import React from 'react';
import './navbar.css';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li onClick={() => setCurrentPage('home')}>
          <a href='./Home.js'>Home</a>
        </li><br/><br/>
        <li onClick={() => setCurrentPage('about')}>
          <a href='./About.js'>About</a>
        </li><br/>
        <li onClick={() => setCurrentPage('projects')}>
          <a href='./Projects.js'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
