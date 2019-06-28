import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Bodaslist from "../components/Bodaslist";
import "../components/styles/bodastop.css";
import image from "../images/bg.png";
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
        image: image
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
        image: image
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
        image: image
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <section className="Weddings__top">
          <div className="Top__title">
            <h5>Bodas destacadas</h5>
            <p>Bodas predefinidas en diferentes lugares del mundo</p>
          </div>
          <hr />
          <div className="container container-fluid">
            <Bodaslist bodas={this.state.data} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default home;
