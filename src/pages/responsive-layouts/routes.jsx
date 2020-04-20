import React from "react";
import { Route, Switch } from "react-router-dom";

import Challenge01 from "./challenge-01/challenge-01";
import Challenge02 from "./challenge-02/challenge-02";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/responsive-layout-01" component={Challenge01} />
        <Route path="/responsive-layout-02" component={Challenge02} />
      </Switch>
    </>
  );
};

export default Routes;
