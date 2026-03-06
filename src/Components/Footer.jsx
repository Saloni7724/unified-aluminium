import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h4 className="small-title">Ready To</h4>
          <h2 className="big-title">Work With Us?</h2>
          <p>
           Expert aluminium fabrication and installation services for windows, doors, partitions, and custom structures built for durability and style.
          </p>
          <a href="#contact">
          <button className="quote-btn">Get a Quote</button>
          </a>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Custom Aluminium Fabrication</li>
            <li>Aluminium Window & Door Systems</li>
            <li>Glass & Aluminium Partitions</li>
            <li>Commercial Shopfront Solutions</li>
            <li>Balcony & Stair Railings</li>
            <li>Maintenance & Repair Services</li>
          
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col contact-column">
          <h3>Contact Us</h3>

          <div className="contact-grid">

            {/* Left side */}
            <div>
              <div className="contact-item">
                <div className="icon-circle">
                  <FiPhone />
                </div>
                <div>
                  <span>Call Us 24/7</span>
                  <p>(+91) 9913612654</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-circle">
                  <FiMail />
                </div>
                <div>
                  <span>Work with us</span>
                  <p>info@ascendia.com</p>
                </div>
              </div>
            </div>

            {/* Right side (Location separate row) */}
            <div className="location-item">
              <div className="icon-circle">
                <FiMapPin />
              </div>
              <div>
                <span>Our Location</span>
                 <p>
      75, 83 Shyam Complex,<br/>
      Opp Golukdham Society,<br/>
      Dediyasan Modhera Road,<br/>
      Mehsana, Gujarat 384002
    </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
       © 2026 Unified Aluminium. All Rights Reserved.
Website by Saloni
      </div>
    </footer>
  );
}