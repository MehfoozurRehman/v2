import React from "react";
import "./Main.scss";
import Jumbotron from "./jumbotron/Jumbotron";
import About from "./about/About";
import Resume from "./resume/Resume";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Pricing from "./pricing/Pricing";
import Contact from "./contact/Contact";

export default function Main() {
  return (
    <main className="main">
      <div className="sections">
        <Jumbotron />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </div>
    </main>
  );
}
