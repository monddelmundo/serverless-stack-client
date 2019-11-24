// This component uses this Switch component from React-Router 
// that renders the first matching route that is defined within it. 
// For now we only have a single route, it looks for / and renders 
// the Home component when matched. We are also using the exact prop 
// to ensure that it matches the / route exactly. This is because the path 
// / will also match any route that starts with a /.

import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound"
import Signup from "./containers/Signup";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}

