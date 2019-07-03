import React from "react";
import "./styles/navbar.css";
import logo from "../images/Logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar container-fluid">
          <div className="wrapperImage">
            <a href="/" className="navbar__brand">
              <img className="navbar__logo" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="items">
            <ul className="container__items">
              <li className="navbar-item">
                <a href="/">Iniciar sesion</a>
              </li>
              <li className="navbar-item">
                <a href="/">Registrarse</a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
