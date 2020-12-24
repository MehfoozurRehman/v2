import React from "react";
import "./Resume.scss";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-header">
        <div className="header-name">Resume</div>
        <div className="header-line">My Formal Bio Details</div>
        <div className="line">
          <div className="bold-line"></div>
        </div>
      </div>
      <div className="resume-content section-content">
        <div className="resume-sidebar">
          <a href="#edu_section" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Education</span>
          </a>
          <a href="#wh_section" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Work History</span>
          </a>
          <a href="#pro_section" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Programming skills</span>
          </a>
          <a href="#dsg_section" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Designer Skills</span>
          </a>
          <a href="#seo_section" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">SEO Skills</span>
          </a>
        </div>
        <div className="resume-sections">
          <section id="edu_section" className="resume-section">
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">University name</div>
                <div className="resume-card-info">Degree Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">University name</div>
                <div className="resume-card-info">Degree Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">University name</div>
                <div className="resume-card-info">Degree Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-section-line"></div>
          </section>
          <section id="wh_section" className="resume-section">
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Company name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Company name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Company name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-section-line"></div>
          </section>
          <section id="pro_section" className="resume-section">
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-section-line"></div>
          </section>
          <section id="dsg_section" className="resume-section">
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-section-line"></div>
          </section>
          <section id="seo_section" className="resume-section">
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
            <div className="resume-card">
              <div className="dot-card"></div>
              <div className="card-col">
                <div className="resume-card-heading">Project name</div>
                <div className="resume-card-info">Post Name</div>
                <p className="resume-card-explain">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam ex doloremque a odio ipsa modi velit possimus.
                  Asperiores, veniam quod.
                </p>
              </div>
              <div className="date">2014-2020</div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
