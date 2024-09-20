import React from 'react';
import './Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="Bar Logo" className="logo" />
          <h1 className="title">Lanovka Jeopardy</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
