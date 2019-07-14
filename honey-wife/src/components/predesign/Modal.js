import React from "react";
import "../styles/Modal.css";

class Modal extends React.Component {
  componentDidMount() {
    console.log("me montaron");
  }

  componentWillUnmount() {
    console.log("hola");
  }
  render() {
    if (this.props.show) {
      return (
        <React.Fragment>
          <div className="Modal">
            <div className="ModalInfo">
              <div className="imageWrapper">
                <img
                  className="Modal__image"
                  src={this.props.info.imagen}
                  alt="Image_boda"
                />
              </div>
              <div className="Modal__info">
                <h5>{this.props.info.name}</h5>
                <hr className="hr__modal" />
                <h6 className="h6__modal">{this.props.info.placeCeremony}</h6>
                <h6 className="h6__modal">{this.props.info.placeParty}</h6>
                <h6 className="h6__modal">{this.props.info.transport}</h6>
                <h6 className="h6__modal">{this.props.info.buffet}</h6>
                <h6 className="h6__modal">{this.props.info.bar}</h6>
                <h6 className="h6__modal">{this.props.info.music}</h6>
                <h6 className="h6__modal">{this.props.info.product}</h6>
              </div>
              <div className="buttonWrapper">
                <button className="Modal__button btn btn-warning">
                  Compra ya
                </button>
                <button onClick={this.props.close} className="btn btn-danger">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return "";
  }
}

export default Modal;
