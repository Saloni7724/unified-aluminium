import React from "react";
import "../css/About.css";
import about from "../photos/about.png";

const About = () => {
  return (
    <section id="about" className="about-modern">

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-text">

          <h2>
            Welcome to <span>Unified Aluminium</span>
          </h2>

         <p>
  At Unified Aluminium, we specialize in high-quality aluminium fabrication
  solutions including windows, doors, partitions, railings, and custom
  installations. As a growing business, we are dedicated to delivering
  modern, durable, and stylish aluminium solutions for both residential
  and commercial spaces.
</p>

<p>
  Even in our first year, we have successfully completed multiple projects
  with a strong focus on precision, quality materials, and customer
  satisfaction. Our goal is to provide reliable workmanship and build
  long-term relationships by delivering aluminium solutions that combine
  functionality, strength, and modern design.
</p>

     <a href="#projects">
  <button className="about-btn">VIEW OUR PROJECTS</button>
</a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
           <img src={about}
           alt="about"
            className="img-about"    />
        </div>

      </div>

    </section>
  );
};

export default About;