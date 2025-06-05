import React, { useState } from 'react';
import '../styles/components/Header.css';
import HeaderButtons from './HeaderButtons'; // Assuming HeaderButtons is in the same directory

function Header (){
  

  return (
    
    <header className="header">
      <div className="header-logo">MyLogo</div>
      <nav className="header-nav">
        <a href="/home">Accueil</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <HeaderButtons />
    </header>
  );
};

export default Header;
