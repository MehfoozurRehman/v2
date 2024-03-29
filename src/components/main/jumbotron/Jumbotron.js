import "./Jumbotron.scss";

import image from "../../../assets/profile-pic.webp";

export default function Jumbotron({ data }) {
  return (
    <div id="jumbotron" className="section">
      <div className="col-half">
        {data.JumbotronData.map((jumbotronData) => {
          return <div className="about_me">{jumbotronData.heading}</div>;
        })}
        {data.JumbotronData.map((jumbotronData) => {
          return <div className="slogan">{jumbotronData.sub_heading}</div>;
        })}
        {data.JumbotronData.map((jumbotronData) => {
          return <div className="info">{jumbotronData.slogan}</div>;
        })}
        <div className="cta">
          <a href="#portfolio" className="primary-cta">
            My Work
          </a>
          <a href="#contact" className="secondary-cta">
            Contact
          </a>
        </div>
      </div>
      <div className="col-half-pic">
        <img
          src={image}
          id="user-pic"
          className="jumbotron-pic"
          alt="profile-pic"
        />
      </div>
    </div>
  );
}
