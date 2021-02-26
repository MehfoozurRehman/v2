import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
const Header = loadable(() => import("./components/header/Header"));
const Main = loadable(() => import("./components/main/Main"));
const Footer = loadable(() => import("./components/footer/Footer"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
