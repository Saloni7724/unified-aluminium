import React from "react";
import "../css/About.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="about-left">
        <div className="work-badge">
          <h2>120+</h2>
          <p>Work Done</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="About"
        />
      </div>

      <div className="about-right">
  <span className="small-title">MORE ABOUT US</span>

  <h1>
    Building the Future with <br />
    Aluminium Excellence
  </h1>

  <div className="about-content">
    <p>
      We deliver modern and durable aluminium solutions with a focus on quality,
      precision, and customer satisfaction.
    </p>

    <ul>
      <li><FaCheckCircle /> Modern Designs</li>
      <li><FaCheckCircle /> Professional Installation</li>
      <li><FaCheckCircle /> Quality Materials & Finishing</li>
    </ul>
  </div>

  <div className="about-contact">
    <div className="phone-box">
      <FiPhone />
      <div>
        <small>Call us anytime</small>
        <strong>+91 9913612354</strong>
      </div>
    </div>

    <div className="signature">Nishu Patel</div>
  </div>
</div>

    </section>
  );
};

export default About;