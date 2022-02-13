import React from 'react';
import'./projects.scss';

import JavaScript from '../../assets/img/javascript.png';

const Projects = () => {
  return(
    <div class="projects">
      <h1 class="title-main">Projetos</h1>
      <div class="my-projects">
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
        <figure class="project">
          <img src={JavaScript} alt=""/>
          <figcaption class="figCaption-2">Titulo do Projeto</figcaption>
          <label class="small-text-2">Tecnologias: HTML, CSS e JS.</label>
        </figure>
      </div>
    </div>
  );
}

export default Projects;