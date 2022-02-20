import React from "react";
import'./navbar.css';

const Navbar = () => {
  return (
        <nav className="navbar">
          <h1 className="title">Jean.dev</h1>
          <ul className="nav-menu">
              <li className="nav-item">
                  <a href="#about-me" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                  <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                  <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                  <a href="#skills" className="nav-link">My Skills</a>
              </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
      </nav>
  )
}

export default Navbar;