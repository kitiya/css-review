import React from "react";
import { Route, Switch } from "react-router-dom";

import Challenge01 from "./challenge-01/challenge-01";
import Challenge02 from "./challenge-02/challenge-02";
import Challenge03 from "./challenge-03/challenge-03";
import Challenge04 from "./challenge-04/challenge-04";
import Challenge05 from "./challenge-05/challenge-05";
import Challenge06 from "./challenge-06/challenge-06";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/responsive-layout-01" component={Challenge01} />
        <Route path="/responsive-layout-02" component={Challenge02} />
        <Route path="/responsive-layout-03" component={Challenge03} />
        <Route path="/responsive-layout-04" component={Challenge04} />
        <Route path="/responsive-layout-05" component={Challenge05} />
        <Route path="/responsive-layout-06" component={Challenge06} />
      </Switch>
    </>
  );
};

export default Routes;
