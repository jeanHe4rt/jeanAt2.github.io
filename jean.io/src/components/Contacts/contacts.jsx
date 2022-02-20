import React from 'react';
import './../../assets/css/global.css';
import './contacts.css';


import Smile from '../../assets/svgs/smile.svg';
import Mail from '../../assets/svgs/mail.svg';
import Instagram from '../../assets/svgs/instagram.svg';
import Phone from '../../assets/svgs/phone.svg';



const Contacts = () => {
  return (
    <div>
          <nav className="contact" >
        <figure className="redes-sociais">
          <div className="circle">
            <img src={Smile} alt="Smile"/>
          </div>
          <figcaption className="figCaption">Meu nome</figcaption>
          <label className="small-text">Jean Santos.</label>
        </figure>
        <figure className="redes-sociais">
          <div className="circle">
            <img src={Mail} alt="E-mail"/>
          </div>
          <figcaption className="figCaption">E-mail</figcaption>
          <label className="small-text">jeandossanttos1@gmail.com</label>
        </figure>
        <figure className="redes-sociais">
          <div className="circle">
            <img src={Instagram} alt="Instagram"/>
          </div>
          <figcaption className="figCaption">Instagram</figcaption>
          <label className="small-text">@jeanAt2</label>
        </figure>
        <figure className="redes-sociais">
          <div className="circle">
            <img src={Phone} alt="Phone"/>
          </div>
          <figcaption className="figCaption">Telefone</figcaption>
          <label className="small-text">(51)-997681102</label>
        </figure>
      </nav>
    </div>
  );
}


export default Contacts;