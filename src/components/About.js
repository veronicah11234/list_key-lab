// About.js
import React from 'react';
import './About.css'; // Import your custom CSS file for styling

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>I made this!</p>
      <a href="https://www.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_10798281.htm#query=programming&position=12&from_view=search&track=sph&uuid=5d24a565-e27e-4d7b-b6fa-8163b5528825">Image by upklyak</a> on Freepik      <h4>Links</h4>
      <a
        href="https://github.com/liza"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/liza
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/liza/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.linkedin.com/in/liza/
      </a>
    </div>
  );
};

export default About;
