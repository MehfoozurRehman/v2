import "./Jumbotron.scss";
import img from "../../../assets/profile-pic.webp";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="section">
      <div className="col-half">
        <div className="about_me">Start a digital life</div>
        <div className="slogan">Expand Your Buisness</div>
        <div className="info">
          Web Developer, Freelancer & Web/ Mobile UI/UX Designer
        </div>
        <div className="cta">
          <a href="#portfolio" className="primary-cta">
            My Work
          </a>
          <a href="#contact" className="secondary-cta">
            Contact
          </a>
        </div>
      </div>
      <div className="col-half">
        <img src={img} className="jumbotron-pic" alt="profile-pic" />
      </div>
    </section>
  );
}
