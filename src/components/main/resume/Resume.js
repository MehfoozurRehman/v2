import "./Resume.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Link to="/" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Education</span>
          </Link>
          <Link to="/work" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Work History</span>
          </Link>
          <Link to="/proskills" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Programming skills</span>
          </Link>
          <Link to="/designskills" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">Designer Skills</span>
          </Link>
          <Link to="/seo" className="section-switch">
            <span className="switch-icon">i</span>
            <span className="entry">SEO Skills</span>
          </Link>
        </div>
        <Switch>
          <div className="resume-sections" id="resume_sections">
            <Route path="/" exact>
              <Eduction />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/proskills">
              <ProSkills />
            </Route>
            <Route path="/designskills">
              <DesignSkills />
            </Route>
            <Route path="/seo">
              <Seo />
            </Route>
          </div>
        </Switch>
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
