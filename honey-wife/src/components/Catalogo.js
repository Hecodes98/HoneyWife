import React from "react";
import image from "../images/bg.png";
import "./styles/catalogo.css";

class Catalogo extends React.Component {
  state = {
    data: [
      {
        id: 1,
        image: image,
        text: "Vestidos de novia"
      },
      {
        id: 2,
        image: image,
        text: "Trajes de novio"
      },
      {
        id: 3,
        image: image,
        text: "Vestidos de fiesta"
      },
      {
        id: 4,
        image: image,
        text: "Joyeria"
      },
      {
        id: 5,
        image: image,
        text: "Zapatos"
      },
      {
        id: 6,
        image: image,
        text: "Vestidos de novia"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.state.data.map(item => {
            return (
              <div
                key={item.id}
                className="catalogo__item col-12 col-sm-6 col-md-4 col-lg-2"
              >
                <div className="catalogo--imagen__container">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Catalogo;
