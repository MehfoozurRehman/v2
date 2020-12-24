import "./About.scss";
import img from "../../../assets/about-pic.webp";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wapper">
        <div className="section-header">
          <div className="header-name">About</div>
          <div className="header-line">Why Choose Me?</div>
          <div className="line">
            <div className="bold-line"></div>
          </div>
        </div>
        <div className="about-content section-content">
          <img src={img} alt="about-pic" className="about-pic" />
          <div className="about">
            <div className="about-heading">Who am I?</div>
            <p className="about-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              nostrum sapiente, obcaecati omnis facilis quae minus, quas
              assumenda beatae repellat nobis pariatur? Voluptate dolore commodi
              neque minima accusantium quibusdam nam at tempore exercitationem
              dicta rerum, alias ut porro dignissimos ducimus est iusto libero
              ullam ab! Ut temporibus explicabo deleniti. Qui.
            </p>
            <div className="skill-set-heading">Here are my skills:</div>
            <ul className="skill-set">
              <li className="skill">UI/UX design</li>
              <li className="skill">HTML,CSS,JAVAScript</li>
              <li className="skill">Sass,Bootstrap</li>
              <li className="skill">C++</li>
              <li className="skill">
                Adobe XD,Adobe Photoshop,Adobe Illustrator
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
