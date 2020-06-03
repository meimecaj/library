import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import About from "../About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
