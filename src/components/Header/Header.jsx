import React from 'react';
import img from '../../assets/images/react.svg';
import './Header.scss';

const Header = () => (
  <header className="Header">
    <img src={img} alt="React" className="Header__logo" />
    React Webpack Boilerplate
  </header>
);

export default Header;
