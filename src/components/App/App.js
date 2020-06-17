import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import Biography from "../DrawerItems/Biography/Biography";
import Classics from "../DrawerItems/Classics/Classics";
import Fiction from "../DrawerItems/Fiction/Fiction";
import HistoryAndPolitics from "../DrawerItems/HistoryAndPolitics/HistoryAndPolitics";
import Lifestyle from "../DrawerItems/Lifestyle/Lifestyle";
import Poems from "../DrawerItems/Poems/Poems";
import ScienceFiction from "../DrawerItems/ScienceFiction/ScienceFiction";
import Science from "../DrawerItems/Science/Science";
import TravellingAndGeography from "../DrawerItems/TravellingAndGeography/TravellingAndGeography";
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
              <Route path="/signup-page">
                <SignupPage />
              </Route>
              <Route path="/biography">
                <Biography />
              </Route>
              <Route path="/classics">
                <Classics />
              </Route>
              <Route path="/fiction">
                <Fiction />
              </Route>
              <Route path="/history-and-politics">
                <HistoryAndPolitics />
              </Route>
              <Route path="/lifestyle">
                <Lifestyle />
              </Route>
              <Route path="/poems">
                <Poems />
              </Route>
              <Route path="/science-fiction">
                <ScienceFiction />
              </Route>
              <Route path="/science">
                <Science />
              </Route>
              <Route path="/travelling-and-geography">
                <TravellingAndGeography />
              </Route>
            </Switch>
          </NavBar>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
