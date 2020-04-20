import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./pages/responsive-layouts/routes";
import HomePage from "./pages/home/homepage";
import ResponsiveLayouts from "./pages/responsive-layouts/responsive-layouts";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/responsive-layouts" component={ResponsiveLayouts} />
      </Switch>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
