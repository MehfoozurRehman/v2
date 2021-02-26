import React from "react";
import "./Jumbotron.scss";
import image from "../../../assets/profile-pic.webp";
import { gsap } from "gsap";

class Jumbotron extends React.Component {
  componentDidMount() {
    gsap.to("#user-pic", { duration: 2, x: 250, ease: "bounce" });
  }
  render() {
    const data = this.props.data;
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
}

export default Jumbotron;
