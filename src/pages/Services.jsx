import React, { useState } from "react";
import "../css/Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Aluminium Windows",
      description: "High-quality aluminium windows designed for durability and modern style.",
      details: "Our aluminium windows are crafted with premium materials for durability, energy efficiency, and modern aesthetics. They are customizable, easy to maintain, and perfect for residential or commercial spaces.",
    },
    {
      id: 2,
      title: "Aluminium Doors",
      description: "Strong and secure aluminium doors crafted for long-lasting performance.",
      details: "Our aluminium doors provide maximum security and sleek design. They are resistant to weather conditions, built to last, and suitable for homes, offices, and industrial spaces.",
    },
    {
      id: 3,
      title: "Glass Work And ACP Works",
    description: "High-quality glass and ACP installations designed for modern aesthetics and durability.",

details: "Our services include precision glass fitting and Aluminium Composite Panel (ACP) works. We specialize in partitions, facades, and interior installations, ensuring every project combines elegance with long-lasting functionality. Tailored solutions meet both residential and commercial requirements."
    },
  ];

  return (
    <section id="services" className="services-section" >
      <div className="services-title">
        <span>OUR SERVICES</span>
        <h2>High Quality Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${service.id === 2 ? "active" : ""}`}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => setSelectedService(service)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
     {selectedService && (
  <div
    className={`modal show`}
    onClick={() => setSelectedService(null)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedService(null)}
      >
        &times;
      </button>
      <h3>{selectedService.title}</h3>
      <p>{selectedService.details}</p>
    </div>
  </div>
)}
    </section>
  );
};

export default Services;