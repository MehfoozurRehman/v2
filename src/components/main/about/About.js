import React from "react";
import "./About.scss";
import img from "../../../assets/about-pic.webp";

export default class About extends React.Component {
  render() {
    const data = this.props.data;
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
              {data.AboutData.map((aboutData) => {
                return <p className="about-info">{aboutData.who_you_are}</p>;
              })}
              <div className="skill-set-heading">Here are my skills:</div>
              <ul className="skill-set">
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill1}</li>;
                })}
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill2}</li>;
                })}
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill3}</li>;
                })}
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill4}</li>;
                })}
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill5}</li>;
                })}
                {data.AboutData.map((aboutData) => {
                  return <li className="skill">{aboutData.skills.skill6}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
