import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "../pages/Main";
import Type from "../pages/kitchenTypes/type";
import KitchenType from "../pages/kitchenTypes";

function Router() {
  return (
    <div className="container">
      <Switch>
        <Route path="/type/:id" component={KitchenType} />
        <Route path="/kitchen-type/:abbr" component={Type} />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default Router;