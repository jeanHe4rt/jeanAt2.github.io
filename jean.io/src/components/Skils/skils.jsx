import React from 'react';
import './skils.css';

import Html5 from '../../assets/svgs/icomoon-free_html-five.svg';
import CSS3 from '../../assets/svgs/fontisto_css3.svg';
import JavaScript from '../../assets/svgs/akar-icons_javascript-fill.svg';
import ReactJS from '../../assets/svgs/akar-icons_react-fill.svg';


const Skils = ()=> {
  return (
    <div class="skills" id="skills">
    <h1 class="title-main">Minhas skills</h1>

    <div class="list-skills">
      <div class="card-skills">
        <img src={Html5} alt="HTML 5"/>
      </div>
      <div class="card-skills">
        <img src={CSS3} alt="CSS3"/>
      </div>
      <div class="card-skills">
        <img src={JavaScript} alt="JavaScript"/>
      </div>
      <div class="card-skills">
        <img src={ReactJS} alt="ReactJS"/>
      </div>
    </div>

  </div>
  );
}

export default Skils;