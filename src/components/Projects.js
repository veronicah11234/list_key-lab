import React from 'react';
import './projects.css'; // Import your custom CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <h1>Reciplease</h1>
        <h2>A recipe tracking app</h2>
        <button>Rails</button>
        <button>Bootstrap CSS</button>
      </div>

      <div className="project">
        <h1>Kibbles N Bitz</h1>
        <h2>Tinder for dogs</h2>
        <button>React</button>
        <button>Redux</button>
      </div>

      <div className="project">
        <h1>Alienwares</h1>
        <h2>Etsy for aliens</h2>
        <button>React</button>
        <button>Redux</button><br/>
        <button>Rails</button>
      </div>
    </div>
  );
}

export default Projects;
