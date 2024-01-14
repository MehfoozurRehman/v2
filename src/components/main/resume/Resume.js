import "./Resume.scss";

import { useState } from "react";

export default function Resume() {
  const [selected, setSelected] = useState("education");
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
          <a
            className={
              selected === "education"
                ? "section-switch active"
                : "section-switch"
            }
            onClick={() => setSelected("education")}
          >
            <span className="switch-icon">i</span>
            <span className="entry">Education</span>
          </a>
          <a
            className={
              selected === "work" ? "section-switch active" : "section-switch"
            }
            onClick={() => setSelected("work")}
          >
            <span className="switch-icon">i</span>
            <span className="entry">Work History</span>
          </a>
          <a
            className={
              selected === "proskills"
                ? "section-switch active"
                : "section-switch"
            }
            onClick={() => setSelected("proskills")}
          >
            <span className="switch-icon">i</span>
            <span className="entry">Programming skills</span>
          </a>
          <a
            className={
              selected === "designskills"
                ? "section-switch active"
                : "section-switch"
            }
            onClick={() => setSelected("designskills")}
          >
            <span className="switch-icon">i</span>
            <span className="entry">Designer Skills</span>
          </a>
          <a
            className={
              selected === "seo" ? "section-switch active" : "section-switch"
            }
            onClick={() => setSelected("seo")}
          >
            <span className="switch-icon">i</span>
            <span className="entry">SEO Skills</span>
          </a>
        </div>

        <div className="resume-sections" id="resume_sections">
          {selected === "education" ? (
            <Eduction />
          ) : selected === "work" ? (
            <Work />
          ) : selected === "proskills" ? (
            <ProSkills />
          ) : selected === "designskills" ? (
            <DesignSkills />
          ) : selected === "seo" ? (
            <Seo />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Eduction() {
  return (
    <section id="edu_section" className="resume-section">
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">University name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-section-line"></div>
    </section>
  );
}

function Work() {
  return (
    <section id="edu_section" className="resume-section">
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">Work name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">skill name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-section-line"></div>
    </section>
  );
}

function ProSkills() {
  return (
    <section id="edu_section" className="resume-section">
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">skill name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-section-line"></div>
    </section>
  );
}

function DesignSkills() {
  return (
    <section id="edu_section" className="resume-section">
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">skill design name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-section-line"></div>
    </section>
  );
}

function Seo() {
  return (
    <section id="edu_section" className="resume-section">
      <div className="resume-card">
        <div className="dot-card"></div>
        <div className="card-col">
          <div className="resume-card-heading">seo name</div>
          <div className="resume-card-info">Degree Name</div>
          <p className="resume-card-explain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ex
            doloremque a odio ipsa modi velit possimus. Asperiores, veniam quod.
          </p>
        </div>
        <div className="date">2014-2020</div>
      </div>
      <div className="resume-section-line"></div>
    </section>
  );
}
