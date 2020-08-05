import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  LoginScene,
  MovieListScene,
  AlbumListScene,
  CheckoutScene,
} from "../../scenes";

export const RouterComponent: React.FC = () => {
  const { movieList, albumList, login, root, checkout } = switchRoutes;

  return (
    <Router>
      <Switch>
        <Route exact={true} path={[root, login]} component={LoginScene} />
        <Route exact={true} path={movieList} component={MovieListScene} />
        <Route exact={true} path={albumList} component={AlbumListScene} />
        <Route exact={true} path={checkout} component={CheckoutScene} />
      </Switch>
    </Router>
  );
};
