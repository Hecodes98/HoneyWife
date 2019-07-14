import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Bodaslist from "../components/Bodaslist";
import BodasReales from "../components/BodasReales";
import Catalogo from "../components/Catalogo";
import "../components/styles/bodastop.css";
import api from "../api";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsToRender: 3,
      endComment: undefined,
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.bodasTop.list();
      this.setState({ loading: false, endComment: data.length, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  handleClick = e => {
    if (this.state.commentsToRender === this.state.endComment) {
      console.log("i cannot");
    } else {
      this.setState({ commentsToRender: this.state.commentsToRender + 1 });
    }
  };
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
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
            <Bodaslist
              commentsToRender={this.state.commentsToRender}
              bodas={this.state.data}
              onClick={this.handleClick}
            />
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
              <Link
                to="/clipart"
                type="button"
                className="btn btn-warning catalogo__button-btn"
              >
                Ver catalogo
              </Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default home;
