import React from 'react';
import'./projects.css';

import Project from '../Project/project';

const Projects = () => {
  return(
    <div className="projects">
      <h1 className="title-main">Projetos</h1>
      <div className="my-projects">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;