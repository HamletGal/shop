import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "../pages/Main";


function Router() {
  return (
    <div className="container">
      <Switch>
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