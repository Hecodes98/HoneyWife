import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Bodaslist from "../components/Bodaslist";
import BodasReales from "../components/BodasReales";
import Catalogo from "../components/Catalogo";
import "../components/styles/bodastop.css";
import deco from "../images/decoracion/decoracion2.jpg";
class home extends React.Component {
  state = {
    data: [
      {
        id: "1",
        name: "Nombre de la boda",
        placeCeremony: "Lugar de la ceremonia",
        placeParty: "Lugar de la fiesta (Decoracion)",
        transport: "Transporte (Decoracion)",
        buffet: "Banquete x50",
        bar: "Bar x50",
        music: "Musica",
        product: "productos",
        price: "10'000.000",
        image: deco
      },
      {
        id: "2",
        name: "Nombre de la boda",
        placeCeremony: "Lugar de la ceremonia",
        placeParty: "Lugar de la fiesta (Decoracion)",
        transport: "Transporte (Decoracion)",
        buffet: "Banquete x50",
        bar: "Bar x50",
        music: "Musica",
        product: "productos",
        price: "10'000.000",
        image: deco
      },
      {
        id: "3",
        name: "Nombre de la boda",
        placeCeremony: "Lugar de la ceremonia",
        placeParty: "Lugar de la fiesta (Decoracion)",
        transport: "Transporte (Decoracion)",
        buffet: "Banquete x50",
        bar: "Bar x50",
        music: "Musica",
        product: "productos",
        price: "10'000.000",
        image: deco
      }
    ]
  };

  handleClick = e => {
    let { data } = this.state;
    const newData = [
      ...data,
      {
        id: "4",
        name: "Nombre de la boda",
        placeCeremony: "Lugar de la ceremonia",
        placeParty: "Lugar de la fiesta (Decoracion)",
        transport: "Transporte (Decoracion)",
        buffet: "Banquete x50",
        bar: "Bar x50",
        music: "Musica",
        product: "productos",
        price: "10'000.000",
        image: deco
      }
    ];
    this.setState({ data: newData });
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <Hero />
        <section className="Weddings__top">
          <div className="Top__title">
            <h5>Bodas destacadas</h5>
            <p>Bodas predefinidas en diferentes lugares del mundo</p>
          </div>
          <hr />
          <div className="container container-fluid">
            <Bodaslist bodas={this.state.data} onClick={this.handleClick} />
          </div>
        </section>
        <BodasReales />
        <section className="catalogo">
          <div className="container">
            <h5 className="Bodas__title">Bodas Reales</h5>
            <p className="text-center">
              Vestidos, trajes, anillos, peinados y accesorios, para la novia y
              el novio.
            </p>
            <hr />
            <Catalogo />
            <div className="catalogo__button">
              <button type="button" className="btn btn-warning">
                Ver catalogo
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default home;
