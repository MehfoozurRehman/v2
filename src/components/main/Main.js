import "./Main.scss";

import About from "./about/About";
import Contact from "./contact/Contact";
import Jumbotron from "./jumbotron/Jumbotron";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";
import Services from "./services/Services";
import data from "../../data/data.json";

export default function Main() {
  return (
    <main className="main">
      <Jumbotron data={data} />
      <About data={data} />
      <Resume data={data} />
      <Services data={data} />
      <Portfolio data={data} />
      <Contact />
    </main>
  );
}
