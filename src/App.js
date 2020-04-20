import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Routes from "./pages/responsive-layouts/routes";
import HomePage from "./pages/home/homepage";
import ResponsiveLayouts from "./pages/responsive-layouts/responsive-layouts";

import "./App.scss";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/responsive-layouts" component={ResponsiveLayouts} />
      </Switch>
      <Routes />
    </HashRouter>
  );
}

export default App;
