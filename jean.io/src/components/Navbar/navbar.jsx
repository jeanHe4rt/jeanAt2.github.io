import React from "react";
import'./navbar.css';

const Navbar = () => {
  return (
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
  )
}

export default Navbar;