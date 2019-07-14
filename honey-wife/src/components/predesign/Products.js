import React from "react";

class Products extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.products.map(data => {
          return (
            <div key={data.id} className="col-12 col-lg-4 col-md-6">
              <div className="container__images--info">
                <img
                  className="image__predesign"
                  src={data.imagen}
                  alt="Imagen"
                />
                <div className="hover__image--predesign">
                  <h5>{data.name}</h5>
                  <h5>${data.price}</h5>
                </div>
                <div className="btn__wrapper">
                  <button
                    onClick={() => this.props.handleClick(data)}
                    className="button__predesign btn btn-warning"
                  >
                    Compra ya
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Products;
