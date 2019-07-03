import React from "react";

class Bodaslist extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.bodas.map(boda => {
          return (
            <div key={boda.id} className="boda__item row">
              <div className="boda__item--imageWrapper col-12 col-md-6">
                <img
                  className="boda__item--image"
                  src={boda.image}
                  alt="Imagen de la boda"
                />
                <span className="dcto">
                  30% <br /> Dcto
                </span>
              </div>
              <div className="boda__item--info col-12 col-md-6">
                <div className="info__title">
                  <h5>{boda.name}</h5>
                  <hr className="info__title--hr" />
                  <h6>{boda.placeCeremony}</h6>
                  <h6>{boda.placeParty}</h6>
                  <h6>{boda.transport}</h6>
                  <h6>{boda.buffet}</h6>
                  <h6>{boda.bar}</h6>
                  <h6>{boda.music}</h6>
                  <h6>{boda.product}</h6>
                  <span className="dcto-boda">30% Dcto</span>
                </div>
                <div className="buttonBuy">
                  <button type="button" className="btn btn-success">
                    Consiquela ya ${boda.price}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <span className="more">
          <button
            onClick={this.props.onClick}
            type="button"
            className="btn btn-warning"
          >
            Ver mas...
          </button>
        </span>
      </React.Fragment>
    );
  }
}

export default Bodaslist;
