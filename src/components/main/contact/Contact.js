import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div className="header-name">Contact</div>
        <div className="header-line">Let's Keep In Touch</div>
        <div className="line">
          <div className="bold-line"></div>
        </div>
      </div>
      <div className="contact-content section-content">
        <iframe
          title="my office location"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13669.861611299695!2d72.96342955792029!3d31.06897881094789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1a37bbb41db%3A0x37c1d4a33799690c!2sVirtual%20University%20Samundri%20Campus%20(New)!5e0!3m2!1sen!2s!4v1604854337644!5m2!1sen!2s"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <form action="mailto:mehfoozijaz786@gmail.com" className="form">
          <h3 className="form-heading">Get In Touch</h3>
          <label htmlFor="user_name" className="form_label">
            Your Name
          </label>
          <input type="text" className="form-input" id="user_name" />
          <label htmlFor="email_address" className="form_label">
            Your Email Addresss
          </label>
          <input type="text" className="form-input" id="email_address" />
          <label htmlFor="subject" className="form_label">
            Subject
          </label>
          <input
            type="text"
            className="form-input"
            id="subject"
            autoComplete="none"
          />
          <label htmlFor="budget" className="form_label">
            Estimated Budget
          </label>
          <input
            type="text"
            className="form-input"
            id="budget"
            autoComplete="none"
          />
          <label htmlFor="message" className="form_label">
            Your Message
          </label>
          <textarea
            className="form-input form-textarea"
            id="message"
            autoComplete="none"
          ></textarea>
          <button type="submit" className="form-cta">
            Submit
          </button>
        </form>
      </div>
      <a href="#jumbotron" className="back-to-top">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-arrow-up-circle back-to-top-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </a>
    </section>
  );
}
