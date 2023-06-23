import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          {/* path is for the url, for which url this component will be shown and exact
          is used to determine if exactly this match will work or not. we can also
          use exact={true} or exact={false}. */}
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          {/* As the code will complie from top to bottom 'Redirect' will work if no matching url is found in 'Route' */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
