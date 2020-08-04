import React, { useEffect } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../utils/theme";
import routes from "../../utils/routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerItem from "../DrawerItem/DrawerItem";
import LocalStorage from "../../services/LocalStorage";
import categories from "../../utils/categories";

const localStorage = new LocalStorage();

const addAllBooks = () => {
  localStorage.set("books", categories);
}

function App() {

  useEffect(() => {
    addAllBooks();
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login-page">
                <LoginPage />
              </Route>
              <Route path="/signup-page">
                <SignupPage />
              </Route>
              {routes.map((routeItem) => {
                return (
                  <Route path={routeItem.path}>
                    <DrawerItem
                      title={routeItem.name}
                      cards={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    />
                  </Route>
                );
              })}
            </Switch>
            <Footer />
          </NavBar>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
