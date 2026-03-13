import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../css/Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_bbo7mno";
    const templateID = "template_1tsobmt";
    const userID = "hQnXIuLIjYheZ320D";

    emailjs.send(serviceID,templateID,formData,userID)
    .then(()=>{
      alert("Message sent successfully!");
      setFormData({
        name:"",
        number:"",
        email:"",
        message:""
      });
    })
    .catch(()=>{
      alert("Failed to send message.");
    });
  };

  return (
    <section id="contact" className="contact-page">

      <div className="contact-header">
        <h1>Let’s Build Something Strong Together</h1>
        <p>Contact us for aluminium windows, doors & fabrication work.</p>
      </div>

      <div className="contact-wrapper">

        {/* CONTACT FORM */}
        <div className="contact-form">

          <h3>Get Free Quote</h3>

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
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      

        {/* CONTACT INFO */}
<div className="contact-info">

  <h3>Contact Information</h3>

  {/* PHONE NUMBERS */}
  <div className="info-item">
    <FaPhoneAlt className="icon"/>
    <div className="phone-list">
      <p><strong>Jay Patel:</strong> <a href="tel:7874170533">78741 70533</a></p>
      <p><strong>Nishu Patel:</strong> <a href="tel:9913612354">99136 12354</a></p>
      <p><strong>Ashish Patel:</strong> <a href="tel:9081141149">90811 41149</a></p>
      <p><strong>umang Patel:</strong> <a href="tel:9408385809">94083 85809</a></p>
    </div>
  </div>

  {/* EMAIL */}
  <div className="info-item">
    <FaEnvelope className="icon"/>
    <a
      href="mailto:unifiedaluminium@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      unifiedaluminium@gmail.com
    </a>
  </div>

  {/* ADDRESS */}
  <div className="info-item">
    <FaMapMarkerAlt className="icon"/>
    <p>
      75,83 Shyam Complex Opp Golukdham Society<br/>
      Dediyasan Modhera Road<br/>
      Mehsana, Gujarat – 384002
    </p>
  </div>

</div>

      </div>

      {/* GOOGLE MAP */}

      <div className="map-container">

        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.3065618291866!2d72.34160227533113!3d23.593336078777835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzM2LjAiTiA3MsKwMjAnMzkuMCJF!5e0!3m2!1sen!2sin!4v1773045710074!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}