import "../css/HeroPage.css";
import React, { useEffect, useState } from "react";
import logo from "../photos/logo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import { FiSearch, FiX } from "react-icons/fi";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const suggestions = [
    "about",
    "services",
    "projects",
    "contact",
    "windows",
    "wardrobe",
    "balcony",
    "partition",
  ];

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

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
        rootMargin: "-100px 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleSearch = (value) => {

    setSearchOpen(false);

    if (value.includes("about")) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (value.includes("services")) {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else if (value.includes("projects")) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else if (value.includes("contact")) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No result found");
    }

  };

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
    
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

            <li className={active === "home" ? "active" : ""}>
              <a href="#home">Home</a>
            </li>

            <li className={active === "about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>

            <li className={active === "services" ? "active" : ""}>
              <a href="#services">Services</a>
            </li>

            <li className={active === "projects" ? "active" : ""}>
              <a href="#projects">Projects</a>
            </li>

            <li className={active === "contact" ? "active" : ""}>
              <a href="#contact">Contact</a>
            </li>

          </ul>

          <div className="nav-actions">

            <button
              className="icon-btn"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch />
            </button>

            <a href="https://www.instagram.com/unified_aluminium" target="_blank" rel="noreferrer">
              <FaInstagram className="nav-icon insta"/>
            </a>

            <a href="https://wa.me/919913612354" target="_blank" rel="noreferrer">
              <FaWhatsapp className="nav-icon whatsapp"/>
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
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
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

      {/* ===== Search Overlay ===== */}

      {searchOpen && (

        <div className="search-overlay">

          <div className="search-box-modern">

            <input
              type="text"
              placeholder="Search services, projects..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button onClick={() => handleSearch(searchText)}>
              <FiSearch />
            </button>

            <span
              className="close-search"
              onClick={() => setSearchOpen(false)}
            >
              <FiX />
            </span>

          </div>

          <div className="suggestions">

            {filteredSuggestions.map((item, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSearch(item)}
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      )}

      {/* ===== Website Sections ===== */}

      <About />
      <Services />
      <Stats />
      <Projects />
      <Feedback />
      <Contact />
      <Footer />

      {/* ===== Floating Contact Sidebar ===== */}

      <div className="contact-sidebar">

  <a
  href="https://wa.me/919913612354?text=Hello%2C%20I%20came%20across%20Unified%20Aluminium%20through%20your%20website%20and%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20aluminium%20solutions.%20Could%20you%20please%20assist%20me%20with%20a%20quotation%3F"
  target="_blank"
  rel="noreferrer"
>
 
    <FaWhatsapp className="nav-icon whatsapp"/>
  </a>

  <a
    href="tel:+919913612354"
    title="Call Us"
  >
    <FaPhoneAlt/>
  </a>

  <a
    href="mailto:unifiedaluminium@gmail.com"
    title="Send Email"
  >
    <FaEnvelope className="nav-icon email"/>
  </a>

  <a
    href="https://www.instagram.com/unified_aluminium/"
    target="_blank"
    rel="noreferrer"
    title="Instagram"
  >
    <FaInstagram className="nav-icon insta"/>
  </a>

</div>

    </>
  );
};

export default HeroPage;