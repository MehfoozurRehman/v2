import "./Main.scss";
import loadable from "@loadable/component";
import data from "../../data/data.json";

const Jumbotron = loadable(() => import("./jumbotron/Jumbotron"));
const About = loadable(() => import("./about/About"));
const Resume = loadable(() => import("./resume/Resume"));
const Services = loadable(() => import("./services/Services"));
const Portfolio = loadable(() => import("./portfolio/Portfolio"));
const Contact = loadable(() => import("./contact/Contact"));

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
