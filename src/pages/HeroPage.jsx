import "../css/HeroPage.css";
import React, { useEffect, useState } from "react";
import logo from "../photos/logo.png";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroImage from "../photos/bg1.jpg";
import unifiedLogo from "../photos/logo.png";

import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Stats from "./Stats";
import Feedback from "./Feedback";
import Footer from "../Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroPage = () => {

  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ===================== ACTIVE LINK OBSERVER =====================
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);



  if (loading) {
    return (
      <div className="loader-container">
        <img src={logo} alt="logo" className="logo-loader" />
      </div>
    );
  }

  return (
    <>
      <div className="hero-wrapper">
        {/* ===== Navbar ===== */}
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <img src={unifiedLogo} alt="Unified Aluminium" className="logo-img" />
          </div>

         
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  {["home", "about", "services", "projects", "contact"].map((sectionId) => (
    <li
      key={sectionId}
      className={`nav-link ${active === sectionId ? "active" : ""}`}
    >
      <a
        href={`#${sectionId}`}
        onClick={() => setActive(sectionId)}
      >
        {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
      </a>
    </li>
  ))}
</ul>

          <div className="nav-actions">
  <a href="https://www.instagram.com/unified_aluminium" target="_blank" rel="noreferrer">
    <FaInstagram className="icon-btn insta-btn"/>
  </a>
  
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=unifiedaluminium@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon-btn email-btn"/>
        </a>


  <a href="#contact">
    <button className="quote-btn1">Get Quote</button>
  </a>

  {/* Hamburger */}
  <div
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>
</div>
        </nav>

        {/* ===== Hero Section ===== */}
        <section
          id="home"
          className="hero-section"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-right-overlay"></div>
          <div className="hero-content">
            <h1>Building the Future with Aluminium Excellence</h1>
            <p>
              We specialize in delivering high-quality aluminium solutions
              designed for strength, durability, and modern aesthetics.
            </p>
            <a href="#contact">
              <button className="consult-btn">Get Consultant</button>
            </a>
          </div>
        </section>
      </div>

      {/* ===== Website Sections ===== */}
      <About />
      <Services />
      <Stats />
      <Projects />
      <Feedback />
      <Contact />
      <Footer />

      {/* ===== Floating Contact Sidebar ===== */}
 {/* ===== Bottom Floating Contact Buttons ===== */}
<div className="bottom-contact">
  <a
    href="https://wa.me/919913612354?text=Hello!%20I%20am%20interested%20in%20your%20services."
    target="_blank"
    rel="noreferrer"
    className="bottom-whatsapp"
  >
    <FaWhatsapp />
  </a>

  <a href="tel:+919913612354" className="bottom-phone">
    <FaPhoneAlt />
  </a>
</div>

    </>
  );
};

export default HeroPage;