import React from "react";
import "../css/ProjectsContact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ProjectsContact = () => {
  return (
    <div className="projects-wrapper">

      {/* ===== Projects Section ===== */}
      <section id="projects" className="projects-section">
        <span className="small-title">POPULAR PROJECTS</span>
        <h2>
          Delivering precision and quality in every aluminium installation.
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Residential"
            />
            <div className="project-overlay">
              <h3>Residential Windows Installation</h3>
              <p>
                Modern aluminium sliding windows for contemporary homes.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Commercial"
            />
            <div className="project-overlay">
              <h3>Commercial Office Partition</h3>
              <p>
                Durable aluminium and glass partition systems.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ===== Contact Section ===== */}
      <section id="contact" className="contact-section">

        <h2 className="contact-heading">
          Let’s Build Something Strong Together
        </h2>

        <div className="contact-container">

          {/* Left Form */}
          <div className="contact-form-box">
            <h3>Contact us for a free quote</h3>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Number" required />
              </div>

              <input type="email" placeholder="Email" required />

              <textarea placeholder="Type Your Message" rows="4"></textarea>

              <button type="submit">Submit Message</button>
            </form>
          </div>

          {/* Right Info Box */}
          <div className="contact-info-box">
            <h3>Contact Us</h3>

            <div className="info-item">
              <FiPhone />
              <div>
                <span>Call Us 24/7</span>
                <strong>+91 7874170566</strong>
              </div>
            </div>

            <div className="info-item">
              <FiMail />
              <div>
                <span>Work with us</span>
                <strong>info@unifiedaluminium.com</strong>
              </div>
            </div>

            <div className="info-item">
              <FiMapPin />
              <div>
                <span>Your location</span>
                <strong>Mehsana, Gujarat, India</strong>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ProjectsContact;