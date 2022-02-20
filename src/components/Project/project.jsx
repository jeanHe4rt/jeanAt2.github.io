import React from "react";
import './project.css';

import JavaScript from '../../assets/img/javascript.png';

const Project = () => {
  const title = "Titulo do Projeto";
  const listTechs = "HTML, CSS e JS.";

  return( 
    <div className="projects">
      <figure className="project">
          <img src={JavaScript} alt=""/>
          <figcaption className="figCaption-2">${title}</figcaption>
          <label className="small-text-2">Tecnologias: ${listTechs} </label>
        </figure>
    </div>
  );
}

export default Project;