import React from "react";
import "../components/styles/predesign.css";
import Pagination from "./predesign/Pagination";
import Products from "./predesign/Products";
import Modal from "../components/predesign/Modal";

class Predesign extends React.Component {
  constructor(props) {
    super(props);
    this.dataModal = {};
    this.state = {};
  }

  componentDidMount() {
    this.setState({ isShow: false, dataModal: {} });
  }

  openModal = data => {
    this.setState({ isShow: true, dataModal: data });
  };

  closeModal = () => {
    this.setState({ isShow: false, dataModal: {} });
  };

  render() {
    return (
      <React.Fragment>
        <section className="container__predesign predesign__section">
          <div className="predesign__button--info">
            <div className="select__predesign">
              <h5>
                <span className="bg__span">1 </span> Selecciona alguna boda
                prediseñada
              </h5>
            </div>
            <div className="button__design--zero">
              <button className="btn btn-warning">Diseñala desde cero</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-12 lateral__bar--predesign">
              <h5>Tematicas</h5>
              <ul className="list__left list-unstyled">
                <li>
                  <a href="/">Ochenteras</a>
                </li>
                <li>
                  <a href="/">De oro</a>
                </li>
                <li>
                  <a href="/">De plata</a>
                </li>
                <li>
                  <a href="/">Geek</a>
                </li>
                <li>
                  <a href="/">Anime</a>
                </li>
              </ul>
            </div>
            <div className="products__wrapper col-lg-10 col-md-9 col-sm-8 col-12">
              <div className="row">
                <Products
                  products={this.props.data}
                  handleClick={this.openModal}
                />
              </div>
              <Pagination />
            </div>
          </div>
        </section>
        <Modal
          show={this.state.isShow}
          info={this.state.dataModal}
          close={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default Predesign;
