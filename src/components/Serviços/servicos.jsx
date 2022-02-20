import React from "react";
import './servicos.css';

import Code from './../../assets/svgs/code.svg';
import SmartPhone from './../../assets/svgs/smartphone.svg';




const Services = () => {
  return (
    <div className="services" >
      <h1 className="title-main">Serviços</h1>
      <div className="my-services">
        <div className="card">
          <img src={Code} alt="Code"/>
          <p className="card-text">
            Criação de Sites
          </p>
        </div>
        <div className="card">
          <img src={SmartPhone} alt="Code"/>
          <p className="card-text">
            Sites responsivos
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;