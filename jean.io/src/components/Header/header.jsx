import React from 'react';
import './header.css';

import ImageHome from '../../assets/svgs/Image-Home.svg'

const Header = () => {
  return (

    <div className="media-header">
      <div className="apresentation">
        <h2 className="title-2">Olá, eu sou o Jean </h2>
        <p className="description">Desenvolvedor Web & Front end </p>
        <div className="sub-menu">
          <button className="button" onclick="location.href='https://linktr.ee/jeanat2';">Linktree</button>
          
          <div className="outlined-button">
            <a href="https://www.linkedin.com/in/jeandossantosmd/" target=" _blank" rel="noopener">LinkedIn</a>
          </div>
        </div>

      </div>
      <img src={ImageHome} alt="Imagem Home"/>
    </div>
  );

  };

export default Header;