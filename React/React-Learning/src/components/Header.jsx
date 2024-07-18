import React from "react";
import "./Header.css";

const Header = (prop) => {
  let className = prop.header ? "header" : " ";
  return (
    <header className="header">
      <div>
        <h1 className={`${className}`}>Header</h1>
      </div>
      <div className="logo">
        <img
          src="C:\Users\HP 430\Downloads\Business Data\fati.png"
          alt="Logo"
        />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
