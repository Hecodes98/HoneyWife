import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css";

const container = document.getElementById("app");

ReactDOM.render(<Home />, container);
