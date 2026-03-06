import React from "react";
import "../css/Projects.css";
import partitionImg from "../photos/door1.png";
import windowImg from "../photos/windows.png";
import wardrobeImg from "../photos/room.png";
import BalconyImg from "../photos/balcony.png";
import officeImg from "../photos/office.png";
import windows1Img from "../photos/windows1.png";
export default function Projects() {
  return (
    <section id="projects" className="projects-page">
      <div className="projects-container">

        <p className="section-label">POPULAR PROJECTS</p>
        <h1 className="main-heading">
          Delivering precision and quality in every aluminium installation.
        </h1>

       <div className="projects-grid">
  
  <div className="project-card">
    <img
      src={windowImg}
      alt="Residential Windows"
    />
    <div className="project-info">
      <h3>Residential Windows Installation</h3>
      <p>Modern aluminium sliding windows for contemporary homes.</p>
    </div>
  </div>

  <div className="project-card">
    <img
      src={partitionImg}
      alt="Office Partition"
    />
    <div className="project-info">
    <h3>Modern Glass Wardrobe</h3>
<p>Elegant black glass wardrobe with aluminium framing, designed to enhance bedroom interiors with a modern and luxurious look.</p>
    </div>
  </div>

<div className="project-card">
    <img
      src={BalconyImg}
      alt="Residential Balcony"
    />
    <div className="project-info">
      <h3>Residential glass Balcony Installation</h3>
      <p>Premium glass balcony system offering a sleek, contemporary design that adds elegance and openness to residential architecture.</p>
    </div>
  </div>
  
   <div className="project-card">
    <img
      src={wardrobeImg}
      alt="Modern Wardrobe"
    />
    <div className="project-info">
      <h3>Modern Wardrobe Design</h3>
      <p> Stylish aluminium and glass wardrobes designed for modern interiors,
    offering spacious storage with a sleek and elegant finish.</p>
    </div>
  </div>

<div className="project-card">
    <img
      src={officeImg}
      alt="Modern Office Door"
    />
    <div className="project-info">
     <h3>Modern Office Glass Door</h3>
    <p> Premium aluminium and glass office doors designed for durability,
        smooth operation, and a professional workspace appearance. </p>
      </div>
   </div>

    <div className="project-card">
    <img
      src={windows1Img}
      alt="Modern Wardrobe"
    />
   <div className="project-info">
      <h3>Classic Sliding Window</h3>
    <p> Elegant white sliding window with grid detailing, designed for durability, smooth operation, and a clean modern look.</p>
      </div>
  </div>

</div>
</div>
    </section>
  );
}