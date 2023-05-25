import "./App.scss";

import Main from "./components/main/Main";
import data from "./data/data.json";

export default function App() {
  function toggle_nav() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.style.display === "none") {
      document.querySelector(".mobile-nav").style.display = "flex";
      menuBtn.classList.add("open");
    } else {
      document.querySelector(".mobile-nav").style.display = "none";
      menuBtn.classList.remove("open");
    }
  }

  function toggle_theme() {
    var checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function (checked) {
      if (checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
  }

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          {data.HeaderData.map((headerData) => {
            return <div className="brand-name">{headerData.name}</div>;
          })}
          <div className="menu-btn" onClick={toggle_nav}>
            <div className="menu-btn__burger"></div>
          </div>
          <div className="desktop-nav">
            <a href="#jumbotron" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#resume" className="nav-link">
              Resume
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="toggle-container">
              <input
                type="checkbox"
                id="switch"
                name="theme"
                onClick={toggle_theme}
              />
              <label className="label" htmlFor="switch">
                Toggle
              </label>
            </div>
          </div>
        </nav>
        <div className="mobile-nav">
          <a href="#jumbotron" className="mobile-nav-link">
            Home
          </a>
          <a href="#about" className="mobile-nav-link">
            About
          </a>
          <a href="#resume" className="mobile-nav-link">
            Resume
          </a>
          <a href="#services" className="mobile-nav-link">
            Services
          </a>
          <a href="#portfolio" className="mobile-nav-link">
            Portfolio
          </a>
          <a href="#pricing" className="mobile-nav-link">
            Pricing
          </a>
          <a href="#contact" className="mobile-nav-link">
            Contact
          </a>
        </div>
      </header>
      <Main />
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-heading">
            © 2020 Mehfooz-ur-Rehman. All rights reserved.
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/MehfoozurRehman"
              className="social-links"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34.875 34.004"
                className="image"
              >
                <path
                  id="Icon_awesome-github"
                  data-name="Icon awesome-github"
                  d="M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z"
                  transform="translate(0 -0.563)"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/Mehfooz47928803"
              className="social-links"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 29.239"
                className="image"
              >
                <path
                  id="Icon_awesome-twitter"
                  data-name="Icon awesome-twitter"
                  d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                  transform="translate(0 -3.381)"
                  fill="#fff"
                />
              </svg>
            </a>
            <a href="MAILTO:mehfoozijaz786@gmail.com" className="social-links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.25 20.25"
                className="image"
              >
                <g
                  id="Icon_ionic-ios-mail"
                  data-name="Icon ionic-ios-mail"
                  transform="translate(-3.375 -7.875)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M32.386,10.357,24.82,18.063a.136.136,0,0,0,0,.2L30.115,23.9a.912.912,0,0,1,0,1.294.917.917,0,0,1-1.294,0l-5.273-5.618a.144.144,0,0,0-.2,0l-1.287,1.308a5.661,5.661,0,0,1-4.036,1.7,5.775,5.775,0,0,1-4.12-1.751l-1.238-1.259a.144.144,0,0,0-.2,0L7.186,25.193a.917.917,0,0,1-1.294,0,.912.912,0,0,1,0-1.294l5.295-5.639a.15.15,0,0,0,0-.2L3.614,10.357a.139.139,0,0,0-.239.1v15.42a2.257,2.257,0,0,0,2.25,2.25h24.75a2.257,2.257,0,0,0,2.25-2.25V10.455A.141.141,0,0,0,32.386,10.357Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M18,20.749A3.823,3.823,0,0,0,20.749,19.6L31.781,8.367a2.21,2.21,0,0,0-1.392-.492H5.618a2.2,2.2,0,0,0-1.392.492L15.258,19.6A3.823,3.823,0,0,0,18,20.749Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MehfoozurRehmanIjaz"
              className="social-links"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 27"
                className="image"
              >
                <path
                  id="Icon_ionic-logo-facebook"
                  data-name="Icon ionic-logo-facebook"
                  d="M30.009,4.5H5.991A1.491,1.491,0,0,0,4.5,5.991V30.009A1.491,1.491,0,0,0,5.991,31.5H18V20.813H14.773V16.875H18V13.964c0-3.488,2.419-5.386,5.534-5.386,1.491,0,3.094.113,3.466.162v3.642H24.518c-1.695,0-2.018.8-2.018,1.983v2.51h4.036l-.527,3.938H22.5V31.5h7.509A1.491,1.491,0,0,0,31.5,30.009V5.991A1.491,1.491,0,0,0,30.009,4.5Z"
                  transform="translate(-4.5 -4.5)"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
