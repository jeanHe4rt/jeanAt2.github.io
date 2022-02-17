import React from 'react';
import './header.css';

import ImageHome from '../../assets/svgs/Image-Home.svg'

const Header = () => {
  return (

    <div class="media-header">
      <div class="apresentation">
        <h2 class="title-2">Olá, eu sou o Jean </h2>
        <p class="description">Desenvolvedor Web & Front end </p>
        <div class="sub-menu">
          <button class="button" onclick="location.href='https://linktr.ee/jeanat2';">Linktree</button>
          
          <div class="outlined-button">
            <a href="https://www.linkedin.com/in/jeandossantosmd/" target=" _blank" rel="noopener">LinkedIn</a>
          </div>
        </div>

      </div>
      <img src={ImageHome} alt="Imagem Home"/>
    </div>
  );

  };

export default Header;