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
      title: "Custom Fabrication",
      description: "Precision-made aluminium frames and partitions tailored to your needs.",
      details: "We offer custom aluminium fabrication services including frames, partitions, and panels. Every project is tailored to your specifications for both style and functionality.",
    },
  ];

  return (
    <section id="services" className="services-section">
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
        <div className="modal" onClick={() => setSelectedService(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
            <button className="close-btn" onClick={() => setSelectedService(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;