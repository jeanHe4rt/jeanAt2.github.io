import React from "react";
import './servicos.scss';

import Code from './../../assets/svgs/code.svg';
import SmartPhone from './../../assets/svgs/smartphone.svg';




const Services = () => {
  return (
    <div class="services" >
      <h1 class="title-main">Serviços</h1>
      <div class="my-services">
        <div class="card">
          <img src={Code} alt="Code"/>
          <p class="card-text">
            Criação de Sites
          </p>
        </div>
        <div class="card">
          <img src={SmartPhone} alt="Code"/>
          <p class="card-text">
            Sites responsivos
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;