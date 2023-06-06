import React from 'react';
import './MainHeader.css';
import { Search } from './Search';
import LogoImage from "./logo.png";
import { Link } from 'react-router-dom';




const MainHeader = () => {
  return (
    <div className = "header" data-testid = "main-header">
      <img src={LogoImage}  className = "logo"/>
      <div className="main-header">
          <div className="header-text">
            <Link to="/main" className="main-button">Main</Link>
            <a href="#footer-distributed" className="about-us-button" >About Us</a>
            <a href="#footer-distributed" className="contacts-button">Contacts</a>
          </div>  
          <Search/>
      </div>  
    </div>
      
  )
};

export {MainHeader};
