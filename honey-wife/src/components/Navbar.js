import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import logo from "../images/Logo.png";
import Login from "./Login";
import Register from "./Register";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: undefined,
      navLinks: undefined,
      showLogin: undefined,
      showRegister: undefined,
      form: {
        email: "",
        pwd: ""
      },
      formRegister: {
        email: "",
        phone: "",
        pwd: ""
      }
    };
  }

  handleChangeLogin = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleChangeRegister = e => {
    this.setState({
      formRegister: {
        ...this.state.formRegister,
        [e.target.name]: e.target.value
      }
    });
  };

  openLoginModal = e => {
    e.preventDefault();
    this.setState({ showLogin: true });
  };

  closeLoginModal = () => {
    this.setState({ showLogin: false });
  };

  openRegisterModal = e => {
    e.preventDefault();
    this.setState({ showRegister: true });
  };

  closeRegisterModal = () => {
    this.setState({ showRegister: false });
    console.log(this.state.formRegister);
  };

  componentDidMount() {
    const navLinks = document.querySelectorAll(".nav-links li");
    this.setState({
      slide: false,
      navLinks: navLinks,
      showLogin: false,
      showRegister: false
    });
  }

  componentDidUpdate() {}

  handleClick = () => {
    this.setState({ slide: !this.state.slide });
    this.state.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  };
  render() {
    if (this.state.slide) {
      return (
        <React.Fragment>
          <nav>
            <div className="logo">
              <Link to="/home">
                <img className="navbar__logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <ul className="nav-links nav-active">
              <li>
                <a href="/">Para ella</a>
              </li>
              <li>
                <a href="/">Para el</a>
              </li>
              <li>
                <a onClick={this.openLoginModal} href="/">
                  Iniciar sesion
                </a>
              </li>
              <li>
                <a onClick={this.openRegisterModal} href="/">
                  Registrarse
                </a>
              </li>
            </ul>
            <div onClick={this.handleClick} className="burguer toggle">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
          </nav>
          <Login
            onChange={this.handleChangeLogin}
            formValues={this.state.form}
            show={this.state.showLogin}
            close={this.closeLoginModal}
          />
          <Register
            onChange={this.handleChangeRegister}
            formValues={this.state.formRegister}
            show={this.state.showRegister}
            close={this.closeRegisterModal}
          />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <nav>
          <div className="logo">
            <Link to="/home">
              <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Para ella</a>
            </li>
            <li>
              <a href="/">Para el</a>
            </li>
            <li>
              <a onClick={this.openLoginModal} href="/">
                Iniciar sesion
              </a>
            </li>
            <li>
              <a onClick={this.openRegisterModal} href="/">
                Registrarse
              </a>
            </li>
          </ul>
          <div onClick={this.handleClick} className="burguer">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
        <Login
          onChange={this.handleChangeLogin}
          formValues={this.state.form}
          show={this.state.showLogin}
          close={this.closeLoginModal}
        />
        <Register
          onChange={this.handleChangeRegister}
          formValues={this.state.formRegister}
          show={this.state.showRegister}
          close={this.closeRegisterModal}
        />
      </React.Fragment>
    );
  }
}

export default Navbar;
