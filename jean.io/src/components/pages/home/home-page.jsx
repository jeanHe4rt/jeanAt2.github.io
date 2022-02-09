import React from 'react';


const Home = () => (
<header class="header">
    <div class="first-header">
      <nav class="navbar">
        <h1 class="title">Jean.dev</h1>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#about-me" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#projects" class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#skills" class="nav-link">My Skills</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
      </div>

    <div class="media-header">
      <div class="apresentation">
        <h2 class="title-2">Olá, eu sou o Jean </h2>
        <p class="description">Desenvolvedor Web & Front end</p>
        <div class="sub-menu">
          <button 
          class="button" 
          onclick="location.href='https://linktr.ee/jeanat2';"
          tooltip = "Foi mal ainda não implementei essa parte, mas daqui a pouco vou implementar ;)"
          >Linktree</button>
          
          <div class="outlined-button">
            <a href="https://www.linkedin.com/in/jeandossantosmd/" target=" _blank" rel="noopener">LinkedIn</a>
          </div>
        </div>

      </div>
      <img src="svg/Image Home.svg" alt="Imagem Home"/>
    </div>
  </header>
);
module.exports = Home;