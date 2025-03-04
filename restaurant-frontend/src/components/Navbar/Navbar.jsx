import React, { useState } from "react";
import './Navbar.css';
// import {images} from './images';
import whatsapp from '../../components/images/W.png';
import Tiktok from '../../components/images/T.png';
import facebook from '../../components/images/face.jpeg';
import instagram from '../../components/images/I.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (


    <header>

      <div className="nav1">

        <div className="social">

          <img src={whatsapp} alt="logo whatsapp" id="w" />
          <img src={facebook} alt="logo facebook" id="f"/>
          <img src={instagram} alt="logo instagram" id="i" />
          <img src={Tiktok} alt="logo tiktok" id="t" />

        </div>

        <div>
          <a href="/" className="logo"> <span>Gourmets</span>Bites </a>
        </div>

      </div>

      <ul className={`navbar ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={toggleNav}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#apropos" onClick={toggleNav}>
            À propos
          </a>
        </li>
        <li>
          <a href="#menu" onClick={toggleNav}>
            Menu
          </a>
        </li>
        <li>
          <a href="#commentaires" onClick={toggleNav}>
            Commentaires
          </a>
        </li>
        <li>
          <a href="/Contacts" onClick={toggleNav}>
            Contacts
          </a>
        </li>
        <li>
          <a href="/Reserves" onClick={toggleNav} className="btn-reserve">
            Réservation
          </a>
        </li>
      </ul>

    </header>
  );
};

export default Navbar;
