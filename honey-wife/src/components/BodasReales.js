import React from "react";
import "./styles/bodasreales.css";
import novios1 from "../images/novios/novios3.jpg";
import novios2 from "../images/novios/novios4.jpg";
import novios3 from "../images/novios/novios5.jpg";
import novios4 from "../images/novios/novios6.jpg";

class BodasReales extends React.Component {
  id = 0;
  photos = [
    { id: 1, photo: novios1 },
    { id: 2, photo: novios2 },
    { id: 3, photo: novios3 },
    { id: 4, photo: novios4 }
  ];
  render() {
    return (
      <React.Fragment>
        <section className="Bodas-reales">
          <div className="bodas-reales__container container">
            <h5 className="Bodas__title">Bodas Reales</h5>
            <p className="text-center">
              Historias de parejas felices, en sus maravillosas bodas de
              ensuenio
            </p>
            <hr />

            <div className="row Bodas__photos">
              {this.photos.map(photo => {
                return (
                  <div
                    key={photo.id}
                    className="photo__boda-item col-md-3 col-12"
                  >
                    <div className="image__container">
                      <img src={photo.photo} alt="" />
                    </div>
                    <div className="info__Bodas-reales">
                      <h5 className="text-center">Sutano & Sutana</h5>
                      <h6 className="text-center">Cartagena, Colombia</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BodasReales;
