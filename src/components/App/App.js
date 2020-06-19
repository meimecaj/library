import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../utils/theme";
import routes from "../../utils/routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              {routes.map((routeItem) => {
                return (
                  <Route path={routeItem.path}>
                    {React.createElement(routeItem.component, null)}
                  </Route>
                );
              })}
            </Switch>
          </NavBar>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
