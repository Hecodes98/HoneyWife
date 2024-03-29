import React from "react";
import home from "../pages/home";
import clipArt from "../pages/ClipArt";
import NotFound from "../pages/NotFound";

import Layout from "./Layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={home} />
          <Route exact path="/" component={home} />
          <Route exact path="/clipArt" component={clipArt} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
