import React from "react";
import "./App.scss";
import loadable from "@loadable/component";
const Header = loadable(() => import("./components/header/Header"));
const Main = loadable(() => import("./components/main/Main"));
const Footer = loadable(() => import("./components/footer/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
