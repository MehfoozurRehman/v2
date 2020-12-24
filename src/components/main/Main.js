import "./Main.scss";
import loadable from "@loadable/component";

const Jumbotron = loadable(() => import("./jumbotron/Jumbotron"));
const About = loadable(() => import("./about/About"));
const Resume = loadable(() => import("./resume/Resume"));
const Services = loadable(() => import("./services/Services"));
const Portfolio = loadable(() => import("./portfolio/Portfolio"));
const Pricing = loadable(() => import("./pricing/Pricing"));
const Contact = loadable(() => import("./contact/Contact"));

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
