import React from "react";
import "./styles/hero.css";
class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Hero">
          <div className="Hero__wrapper">
            <div className="firstTitle">
              <h1>
                Lorem ipsum dolo sit ametm consectuii <br /> adispiscing elit.
              </h1>
            </div>
            <div className="secondTitle">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="ButtonWrapper">
              <button type="button" className="btn btn-secondary start__Button">
                Empieza ya
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
