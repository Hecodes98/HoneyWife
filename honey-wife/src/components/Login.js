import React from "react";
import "./styles/Login.css";

class Login extends React.Component {
  handleClick = e => {
    console.log("Button was clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("form was submited");
    this.props.close();
    // console.log(this.props.formValues)
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

export default Login;
