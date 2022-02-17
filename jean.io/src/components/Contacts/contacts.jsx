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
          <nav class="contact" >
        <figure class="redes-sociais">
          <div class="circle">
            <img src={Smile} alt="Smile"/>
          </div>
          <figcaption class="figCaption">Meu nome</figcaption>
          <label class="small-text">Jean Santos.</label>
        </figure>
        <figure class="redes-sociais">
          <div class="circle">
            <img src={Mail} alt="E-mail"/>
          </div>
          <figcaption class="figCaption">E-mail</figcaption>
          <label class="small-text">jeandossanttos1@gmail.com</label>
        </figure>
        <figure class="redes-sociais">
          <div class="circle">
            <img src={Instagram} alt="Instagram"/>
          </div>
          <figcaption class="figCaption">Instagram</figcaption>
          <label class="small-text">@jeanAt2</label>
        </figure>
        <figure class="redes-sociais">
          <div class="circle">
            <img src={Phone} alt="Phone"/>
          </div>
          <figcaption class="figCaption">Telefone</figcaption>
          <label class="small-text">(51)-997681102</label>
        </figure>
      </nav>
    </div>
  );
}


export default Contacts;