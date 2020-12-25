import React from "react";
import "./Pricing.scss";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-header">
        <div className="header-name">Pricing</div>
        <div className="header-line">Check our Services package</div>
        <div className="line">
          <div className="bold-line"></div>
        </div>
      </div>
      <div className="pricing-content section-content">
        <div className="pricing-card">
          <div className="card-head head-1">
            <div className="pricing-tear">Basic</div>
            <div className="price">
              <span>$</span>70
            </div>
          </div>
          <ul className="tear-features">
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-inactive">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-inactive">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-inactive">
              <span>i</span>Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="card-cta head-1">Choose Plan</button>
        </div>
        <div className="pricing-card recomanded">
          <div className="card-head head-2">
            <div className="pricing-tear">Standard</div>
            <div className="price">
              <span>$</span>100
            </div>
          </div>
          <ul className="tear-features">
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-inactive">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-inactive">
              <span>i</span>Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="card-cta head-2">Choose Plan</button>
        </div>
        <div className="pricing-card premium">
          <div className="card-head head-3">
            <div className="pricing-tear">Premium</div>
            <div className="price">
              <span>$</span>150
            </div>
          </div>
          <ul className="tear-features">
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
            <li className="feature-active">
              <span>i</span>Lorem, ipsum dolor.
            </li>
          </ul>
          <button className="card-cta head-3">Choose Plan</button>
        </div>
      </div>
    </section>
  );
}
