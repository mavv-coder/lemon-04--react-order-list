import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { switchRoutes } from "./routes";
import { OrderDetailScene } from "../../scenes";

export const RouterComponent: React.FC = () => {
  const { root, orderList } = switchRoutes;

  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[root, orderList]}
          component={OrderDetailScene}
        />
      </Switch>
    </Router>
  );
};
