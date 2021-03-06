import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./config/paths";
import * as screens from './screens';

export const Routes = () => (
  <Switch>
    <Route exact path={paths.home}>
      <screens.Home />
    </Route>
    <Route exact path={paths.recipts}>
      <screens.Recipes />
    </Route>
    <Route exact path={paths.meals}>
      <screens.Meals />
    </Route>
    <Route exact path={`${paths.recipts}/:id`}>
      <screens.Recipe />
    </Route>
  </Switch>
)