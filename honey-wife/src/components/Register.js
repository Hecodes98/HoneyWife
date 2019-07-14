import React from "react";
import "./styles/Login.css";

class Register extends React.Component {
  handleClick = e => {
    console.log("Button was clickedeado");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("form was submited");
    this.props.close();
  };
  render() {
    if (this.props.show) {
      return (
        <React.Fragment>
          <div className="Modal">
            <div className="ModalInfo">
              <h5 className="text-center title__login">Login</h5>
              <hr />
              <div className="Modal__info">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Correo electronico</label>
                    <input
                      onChange={this.props.onChange}
                      type="email"
                      className="form-control input__modal"
                      name="email"
                      value={this.props.formValues.email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      onChange={this.props.onChange}
                      type="number"
                      className="form-control input__modal"
                      name="phone"
                      value={this.props.formValues.phone}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      onChange={this.props.onChange}
                      type="password"
                      className="form-control input__modal"
                      name="pwd"
                      value={this.props.formValues.pwd}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={this.handleClick}
                    className="btn__login btn btn-warning"
                  >
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return "";
  }
}

export default Register;
