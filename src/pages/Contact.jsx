import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = "service_fxz4jk5";
    const templateID = "template_97dy10d";
    const userID = "alD1gELkiMTN96i8P";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-header">
        <h1>Let’s Build Something Strong Together</h1>
      </div>

      <div className="contact-wrapper">
        {/* Left Form */}
        <div className="contact-form">
          <h3>Contact us for a free quote</h3>

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Message</button>
          </form>
        </div>

        {/* Right Info */}
        <div className="contact-info">
          <h3>Contact Us</h3>

    
<div className="info-item">
  <div className="phone-container">

    <div className="phone-row">
      <span className="phone-icon">📞</span>
      <a href="tel:7874170566">7874170566</a>
      <a href="tel:9913612354">9913612354</a>
    </div>

    <div className="phone-row">
      <span className="phone-icon">📞</span>
      <a href="tel:9081141149">9081141149</a>
      <a href="tel:9408382809">9408382809</a>
    </div>

  </div>
</div>

         <div className="info-item">
  <span>✉</span>
  <p>24034211061@gnu.ac.in</p>
</div>

<div className="info-item">
  <span>📍</span>
  <p>
    75,83 Shyam Complex opp Golukdham Society Dediyasan  
    Modhera Road Mehsana, Gujarat, 384002
  </p>
</div>
        </div>
      </div>
    </section>
  );
}