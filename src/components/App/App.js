import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../utils/theme";


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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login-page">
                <LoginPage />
              </Route>
            </Switch>
          </NavBar>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
